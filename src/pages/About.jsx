import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import logo from '../assets/logo.png';
import logoWhite from '../assets/logoWhite.png';
import { Briefcase, BarChart2, Settings, Target } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [whyChooseRef, whyChooseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { isDarkMode } = useDarkMode();

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
    <div className={`w-full overflow-hidden ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'} pt-16 md:pt-0`}>
        <div className="container mx-auto px-0 md:px-4 relative">
          <div className="flex flex-col md:grid md:grid-cols-12 min-h-[90vh] md:min-h-screen items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 mt-8 md:mt-0"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-8xl font-bold leading-tight text-center md:text-left mt-10 md:mt-0"
              >
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-0 md:mb-4">
                  Welcome To
                </div>
                <div className="mt-0 md:mt-4 h-[120px] md:h-[180px] flex items-center">
                  <img
                    src={isDarkMode ? logoWhite : logo}
                    alt="Fusion Media"
                    className="w-full md:w-[700px] h-full mx-auto md:mx-0 md:-ml-22"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`text-lg md:text-xl max-w-xl text-center md:text-left mx-auto md:mx-0 mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
              >
                Transforming ideas into exceptional digital experiences through innovation,
                creativity, and strategic excellence.
              </motion.p>
            </motion.div>
            <div className='md:col-span-5 scale-120 md:scale-150 mt-10 md:mt-0'>
              <DotLottieReact
                src="https://lottie.host/0df722b7-162c-4853-a61b-c5a450e8ac37/OvhrWEHMFW.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className={`relative ${isDarkMode ? 'bg-black' : 'bg-white'} -mt-10 md:mt-0`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className={`text-2xl md:text-3xl font-semibold mb-4 md:mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              <span className="text-red-600">WHO WE ARE</span>
            </h2>
            <p className={`text-2xl md:text-6xl font-semibold leading-normal md:leading-tight text-center px-4 md:px-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'
              }`}>
              A collective of creative minds, tech enthusiasts, and strategic thinkers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={`py-12 md:py-16 relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-red-600 text-xl md:text-2xl font-bold">OUR VISION</h3>
                <p className={`text-2xl md:text-3xl font-semibold leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-900'
                  }`}>
                  At Fusion Media, our vision is to transform the way brands communicate with their audiences
                  by blending human creativity with advanced technology.
                </p>
                <p className={`text-lg md:text-2xl leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                  We strive to push the limits of innovation, crafting campaigns that not only capture
                  attention but also resonate deeply, creating lasting emotional connections.
                </p>
                <p className={`text-lg md:text-2xl leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                  Our goal is to be the driving force behind groundbreaking brand experiences that inspire,
                  engage, and shape the future of storytelling.
                </p>
              </div>
              <div className={`h-px w-full ${isDarkMode ? 'bg-gray-700' : 'bg-red-200'}`} />
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-blue-600 text-xl md:text-2xl font-bold">OUR MISSION</h3>
                <p className={`text-2xl md:text-3xl font-semibold leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-900'
                  }`}>
                  Our mission is to empower brands by harnessing the power of creativity and technology
                  to deliver impactful, forward-thinking campaigns.
                </p>
                <p className={`text-lg md:text-2xl leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                  Through close collaboration and a deep understanding of each brand's unique essence,
                  we aim to craft strategies that are bold, authentic, and memorable.
                </p>
                <p className={`text-lg md:text-2xl leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                  We ensure every project leaves a meaningful and lasting impression on both the brand
                  and its audience.
                </p>
              </div>
              <div className={`h-px w-full ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'}`} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className={`relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              {/* Large Quote Mark */}
              <div className="absolute -top-8 md:-top-14 left-4 md:left-8 z-20">
                <span className="text-[100px] md:text-[150px] leading-none text-[#ff4d6d]">"</span>
              </div>

              {/* Card Content */}
              <div className={`relative border ${isDarkMode ? 'border-gray-700' : 'border-black'} rounded-sm p-3 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-transparent backdrop-blur-sm' : 'bg-white'} max-w-[95vw] md:max-w-full mx-auto mt-22 md:mt-0`}>
                {/* Founder Info */}
                <div className="md:mt-10 max-w-3xl mx-auto px-2 md:px-4 text-center md:text-left">
                  <div className="space-y-3 md:space-y-6">
                    <h3 className={`text-2xl md:text-5xl font-bold tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Harsh Punmiya</h3>
                    <div className="text-center md:text-left">
                      <p className={`text-base md:text-2xl font-semibold md:font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Founder & Creative Lead at Fusion Media</p>
                    </div>
                    <p className={`mt-2 md:mt-6 text-sm md:text-xl leading-relaxed md:px-0 px-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Passionate about blending creativity with strategy, the vision behind Fusion Media is rooted in delivering powerful brand stories and engaging digital experiences. With a strong belief in the impact of design, storytelling, and innovation, the focus has always been on helping brands grow through bold ideas and modern execution. Every project is approached with a fresh perspective and a commitment to excellence.</p>
                    <div className="mt-3 md:mt-6">
                      <a
                        href="https://www.linkedin.com/in/harsh-punmiya-b9320b285/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-3 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg ${isDarkMode
                          ? 'bg-blue-600 hover:bg-blue-700 text-white hover:text-gray-300'
                          : 'bg-blue-500 hover:bg-blue-600 text-white hover:text-gray-300'
                          }`}
                      >
                        <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Managing Director Section */}
      <section className={`relative ${isDarkMode ? 'bg-black' : 'bg-white'} mt-24 mb-50`}>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              {/* Large Quote Mark */}
              <div className="absolute -top-8 md:-top-10 left-4 md:left-8 z-20">
                <span className="text-[80px] md:text-[120px] leading-none text-[#ff4d6d]">"</span>
              </div>

              {/* Card Content */}
              <div className={`relative border ${isDarkMode ? 'border-gray-700' : 'border-black'} rounded-sm p-3 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-transparent backdrop-blur-sm' : 'bg-white'} max-w-[95vw] md:max-w-full mx-auto mt-8 md:mt-0 mb-0`}>
                {/* Managing Director Info */}
                <div className="md:mt-6 max-w-3xl mx-auto px-2 md:px-4 text-center md:text-left">
                  <div className="space-y-2 md:space-y-4">
                    <h3 className={`text-2xl md:text-5xl font-bold tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pratham Soni</h3>
                    <div className="text-center md:text-left">
                      <p className={`text-base md:text-2xl font-semibold md:font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Managing Director at Fusion Media</p>
                    </div>
                    <p className={`mt-2 md:mt-6 text-sm md:text-xl leading-relaxed md:px-0 px-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>With a strategic mindset and extensive experience in business management, Pratham leads Fusion Media's operations and growth initiatives. His expertise in market analysis and business development has been instrumental in establishing Fusion Media as a leading creative agency. Under his leadership, the company continues to expand its reach and deliver exceptional results for clients across various industries.</p>
                    <div className="mt-3 md:mt-6">
                      <a
                        href="https://www.linkedin.com/in/pratham-soni/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-3 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg ${isDarkMode
                          ? 'bg-blue-600 hover:bg-blue-700 text-white hover:text-gray-300'
                          : 'bg-blue-500 hover:bg-blue-600 text-white hover:text-gray-300'
                          }`}
                      >
                        <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section
        ref={whyChooseRef}
        initial={{ opacity: 0, y: 50 }}
        animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-6 md:py-8 bg-black text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-center"
          >
            Why Choose Us?
          </motion.h2>

          {/* Marquee Text - Adjusted for mobile */}
          <div className="w-full">
            <div className="relative flex overflow-x-hidden">
              <div className="flex animate-scroll gap-4 md:gap-8 py-8 md:py-12">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex flex-shrink-0">
                    <span className="flex-shrink-0 text-3xl md:text-8xl font-black mx-4 md:mx-8 text-blue-500 font-sans">BRANDING & MARKETING</span>
                    <span className="flex-shrink-0 text-3xl md:text-8xl font-bold mx-4 md:mx-8 text-red-500 font-serif">SOCIAL MEDIA & CONTENT</span>
                    <span className="flex-shrink-0 text-3xl md:text-8xl font-extrabold mx-4 md:mx-8 text-purple-400 font-mono">GRAPHIC DESIGN</span>
                    <span className="flex-shrink-0 text-3xl md:text-8xl font-black mx-4 md:mx-8 text-green-400 font-sans">EVENT MARKETING</span>
                    <span className="flex-shrink-0 text-3xl md:text-8xl font-bold mx-4 md:mx-8 text-blue-500 font-serif">WEBSITE SERVICES</span>
                    <span className="flex-shrink-0 text-3xl md:text-8xl font-bold mx-4 md:mx-8 text-pink-500 font-serif">OOH & DOOH</span>
                    <span className="flex-shrink-0 text-3xl md:text-8xl font-black mx-4 md:mx-8 text-blue-500 font-sans">UGC CONTENT</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-50% - 2rem));
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12 md:mt-20">
            {/* Industry Expertise */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center px-4"
            >
              <div className="flex justify-center mb-4 md:mb-6">
                <Briefcase className="h-10 w-10 md:h-12 md:w-12 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Industry Expertise</h3>
              <p className="text-sm md:text-base text-gray-400">
                Over a decade of experience in branding and marketing, delivering exceptional results across industries.
              </p>
            </motion.div>

            {/* Creative & Data-Driven */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center px-4"
            >
              <div className="flex justify-center mb-4 md:mb-6">
                <BarChart2 className="h-10 w-10 md:h-12 md:w-12 text-purple-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Creative & Data-Driven</h3>
              <p className="text-sm md:text-base text-gray-400">
                Perfect blend of creative innovation and data-driven strategies for maximum impact.
              </p>
            </motion.div>

            {/* Customized Solutions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center px-4"
            >
              <div className="flex justify-center mb-4 md:mb-6">
                <Settings className="h-10 w-10 md:h-12 md:w-12 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Customized Solutions</h3>
              <p className="text-sm md:text-base text-gray-400">
                Tailored strategies designed specifically for your brand's unique needs and goals.
              </p>
            </motion.div>

            {/* Result-Oriented */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center px-4"
            >
              <div className="flex justify-center mb-4 md:mb-6">
                <Target className="h-10 w-10 md:h-12 md:w-12 text-red-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Result-Oriented</h3>
              <p className="text-sm md:text-base text-gray-400">
                Focused on delivering measurable success and tangible business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;