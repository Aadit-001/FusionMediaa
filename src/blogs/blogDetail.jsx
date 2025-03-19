import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = ({ blogPosts }) => {
  const { id } = useParams();
  const blogPost = blogPosts.find(post => post.id === parseInt(id));

  if (!blogPost) {
    return <div className="text-center py-20">Blog post not found.</div>;
  }

  return (
    <div className="bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>
        <div className="flex items-center mb-6">
          <span className="text-gray-500 text-sm">{blogPost.date} • {blogPost.readTime}</span>
          <span className="ml-4 bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">
            {blogPost.category}
          </span>
        </div>
        <img 
          src={blogPost.image} 
          alt={blogPost.title} 
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <div className="text-gray-700 leading-relaxed">
          {blogPost.content}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
