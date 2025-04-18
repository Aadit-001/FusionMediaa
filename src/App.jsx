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
import horeca from './assets/clients/horeca.jpg';
import healthyMeal from './assets/clients/healthyMeal.jpg';
import mountainWood from './assets/clients/mountainWood.png';
import fusionEvent from './assets/clients/fusionEvent.png';


gsap.registerPlugin(ScrollTrigger);


function App() {

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
            "(min-width: 460px)": function () {
                // first section
                var tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".second-section",
                        start: "50% 100%",
                        end: "100% 100%",
                        scrub: true,
                        // visibility: "visible",
                        // markers: true
                        // scroll: true
                    }
                })

                // Animate all circles together
                // const circles = ['#circle1', '#circle2', '#circle3', '#circle4', '#circle5', '#circle6', '#circle7'];

                // Position circles 1, 3, 6 vertically on the left side
                tl.to('#circle1', {
                    top: "160%",
                    left: "35%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FF9999"
                }, 'circles');

                tl.to('#circle3', {
                    top: "146%",
                    left: "28%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#D4A5A5"
                }, 'circles');

                tl.to('#circle6', {
                    top: "131%",
                    left: "35%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFEEAD"
                }, 'circles');

                // Position circle 4 in the middle
                tl.to('#circle4', {
                    top: "144%",
                    left: "47%",
                    rotate: "180deg",
                    scale: 1.2,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#9DE0AD"
                }, 'circles');

                // Position circles 2, 5, 7 vertically on the right side
                tl.to('#circle2', {
                    top: "131%",
                    left: "60%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFEEAD"
                }, 'circles');

                tl.to('#circle5', {
                    top: "146%",
                    left: "68%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#45B7D1"
                }, 'circles');

                tl.to('#circle7', {
                    top: "160%",
                    left: "60%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FF9999"
                    // transition: "all 2s",
                }, 'circles');

                // second section animation
                // var t2 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".sticky-section",
                //         start: "0% 100%",
                //         end: "0% 100%",
                //         scrub: true
                //     }
                // })

                // t2.to('#circle1', {
                //     top: "220%",
                //     left: "12%",
                //     rotate: "180deg",
                //     scale: 1,
                //     duration: 1
                // }, 'circles');

                // t2.to('#circle3', {
                //     top: "327%",
                //     left: "18%",
                //     rotate: "180deg",
                //     scale: 1,
                //     duration: 1
                // }, 'circles');

                // t2.to('#circle6', {
                //     top: "350%",
                //     left: "29%",
                //     rotate: "180deg",
                //     scale: 1,
                //     duration: 1
                // }, 'circles');

                // // Position circle 4 in the middle
                // t2.to('#circle4', {
                //     top: "303%",
                //     left: "29%",
                //     rotate: "180deg",
                //     scale: 0.8,
                //     duration: 1
                // }, 'circles');

                // // Position circles 2, 5, 7 vertically on the right side
                // t2.to('#circle2', {
                //     top: "283%",
                //     left: "52%",
                //     rotate: "180deg",
                //     scale: 1,
                //     duration: 1
                // }, 'circles');

                // t2.to('#circle5', {
                //     top: "327%",
                //     left: "51%",
                //     rotate: "180deg",
                //     scale: 1,
                //     duration: 1
                // }, 'circles');

                // t2.to('#circle7', {
                //     top: "350%",
                //     left: "55%",
                //     rotate: "180deg",
                //     scale: 1,
                //     duration: 1
                // }, 'circles');

                // third section animation
                var t3 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".sticky-1",
                        start: "10% 100%",
                        end: "50% 50%",
                        scrub: true
                    }
                })

                t3.to('#circle1,#circle2,#circle3,#circle6,#circle5,#circle7', {
                    top: "214%",
                    left: "3%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    ease: "power3.out",
                    opacity: 0,
                    // display: "hidden",
                }, 'circles');


                t3.to('#circle4', {
                    top: "212%",
                    left: "2%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    ease: "power3.out",
                    opacity: 0,

                    // display: "hidden",
                }, 'circles');


                var t4 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".sticky-1",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }
                })


                t4.to('#circle4', {
                    top: "312%",
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
                    top: "312%",
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
                    top: "312%",
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
                    top: "312%",
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
                    top: "312%",
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
                    top: "312%",
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
                    top: "312%",
                    left: "96%",
                    rotate: "180deg",
                    // scale: 0.8,
                    duration: 20,
                    opacity: 0,
                    // visibility: "hidden",
                    // ease: "power3.out",
                    // display: "hidden",
                }, 'circles');



                var t5 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".sticky-2",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }
                })

                t5.to('#circle1 , #circle2 , #circle3 , #circle4 , #circle5 , #circle6 , #circle7', {
                    top: "412%",
                    left: "10%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    // opacity: 1,
                }, 'circles');


                var t6 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".sticky-3",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }
                })

                t6.to('#circle1 , #circle2 , #circle3 , #circle4 , #circle5 , #circle6 , #circle7', {
                    top: "512%",
                    left: "10%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    // opacity: 1,
                }, 'circles');


                var t7 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".sticky-4",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }
                })

                t7.to('#circle1 , #circle2 , #circle3 , #circle4 , #circle5 , #circle6 , #circle7', {
                    top: "612%",
                    left: "10%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    // opacity: 1,
                }, 'circles');


                var t8 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".sticky-5",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }
                })

                t8.to('#circle1 , #circle2 , #circle3 , #circle4 , #circle5 , #circle6 , #circle7', {
                    top: "712%",
                    left: "10%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    // opacity: 1,
                }, 'circles');

                var t9 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".sticky-6",
                        start: "90% 100%",
                        end: "100% 50%",
                        scrub: true
                    }
                })

                t9.to('#circle1 , #circle2 , #circle3 , #circle4 , #circle5 , #circle6 , #circle7', {
                    top: "812%",
                    left: "10%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    // opacity: 1,
                }, 'circles');


                var t10 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".sticky-7",
                        start: "90% 100%",
                        end: "100% 50%",
                        // duration: 10,
                        scrub: true
                    }
                })

                t10.to('#circle1', {
                    top: "912%",
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
                    top: "912%",
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
                    top: "912%",
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
                    top: "912%",
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
                    top: "912%",
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
                    top: "912%",
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
                    top: "912%",
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
                var t11 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".fifth-section",
                        start: "0% 100%",
                        end: "100% 30%",
                        // duration: "10",
                        ease: "power3.out",
                        scrub: true
                    }
                })

                t11.to('#circle1', {
                    top: "1100%",
                    left: "5%",
                    rotate: "180deg",
                    // scale: 2,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    opacity: 1,
                    zIndex: 1,
                    // backgroundColor: "",
                }, 'circles');

                t11.to('#circle2', {
                    top: "1100%",
                    left: "15%",
                    rotate: "180deg",
                    // scale: 2,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t11.to('#circle6', {
                    top: "1100%",
                    left: "25%",
                    rotate: "180deg",
                    // scale: 2,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t11.to('#circle4', {
                    top: "1100%",
                    left: "47%",
                    rotate: "180deg",
                    scale: 2,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t11.to('#circle7', {
                    top: "1100%",
                    left: "70%",
                    rotate: "180deg",
                    scale: 1.7,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t11.to('#circle3', {
                    top: "1100%",
                    left: "80%",
                    rotate: "180deg",
                    // scale: 2,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t11.to('#circle5', {
                    top: "1100%",
                    left: "90%",
                    rotate: "180deg",
                    // scale: 2,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
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
                            <div className="main-container max-h-[80%] flex flex-col md:flex-row w-full gap-4">
                                <div className="left-container w-full md:w-1/2 flex justify-center items-center">
                                    <DotLottieReact
                                        src="https://lottie.host/b1e7a90d-f092-4c98-96ec-ba6ba48098d7/fzCleJXtNi.lottie"
                                        // background="red"
                                        speed="1"
                                        className='bg-amber-500 md:h-[400px] md:w-[640px]'
                                        // style={{ width: "1240px", height: "900px" }}
                                        loop
                                        autoplay
                                    />
                                </div>
                                <div className="right-container w-full md:w-1/2 flex flex-col justify-center items-center md:items-start -mt-20 md:mt-0">
                                    <h1 className="font-extrabold text-6xl  md:text-6xl lg:text-7xl">Design</h1>
                                    <h1 className="font-extrabold text-6xl md:text-6xl lg:text-7xl">Thinking</h1>
                                    <h1 className="font-extrabold text-6xl md:text-6xl lg:text-7xl bg-gray-500">Accelarate</h1>
                                    <div className="text-sm md:text-base lg:text-2xl font-normal pl-10 pr-10 md:pl-0 md:pr-0">
                                        We Revolutionize User Experience Using Behavioural Science.
                                    </div>
                                </div>
                            </div>
                            {/* <DotLottieReact
                                        src="https://lottie.host/b1e7a90d-f092-4c98-96ec-ba6ba48098d7/fzCleJXtNi.lottie"
                                        // background="red"
                                        speed="1"
                                        // className='bg-amber-500 hidden md:block'
                                        style={{ width: 540, height: 400, position: "absolute", top: 60, left: -120, zIndex: 100}}
                                        loop
                                        autoplay
                            /> */}
                            <div className="clients relative top-0  h-[10%] w-full">
                                <div className='h-full w-full flex items-center justify-center'>
                                    <div className="marquee h-full w-full rounded-4xl">
                                        <div className="marquee-content h-full w-full">
                                            <img src={axisbank} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 1" />
                                            <img src={nesco} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 2" />
                                            <img src={JP} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 3" />
                                            <img src={leela} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 4" />
                                            <img src={kimatsu} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 5" />
                                            <img src={witty} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 6" />
                                            <img src={symbiosis} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 7" />
                                            <img src={electrolab} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 8" />
                                            <img src={axisbank} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 1" />
                                            <img src={nesco} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 2" />
                                            <img src={JP} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 3" />
                                            <img src={leela} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 4" />
                                            <img src={kimatsu} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 5" />
                                            <img src={witty} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 6" />
                                            <img src={symbiosis} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 7" />
                                            <img src={electrolab} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 8" />
                                        </div>

                                    </div>
                                    <div className='hidden md:visible absolute top-0 left-0 h-full w-[40%] from-white to-transparent bg-gradient-to-r'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-section slide slide2 flex items-center justify-center" id="slide2">

                    <div style={{ backgroundImage: `url(${image})` }}
                        className="container relative bg-no-repeat bg-contain bg-center w-full h-screen  slide slide2">
                        {/* <div className="absolute inset-0 bg-black/40 z-0"></div> */}
                        <div className='blocck w-full  font-bold text-3xl md:text-4xl lg:text-5xl text-black text-center'>
                            <h1>
                                Crafting Digital Excellence Through Creative Innovation
                            </h1>
                        </div>
                        {/* <div className='structure h-[70%] bg-amber-950 w-full  flex flex-col items-center justify-center'>
                            <img src={image} alt="structure" className='h-auto w-auto md:p-[10%] p-[0%] lg:p-[20%]' />
                        </div> */}
                    </div>
                </div>
                {/* 
                <div className="third-section slide slide3" id="slide3">
                    <div className="container">
                            <div className='h-[100%] w-[100%] bg-pink-500 flex flex-col items-start md:items-center justify-center gap-5 md:gap-12 pl-[2%] pr-[2%] md:pl-[0%] md:pr-[0%]'>
                                <div className='relative  flex flex-col md:flex-row  items-start md:items-center md:justify-center gap-5 md:gap-0'>
                                    <div className='md:h-20 md:w-96 flex items-center  '>
                                        <div className='h-[40px] w-[40px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin'></div>
                                        <span className='text-2xl md:text-3xl font-bold ml-4'>Content marketing</span>
                                    </div>
                                    <div className='md:h-20 md:w-88 flex items-center   '>
                                        <div className='h-[40px] w-[40px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                        <span className='text-2xl md:text-3xl font-bold ml-4'>Public Reactions</span>

                                    </div>
                                </div>
                                <div className='relative  flex flex-col md:flex-row  md:items-center md:justify-center gap-5 md:gap-0'>
                                    <div className='md:h-20 md:w-128  flex items-center '>
                                        <div className='h-[40px] w-[40px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                        <span className='text-2xl md:text-3xl font-bold ml-4'>Social media marketing</span>
                                    </div>
                                </div>
                                <div className='relative  flex flex-col md:flex-row  md:items-center md:justify-center gap-5 md:gap-0 '>
                                    <div className='md:h-20 md:w-100 flex items-center  '>
                                        <div className='h-[40px] w-[40px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                        <span className='text-2xl md:text-3xl font-bold ml-4'>Website services</span>
                                    </div>
                                    <div className='md:h-20 md:w-100 flex items-center  '>
                                        <div className='h-[40px] w-[40px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                        <span className='text-2xl md:text-3xl font-bold ml-4'>Event marketing</span>
                                    </div>
                                </div>
                                <div className='relative  flex flex-col md:flex-row  md:items-center md:justify-center gap-5 md:gap-0  '>
                                    <div className='md:h-20 md:w-80 flex items-center'>
                                        <div className='h-[40px] w-[40px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                        <span className='text-2xl md:text-3xl font-bold ml-4'>Branding</span>
                                    </div>
                                    <div className='md:h-20 md:w-80 flex items-center  '>
                                        <div className='h-[40px] w-[40px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div>
                                        <span className='text-2xl md:text-3xl font-bold ml-4'>OOH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                <div className="sticky-sections slide flex flex-col" id='slide5'>
                    <div className='container'>
                        <div className="sticky-section1 bg-white h-screen w-full sticky-1 flex">
                            <div className='left'>
                                <div className='h-20 w-72 md:w-128 flex items-center mt-20 '>
                                    <div className='h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                                        <div className='h-[80%] w-[80%] bg-red-600 rounded-full'></div>
                                    </div>
                                    <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Content marketing</span>
                                </div>
                                <div className='relative  flex items-center   ' ref={ref}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 50 }}
                                        transition={{ duration: 0.8 }}
                                        className="flex flex-col gap-1"
                                    >
                                        {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className='h-[50%] absolute top-1/4 left-1/2 hidden md:block'>
                                <DotLottieReact
                                    src="https://lottie.host/c6e99e67-7324-46f4-9a2e-dbaba62b094c/nOitsKhSH4.lottie"
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                        <div className="sticky-section bg-white h-screen w-full sticky-2 flex">
                            <div className='left'>
                                <div className='h-20 w-72 md:w-128 flex items-center mt-20 '>
                                    <div className='h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                                        <div className='h-[80%] w-[80%] bg-red-600 rounded-full'></div>
                                    </div>
                                    <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Content marketing</span>
                                </div>
                                <div className='relative  flex items-center   ' ref={ref}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 50 }}
                                        transition={{ duration: 0.8 }}
                                        className="flex flex-col gap-1"
                                    >
                                        {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-section bg-white h-screen w-full sticky-3 flex">
                            <div className='left'>
                                <div className='h-20 w-72 md:w-128 flex items-center mt-20 '>
                                    <div className='h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                                        <div className='h-[80%] w-[80%] bg-red-600 rounded-full'></div>
                                    </div>
                                    <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Content marketing</span>
                                </div>
                                <div className='relative  flex items-center   ' ref={ref}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 50 }}
                                        transition={{ duration: 0.8 }}
                                        className="flex flex-col gap-1"
                                    >
                                        {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-section bg-white h-screen w-full sticky-4 flex">
                            <div className='left'>
                                <div className='h-20 w-72 md:w-128 flex items-center mt-20 '>
                                    <div className='h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                                        <div className='h-[80%] w-[80%] bg-red-600 rounded-full'></div>
                                    </div>
                                    <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Content marketing</span>
                                </div>
                                <div className='relative  flex items-center   ' ref={ref}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 50 }}
                                        transition={{ duration: 0.8 }}
                                        className="flex flex-col gap-1"
                                    >
                                        {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-section bg-white h-screen w-full sticky-5 flex">
                            <div className='left'>
                                <div className='h-20 w-72 md:w-128 flex items-center mt-20 '>
                                    <div className='h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                                        <div className='h-[80%] w-[80%] bg-red-600 rounded-full'></div>
                                    </div>
                                    <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Content marketing</span>
                                </div>
                                <div className='relative  flex items-center   ' ref={ref}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 50 }}
                                        transition={{ duration: 0.8 }}
                                        className="flex flex-col gap-1"
                                    >
                                        {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-section bg-white h-screen w-full sticky-6 flex">
                            <div className='left'>
                                <div className='h-20 w-72 md:w-128 flex items-center mt-20 '>
                                    <div className='h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                                        <div className='h-[80%] w-[80%] bg-red-600 rounded-full'></div>
                                    </div>
                                    <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Content marketing</span>
                                </div>
                                <div className='relative  flex items-center   ' ref={ref}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 50 }}
                                        transition={{ duration: 0.8 }}
                                        className="flex flex-col gap-1"
                                    >
                                        {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-section bg-white  h-screen w-full sticky-7 flex">
                            <div className='left'>
                                <div className='h-20 w-72 md:w-128 flex items-center mt-20 '>
                                    <div className='h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-black myCustomSpin flex items-center justify-center'>
                                        <div className='h-[80%] w-[80%] bg-red-600 rounded-full'></div>
                                    </div>
                                    <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Content marketing</span>
                                </div>
                                <div className='relative  flex items-center   ' ref={ref}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 50 }}
                                        transition={{ duration: 0.8 }}
                                        className="flex flex-col gap-1"
                                    >
                                        {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Branding</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; OOH</span>
                                        <span className='md:text-2xl text-1xl'>--&gt; Social media marketing</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fourth-section mx-1 slide slide4 flex items-center gap-2" id="slide4">
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

                <section className="fifth-section min-h-screen py-16 md:py-32 relative bg-white">
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
                                <div className="absolute -top-8 md:-top-14 left-4 md:left-8 z-20">
                                    <span className="text-[100px] md:text-[150px] leading-none text-[#ff4d6d]">"</span>
                                </div>

                                {/* Card Content */}
                                <div className="relative border border-black rounded-sm p-6 md:p-12">
                                    {/* Quote Content */}
                                    <div className="relative z-10">
                                        <p className="text-xl md:text-3xl font-medium text-gray-900 mb-2 max-w-[650px] leading-normal">
                                            Jugal Shah is the founder, CXO, and<br className="hidden md:block" />
                                            growth hacker at Leo9 Studio headquartered<br className="hidden md:block" />
                                            in Mumbai, India, and an office in N.J., U.S.A.
                                        </p>
                                    </div>

                                    {/* Image - Adjusted for mobile */}
                                    <div className="relative md:absolute right-0 md:right-12 -bottom-0 w-full md:w-96 mt-6 md:mt-0">
                                        <img
                                            src={tt}
                                            alt="Jugal Shah"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>

                                    {/* Founder Info */}
                                    <div className="mt-6 md:mt-40">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Jugal Shah</h3>
                                        <p className="text-lg md:text-xl text-gray-600 mt-1 max-w-[500px] leading-normal">
                                            Founder, Head of UX at Leo9 Studio.<br className="hidden md:block" />
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


                {/* <div className="testimonial-section">
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
                                Thanks to Leo9 Studio's work, the website's long checkout time has been cut down to one minute helping the client increase its business.
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
                </div> */}
                <div className="testimonial-section flex flex-col items-center mt-[200px]" ref={ref}>
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
                        <span className="absolute -left-20 top-0 text-[#FF3366] text-[180px] md:text-[180px] font-serif leading-none hidden md:block">"</span>

                        {/* Testimonial Text */}
                        <div className="text-center w-full">
                            <p className="text-xl md:text-4xl font-normal mb-8 md:mb-20 leading-relaxed text-left md:pl-12 px-4">
                                {testimonials[currentTestimonial].text}
                            </p>
                            {/* Author Info */}
                            <div className="flex items-center justify-start w-full gap-4 md:gap-6 mb-4 md:pl-12 px-4">
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-200">
                                    <img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg md:text-2xl font-bold">{testimonials[currentTestimonial].name}</h4>
                                    <p className="text-base md:text-xl text-gray-600">{testimonials[currentTestimonial].position}</p>
                                </div>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-3 md:gap-4 mt-4 md:mt-8">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${currentTestimonial === index ? 'bg-[#FF3366]' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App