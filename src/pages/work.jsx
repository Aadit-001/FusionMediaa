import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import fusion_events2 from '../assets/work/fusion_events2.mp4';
import fusion_events3 from '../assets/work/fusion_events3.mp4';
import BeyondGameCGI from '../assets/work/CGI/BeyondGameCGI.mp4';
import HealthyMealCGI from '../assets/work/CGI/HealthyMealCGI.mp4';
import HealthyMealCGI2 from '../assets/work/CGI/HealthyMealCGI2.mp4';
import BistroCooking from '../assets/work/BistroCooking.mp4';
import BeyondGame_speedRamp from '../assets/work/BeyondGame_speedRamp.mp4';
import BeyondGame_Intro from '../assets/work/BeyondGame_Intro.mp4';



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
          </motion.h1>
        </div>

        {/* Professional Minimalist Video Gallery Section */}
        <div className="mb-24">
          {/* First row: 3 vertical videos */}
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-6 mb-8">
              {/* Vertical Video 1 */}
              <div className="flex-1 flex flex-col items-center max-w-xs mx-auto">
                <div className="w-full h-[520px] flex items-center justify-center dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg">
                  <video className="object-contain w-full h-full" style={{ maxHeight: '100%', maxWidth: '320px' }} src={BistroCooking} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/fusion_events1.jpg" />
                </div>
                <div className="mt-3 w-full">
                  <p className={`text-xl md:text-2xl text-center font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Bistro Cooking</p>
                  <p className={`text-sm md:text-base text-center mt-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>Immersive brand event for cooking enthusiasts</p>
                </div>
              </div>
              {/* Vertical Video 2 */}
              <div className="flex-1 flex flex-col items-center max-w-xs mx-auto">
                <div className="w-full h-[520px] flex items-center justify-center dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg">
                  <video className="object-contain w-full h-full" style={{ maxHeight: '100%', maxWidth: '320px' }} src={BeyondGame_speedRamp} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/mountain_woods.jpg" />
                </div>
                <div className="mt-3 w-full">
                  <p className={`text-xl md:text-2xl text-center font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Beyond Game Speed Ramp</p>
                  <p className={`text-sm md:text-base text-center mt-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>High-energy visuals to boost your gaming brand.</p>
                </div>
              </div>
              {/* Vertical Video 3 */}
              <div className="flex-1 flex flex-col items-center max-w-xs mx-auto">
                <div className="w-full h-[520px] flex items-center justify-center dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg">
                  <video className="object-contain w-full h-full" style={{ maxHeight: '100%', maxWidth: '320px' }} src={fusion_events2} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/fusion_events1.jpg" />
                </div>
                <div className="mt-3 w-full">
                  <p className={`text-xl md:text-2xl text-center font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Fusion Events 2</p>
                  <p className={`text-sm md:text-base text-center mt-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>Innovative displays and audience interaction</p>
                </div>
              </div>
            </div>
            {/* Second row: 1 horizontal video centered */}
            <div className="w-full flex flex-col items-center justify-center gap-6">
              {/* Horizontal Video 1 (centered) */}
              <div className="w-full md:w-4/5 lg:w-3/4">
                <div className="w-full h-[420px] flex items-center justify-center dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg">
                  <video className="object-contain w-full h-full" style={{ maxWidth: '100%', maxHeight: '420px' }} src={BeyondGame_Intro} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/fusion_events3.jpg" />
                </div>
                <div className="mt-3 w-full">
                  <p className={`text-xl md:text-2xl text-center font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Beyond Game Intro</p>
                  <p className={`text-sm md:text-base text-center mt-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>Intro for gaming event</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CGI Work Section */}
        <div className="mb-24">
          <motion.h2 
            className="text-6xl md:text-4xl font-extrabold text-center mb-22 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg"
            style={{ letterSpacing: '0.03em', fontFamily: 'Monoton' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CGI Showcase
          </motion.h2>
          {/* First row: 2 vertical videos */}
          <div className="flex flex-col md:flex-row gap-52 justify-center items-center mb-14">
            {/* CGI Video 1 - Vertical */}
            <div className="flex flex-col items-center w-full md:w-auto md:max-w-xs">
              <div className="w-full h-[520px] flex items-center justify-center dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg">
                <video 
                  className="object-contain" 
                  style={{ maxHeight: '100%', maxWidth: '320px', width: '100%', height: '100%' }} 
                  src={BeyondGameCGI}
                  autoPlay 
                  loop 
                  muted 
                  controls 
                  playsInline 
                  preload="auto" 
                  poster="/thumbnails/cgi1.jpg" 
                />
              </div>
              <div className="mt-3 w-full">
                <p className={`text-xl md:text-2xl text-center font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Beyond Games</p>
                <p className={`text-sm md:text-base text-center mt-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>Electrifying CGI for next-level gaming promotions.</p>
              </div>
            </div>
            {/* CGI Video 3 - Vertical */}
            <div className="flex flex-col items-center w-full md:w-auto md:max-w-xs">
              <div className="w-full h-[520px] flex items-center justify-center dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg">
                <video 
                  className="object-contain" 
                  style={{ maxHeight: '100%', maxWidth: '320px', width: '100%', height: '100%' }} 
                  src={HealthyMealCGI2}
                  autoPlay 
                  loop 
                  muted 
                  controls 
                  playsInline 
                  preload="auto" 
                  poster="/thumbnails/cgi3.jpg" 
                />
              </div>
              <div className="mt-3 w-full">
                <p className={`text-xl md:text-2xl text-center font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>The Healthy Meal</p>
                <p className={`text-sm md:text-base text-center mt-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>Fresh, vibrant CGI for irresistible healthy meals.</p>
              </div>
            </div>
          </div>
          {/* Second row: 1 horizontal video centered */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/5 lg:w-3/4">
              <div className="w-full h-[420px] flex items-center justify-center dark:bg-gray-800 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg">
                <video className="object-contain w-full h-full" style={{ maxWidth: '100%', maxHeight: '420px' }} src={HealthyMealCGI} autoPlay loop muted controls playsInline preload="auto" poster="/thumbnails/cgi2.jpg" />
              </div>
              <div className="mt-3 w-full">
                <p className={`text-xl md:text-2xl text-center font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>The Healthy Meal</p>
                <p className={`text-sm md:text-base text-center mt-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>Delicious CGI food visuals for healthy brands.</p>
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