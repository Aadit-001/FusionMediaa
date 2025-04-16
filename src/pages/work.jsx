import React from 'react';
import { useNavigate } from 'react-router-dom';
import bus from '../assets/bus.png';  
import airport from '../assets/airport.png';
import billboard from '../assets/billboard.png';
import theatre from '../assets/theatre.png';
import metro from '../assets/metro.png';
import { motion } from 'framer-motion';

const Work = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact');
  };

  const projects = [
    {
      id: 1,
      title: "Bus Wrap Ads - OOH",
      description: "Eye-catching full vehicle wraps that transform city buses into moving brand experiences, capturing attention across urban environments.",
      image: bus,
      
    },
    {
      id: 2,
      title: "Airport Ads",
      description: "Strategic advertising placements targeting high-value travelers in premium airport locations for maximum brand visibility and impact.",
      image: airport,
      
    },
    {
      id: 3,
      title: "Billboard & Hoarding",
      description: "Commanding large-format outdoor displays designed to make bold statements and create lasting impressions on high-traffic roadways.",
      image: billboard,
      
    },
    {
      id: 4,
      title: "Theatre Ads",
      description: "Immersive cinema advertising that engages captive audiences in a distraction-free environment, creating memorable brand moments.",
      image: theatre,
      
    },
    {
      id: 5,
      title: "Metro Train Wrap",
      description: "Dynamic train exterior wraps that transform public transportation into moving canvases, delivering your message throughout metropolitan areas.",
      image: metro,
      
    }
  ];

  // Variants for the text reveal animation
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="main-container" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="h-[60px]"></div>
        <p className="text-gray-500 uppercase tracking-wider mb-4">WORK</p>
        
        <div className="mb-24">
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.3 }}
            className="text-5xl md:text-6xl font-normal mb-4 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <motion.div variants={textRevealVariants}>
              We Have
            </motion.div>
            <motion.div variants={textRevealVariants}>
              Designed Experiences
            </motion.div>
            <motion.div variants={textRevealVariants}>
              For Over 100 Projects.
            </motion.div>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[400px] object-cover" 
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-gray-500">{project.category}</p>
                <p className="text-gray-500 hover:text-black transition-colors">{project.viewLink}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-gray-300 rounded-lg py-10 px-16 flex justify-between items-center h-32"> 
          <p className="text-gray-700 text-4xl font-medium ml-[100px]">We have more awesome work to show</p>
          <div
            onClick={handleNavigation}
            className="bg-[#6366F1] text-white rounded-full p-4 hover:bg-[#5558DD] transition-colors cursor-pointer mr-[100px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="h-[80px]"></div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-60 rounded-lg h-[300px] flex items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Let's create a measurable<br />
            impact on your business.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Work;