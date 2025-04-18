import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoWhite from '../assets/logoWhite.png';
import { useDarkMode } from '../context/DarkModeContext';

const Footer = () => {
  const { isDarkMode } = useDarkMode();

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`py-16 px-4 md:px-8 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Top Section: Flex instead of Grid */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-y-10 md:gap-x-6">
          {/* Logo and Social Section */}
          <div className="mb-8 md:mb-0 md:w-1/4 flex-shrink-0">
            <div className="h-[60px] flex items-start">
              <img 
                src={isDarkMode ? logoWhite : logo} 
                alt="Fusion Media Logo" 
                className={`w-60 h-auto -ml-6 ${isDarkMode ? 'relative top-[2px]' : ''}`}
                style={{ position: 'relative', left: 0 }}
              />
            </div>
            <div className="mt-4">
              <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} max-w-xs mb-6`}>
                Transforming ideas into exceptional digital experiences through innovative design and technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}><i className="fab fa-facebook text-xl"></i></a>
                <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}><i className="fab fa-linkedin text-xl"></i></a>
                <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}><i className="fab fa-instagram text-xl"></i></a>
                <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}><i className="fab fa-dribbble text-xl"></i></a>
                <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}><i className="fab fa-twitter text-xl"></i></a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/content-marketing" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Content Marketing</Link></li>
              <li><Link to="/services/branding" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Branding</Link></li>
              <li><Link to="/services/social-media-marketing" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Social Media Marketing</Link></li>
              <li><Link to="/services/website-services" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Website Services</Link></li>
              <li><Link to="/services/event-marketing" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Event Marketing</Link></li>
              <li><Link to="/services/public-relations" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Public Relations</Link></li>
              <li><Link to="/services/ooh" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>OOH</Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0 md:w-1/5">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About Us</Link></li>
              <li><Link to="/work" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Work</Link></li>
              <li><Link to="/clients" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Clients</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Reach Us</Link></li>
              <li><Link to="/blogs" onClick={handleLinkClick} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blogs</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="md:w-1/4">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 ml-2`}>Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <i className={`fas fa-map-marker-alt ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} mt-1`}></i>
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} whitespace-pre-line`}>
                  TIRUPATI UDYOG, 208-209,
                  IB Patel Rd, Jay Prakash Nagar,
                  Goregaon, Mumbai,
                  Maharashtra 400063
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <i className={`fas fa-phone ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}></i>
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91 81045 11574</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className={`fas fa-envelope ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}></i>
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Pratham.Fusionmarketing@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} pt-8 mt-12`}>
          <div className="flex justify-center items-center">
            <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>&copy; 2025 Fusion Media. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;