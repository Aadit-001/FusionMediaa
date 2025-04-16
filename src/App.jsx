import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './App.css';
import axisbank from './assets/clients/axisbank.png';
import nesco from './assets/clients/nesco.png';
import JP from './assets/clients/JP.png';
import leela from './assets/clients/leela.png';
import kimatsu from './assets/clients/kimatsu.png';
import witty from './assets/clients/witty.png';
import symbiosis from './assets/clients/symbiosis.png';
import electrolab from './assets/clients/electrolab.png';
// import animation from './assets/Animation.lottie';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useState } from 'react';
import tt from './assets/testimonial/tt.png';
import image from './assets/image.png';


gsap.registerPlugin(ScrollTrigger);


function App() {
    const [isAnimating, setIsAnimating] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger only once
        threshold: 0.1,
        onChange: (inView) => {
            setIsAnimating(inView);
        }
      });

      // Variants for the text reveal animation
    //   const textRevealVariants = {
    //     hidden: { opacity: 0, y: 20 },
    //     visible: { opacity: 1, y: 0 },
    //   };

  const containerRef = useRef(null);

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
                        trigger: ".second-section",
                        start: "30% 100%",
                        end: "50% 50%",
                        scrub: true,
                        // visibility: "visible",
                        // markers: true
                    }})
            
                    // Animate all circles together
                    // const circles = ['#circle1', '#circle2', '#circle3', '#circle4', '#circle5', '#circle6', '#circle7'];
                    
                    // Position circles 1, 3, 6 vertically on the left side
                    tl.to('#circle1', {
                        top: "230%",
                        left: "35%",
                        rotate: "180deg",
                        // scale: 2,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#FF9999"
                    }, 'circles');
                    
                    tl.to('#circle3', {
                        top: "210%",
                        left: "25%",
                        rotate: "180deg",
                        scale: 1.5,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#D4A5A5"
                    }, 'circles');
                    
                    tl.to('#circle6', {
                        top: "188%",
                        left: "35%",
                        rotate: "180deg",
                        // scale: 0.8,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#FFEEAD"
                    }, 'circles');
            
                    // Position circle 4 in the middle
                    tl.to('#circle4', {
                        top: "207%",
                        left: "47%",
                        rotate: "180deg",
                        scale: 1.4,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#9DE0AD"
                    }, 'circles');
            
                    // Position circles 2, 5, 7 vertically on the right side
                    tl.to('#circle2', {
                        top: "230%",
                        left: "60%",
                        rotate: "180deg",
                        // scale: 2,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#FFEEAD"
                    }, 'circles');
                    
                    tl.to('#circle5', {
                        top: "210%",
                        left: "70%",
                        rotate: "180deg",
                        scale: 1.5,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#45B7D1"
                    }, 'circles');
                    
                    tl.to('#circle7', {
                        top: "188%",
                        left: "60%",
                        rotate: "180deg",
                        // scale: 0.7,
                        duration: 2,
                        visibility: "visible",
                        opacity: 1,
                        background: "#FF9999"
                        // transition: "all 2s",
                    }, 'circles');
            
                    // second section animation
                    var t2 = gsap.timeline({scrollTrigger:{
                        trigger: ".third-section",
                        start: "20% 100%",
                        end: "50% 50%",
                        scrub: true
                    }})
            
                    const circless = ['#circle1', '#circle2', '#circle3', '#circle4', '#circle5', '#circle6', '#circle7'];
                    
                    // Position circles 1, 3, 6 vertically on the left side
                    t2.to('#circle1', {
                        top: "283%",
                        left: "21%",
                        rotate: "180deg",
                        scale: 1,
                        duration: 1
                    }, 'circles');
                    
                    t2.to('#circle3', {
                        top: "327%",
                        left: "18%",
                        rotate: "180deg",
                        scale: 1,
                        duration: 1
                    }, 'circles');
                    
                    t2.to('#circle6', {
                        top: "350%",
                        left: "29%",
                        rotate: "180deg",
                        scale: 1,
                        duration: 1
                    }, 'circles');
            
                    // Position circle 4 in the middle
                    t2.to('#circle4', {
                        top: "303%",
                        left: "29%",
                        rotate: "180deg",
                        scale: 0.8,
                        duration: 1
                    }, 'circles');
            
                    // Position circles 2, 5, 7 vertically on the right side
                    t2.to('#circle2', {
                        top: "283%",
                        left: "52%",
                        rotate: "180deg",
                        scale: 1,
                        duration: 1
                    }, 'circles');
                    
                    t2.to('#circle5', {
                        top: "327%",
                        left: "51%",
                        rotate: "180deg",
                        scale: 1,
                        duration: 1
                    }, 'circles');
                    
                    t2.to('#circle7', {
                        top: "350%",
                        left: "55%",
                        rotate: "180deg",
                        scale: 1,
                        duration: 1
                    }, 'circles');

                    // third section animation
                    var t3 = gsap.timeline({scrollTrigger:{
                        trigger: ".sticky-1",
                        start: "10% 100%",
                        end: "50% 50%",
                        scrub: true
                    }})
            
                    t3.to('#circle1,#circle2,#circle3,#circle6,#circle5,#circle7', {
                        top: "404%",
                        left: "3%",
                        rotate: "180deg",
                        scale: 1,
                        duration: 2,
                        ease: "power3.out",
                        opacity: 0,
                        // display: "hidden",
                    }, 'circles');


                    t3.to('#circle4', {
                        top: "402%",
                        left: "2%",
                        rotate: "180deg",
                        scale: 0.8,
                        duration: 2,
                        ease: "power3.out",
                        opacity: 0,

                        // display: "hidden",
                    }, 'circles');
                    

                    var t4 = gsap.timeline({scrollTrigger:{
                        trigger: ".sticky-1",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }})


                    t4.to('#circle4', {
                        top: "550%",
                        left: "49%",
                        rotate: "180deg",
                        // scale: 0.8,
                        duration: 20,
                        opacity: 0,
                        // ease: "power3.out",
                        // display: "hidden",
                        // visibility: "hidden",
                        // opacity: 0,
                        
                    }, 'circles');
                    

                    t4.to('#circle1', {
                        top: "550%",
                        left: "10%",
                        rotate: "180deg",
                        // scale: 0.8,
                        duration: 20,
                        opacity: 0,
                        // visibility: "hidden",
                        // ease: "power3.out",
                        // display: "hidden",
                    }, 'circles');


                    t4.to('#circle2', {
                        top: "550%",
                        left: "25%",
                        rotate: "180deg",
                        // scale: 0.8,
                        duration: 20,
                        opacity: 0,
                        // visibility: "hidden",
                        // ease: "power3.out",
                        // display: "hidden",
                    }, 'circles');

                    t4.to('#circle3', {
                        top: "550%",
                        left: "35%",
                        rotate: "180deg",
                        // scale: 0.8,
                        duration: 20,
                        opacity: 0,
                        // visibility: "hidden",
                        // ease: "power3.out",
                        // display: "hidden",
                    }, 'circles');

                    t4.to('#circle5', {
                        top: "550%",
                        left: "65%",
                        rotate: "180deg",
                        // scale: 0.8,
                        duration: 20,
                        opacity: 0,
                        // visibility: "hidden",
                        // ease: "power3.out",
                        // display: "hidden",
                    }, 'circles');

                    t4.to('#circle6', {
                        top: "550%",
                        left: "80%",
                        rotate: "180deg",
                        // scale: 0.8,
                        duration: 20,
                        opacity: 0,
                        // visibility: "hidden",
                        // ease: "power3.out",
                        // display: "hidden",
                    }, 'circles');

                    t4.to('#circle7', {
                        top: "550%",
                        left: "96%",
                        rotate: "180deg",
                        // scale: 0.8,
                        duration: 20,
                        opacity: 0,
                        // visibility: "hidden",
                        // ease: "power3.out",
                        // display: "hidden",
                    }, 'circles');



                    var t5 = gsap.timeline({scrollTrigger:{
                        trigger: ".sticky-2",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }})

                    t5.to('#circle1 , #circle2 , #circle3 , #circle4 , #circle5 , #circle6 , #circle7', {
                        top: "650%",
                        left: "10%",
                        rotate: "180deg",
                        // scale: 0.8,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        // opacity: 1,
                    }, 'circles');


                    var t6 = gsap.timeline({scrollTrigger:{
                        trigger: ".sticky-3",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }})

                    t6.to('#circle1 , #circle2 , #circle3 , #circle4 , #circle5 , #circle6 , #circle7', {
                        top: "750%",
                        left: "10%",
                        rotate: "180deg",
                        // scale: 0.8,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        // opacity: 1,
                    }, 'circles');


                    var t7 = gsap.timeline({scrollTrigger:{
                        trigger: ".sticky-4",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }})

                    t7.to('#circle1 , #circle2 , #circle3 , #circle4 , #circle5 , #circle6 , #circle7', {
                        top: "850%",
                        left: "10%",
                        rotate: "180deg",
                        // scale: 0.8,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        // opacity: 1,
                    }, 'circles');


                    var t8 = gsap.timeline({scrollTrigger:{
                        trigger: ".sticky-5",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }})

                    t8.to('#circle1 , #circle2 , #circle3 , #circle4 , #circle5 , #circle6 , #circle7', {
                        top: "950%",
                        left: "10%",
                        rotate: "180deg",
                        // scale: 0.8,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        // opacity: 1,
                    }, 'circles');

                    var t9 = gsap.timeline({scrollTrigger:{
                        trigger: ".sticky-6",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }})

                    t9.to('#circle1 , #circle2 , #circle3 , #circle4 , #circle5 , #circle6 , #circle7', {
                        top: "1050%",
                        left: "10%",
                        rotate: "180deg",
                        // scale: 0.8,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        // opacity: 1,
                    }, 'circles');


                    var t10 = gsap.timeline({scrollTrigger:{
                        trigger: ".sticky-7",
                        start: "90% 100%",
                        end: "100% 50%",
                        // duration: 10,
                        scrub: true
                    }})

                    t10.to('#circle1', {
                        top: "1320%",
                        left: "5%",
                        rotate: "180deg",
                        // scale: 0.8,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        opacity: 1,
                        zIndex: 100,
                    }, 'circles');

                    t10.to('#circle2', {
                        top: "1320%",
                        left: "100%",
                        rotate: "180deg",
                        // scale: 0.8,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 1,
                    }, 'circles');

                    t10.to('#circle3', {
                        top: "1320%",
                        left: "35%",
                        rotate: "180deg",
                        scale: 1,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 1,
                    }, 'circles');

                    t10.to('#circle4', {
                        top: "1320%",
                        left: "46.6%",
                        rotate: "180deg",
                        scale: 1.8,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 0,
                    }, 'circles');

                    t10.to('#circle5', {
                        top: "1320%",
                        left: "68%",
                        rotate: "180deg",
                        scale: 1,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 1,
                    }, 'circles');

                    t10.to('#circle6', {
                        top: "1320%",
                        left: "48%",
                        rotate: "180deg",
                        scale: 1.6,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 0,
                    }, 'circles');

                    t10.to('#circle7', {
                        top: "1320%",
                        left: "48%",
                        rotate: "180deg",
                        scale: 1.4,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 0,
                    }, 'circles');


                    


                    //11
                    var t11 = gsap.timeline({scrollTrigger:{
                        trigger: ".fifth-section",
                        start: "10% 90%",
                        end: "40% 50%",
                        // duration: "10",
                        ease: "power3.out",
                        scrub: true
                    }})

                    t11.to('#circle1', {
                        top: "1504%",
                        left: "6%",
                        rotate: "180deg",
                        scale: 0.4,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        opacity: 1,
                        zIndex: 100,
                    }, 'circles');

                    t11.to('#circle2', {
                        top: "1504%",
                        left: "15%",
                        rotate: "180deg",
                        scale: 0.4,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 1,
                    }, 'circles');

                    t11.to('#circle3', {
                        top: "1504%",
                        left: "9%",
                        rotate: "180deg",
                        scale: 0.4,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 1,
                    }, 'circles');

                    t11.to('#circle4', {
                        top: "1504%",
                        left: "31%",
                        rotate: "180deg",
                        scale: 0.4,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 0,
                    }, 'circles');

                    t11.to('#circle5', {
                        top: "1504%",
                        left: "12%",
                        rotate: "180deg",
                        scale: 0.4,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 1,
                    }, 'circles');

                    t11.to('#circle6', {
                        top: "1504%",
                        left: "40%",
                        rotate: "180deg",
                        scale: 0.4,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 0,
                    }, 'circles');

                    t11.to('#circle7', {
                        top: "1504%",
                        left: "55%",
                        rotate: "180deg",
                        scale: 0.4,
                        // duration: 2,
                        // ease: "power3.out",
                        // display: "hidden",
                        zIndex: 100,
                        opacity: 0,
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
            gsap.to("#box2", {
                scale: 20,
                transformOrigin: "50% 50%",
                background: "#2f2f3f",
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".fourth-section",
                    start: "10% 80%",
                    onEnter: () => gsap.to("#box2", { scale: 20, duration: 1.3, ease: "expo.inOut" }),
                    onLeaveBack: () => gsap.to("#box2", { scale: 1, duration: 1.3, ease: "expo.inOut" }),
                    onLeave: () => gsap.to("#box2", { scale: 1, duration: 1.3, ease: "expo.inOut" }),
                    onEnterBack: () => gsap.to("#box2", { scale: 20, duration: 1.3, ease: "expo.inOut" })
                }
            });
            gsap.to("#box3", {
                scale: 20,
                transformOrigin: "50% 50%",
                background: "#222",
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".fourth-section",
                    start: "10% 80%",
                    onEnter: () => gsap.to("#box3", { scale: 20, duration: 1.3, ease: "expo.inOut" }),
                    onLeaveBack: () => gsap.to("#box3", { scale: 1, duration: 1.3, ease: "expo.inOut" }),
                    onLeave: () => gsap.to("#box3", { scale: 1, duration: 1.3, ease: "expo.inOut" }),
                    onEnterBack: () => gsap.to("#box3", { scale: 20, duration: 1.3, ease: "expo.inOut" })
                }
            });
            gsap.to("#box4", {
                scale: 20,
                transformOrigin: "50% 50%",
                background: "#222",
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".fourth-section",
                    start: "10% 80%",
                    onEnter: () => gsap.to("#box4", { scale: 20, duration: 1.3, ease: "expo.inOut" }),
                    onLeaveBack: () => gsap.to("#box4", { scale: 1, duration: 1.3, ease: "expo.inOut" }),
                    onLeave: () => gsap.to("#box4", { scale: 1, duration: 1.3, ease: "expo.inOut" }),
                    onEnterBack: () => gsap.to("#box4", { scale: 20, duration: 1.3, ease: "expo.inOut" })
                }
            });

        // Cleanup function
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          locoScroll.destroy();
      };
    }, []);

  return (
    <div ref={containerRef} className="smooth-scroll">
      <div className="app-max-container">
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
                    <div className="clients absolute top-[100%] h-[10%] w-full">
                    <div className='h-full w-full flex items-center justify-center'>
                    <div className="marquee h-full w-full">
                        <div className="marquee-content h-full w-full">
                            <img src={axisbank} className='h-full w-auto' alt="Client Logo 1" />
                            <img src={nesco} className='h-full w-auto' alt="Client Logo 2" />
                            <img src={JP} className='h-full w-auto' alt="Client Logo 3" />
                            <img src={leela} className='h-full w-auto' alt="Client Logo 4" />
                            <img src={kimatsu} className='h-full w-auto' alt="Client Logo 5" />
                            <img src={witty} className='h-full w-auto' alt="Client Logo 6" />
                            <img src={symbiosis} className='h-full w-auto' alt="Client Logo 7" />
                            <img src={electrolab} className='h-full w-auto' alt="Client Logo 8" />
                            <img src={axisbank} className='h-full w-auto' alt="Client Logo 1" />
                            <img src={nesco} className='h-full w-auto' alt="Client Logo 2" />
                            <img src={JP} className='h-full w-auto' alt="Client Logo 3" />
                            <img src={leela} className='h-full w-auto' alt="Client Logo 4" />
                            <img src={kimatsu} className='h-full w-auto' alt="Client Logo 5" />
                            <img src={witty} className='h-full w-auto' alt="Client Logo 6" />
                            <img src={symbiosis} className='h-full w-auto' alt="Client Logo 7" />
                            <img src={electrolab} className='h-full w-auto' alt="Client Logo 8" />
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
            <div className="second-container flex flex-col items-center justify-center min-h-screen px-8">
                    <div className='text-center max-w-4xl mx-auto mb-16'>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl font-bold tracking-tight leading-[1.2] font-montserrat text-gray-900f"
                        >
                            Crafting Digital Excellence Through Creative Innovation
                        </motion.h1>
                    </div>
                    <div className='structure max-w-6xl w-full flex items-center justify-center'>
                        <motion.img 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            src={image} 
                            alt="Our Process" 
                            className='h-auto w-full object-contain p-8' 
                        />
                        </div>
                            </div>
        </div>

        <div className="third-section slide slide3" id="slide3">
            <div className="container">
                <div className="content-wrapper">
                   <div className='h-[100%] w-[100%] flex flex-col justify-center items-center gap-12'>
                        <div className='relative  flex items-center justify-around '>
                            <div className='h-20 w-96 flex items-center  '>
                                <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin'></div>
                                <span className='text-3xl font-bold ml-4'>Content marketing</span>
                            </div>
                            <div className='h-20 w-88 flex items-center   '>
                                <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                <span className='text-3xl font-bold ml-4'>Public Reactions</span>

                            </div>
                        </div>
                        <div className='relative  flex items-center justify-center'>
                            <div className='h-20 w-128  flex items-center '>
                            <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                            <span className='text-3xl font-bold ml-4'>Social media marketing</span>
                            </div>
                        </div>
                        <div className='relative  flex items-center justify-around '>
                            <div className='h-20 w-100 flex items-center  '>
                                <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                <span className='text-3xl font-bold ml-4'>Website services</span>
                            </div>
                            <div className='h-20 w-100 flex items-center  '>
                                <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                <span className='text-3xl font-bold ml-4'>Event marketing</span>
                            </div>
                        </div>
                        <div className='relative  flex items-center justify-around  '>
                            <div className='h-20 w-80 flex items-center ml-28  '>
                                <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                <span className='text-3xl font-bold ml-4'>Branding</span>
                            </div>
                            <div className='h-20 w-80 flex items-center  '>
                                <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                <span className='text-3xl font-bold ml-4'>OOH</span>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>

        <div className="sticky-sections slide flex flex-col" id='slide5'>
            <div className="sticky-section1 bg-white h-screen w-full sticky-1 flex">
                <div className='left'>
                    <div className='h-20 w-128 flex items-center mt-20 '>
                        <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                            <div className='h-[80%] w-[80%] bg-red-600 rounded-full'></div>
                        </div>
                        <span className='text-4xl font-bold ml-4'>Content marketing</span>
                    </div>
                    <div className='relative flex items-center justify-around pl-8 mt-4'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: -40 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-1"
                        >
                            <span className='text-2xl'>• Story Telling Campaigns</span>
                            <span className='text-2xl'>• Copywriting</span>
                            <span className='text-2xl'>• Blog Writing</span>
                            <span className='text-2xl'>• Press Release</span>
                            <span className='text-2xl'>• Content Calendar</span>
                            <span className='text-2xl'>• SEO Friendly Content</span>
                            <span className='text-2xl'>• White Paper</span>
                            <span className='text-2xl'>• Info Graphics</span>
                            <span className='text-2xl'>• Podcast Scripting</span>
                            <span className='text-2xl'>• Industry Reports</span>
                            <span className='text-2xl'>• Product Descriptions</span>
                            <span className='text-2xl'>• Video Marketing</span>
                        </motion.div>
                    </div>
                </div>
                <div className='h-[50%] absolute top-1/4 left-1/2'>  
                        <DotLottieReact
                            src="https://lottie.host/c6e99e67-7324-46f4-9a2e-dbaba62b094c/nOitsKhSH4.lottie"
                            loop
                            autoplay
                        />        
                    </div>
            </div>
            <div className="sticky-section bg-white h-screen sticky-2 flex">
            <div className='left'>
                    <div className='h-20 w-96 bg-white flex items-center mt-20 '>
                        <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                            <div className='h-[80%] w-[80%] bg-blue-600 rounded-full'></div>
                        </div>
                        <span className='text-4xl font-bold ml-4'>Public Relations</span>
                    </div>
                    <div className='relative flex items-center justify-around pl-8 mt-4'>
                    <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 20 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-1"
                        >
                            <span className='text-2xl'>• Media Relation</span>
                            <span className='text-2xl'>• Event PR</span>
                            <span className='text-2xl'>• Crisis Management</span>
                            <span className='text-2xl'>• Reputation Management</span>
                            <span className='text-2xl'>• Influencer Collaboration</span>
                        </motion.div>
                    </div>
            </div>
            </div>
            <div className="sticky-section bg-white h-screen w-full sticky-3 flex">
                <div className='left'>
                    <div className='h-20 w-128 flex items-center mt-20 '>
                        <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                            <div className='h-[80%] w-[80%] bg-green-600 rounded-full'></div>
                        </div>
                        <span className='text-4xl font-bold ml-4'>Social Media Marketing</span>
                    </div>
                    <div className='relative flex items-start justify-start pl-8 mt-4 ml-24'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: -50 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-1"
                        >
                            <span className='text-2xl'>• Instagram Marketing</span>
                            <span className='text-2xl'>• Facebook Marketing</span>
                            <span className='text-2xl'>• Youtube Marketing</span>
                            <span className='text-2xl'>• Engagement Posting Campaign</span>
                            <span className='text-2xl'>• Stories & Reels Creation</span>
                            <span className='text-2xl'>• Strategy</span>
                            <span className='text-2xl'>• Influencer Discovry</span>
                            <span className='text-2xl'>• Partnership</span>
                            <span className='text-2xl'>• Sponsered Post</span>
                            <span className='text-2xl'>• Influencer Events</span>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="sticky-section bg-white h-screen w-full sticky-4 flex">
                <div className='left'>
                    <div className='h-20 w-96 flex items-center mt-20 '>
                        <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                            <div className='h-[80%] w-[80%] bg-yellow-600 rounded-full'></div>
                        </div>
                        <span className='text-4xl font-bold ml-4'>Website Services</span>
                    </div>
                    <div className='relative flex items-start justify-start pl-8 mt-4 ml-12'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-1"
                        >
                            <span className='text-2xl'>• Website Design</span>
                            <span className='text-2xl'>• Website Development</span>
                            <span className='text-2xl'>• Website Audits</span>
                            <span className='text-2xl'>• A/B Testing</span>
                            <span className='text-2xl'>• UI/UX Optimization</span>
                            <span className='text-2xl'>• Speed Optimization</span>
                            <span className='text-2xl'>• Website Maintenance</span>
                            <span className='text-2xl'>• Interactive Design Features</span>
                            <span className='text-2xl'>• CMS Management</span>
                            <span className='text-2xl'>• Mobile-First Design</span>
                            <span className='text-2xl'>• Customer-Web Tools</span>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="sticky-section bg-white h-screen w-full sticky-5 flex">
                <div className='left'>
                    <div className='h-20 w-96 flex items-center mt-20 '>
                        <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                            <div className='h-[80%] w-[80%] bg-orange-600 rounded-full'></div>
                        </div>
                        <span className='text-4xl font-bold ml-4'>Event Marketing</span>
                    </div>
                    <div className='relative flex items-center justify-around pl-8 mt-4'>
                    <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-1"
                        >
                            <span className='text-2xl'>• Event Planning</span>
                            <span className='text-2xl'>• Brand Activation</span>
                            <span className='text-2xl'>• Pop-up Shops</span>
                            <span className='text-2xl'>• Webinar Marketing</span>
                            <span className='text-2xl'>• Trade Show Support</span>
                            <span className='text-2xl'>• Product Launches</span>
                            <span className='text-2xl'>• Sponsership Promotions</span>
                            <span className='text-2xl'>• Virtual Event Productions</span>
                            <span className='text-2xl'>• Event Branding</span>
                            <span className='text-2xl'>• Post-Event Reports</span>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="sticky-section bg-white h-screen w-full sticky-6 flex">
                <div className='left'>
                    <div className='h-20 w-96 flex items-center mt-20 '>
                        <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                            <div className='h-[80%] w-[80%] bg-pink-600 rounded-full'></div>
                        </div>
                        <span className='text-4xl font-bold ml-4'>Branding</span>
                    </div>
                    <div className='relative flex items-center justify-around pl-8 mt-4'>
                    <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-1"
                        >
                            <span className='text-2xl'>• Logo Creation</span>
                            <span className='text-2xl'>• Brand Identity</span>
                            <span className='text-2xl'>• Product Branding</span>
                            <span className='text-2xl'>• Rebranding Strategy</span>
                            <span className='text-2xl'>• Social Media Graphics</span>
                            <span className='text-2xl'>• Poster and Flyer Design</span>
                            <span className='text-2xl'>• Banner Ads</span>
                            <span className='text-2xl'>• 3D Design</span>
                            <span className='text-2xl'>• Animated Graphics</span>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="sticky-section bg-white  h-screen w-full sticky-7 flex">
                <div className='left'>
                    <div className='h-20 w-96 flex items-center mt-20 '>
                        <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                            <div className='h-[80%] w-[80%] bg-purple-600 rounded-full'></div>
                        </div>
                        <span className='text-4xl font-bold ml-4'>OOH</span>
                    </div>
                    <div className='relative flex items-center justify-around pl-8 mt-4'>
                    <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-1"
                        >
                            <span className='text-2xl'>• Billboard Advertising</span>
                            <span className='text-2xl'>• Transit Advertising</span>
                            <span className='text-2xl'>• Street Furniture</span>
                            <span className='text-2xl'>• Digital Billboards</span>
                            <span className='text-2xl'>• Mall Media</span>
                            <span className='text-2xl'>• Airport Advertising</span>
                            <span className='text-2xl'>• Metro Station Ads</span>
                            <span className='text-2xl'>• Bus Shelter Ads</span>
                            <span className='text-2xl'>• Retail OOH</span>
                            <span className='text-2xl'>• Interactive Displays</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>

        <div className="fourth-section slide slide4  flex items-center justify-center" id="slide4">
            {/* <div className="containerr"> */}
                <div className="cardd overflow-hidden  absolute ">
                    {/* <div className="facee face11 overflow-hidden"> */}
                        {/* <div className="contentt flex items-center overflow-hidden"> */}
                            <div className='h-10 w-10 rounded-full bg-black' id='box1'></div>
                        {/* </div> */}
                    {/* </div> */}
                </div>
                <div className="cardd overflow-hidden  absolute ">
                    {/* <div className="facee face11 overflow-hidden"> */}
                        {/* <div className="contentt flex items-center overflow-hidden"> */}
                            <div className='h-10 w-10 rounded-full bg-black' id='box2'></div>
                        {/* </div> */}
                    {/* </div> */}
            </div>
                <div className="cardd overflow-hidden  absolute ">
                    {/* <div className="facee face11 overflow-hidden"> */}
                        {/* <div className="contentt flex items-center overflow-hidden"> */}
                            <div className='h-10 w-10 rounded-full bg-black' id='box3'></div>
                        {/* </div> */}
                    {/* </div> */}
            </div>
                <div className="cardd overflow-hidden  absolute ">
                    {/* <div className="facee face11 overflow-hidden"> */}
                        {/* <div className="contentt flex items-center overflow-hidden"> */}
                            <div className='h-10 w-10 rounded-full bg-black' id='box4'></div>
                        {/* </div> */}
                    {/* </div> */}
                </div>
            {/* </div> */}
        </div>

        <div className="fifth-section slide slide5  flex items-center justify-center"  id="slide5" >
            <div className="container">
                <div className="hero-content">
                <div className="text-center mb-50">
                    
                    {/* <h2 className="text-[#FF3366] text-2xl font-medium mt-[20px]" style={{ fontFamily: 'Lobster, cursive' }}>TESTIMONIALS</h2>     */}
                </div>
                    <section className="bg-white fifth-inside">
                            <div className="container mx-auto px-4">
                              <div className="max-w-6xl mx-auto">
                                {/* Quote Card */}
                                <motion.div
                                  initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.2 }}
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
            </div>
        </div>

        
        <div className="testimonial1-section max-w-[1150px]  font-bold" style={{ fontFamily: 'Lobster, cursive' }} ref={ref}>
            <h3 className="text-4xl md:text-5xl  font-bold" style={{ fontFamily: 'Lobster, cursive' }}>
                Happy clients with <span className="gradient-text">{inView && <CountUp end={100} duration={3} />}+</span><br />
                successful Projects
            </h3>
        </div>
        <div className="testimonial-section">
            <h2 className="testimonial-title">What Clients Say</h2>
            <div className="testimonial-content">
                <div className="testimonial-client">
                    <img
                        src={leela}
                        alt="Yevgen Sokolnikov"
                        className="client-img"
                    />
                    <div className="client-info flex flex-col gap-2">
                        <span className="client-name text-xl">Yevgen Sokolnikov</span>
                        <span className="client-role">C.E.O. - boodmo.com</span>
                    </div>
                </div>
            <div className="testimonial-main">
            <div className="testimonial-stars">
                <span className="quote-mark">“</span>
                    {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                    ))}
                </div>
                <p className="testimonial-text">
                Thanks to Fusion Media's work, the website's long checkout time has been cut down to one minute helping the client increase its business.
                </p>
            <div className="testimonial-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
        
    </div>
    </div>
  )
}

export default App