import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminView = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(blogsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs: ", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteDoc(doc(db, "blogs", id));
        setBlogs(blogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error("Error deleting blog: ", error);
      }
    }
  };

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <Link
            to="/admin/blog"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Add New Blog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">{blog.title}</h2>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{blog.author}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{blog.readTime}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      to={`/admin/blog/edit/${blog.id}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleReadMore(blog)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No blogs found. Add your first blog post!</p>
          </div>
        )}

        {/* Modal for displaying full blog content */}
        {showModal && selectedBlog && (
          <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 pt-32">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-gray-100">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedBlog.title}</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mb-4">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-64 object-cover rounded-lg shadow-sm"
                  />
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                    {selectedBlog.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {selectedBlog.date} • {selectedBlog.readTime}
                  </span>
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                    {selectedBlog.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    {selectedBlog.author}
                  </span>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">{selectedBlog.excerpt}</p>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {selectedBlog.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminView;
