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


  //dd
  // const [isAnimating, setIsAnimating] = useState(false);


  // const containerRef1 = useRef(null);


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
        return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
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
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-section",
            start: "0% 100%",
            end: "100% 100%",
            scrub: true,
            // visibility: "visible",
            // markers: true
          }
        })

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

        var t2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".service1-section",
            start: "30% 120%",
            end: "40% 100%",
            scrub: true,
            // visibility: "visible",
            // markers: true
          }
        })

        t2.to('#circle13', {
          top: "150%",
          left: "50%",
          rotate: "360deg",
          scale: 2,
          duration: 1,
          visibility: "visible",
          opacity: 1,
          // background: "transparent"
        }, 'circles');


      },

      "(min-width: 1920px)": function () {
        // first section
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-section",
            start: "0% 50%",
            end: "100% 100%",
            scrub: true,
            // visibility: "visible",
            // markers: true
          }
        })

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

        var t2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".service1-section",
            start: "30% 120%",
            end: "40% 100%",
            scrub: true,
            // visibility: "visible",
            // markers: true
          }
        })

        t2.to('#circle13', {
          top: "141%",
          left: "50%",
          rotate: "360deg",
          scale: 2,
          duration: 1,
          visibility: "visible",
          opacity: 1,
          // background: "transparent"
        }, 'circles');


      },


      // mobile
      "(min-width: 400px) and (max-width: 600px)": function () {
        // first section
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-section",
            start: "0% 0%",
            end: "70% 80%",
            scrub: true,
            // visibility: "visible",
            // markers: true
          }
        })

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

        var t2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-section",
            start: "15% 100%",
            end: "30% 100%",
            scrub: true,
            // visibility: "visible",
            // markers: true
          }
        })

        t2.to('#circle13', {
          top: "150%",
          left: "20%",
          rotate: "360deg",
          scale: 2,
          duration: 1,
          visibility: "visible",
          opacity: 1,
          // background: "transparent"
        }, 'circles');


      },


      "(min-width: 601px) and (max-width: 800px)": function () {
        // first section
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-section",
            start: "0% 10%",
            end: "20% 80%",
            scrub: true,
            // visibility: "visible",
            // markers: true
          }
        })

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

        var t2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-section",
            start: "10% 90%",
            end: "30% 100%",
            scrub: true,
            // visibility: "visible",
            // markers: true
          }
        })

        t2.to('#circle13', {
          top: "200%",
          left: "20%",
          rotate: "360deg",
          scale: 2,
          duration: 1,
          visibility: "visible",
          opacity: 1,
          // background: "transparent"
        }, 'circles');


      },

      "(min-width: 801px) and (max-width: 1190px)": function () {
        // first section
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-section",
            start: "0% 50%",
            end: "30% 80%",
            scrub: true,
            // visibility: "visible",
            // markers: true
          }
        })

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

        var t2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-section",
            start: "20% 90%",
            end: "40% 100%",
            scrub: true,
            // visibility: "visible",
            // markers: true
          }
        })

        t2.to('#circle13', {
          top: "170%",
          left: "60%",
          rotate: "360deg",
          scale: 2,
          duration: 1,
          visibility: "visible",
          opacity: 1,
          // background: "transparent"
        }, 'circles');


      }



    })

    gsap.to("#box10", {
      scale: 400,
      transformOrigin: "50% 50%",
      background: "#BBDEFB",
      duration: 1,
      ease: "power2.out",
      // visibility: "visible",
      scrollTrigger: {
        trigger: ".ser-section",
        start: "40% 65%",
        onEnter: () => gsap.to("#box10", { scale: 400, duration: 1.3, ease: "expo.inOut" }),
        onLeaveBack: () => gsap.to("#box10", { scale: 1, duration: 1.3, ease: "expo.inOut" }),
        onLeave: () => gsap.to("#box10", { scale: 1, duration: 1.3, ease: "expo.inOut" }),
        onEnterBack: () => gsap.to("#box10", { scale: 400, duration: 1.3, ease: "expo.inOut" })
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
    { title: "Story Telling Campaigns" },
    { title: "Copywriting" },
    { title: "Blog Writing" },
    { title: "Press Release" },
    { title: "Content Calendar" },
    { title: "SEO Friendly Content" },
    { title: "White Papers" },
    { title: "Info Graphics" },
    { title: "Podcast Scripting" },
    { title: "Industry Reports" },
    { title: "Product Descriptions" },
    { title: "Video Marketing" }
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
            d="M8 12h32v4H8zm0 10h32v4H8zm0 10h32v4H8z"
            stroke="#BBDEFB"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.svg>
      ),
      title: "Research & Planning",
      description: "We analyze your target audience, competitors, and industry trends to develop a comprehensive content strategy aligned with your business goals."
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
          <motion.path
            d="M24 6L4 26l20 20 20-20L24 6z"
            stroke="#BBDEFB"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
        </motion.svg>
      ),
      title: "Content Creation",
      description: "Our expert writers craft engaging, SEO-optimized content that resonates with your audience and drives meaningful engagement across all platforms."
    },
    {
      icon: (
        <motion.svg 
          className="w-16 h-16 mb-6"
          viewBox="0 0 48 48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            stroke="#BBDEFB"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
        </motion.svg>
      ),
      title: "Distribution & Promotion",
      description: "We implement strategic content distribution across optimal channels and promote your content to maximize reach and engagement."
    },
    {
      icon: (
        <motion.svg 
          className="w-16 h-16 mb-6"
          viewBox="0 0 48 48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.path
            d="M6 6l36 36M6 42l36-36"
            stroke="#BBDEFB"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          />
        </motion.svg>
      ),
      title: "Analysis & Optimization",
      description: "We continuously monitor content performance, analyze metrics, and optimize our strategy to improve engagement and conversion rates."
    }
  ];

  const otherServices = [
    {
      name: "Branding",
      description: "Identity that stands out.",
      color: "bg-green-100",
      link: "/services/branding"
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
      name: "Event Marketing",
      description: "Events that pop.",
      color: "bg-red-100",
      link: "/services/eventmarketing"
    },
    {
      name: "Public Relations",
      description: "Shaping public voice.",
      color: "bg-yellow-100",
      link: "/services/publicrelations"
    },
    {
      name: "OOH",
      description: "Ads that turn heads.",
      color: "bg-pink-100",
      link: "/services/ooh"
    }
  ];

  const handleServiceClick = (link) => {
    navigate(link);
  };



  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} smooth-scroll`} ref={containerRef}>
      {/* Top Navigation */}

      <div className="flex flex-col justify-center items-center md:min-h-screen md:mt-2">
        <div className="container">
          <div className="relative mt-30 md:mt-0 px-0 lg:px-[10%] ">
            <div className="">
              <h1 className="text-[#BBDEFB] text-2xl font-bold lg:font-semibold">CONTENT MARKETING</h1>
            </div>
            <nav className="flex items-center gap-2 text-lg">
              <Link to="/" className={`text-gray-900 hover:text-gray-600 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Home</Link>
              <span className="text-gray-400">•</span>
              <Link to="/services" className={`text-gray-900 hover:text-gray-600 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Services</Link>
              <span className="text-gray-400">•</span>
              <span className={`text-gray-400 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>content marketing</span>
            </nav>
          </div>
          <div className='h-full w-full md:flex md:flex-row md:justify-between md:items-center'>
            {/* <div className="hero-content"> */}
            <div className={`relative circless border-4 ${isDarkMode ? 'border-white' : 'border-slate-900'} mt-10 ml-[16%] md:ml-[0%]`} id="circle11">
              <DotLottieReact
                src={isDarkMode
                  ? "https://lottie.host/6e066008-af58-454d-a314-bb39a491b07a/qzfpdLFUM3.lottie"
                  : "https://lottie.host/75718164-b410-4b37-a718-35ff309ea037/iAYzjWmW0u.lottie"}
                loop
                autoplay
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 -ml-16 md:-ml-24 md:h-12 bg-[#BBDEFB] rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 ml-16 md:ml-24 md:h-12 bg-[#BBDEFB] rounded-full" ></div>
            </div>
            <div className="absolute w-12 h-12 bg-[#BBDEFB] rounded-full" id="circle13"></div>

            <div className="w-full md:w-1/2 flex items-center lg:justify-start justify-center  md:right-1 md:top-1/3 lg:pl-20">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-normal font-montserrat ${isDarkMode ? 'text-white' : 'text-gray-900'} mt-10 lg:mt-0`}
              >
                 WE CREATE
                <span className="text-[#BBDEFB]"> ENGAGING </span>
                CONTENT THAT CONVERTS.
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
      {/* // </div> */}

      {/* Services Section */}
      <div className="ser-section px-8 py-16  ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-[#BBDEFB] text-2xl font-bold mb-6 tracking-wide text-left">What Do We Serve ?</h1>
            <h3 className={`text-4xl font-bold max-w-3xl leading-tight text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            We transform your ideas into compelling content that engages audiences and drives results.
            </h3>
          </motion.div>

          <div className="bg-transparent overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8 relative p-10 rounded-3xl">
            {/* Animated BG box10, centered and behind content */}
            <div
              className="h-2 w-2 rounded-full absolute left-1/2  -translate-x-1/2 z-0"
              id="box10"
              style={{ pointerEvents: 'none' }}
            ></div>
            {/* Service cards, above box10 */}
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative z-10"
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
      <div className={` px-8 py-24 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className={`text-[#BBDEFB] text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>HOW WE DO IT ?</h2>
            <h3 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Creating Content That Connects & Converts
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
                      className="absolute right-0 -top-1 w-2 h-2 bg-[#BBDEFB] rounded-full"
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
            className="text-[#BBDEFB] text-4xl font-medium mb-12 text-left"
          >
            Content Marketing
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
                  src="https://www.bridgethegapmedia.com/wp-content/uploads/2019/06/content-marketing.jpg"
                  alt="Corporate Identity Project"
                  className="w-full max-w-5xl h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h3 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Strategic Content Creation</h3>
                <p className={`text-xl leading-relaxed max-w-3xl ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                Developing engaging, SEO-optimized content that resonates with your target audience and drives meaningful conversions through strategic storytelling.
                </p>
                <div className="flex md:flex-row  flex-col items-center gap-x-4 text-gray-600">
                <span className="font-medium">Content Strategy</span>
                  <span className="text-[#FF4D6D]">•</span>
                  <span className="font-medium">SEO Optimization</span>
                  <span className="text-[#FF4D6D]">•</span>
                  <span className="font-medium">Storytelling</span>
                  <span className="text-[#FF4D6D]">•</span>
                  <span className="font-medium">Analytics</span>
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
            className="text-[#BBDEFB] text-4xl font-medium mb-16 text-left"
          >
            Explore Other Services.
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-lg flex justify-between items-center cursor-pointer hover:scale-105 transition-transform ${service.color}`}
                onClick={() => handleServiceClick(service.link)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div>
                  <h3 className={`font-bold text-xl mb-2 ${isDarkMode ? 'text-black' : 'text-gray-900'}`}>{service.name}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-black' : 'text-gray-700'}`}>{service.description}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${isDarkMode ? 'text-black' : 'text-gray-900'}`}
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
