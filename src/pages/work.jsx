import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import beyondGames from '../assets/work/beyond_games.mp4';
import mountainWoods from '../assets/work/mountain_woods.mp4';
import fusion_events1 from '../assets/work/fusion_events1.mp4';
import fusion_events2 from '../assets/work/fusion_events2.mp4';
import fusion_events3 from '../assets/work/fusion_events3.mp4';
import fusion_fly from '../assets/work/fusion_fly.mp4';

const Work = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  const handleNavigation = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Variants for the text reveal animation
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`min-h-screen -mt-5 ${isDarkMode ? 'bg-black' : 'bg-white'}`} style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-[200px]">
        
        <div className="mb-24 text-center mt-10 pt-20 md:pt-10  md:mt-22">
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.3 }}
            className={`text-5xl md:text-6xl font-normal mb-4 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <motion.div variants={textRevealVariants}>
              We Create
            </motion.div>
            <motion.div variants={textRevealVariants}>
              Memorable Brand Experiences
            </motion.div>
            <motion.div variants={textRevealVariants}>
              That Inspire & Engage
            </motion.div>
          </motion.h1>
        </div>

        {/* Professional Minimalist Video Gallery Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 xl:gap-20">
            {/* Video 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg" style={{ minHeight: '400px', maxHeight: '520px' }}>
                <video className="w-full h-full object-cover" style={{ minHeight: '400px', maxHeight: '520px' }} src={beyondGames} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/beyond_games.jpg" />
              </div>
              <div className="mt-3 w-full">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-purple-500 text-center font-medium">Beyond Games Activation</p>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center mt-1">Immersive brand event for gaming enthusiasts</p>
              </div>
            </div>
            {/* Video 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg" style={{ minHeight: '400px', maxHeight: '520px' }}>
                <video className="w-full h-full object-cover" style={{ minHeight: '400px', maxHeight: '520px' }} src={mountainWoods} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/mountain_woods.jpg" />
              </div>
              <div className="mt-3 w-full">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-purple-500 text-center font-medium">Mountain Woods Launch</p>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center mt-1">Nature-inspired product launch campaign</p>
              </div>
            </div>
            {/* Video 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg" style={{ minHeight: '400px', maxHeight: '520px' }}>
                <video className="w-full h-full object-cover" style={{ minHeight: '400px', maxHeight: '520px' }} src={fusion_events1} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/fusion_events1.jpg" />
              </div>
              <div className="mt-3 w-full">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-purple-500 text-center font-medium">Fusion Events – Corporate Event</p>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center mt-1">Corporate events and experiences</p>
              </div>
            </div>
            {/* Video 4 */}
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg" style={{ minHeight: '400px', maxHeight: '520px' }}>
                <video className="w-full h-full object-cover" style={{ minHeight: '400px', maxHeight: '520px' }} src={fusion_events2} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/fusion_events2.jpg" />
              </div>
              <div className="mt-3 w-full">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-purple-500 text-center font-medium">Fusion Events </p>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center mt-1">Innovative displays and audience interaction</p>
              </div>
            </div>
            {/* Video 5 */}
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg" style={{ minHeight: '400px', maxHeight: '520px' }}>
                <video className="w-full h-full object-cover" style={{ minHeight: '400px', maxHeight: '520px' }} src={fusion_events3} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/fusion_events3.jpg" />
              </div>
              <div className="mt-3 w-full">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-purple-500 text-center font-medium">Fusion Events</p>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center mt-1">Memorable events and experiences</p>
              </div>
            </div>
            {/* Video 6 */}
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg" style={{ minHeight: '400px', maxHeight: '520px' }}>
                <video className="w-full h-full object-cover" style={{ minHeight: '400px', maxHeight: '520px' }} src={fusion_fly} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/fusion_fly.jpg" />
              </div>
              <div className="mt-3 w-full">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-purple-500 text-center font-medium">Fusion Fly – Outdoor Campaign</p>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center mt-1">Creative outdoor visuals and placements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decent, Neutral CTA Section */}
        <div className={`relative rounded-2xl py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-8 border ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} shadow-sm`}> 
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className={`text-2xl md:text-4xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`} style={{fontFamily: 'Playfair Display, serif'}}>We have more awesome work to show</h3>
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} max-w-xl`}>Discover more of our impactful campaigns and creative solutions. Reach out to see how we can elevate your brand.</p>
          </div>
          <button
            onClick={handleNavigation}
            className="flex cursor-pointer items-center gap-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold rounded-full px-8 py-4 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-all text-lg md:mr-[100px] mx-auto md:mx-0"            
            style={{ boxShadow: '0 2px 10px 0 rgba(0,0,0,0.05)' }}
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="h-12 md:h-[80px]"></div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-14 md:py-20 rounded-lg mt-14 md:mt-22 min-h-[220px] md:min-h-[280px] flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center max-w-3xl md:max-w-4xl mx-auto leading-tight" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.01em' }}>
            Let's create a measurable<br />
            impact on your business.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Work;