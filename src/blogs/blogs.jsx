import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Sample blog posts data - would typically come from an API
  const blogPosts = [
    {
      id: 1,
      title: "Digital Marketing Trends for 2023",
      excerpt: "Explore the latest trends in digital marketing that are shaping the industry and driving results for businesses.",
      category: "Digital Marketing",
      author: "Sarah Johnson",
      date: "October 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      id: 2,
      title: "The Art of Crafting Compelling Brand Stories",
      excerpt: "How storytelling can elevate your brand and create meaningful connections with your audience.",
      category: "Branding",
      author: "Michael Chen",
      date: "October 8, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      id: 3,
      title: "Leveraging Social Media for Business Growth",
      excerpt: "Strategic approaches to social media marketing that can drive engagement and conversions.",
      category: "Social Media",
      author: "Emma Davis",
      date: "September 29, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      id: 4,
      title: "The Psychology of Color in Marketing",
      excerpt: "Understanding how color choices influence consumer perception and behavior in marketing materials.",
      category: "Design",
      author: "Thomas Wilson",
      date: "September 22, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      id: 5,
      title: "Effective SEO Strategies for 2023",
      excerpt: "The latest search engine optimization techniques to improve visibility and drive organic traffic.",
      category: "Digital Marketing",
      author: "Alex Robinson",
      date: "September 15, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      id: 6,
      title: "Creating User-Centric Website Experiences",
      excerpt: "Design principles and strategies to enhance user experience and boost conversion rates.",
      category: "Design",
      author: "Olivia Garcia",
      date: "September 8, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
  ];

  // Extract unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Add padding-top to create space for the navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Our Insights & Perspectives
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Stay updated with the latest industry trends, insights, and strategies to help your business thrive in the digital landscape.
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="h-80 lg:h-auto overflow-hidden">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" 
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="mb-4">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">{filteredPosts[0].date} • {filteredPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                        {filteredPosts[0].author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-900">{filteredPosts[0].author}</span>
                    </div>
                    <Link to={`/blog/${filteredPosts[0].id}`} className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
                    <p className="text-gray-600 mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t pt-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <span className="block text-xs font-medium text-gray-900">{post.author}</span>
                          <span className="block text-xs text-gray-500">{post.date}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-indigo-600 hover:text-indigo-800 transition-colors text-sm font-medium">
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 px-4 my-20 h-[400px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-indigo-100 mb-8">
              Get the latest insights, tips, and trends delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-5 py-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
