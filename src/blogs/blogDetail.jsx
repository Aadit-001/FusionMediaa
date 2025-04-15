import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const BlogDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        console.log("Fetching blog post with ID:", id);
        if (!db) {
          throw new Error("Firebase is not initialized");
        }
        
        const docRef = doc(db, "blogs", id);
        console.log("Document reference created:", docRef);
        
        const docSnap = await getDoc(docRef);
        console.log("Document snapshot received:", docSnap);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setBlogPost({ id: docSnap.id, ...docSnap.data() });
          setError(null);
        } else {
          console.log("No such document!");
          setError("Blog post not found");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Blog post not found</h1>
          <p className="mt-2 text-gray-600">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full w-fit">
                {blogPost.category}
              </span>
              <span className="text-gray-500 text-sm">
                {blogPost.date} • {blogPost.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {blogPost.title}
            </h1>

            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                {blogPost.author.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="ml-3 text-sm font-medium text-gray-900">
                {blogPost.author}
              </span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                {blogPost.excerpt}
              </p>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
                {blogPost.content}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
