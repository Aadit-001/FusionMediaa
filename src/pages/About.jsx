import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import tt from '../assets/testimonial/tt.png';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import logo from '../assets/logo.png';
import { Briefcase, BarChart2, Settings, Target } from 'lucide-react';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [whyChooseRef, whyChooseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-12 gap-8 min-h-screen items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-7 space-y-8"
            >
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-8xl font-bold leading-tight"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Welcome To
                  </span>
                  <span>
                    <img src={logo} alt="Fusion Media" className="w-[700px] h-auto -ml-22" />
                  </span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-gray-600 max-w-xl"
                >
                  Transforming ideas into exceptional digital experiences through innovation, 
                  creativity, and strategic excellence.
                </motion.p>
              </div>
            </motion.div>
            <div className='col-span-5 scale-150'>
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
      <section className="py-16 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
              WHO WE ARE
            </h2>
            <p className="text-6xl font-semibold leading-tight text-center text-gray-800">
              A collective of creative minds, tech enthusiasts, and strategic thinkers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 relative bg-white">
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

      {/* Why Choose Us Section with Marquee */}
      <motion.section 
        ref={whyChooseRef}
        initial={{ opacity: 0, y: 50 }}
        animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }} 
        className="py-20 bg-black text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Why Choose Us?
          </motion.h2>

          {/* Marquee Text */}
          <div className="w-full">
            <div className="relative flex overflow-x-hidden">
              <div className="flex animate-scroll gap-8 py-12">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex flex-shrink-0">
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-black mx-8 text-blue-500 font-sans">BRANDING & MARKETING</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-bold mx-8 text-red-500 font-serif">SOCIAL MEDIA & CONTENT</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-extrabold mx-8 text-purple-400 font-mono">GRAPHIC DESIGN</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-black mx-8 text-green-400 font-sans">EVENT MARKETING</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-bold mx-8 text-blue-500 font-serif">WEBSITE SERVICES</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-bold mx-8 text-pink-500 font-serif">OOH & DOOH</span>
                    <span className="flex-shrink-0 text-5xl md:text-8xl font-black mx-8 text-blue-500 font-sans">UGC CONTENT</span>
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
            .pause:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
            {/* Industry Expertise */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Briefcase className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
              <p className="text-gray-400">
                Over a decade of experience in branding and marketing, delivering exceptional results across industries.
              </p>
            </motion.div>

            {/* Creative & Data-Driven */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <BarChart2 className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Creative & Data-Driven</h3>
              <p className="text-gray-400">
                Perfect blend of creative innovation and data-driven strategies for maximum impact.
              </p>
            </motion.div>

            {/* Customized Solutions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Settings className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customized Solutions</h3>
              <p className="text-gray-400">
                Tailored strategies designed specifically for your brand's unique needs and goals.
              </p>
            </motion.div>

            {/* Result-Oriented */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Target className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Result-Oriented</h3>
              <p className="text-gray-400">
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