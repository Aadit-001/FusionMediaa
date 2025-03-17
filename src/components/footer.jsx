import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 px-4 md:px-6 mt-[200px] mb-[150px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Social Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Fusion Media</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-dribbble"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="text-sm text-gray-600">
            <p>© Fusion Media.</p>
            <p>All rights reserved 2025</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="space-y-2">
            <li><Link to="/design" className="text-gray-600 hover:text-black">Design</Link></li>
            <li><Link to="/technology" className="text-gray-600 hover:text-black">Technology</Link></li>
            <li><Link to="/neuromarketing" className="text-gray-600 hover:text-black">Neuromarketing</Link></li>
            <li><Link to="/digital-marketing" className="text-gray-600 hover:text-black">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="space-y-2">
            <li><Link to="/about-us" className="text-gray-600 hover:text-black">About Us</Link></li>
            <li><Link to="/team" className="text-gray-600 hover:text-black">Team</Link></li>
            <li><Link to="/career" className="text-gray-600 hover:text-black">Career</Link></li>
          </ul>
        </div>

        {/* Quick Links 1 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/work" className="text-gray-600 hover:text-black">Work</Link></li>
            <li><Link to="/clients" className="text-gray-600 hover:text-black">Clients</Link></li>
            <li><Link to="/reach-us" className="text-gray-600 hover:text-black">Reach Us</Link></li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-600 hover:text-black">Terms of use</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
