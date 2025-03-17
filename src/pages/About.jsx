import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import tt from '../assets/testimonial/tt.png';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-8xl font-bold mb-6 text-gray-900">
              About Us
            </h1>
            <p className="text-2xl text-gray-700 font-medium">
              Crafting Digital Excellence
            </p>
          </div>
        </motion.div>
        
        {/* Subtle Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-blue-100" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="min-h-screen py-32 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-semibold mb-16 text-center text-gray-900">
              WHO WE ARE
            </h2>
            <p className="text-6xl font-semibold leading-tight text-center text-gray-800">
              A collective of creative minds, tech enthusiasts, and strategic thinkers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="min-h-screen py-32 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-32">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-red-600 text-2xl font-bold">OUR VISION</h3>
                <p className="text-3xl font-semibold leading-relaxed text-gray-900">
                  At Fusion Media, our vision is to transform the way brands communicate with their audiences
                  by blending human creativity with advanced technology.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  We strive to push the limits of innovation, crafting campaigns that not only capture
                  attention but also resonate deeply, creating lasting emotional connections.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Our goal is to be the driving force behind groundbreaking brand experiences that inspire,
                  engage, and shape the future of storytelling.
                </p>
              </div>
              <div className="h-px w-full bg-red-200" />
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-blue-600 text-2xl font-bold">OUR MISSION</h3>
                <p className="text-3xl font-semibold leading-relaxed text-gray-900">
                  Our mission is to empower brands by harnessing the power of creativity and technology
                  to deliver impactful, forward-thinking campaigns.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Through close collaboration and a deep understanding of each brand's unique essence,
                  we aim to craft strategies that are bold, authentic, and memorable.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  We ensure every project leaves a meaningful and lasting impression on both the brand
                  and its audience.
                </p>
              </div>
              <div className="h-px w-full bg-blue-200" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="min-h-screen py-32 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-white"
            >
              {/* Large Quote Mark */}
              <div className="absolute -top-14 left-8 z-20">
                <span className="text-[150px] leading-none text-[#ff4d6d]">"</span>
              </div>

              {/* Card Content */}
              <div className="relative border border-black rounded-sm p-12">
                {/* Quote Content */}
                <div className="relative z-10">
                  <p className="text-3xl font-medium text-gray-900 mb-2 max-w-[650px] leading-normal">
                    Jugal Shah is the founder, CXO, and<br />
                    growth hacker at Leo9 Studio headquartered<br />
                    in Mumbai, India, and an office in N.J., U.S.A.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-[#ff4d6d] text-lg hover:underline"
                  >
                    know more
                  </motion.button>
                </div>

                {/* Image - Adjusted bottom position */}
                <div className="absolute right-12 -bottom-0 w-96">
                  <img 
                    src={tt} 
                    alt="Jugal Shah"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Founder Info */}
                <div className="mt-40">
                  <h3 className="text-3xl font-bold text-gray-900">Jugal Shah</h3>
                  <p className="text-xl text-gray-600 mt-1 max-w-[500px] leading-normal">
                    Founder, Head of UX at Leo9 Studio.<br />
                    Behavioral science and
                    Neuromarketing expert.
                  </p>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-[#0077b5] mt-1"
                  >
                    in
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;