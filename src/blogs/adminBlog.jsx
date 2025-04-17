import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const AdminBlog = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: '',
    author: '',
    date: '',
    readTime: '',
    image: '',
    content: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    }

    // Excerpt validation
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    } else if (formData.excerpt.length < 20) {
      newErrors.excerpt = 'Excerpt must be at least 20 characters';
    }

    // Category validation
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }

    // Author validation
    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }

    // Date validation
    if (!formData.date.trim()) {
      newErrors.date = 'Date is required';
    }

    // Read time validation
    if (!formData.readTime.trim()) {
      newErrors.readTime = 'Read time is required';
    }

    // Image URL validation
    if (!formData.image.trim()) {
      newErrors.image = 'Image URL is required';
    } else if (!isValidUrl(formData.image)) {
      newErrors.image = 'Please enter a valid URL';
    }

    // Content validation
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    } else if (formData.content.length < 100) {
      newErrors.content = 'Content must be at least 100 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, "blogs"), formData);
      console.log("Document written with ID: ", docRef.id);
      alert('Blog added successfully!');
      navigate('/admin/view');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Error adding blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-50'} pt-24 pb-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <div className={`shadow-xl rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className={`px-6 py-8 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex justify-between items-center">
              <div>
                <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Add New Blog Post</h2>
                <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>Fill in the details below to create a new blog post.</p>
              </div>
              <button
                onClick={() => navigate('/admin/view')}
                className={`${isDarkMode ? 'text-gray-300 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'} border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                    errors.title ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter blog title"
                />
                {errors.title && <p className={`mt-1 text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>{errors.title}</p>}
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'} border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                    errors.category ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., Technology, Business"
                />
                {errors.category && <p className={`mt-1 text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>{errors.category}</p>}
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'} border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                    errors.author ? 'border-red-500' : ''
                  }`}
                  placeholder="Author's name"
                />
                {errors.author && <p className={`mt-1 text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>{errors.author}</p>}
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>Date</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'} border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                    errors.date ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., March 15, 2024"
                />
                {errors.date && <p className={`mt-1 text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>{errors.date}</p>}
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>Read Time</label>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'} border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                    errors.readTime ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., 5 min read"
                />
                {errors.readTime && <p className={`mt-1 text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>{errors.readTime}</p>}
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'} border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                    errors.image ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter image URL"
                />
                {errors.image && <p className={`mt-1 text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>{errors.image}</p>}
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>Excerpt</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows="3"
                className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'} border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                  errors.excerpt ? 'border-red-500' : ''
                }`}
                placeholder="A brief summary of the blog post"
              />
              {errors.excerpt && <p className={`mt-1 text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>{errors.excerpt}</p>}
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="10"
                className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'} border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                  errors.content ? 'border-red-500' : ''
                }`}
                placeholder="Write your blog content here"
              />
              {errors.content && <p className={`mt-1 text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>{errors.content}</p>}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Publishing...' : 'Publish Blog Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminBlog; 