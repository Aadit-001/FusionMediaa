import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import './branding.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useDarkMode } from '../context/DarkModeContext';

gsap.registerPlugin(ScrollTrigger);


const Branding = () => {
  const containerRef = useRef(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
          const locoScroll = new LocomotiveScroll({
              el: document.querySelector(".smooth-scroll"),
                  smooth: false,
                  multiplier: 0.1
              });
              // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
              locoScroll.on("scroll", ScrollTrigger.update);
              
              // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
              ScrollTrigger.scrollerProxy(".smooth-scroll", {
              scrollTop(value) {
                  return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
              }, // we don't have to define a scrollLeft because we're only scrolling vertically.
              getBoundingClientRect() {
                  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
              },
              // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
              pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
              });
              
              // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
              ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
              ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
              // --- SETUP END ---
                
              
              // scroll trigger start
              
              ScrollTrigger.matchMedia({
                  // desktop
                  "(min-width: 1200px)": function () {
                      // first section
                      var tl = gsap.timeline({scrollTrigger:{
                          trigger: ".service-section",
                          start: "0% 100%",
                          end: "100% 100%",
                          scrub: true,
                          // visibility: "visible",
                          // markers: true
                      }})
              
                      // Animate all circles together
                      // const circles = ['#circle1', '#circle2', '#circle3', '#circle4', '#circle5', '#circle6', '#circle7'];
                      
                      // Position circles 1, 3, 6 vertically on the left side
                      tl.to('#circle11', {
                          // top: "230%",
                          // left: "35%",
                          rotate: "360deg",
                          // scale: 2,
                          duration: 8,
                          visibility: "visible",
                          opacity: 1,
                          background: "transparent"
                      }, 'circles');

                      var t2 = gsap.timeline({scrollTrigger:{
                        trigger: ".service1-section",
                        start: "30% 100%",
                        end: "40% 100%",
                        scrub: true,
                        // visibility: "visible",
                        // markers: true
                    }})

                    t2.to('#circle13', {
                        top: "160%",
                        left: "50%",
                        rotate: "360deg",
                        scale: 4,
                        duration: 1,
                        visibility: "visible",
                        opacity: 1,
                        // background: "transparent"
                    }, 'circles');
                      
                      
                  }
              })
              gsap.to("#box1", {
                  scale: 20,
                  transformOrigin: "50% 50%",
                  background: "#222",
                  duration: 1,
                  ease: "power2.out",
                  // visibility: "visible",
                  scrollTrigger: {
                      trigger: ".fourth-section",
                      start: "10% 80%",
                      onEnter: () => gsap.to("#box1", { scale: 20, duration: 1.3, ease: "expo.inOut" }),
                      onLeaveBack: () => gsap.to("#box1", { scale: 1, duration: 1.3, ease: "expo.inOut" }),
                      onLeave: () => gsap.to("#box1", { scale: 1, duration: 1.3, ease: "expo.inOut" }),
                      onEnterBack: () => gsap.to("#box1", { scale: 20, duration: 1.3, ease: "expo.inOut" })
                  }
              });
  
          // Cleanup function
          return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            locoScroll.destroy();
        };
      }, []);
  
  const navigate = useNavigate();
  const services = [
    { title: "Billboard Advertising" },
    { title: "Transit Advertising" },
    { title: "Street Furniture" },
    { title: "Digital Billboards" },
    { title: "Mall Media" },
    { title: "Airport Advertising" },
    { title: "Metro Station Ads" },
    { title: "Bus Shelter Ads" },
    { title: "Retail OOH" },
    { title: "Interactive Displays" }
  ];

  const processSteps = [
    {
      icon: (
        <motion.svg 
          className="w-16 h-16 mb-6"
          viewBox="0 0 48 48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.path
            d="M6 12h36M6 24h36M6 36h36"
            stroke="#FF4D6D"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.svg>
      ),
      title: "Site Selection",
      description: "Strategic analysis of high-traffic locations and demographic mapping for maximum visibility"
    },
    {
      icon: (
        <motion.svg 
          className="w-16 h-16 mb-6"
          viewBox="0 0 48 48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.path
            d="M24 6v36M12 24h24"
            stroke="#FF4D6D"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.svg>
      ),
      title: "Creative Design",
      description: "Eye-catching visuals and compelling messages optimized for outdoor viewing"
    },
    {
      icon: (
        <motion.svg 
          className="w-16 h-16 mb-6"
          viewBox="0 0 48 48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.circle
            cx="24"
            cy="24"
            r="18"
            stroke="#FF4D6D"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.svg>
      ),
      title: "Implementation",
      description: "Professional installation and maintenance across various outdoor media formats"
    },
    {
      icon: (
        <motion.svg 
          className="w-16 h-16 mb-6"
          viewBox="0 0 48 48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.path
            d="M12 36l24-24M12 12l24 24"
            stroke="#FF4D6D"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.svg>
      ),
      title: "Performance Analysis",
      description: "Track engagement metrics and measure campaign effectiveness in real-world settings"
    }
  ];

  const otherServices = [
    {
      name: "Content Marketing",
      description: "Engaging content that connects.",
      color: "bg-blue-100",
      link: "/services/contentmarketing"
    },
    {
      name: "Social Media Marketing",
      description: "Buzz where it matters.",
      color: "bg-purple-100",
      link: "/services/socialmediamarketing"
    },
    {
      name: "Website Services",
      description: "Websites that work.",
      color: "bg-indigo-100",
      link: "/services/website"
    },
    {
      name: "Branding",
      description: "Events that pop.",
      color: "bg-red-100",
      link: "/services/branding"
    },
    {
      name: "Public Relations",
      description: "Shaping public voice.",
      color: "bg-yellow-100",
      link: "/services/publicrelations"
    },
    {
      name: "Event Marketing",
      description: "Ads that turn heads.",
      color: "bg-pink-100",
      link: "/services/eventmarketing"
    }
  ];

  const handleServiceClick = (link) => {
    navigate(link);
  };



  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} smooth-scroll`} ref={containerRef}>
      {/* Top Navigation */}
      <div className="absolute top-20 right-[32%] mt-14">
        <div className="mb-4 -ml-[5px]">
          <h1 className="text-[#FF4D6D] text-2xl font-semibold">OOH</h1>
        </div>
        <nav className="flex items-center gap-2 text-lg justify-end">
          <Link to="/" className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'}`}>Home</Link>
          <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
          <Link to="/services" className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'}`}>Services</Link>
          <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
          <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>OOH</span>
        </nav>
      </div>

      <div className="services-section flex min-h-screen mt-2">
            {/* <div className="container"> */}
                {/* <div className="hero-content"> */}
                    <div className="circless" id="circle11">
                    <DotLottieReact
      src="https://lottie.host/75718164-b410-4b37-a718-35ff309ea037/iAYzjWmW0u.lottie"
      loop
      autoplay
    />

                    {/* <div className="absolute bg-amber-400 w-4 h-4 rounded-full  left-1/2 -translate-x-1/2 -translate-y-1/2">2</div>
                    <div className="absolute bg-amber-400 w-4 h-4 rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2">3</div> */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 -ml-24 h-12 bg-[#FF4D6D] rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 ml-24 h-12 bg-[#FF4D6D] rounded-full" ></div>
                    
                    {/* <div className="absolute w-12 ml-56 h-12 bg-[#FF4D6D] rounded-full" id='circle2'></div> */}
                    {/* <div className="absolute w-12 ml-56 h-12 bg-[#FF4D6D] rounded-full" id="circle3"></div> */}
                    </div>
                    <div className="absolute w-12 h-12 bg-[#FF4D6D] rounded-full" id="circle13"></div>

                    <div className="w-1/2 flex items-center absolute right-1 top-1/3 ml-48 pl-20">
                      <div className="max-w-xl">
                        <div className="mb-4">
                          <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`text-[64px] font-semibold leading-tight tracking-normal font-montserrat ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                          >
                            We create<br />
                            <span className="text-[#FF4D6D]">impactful</span><br />
                            outdoor<br />
                            advertising.
                          </motion.h1>
                        </div>
                      </div>
                    </div>
                </div>
            {/* </div> */}
        {/* // </div> */}

      {/* <div className="flex min-h-screen mt-2">
        <div className="w-1/2 flex items-center ">
          <div className="max-w-xl">
            <div className="mb-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[64px] font-semibold leading-tight tracking-normal font-montserrat text-gray-900"
              >
                We create<br />
                <span className="text-[#FF4D6D]">impactful</span><br />
                outdoor<br />
                advertising.
              </motion.h1>
            </div>
          </div>
        </div>
      </div> */}

      {/* Services Section */}
      <div className={`px-8 py-16 services1-section ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-[#FF4D6D] text-2xl font-bold mb-6 tracking-wide text-left ml-8">What Do We Serve ?</h1>
            <h3 className={`text-4xl font-bold max-w-3xl leading-tight text-left ml-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              We deliver high-impact outdoor advertising that captures attention and drives engagement in the real world.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-8 ml-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative pb-4">
                  <h3 className={`text-[28px] font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {service.title}
                  </h3>
                  <div className={`absolute bottom-0 left-0 w-full border-b-[3px] border-dotted ${isDarkMode ? 'border-white opacity-50' : 'border-black opacity-70'}`} style={{ borderBottomWidth: '3px', borderStyle: 'dotted', borderSpacing: '4px' }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Do It Section */}
      <div className={`px-8 py-24 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-[#FF4D6D] text-2xl font-bold mb-6">HOW WE DO IT ?</h2>
            <h3 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              From Strategy to Street Impact
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center group">
                  <div className="relative">
                    {step.icon}
                    <motion.div
                      className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${isDarkMode ? 'bg-pink-300' : 'bg-pink-100'}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{step.title}</h4>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <motion.div
                    className={`hidden lg:block absolute top-8 left-full w-full h-[2px] ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <motion.div
                      className="absolute right-0 -top-1 w-2 h-2 bg-[#FF4D6D] rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Work Section */}
      <div className={`px-8 py-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FF4D6D] text-4xl font-medium mb-12 text-left ml-8"
          >
            Outdoor Advertising Excellence
          </motion.h2>

          <div className="space-y-10">
            <div className="flex flex-col space-y-8">
              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="https://goodmockups.com/wp-content/uploads/2022/03/Free-Bus-Stop-Advertising-Mockup-PSD-1.jpg"
                  alt="Corporate Identity Project"
                  className="w-full max-w-5xl h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Marketing Services Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 ml-8"
              >
                <h3 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Outdoor Advertising Excellence</h3>
                <p className={`text-xl leading-relaxed max-w-3xl ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                  Transform your outdoor advertising into powerful marketing opportunities. We combine strategic planning, digital innovation, and data-driven insights to maximize your outdoor advertising's impact and ROI.
                </p>
                <div className={`flex items-center gap-x-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="font-medium">Location Analysis</span>
                  <span className="text-[#FF4D6D]">•</span>
                  <span className="font-medium">Billboard Design</span>
                  <span className="text-[#FF4D6D]">•</span>
                  <span className="font-medium">Transit Media</span>
                  <span className="text-[#FF4D6D]">•</span>
                  <span className="font-medium">Impact Measurement</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Services Section */}
      <div className={`px-8 py-24 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FF4D6D] text-4xl font-medium mb-16 text-left ml-8"
          >
            Explore Other Services.
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-lg flex justify-between items-center cursor-pointer hover:scale-105 transition-transform ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : service.color
                }`}
                onClick={() => handleServiceClick(service.link)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div>
                  <h3 className={`font-bold text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.name}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{service.description}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
