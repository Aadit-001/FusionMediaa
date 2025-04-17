import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { useDarkMode } from '../context/DarkModeContext';

const Blog = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isDarkMode } = useDarkMode();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef, orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogPosts(blogsData);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Extract unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  if (loading) {
    return (
      <div className={`min-h-screen pt-24 flex items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className={`text-gray-600 ${isDarkMode ? 'text-gray-300' : ''}`}>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className={`mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ${isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="text-center">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>No Blog Posts Found</h2>
          <p className={`text-gray-600 ${isDarkMode ? 'text-gray-300' : ''}`}>There are no blog posts available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-br ${isDarkMode ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-purple-100 via-indigo-100 to-blue-100'} pt-32 pb-20`}>
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-gray-900/90 via-gray-800/90 to-gray-900/90' : 'from-purple-100/90 via-indigo-100/90 to-blue-100/90'}`}></div>
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${isDarkMode ? 'to-black/20' : 'to-white/20'}`}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Insights & Perspectives
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} max-w-2xl mx-auto mb-8`}>
              Discover the latest trends, expert analysis, and innovative ideas in technology, business, and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? isDarkMode 
                        ? 'bg-purple-600 text-white shadow-sm' 
                        : 'bg-purple-200 text-purple-800 shadow-sm'
                      : isDarkMode
                        ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700'
                        : 'bg-white/90 text-gray-700 hover:bg-white border border-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Latest Blog - Horizontal Display */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Latest Blog</h2>
            <Link 
              to={`/blogs/${filteredPosts[0].id}`} 
              className="block"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title} 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${isDarkMode ? 'bg-purple-600 text-white' : 'bg-indigo-100 text-indigo-800'} text-sm font-medium px-3 py-1 rounded-full`}>
                        {filteredPosts[0].category}
                      </span>
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} text-sm`}>
                        {filteredPosts[0].date} • {filteredPosts[0].readTime}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 line-clamp-2`}>
                      {filteredPosts[0].title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {filteredPosts[0].author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className={`ml-2 text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                        {filteredPosts[0].author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Other Blogs Grid */}
        <div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>All Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((blog) => (
              <Link 
                to={`/blogs/${blog.id}`} 
                key={blog.id} 
                className="block"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${isDarkMode ? 'bg-purple-600 text-white' : 'bg-indigo-100 text-indigo-800'} text-sm font-medium px-3 py-1 rounded-full`}>
                        {blog.category}
                      </span>
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} text-sm`}>
                        {blog.date} • {blog.readTime}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 line-clamp-2`}>
                      {blog.title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {blog.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className={`ml-2 text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                        {blog.author}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
