import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './App.css';
import axisbank from './assets/clients/axisbank.png';
import nesco from './assets/clients/nesco.png';
import quest from './assets/clients/quest.png';
import JP from './assets/clients/JP.png';
import tata from './assets/clients/tata.png';
import leela from './assets/clients/leela.png';
import VI from './assets/clients/VI.png';
import kimatsu from './assets/clients/kimatsu.png';
import bookmyshow from './assets/clients/bookmyshow.png';
import witty from './assets/clients/witty.png';
import symbiosis from './assets/clients/symbiosis.png';
import electrolab from './assets/clients/electrolab.png';

gsap.registerPlugin(ScrollTrigger);


function App() {

  const containerRef = useRef(null);

    useEffect(() => {
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
                smooth: false,
                multiplier: 2
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
                "(min-width: 1367px)": function () {
                    // first section
                    var tl = gsap.timeline({scrollTrigger:{
                        trigger: ".second-section",
                        start: "0% 100%",
                        end: "50% 50%",
                        scrub: true,
                        // visibility: "visible",
                        // markers: true
                    }})
            
                    // Animate all circles together
                    const circles = ['#circle1', '#circle2', '#circle3', '#circle4', '#circle5', '#circle6', '#circle7'];
                    
                    // Position circles 1, 3, 6 vertically on the left side
                    tl.to('#circle1', {
                        top: "150%",
                        left: "35%",
                        rotate: "180deg",
                        scale: 2,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#FF9999"
                    }, 'circles');
                    
                    tl.to('#circle3', {
                        top: "165%",
                        left: "25%",
                        rotate: "180deg",
                        scale: 1.8,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#D4A5A5"
                    }, 'circles');
                    
                    tl.to('#circle6', {
                        top: "177%",
                        left: "34%",
                        rotate: "180deg",
                        scale: 0.8,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#FFEEAD"
                    }, 'circles');
            
                    // Position circle 4 in the middle
                    tl.to('#circle4', {
                        top: "159%",
                        left: "45%",
                        rotate: "180deg",
                        scale: 0.8,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#9DE0AD"
                    }, 'circles');
            
                    // Position circles 2, 5, 7 vertically on the right side
                    tl.to('#circle2', {
                        top: "150%",
                        left: "63%",
                        rotate: "180deg",
                        scale: 2,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#FFEEAD"
                    }, 'circles');
                    
                    tl.to('#circle5', {
                        top: "165%",
                        left: "72%",
                        rotate: "180deg",
                        scale: 1.8,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#45B7D1"
                    }, 'circles');
                    
                    tl.to('#circle7', {
                        top: "175%",
                        left: "61%",
                        rotate: "180deg",
                        scale: 0.7,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#FF9999"
                        // transition: "all 2s",
                    }, 'circles');
            
                    // second section animation
                    var t2 = gsap.timeline({scrollTrigger:{
                        trigger: ".third-section",
                        start: "0% 100%",
                        end: "50% 50%",
                        scrub: true
                    }})
            
                    const circless = ['#circle1', '#circle2', '#circle3', '#circle4', '#circle5', '#circle6', '#circle7'];
                    
                    // Position circles 1, 3, 6 vertically on the left side
                    t2.to('#circle1', {
                        top: "240%",
                        left: "4%",
                        rotate: "180deg",
                        scale: 1.8,
                        duration: 1
                    }, 'circles');
                    
                    t2.to('#circle3', {
                        top: "270%",
                        left: "4%",
                        rotate: "180deg",
                        scale: 1,
                        duration: 1
                    }, 'circles');
                    
                    t2.to('#circle6', {
                        top: "300%",
                        left: "4%",
                        rotate: "180deg",
                        scale: 0.8,
                        duration: 1
                    }, 'circles');
            
                    // Position circle 4 in the middle
                    t2.to('#circle4', {
                        top: "270%",
                        left: "45%",
                        rotate: "180deg",
                        scale: 1.2,
                        duration: 1
                    }, 'circles');
            
                    // Position circles 2, 5, 7 vertically on the right side
                    t2.to('#circle2', {
                        top: "240%",
                        left: "90%",
                        rotate: "180deg",
                        scale: 0.8,
                        duration: 1
                    }, 'circles');
                    
                    t2.to('#circle5', {
                        top: "270%",
                        left: "90%",
                        rotate: "180deg",
                        scale: 0.8,
                        duration: 1
                    }, 'circles');
                    
                    t2.to('#circle7', {
                        top: "300%",
                        left: "90%",
                        rotate: "180deg",
                        scale: 0.8,
                        duration: 1
                    }, 'circles');
            
                    // third section animation
                    var t3 = gsap.timeline({scrollTrigger:{
                        trigger: ".fourth-section",
                        start: "0% 100%",
                        end: "50% 50%",
                        scrub: true
                    }})
            
                    t3.to('#circle1, #circle6', {
                        top: "340%",
                        left: "4%",
                        rotate: "180deg",
                        scale: 1.2,
                        duration: 1
                    }, 'circles3');
            
                    t3.to('#circle3, #circle4, #circle5', {
                        top: "340%",
                        left: "45%",
                        rotate: "180deg",
                        scale: 1.2,
                        duration: 1
                    }, 'circles3');
            
                    t3.to('#circle2, #circle7', {
                        top: "340%",
                        left: "90%",
                        rotate: "180deg",
                        scale: 1.2,
                        duration: 1
                    }, 'circles3');
            
                }
            })

        // Cleanup function
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          locoScroll.destroy();
      };
    }, []);

  return (
    <div ref={containerRef} className="smooth-scroll">
        <div className="hero-section slide slide1" id="slide1">
            <div className="container">
                <div className="hero-content">
                    <div className="circle" id="circle1">1</div>
                    <div className="circle" id="circle2">2</div>
                    <div className="circle" id="circle3">3</div>
                    <div className="circle" id="circle4">4</div>
                    <div className="circle" id="circle5">5</div>
                    <div className="circle" id="circle6">6</div>
                    <div className="circle" id="circle7">7</div>
                    <div className="main-container">
                        {/* <div className='w-[60%] h-full bg-red-600 flex items-center justify-center -ml-10'>
                            <DotLottieReact
                                src="https://lottie.host/b1e7a90d-f092-4c98-96ec-ba6ba48098d7/fzCleJXtNi.lottie"
                                // background="red"
                                speed="1"
                                style={{width: 1000, height: 600}}
                                loop
                                autoplay
                            />
                        </div>
                        <div className="w-[30%] h-full bg-green-600 flex flex-col items-start justify-items-center">
                                <h1 className="font-extrabold text-7xl">Design</h1>
                                <h1 className="font-extrabold text-7xl">Thinking</h1>
                                <h1 className="font-extrabold text-7xl">Accelarate</h1>
                                <div className="text-xl font-normal">
                                    We Revolutionize User Experience Using Behavioural Science.
                                </div>
                        </div> */}
                        <div className="left-container">
                            <div className=" -ml-60">
                                <DotLottieReact
                                    src="https://lottie.host/b1e7a90d-f092-4c98-96ec-ba6ba48098d7/fzCleJXtNi.lottie"
                                    // background="red"
                                    speed="1"
                                    style={{width: 800, height: 800}}
                                    loop
                                    autoplay
                                />
                            </div>
                            <div className="right-container -ml-10">
                                <h1 className="font-extrabold text-7xl">Design</h1>
                                <h1 className="font-extrabold text-7xl">Thinking</h1>
                                <h1 className="font-extrabold text-7xl">Accelarate</h1>
                                <div className="text-xl font-normal">
                                    We Revolutionize User Experience Using Behavioural Science.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clients absolute top-[92%] h-[10%] w-full">
                    <div className='h-full w-full flex items-center justify-center'>
                    <div className="marquee h-full w-full">
                        <div className="marquee-content h-full w-full">
                            <img src={axisbank} className='h-full w-auto' alt="Client Logo 1" />
                            <img src={nesco} className='h-full w-auto' alt="Client Logo 2" />
                            <img src={quest} className='h-full w-auto' alt="Client Logo 3" />
                            <img src={JP} className='h-full w-auto' alt="Client Logo 4" />
                            <img src={tata} className='h-full w-auto' alt="Client Logo 5" />
                            <img src={leela} className='h-full w-auto' alt="Client Logo 6" />
                            <img src={VI} className='h-full w-auto' alt="Client Logo 7" />
                            <img src={kimatsu} className='h-full w-auto' alt="Client Logo 8" />
                            <img src={bookmyshow} className='h-full w-auto' alt="Client Logo 9" />
                            <img src={witty} className='h-full w-auto' alt="Client Logo 10" />
                            <img src={symbiosis} className='h-full w-auto' alt="Client Logo 11" />
                            <img src={electrolab} className='h-full w-auto' alt="Client Logo 12" />
                            <img src={axisbank} className='h-full w-auto' alt="Client Logo 1" />
                            <img src={nesco} className='h-full w-auto' alt="Client Logo 2" />
                            <img src={quest} className='h-full w-auto' alt="Client Logo 3" />
                            <img src={JP} className='h-full w-auto' alt="Client Logo 4" />
                            <img src={tata} className='h-full w-auto' alt="Client Logo 5" />
                            <img src={leela} className='h-full w-auto' alt="Client Logo 6" />
                            <img src={VI} className='h-full w-auto' alt="Client Logo 7" />
                            <img src={kimatsu} className='h-full w-auto' alt="Client Logo 8" />
                            <img src={bookmyshow} className='h-full w-auto' alt="Client Logo 9" />
                            <img src={witty} className='h-full w-auto' alt="Client Logo 10" />
                            <img src={symbiosis} className='h-full w-auto' alt="Client Logo 11" />
                            <img src={electrolab} className='h-full w-auto' alt="Client Logo 12" />
                        </div>

                    </div>
                    <div className=' absolute top-0 left-0 h-full w-[40%] from-white to-transparent bg-gradient-to-r'>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="second-section slide slide2" id="slide2">
            <div className="second-container">
                {/* <div className="content-wrapper"> */}
                    <div className='blocck h-[30%] w-full  font-bold text-5xl mt-10'>
                        <h1
                            // initial={{ y: 20, opacity: 0 }}
                            // animate={{ y: 0, opacity: 1 }}
                            // transition={{ delay: 0.1 }}
                        >
                            We are a global creative agency that combines design expertise with technology and intelligence.
                        </h1>
                    </div>
                    <div className='structure h-[70%] w-full  flex flex-col items-center justify-center gap-5'>
                        <div className='relative  flex items-center justify-around gap-60'>
                            <div className='h-16 w-16 rounded-full  border-2 border-black shadow-lg shadow-black'></div>
                            <div className='h-16 w-16 rounded-full  border-2 border-black shadow-lg shadow-black'></div>
                        </div>
                        <div className='relative  flex items-center justify-around gap-40'>
                            <div className='h-24 w-24 rounded-full  border-2 border-black shadow-lg shadow-black'></div>
                            {/* <hr className='absolute left-1/2 border-2 border-black w-[40%]'></hr> */}
                            <div className='h-36 w-36 rounded-full  border-2 border-black shadow-lg shadow-black'></div>
                            {/* <hr className='absolute right-1/2 border-2 border-black w-[40%]'></hr> */}
                            <div className='h-24 w-24 rounded-full  border-2 border-black shadow-lg shadow-black'></div>
                        </div>
                        <div className='relative  flex items-center justify-around gap-60'>
                            <div className='h-16 w-16 rounded-full  border-2 border-black shadow-lg shadow-black'></div>
                            <div className='h-16 w-16 rounded-full  border-2 border-black shadow-lg shadow-black'></div>
                        </div>
                        <hr className='absolute left-1/3 translate-x-2 border-1 border-black w-[12%] rotate-90'></hr>
                        <hr className='absolute right-1/3 -translate-x-2 border-1 border-black w-[12%] rotate-90'></hr>
                        <hr className='absolute left-1/3 translate-x-5 border-1 border-black w-[11%] '></hr>
                        <hr className='absolute right-1/3 -translate-x-5 border-1 border-black w-[11%] '></hr>

                        {/* <div className='relative left-3/4  -translate-x-3/4 h-20 w-20 rounded-full bg-green-500'></div> */}
                    </div>
            </div>
        </div>

        <div className="third-section slide slide3" id="slide3">
            <div className="container">
                <div className="content-wrapper">
                   ,dnf,
                </div>
            </div>
        </div>
        <div className="fourth-section slide slide4" id="slide4">
            <div className="container">
                <div className="content-wrapper">
                    ds
                </div>
            </div>
        </div>
    </div>
  )
}

export default App