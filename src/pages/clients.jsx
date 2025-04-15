import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import fusionEvent from '../assets/clients/fusionEvent.png';
import horeca from '../assets/clients/horeca.jpg';
import healthyMeal from '../assets/clients/healthyMeal.jpg';
import mountainWood from '../assets/clients/mountainWood.png';
import axisbank from '../assets/clients/axisbank.png';  
import symbiosis from '../assets/clients/symbiosis.png';
import witty from '../assets/clients/witty.png';
import electrolab from '../assets/clients/electrolab.png';
import nesco from '../assets/clients/nesco.png';
import svcbank from '../assets/clients/svcbank.png';
import leela from '../assets/clients/leela.png';
import kimatsu from '../assets/clients/kimatsu.png';
import jp from '../assets/clients/JP.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';



const Clients = () => {
  const clientLogos = [
    { id: 1, name: 'Horeca', logo: horeca },
    { id: 2, name: 'Healthy Meal', logo: healthyMeal },
    { id: 3, name: 'Mountain Wood', logo: mountainWood },
    { id: 4, name: 'Fusion Event', logo: fusionEvent },
    { id: 5, name: 'Axis Bank', logo: axisbank },
    { id: 6, name: 'Symbiosis', logo: symbiosis },
    { id: 7, name: 'Witty', logo: witty },
    { id: 8, name: 'Electrolab', logo: electrolab },
    { id: 9, name: 'NESCO', logo: nesco },
    { id: 10, name: 'SVC Bank', logo: svcbank },
    { id: 11, name: 'Leela', logo: leela },
    { id: 13, name: 'Kimatsu', logo: kimatsu },
    { id: 14, name: 'JP', logo: jp },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Fusion Media has been instrumental in transforming our digital presence. Their innovative approach and attention to detail have helped us achieve remarkable results.",
      name: "Sarah Johnson",
      position: "CEO, TechVision Inc.",
      image: horeca
    },
    {
      id: 2,
      text: "Working with Fusion Media has been a game-changer for our business. Their creative solutions and technical expertise have exceeded our expectations.",
      name: "Michael Chen",
      position: "Director, Innovation Labs",
      image: healthyMeal
    },
    {
      id: 3,
      text: "The team's dedication to quality and innovation is unmatched. They've helped us create experiences that truly resonate with our users.",
      name: "Emma Williams",
      position: "Head of Design, Future Corp",
      image: mountainWood
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Add auto-advance functionality (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Use the useInView hook to detect when the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  // Variants for the text reveal animation
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="main-container" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="h-[60px]"></div>
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-2xl text-gray-500 mb-8 justify-center">
          <span>Home</span>
          <span>•</span>
          <span className="text-gray-400">Clients</span>
        </div>

        {/* Title Section with Text Reveal Animation */}
        <div className="flex flex-col items-center justify-center text-center ">
          <motion.h2
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.3 }}
            className="text-3xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: 'Lobster, cursive' }}
          >
            <motion.div variants={textRevealVariants}>
              We make happy clients by
            </motion.div>
            <motion.div variants={textRevealVariants}>
              interconnecting technology
            </motion.div>
            <motion.div variants={textRevealVariants}>
              with business & art.
            </motion.div>
          </motion.h2>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-32">
          <DotLottieReact
            src="https://lottie.host/83a9fd3a-e1a0-448b-b854-f1e911428554/yCSoUfNkOr.lottie"
            loop
            autoplay
            style={{ width: '500px', height: '500px' }}
          />
        </div>

        {/* Clients Title */}
        <div className="flex justify-center mb-24">
          <h1 className="text-[#FF3366] text-5xl font-medium" style={{ fontFamily: 'Lobster, cursive' }}>Our Partners</h1>
        </div>

        {/* Clients Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-18 mb-[100px] mx-[-8px]">
          {clientLogos.map((client) => (
            <div 
              key={client.id} 
              className="flex items-center justify-center px-2"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-18 w-auto transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col items-center mt-[200px]" ref={ref}>
          {/* Testimonial Header */}
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Lobster, cursive' }}>
              Happy clients with <span className="gradient-text">{inView && <CountUp end={100} duration={3} />}+</span><br />
              successful Projects
            </h3>
            <h2 className="text-[#FF3366] text-2xl font-medium mt-[20px]" style={{ fontFamily: 'Lobster, cursive' }}>TESTIMONIALS</h2>    
          </div>
          {/* Testimonial Content */}
          <div className="max-w-[1000px] mx-auto flex flex-col items-center relative">
            {/* Quote Mark */}
            <span className="absolute -left-20 top-0 text-[#FF3366] text-[180px] font-serif leading-none">"</span>
            
            {/* Testimonial Text */}
            <div className="text-center w-full">
              <p className="text-3xl md:text-4xl font-normal mb-20 leading-relaxed text-left pl-12">
                {testimonials[currentTestimonial].text}
              </p>
              {/* Author Info */}
              <div className="flex items-center justify-start w-full gap-6 mb-4 pl-12">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-2xl font-bold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-xl text-gray-600">{testimonials[currentTestimonial].position}</p>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-4 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-[#FF3366]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-60 rounded-lg mt-22 h-[300px] flex items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight" style={{ fontFamily: 'Lobster, cursive' }}>
            Ready to transform<br />
            your digital presence?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Clients;