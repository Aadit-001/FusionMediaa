import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import india from '../assets/india.png';

const Contact = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);

    return () => clearInterval(timer);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white pt-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header with Lottie Animation */}
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-6xl font-bold" style={{ fontFamily: 'Lobster, cursive' }}>Let's Talk!</h1>
          <div className="flex justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/7a0c5038-5aac-4894-8862-ca95b5c881db/Bq1sqF1zaA.lottie"
              loop
              autoplay
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <p className="text-red-500 mt-1">{errors.subject}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full border border-gray-300 px-4 py-2 h-32 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="btn liquid px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              Send
            </button>
          </form>
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 flex items-center">
            <img src={india} alt="India" className="w-50 h-50 mr-4" />
            <div>
              <h3 className="text-5xl font-bold" style={{ fontFamily: 'Lobster, cursive' }}>India</h3>
              <p className="text-gray-900 mb-2">{currentTime}</p>
              <p>
                TIRUPATI UDYOG, 208-209, IB Patel Rd, Jay Prakash Nagar,<br />
                Goregaon, Mumbai, Maharashtra 400063
              </p>
            </div>
            <div className="h-40 w-[1px] ml-8 bg-gray-300 mx-2 hidden md:block"></div>
          </div>
          {/* Contact Info */}
          <div className="flex-1 ml-8">
            <p className="text-blue-600">Pratham.Fusionmarketing@gmail.com</p>
            <p>IND: +91 81045 11574</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;