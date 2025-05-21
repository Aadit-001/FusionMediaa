import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './App.css';
import axisbank from './assets/companys_carousel/axisbank.png';
import JP from './assets/companys_carousel/JP.png';
import modena from './assets/companys_carousel/modena.png';
import leela from './assets/companys_carousel/leela.png';
import kimatsu from './assets/companys_carousel/kimatsu.png';
import witty from './assets/companys_carousel/witty.png';
import symbiosis from './assets/companys_carousel/symbiosis.png';
import electrolab from './assets/companys_carousel/electrolab.png';
import beyondGames from './assets/companys_carousel/beyondGames.png';
import ovenry from './assets/companys_carousel/ovenry.png';
// import animation from './assets/Animation.lottie';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useState } from 'react';
import White_image from './assets/White_image.png';
import fusionEvent from './assets/parentCompany/fusionEvent.png';
import fusion_fly from './assets/parentCompany/fusion_fly.png';
import fusion_flyyy from './assets/clients/fusion_flyyy.png';
import fusion_horecaa from './assets/parentCompany/fusion_horecaa.png';
import fusion_vector from './assets/parentCompany/fusion_vector.png';
import { useDarkMode } from './context/DarkModeContext';
import Black_image from './assets/Black_image.png';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


gsap.registerPlugin(ScrollTrigger);


function App() {
    const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  // Check if window is defined (for server-side rendering)
  if (typeof window !== 'undefined') {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }
}, []);

    const testimonials = [
        {
            id: 1,
            text: "I had an excellent experience with Fusion Fly Pvt Ltd! They responded quickly to my inquiries and provided great offers for my trip to UAE. Their service was quick and efficient, and they made excellent recommendations for my stay in a 5-star hotel. I highly recommend them for international travel arrangements.",
            name: "Krishna Dhamala",
            image: fusion_flyyy
        },
        {
            id: 2,
            text: "Fusion Vector delivers outstanding service with a perfect blend of innovation and reliability. Their team's professionalism and attention to detail set them apart.",
            name: "Miraj",
            image: fusion_vector
        },
        {
            id: 3,
            text: "The team's dedication to quality and innovation is unmatched. They've helped us create experiences that truly resonate with our users.",
            name: "Dhruv",
            image: fusion_horecaa
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
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(timer);
    }, []);

    // Use the useInView hook to detect when the element is in view




    const [isAnimating, setIsAnimating] = useState(false);
    const { isDarkMode } = useDarkMode();

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
            "(min-width: 268px) and (max-width: 1200px) and (orientation: portrait) and (min-height: 612px)": function () {
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
                tl.to('#circle2', {
                    top: "152%",
                    left: "35%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#BBDEFB"
                }, 'circles');

                tl.to('#circle1', {
                    top: "149%",
                    left: "28%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#E1BEE7"
                }, 'circles');

                tl.to('#circle6', {
                    top: "146%",
                    left: "35%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFCDD2"
                }, 'circles');

                // Position circle 4 in the middle
                tl.to('#circle4', {
                    top: "149%",
                    left: "47%",
                    rotate: "180deg",
                    scale: 1.2,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#F8BBD0"
                }, 'circles');

                // Position circles 2, 5, 7 vertically on the right side
                tl.to('#circle7', {
                    top: "146%",
                    left: "60%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFF9C4"
                }, 'circles');

                tl.to('#circle3', {
                    top: "149%",
                    left: "68%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#C5CAE9"
                }, 'circles');

                tl.to('#circle5', {
                    top: "152%",
                    left: "60%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#C8E6C9"
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
                    left: "6%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    ease: "power3.out",
                    opacity: 0,
                    // display: "hidden",
                }, 'circles');


                t3.to('#circle4', {
                    top: "212%",
                    left: "5%",
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
                        start: "70% 100%",
                        end: "100% 50%",
                        // duration: 10,
                        scrub: true
                    }
                })

                t10.to('#circle1', {
                    top: "920%",
                    left: "27%",
                    rotate: "180deg",
                    scale: 3,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    opacity: 1,
                    zIndex: 100,
                }, 'circles');

                t10.to('#circle2', {
                    top: "920%",
                    left: "160%",
                    rotate: "180deg",
                    scale: 3,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t10.to('#circle3', {
                    top: "920%",
                    left: "120%",
                    rotate: "180deg",
                    scale: 3,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t10.to('#circle4', {
                    top: "920%",
                    left: "60%",
                    rotate: "180deg",
                    scale: 3,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 0,
                }, 'circles');

                t10.to('#circle5', {
                    top: "920%",
                    left: "220%",
                    rotate: "180deg",
                    scale: 3,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');






                //11
                // var t11 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".fifth-section",
                //         start: "0% 100%",
                //         end: "100% 30%",
                //         // duration: "10",
                //         ease: "power3.out",
                //         scrub: true
                //     }
                // })

                // t11.to('#circle1', {
                //     top: "1100%",
                //     left: "5%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t11.to('#circle3', {
                //     top: "1100%",
                //     left: "15%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle6', {
                //     top: "1100%",
                //     left: "30%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle4', {
                //     top: "1100%",
                //     left: "47%",
                //     rotate: "180deg",
                //     scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle7', {
                //     top: "1100%",
                //     left: "70%",
                //     rotate: "180deg",
                //     scale: 1.7,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle5', {
                //     top: "1100%",
                //     left: "80%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle2', {
                //     top: "1100%",
                //     left: "90%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // var t12 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".testimonial-section",
                //         start: "40% 100%",
                //         end: "100% 30%",
                //         // duration: "10",
                //         ease: "power3.out",
                //         scrub: true
                //     }
                // })

                // t12.to('#circle1', {
                //     top: "1200%",
                //     left: "90%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t12.to('#circle2', {
                //     top: "1200%",
                //     left: "5%",
                //     rotate: "180deg",
                //     // scale: 2
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t12.to('#circle4', {
                //     top: "1200%",
                //     left: "46%",
                //     rotate: "180deg",
                //     scale: 0.6,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');




            },
            "(min-width: 1024px) and (max-width: 1439px) and (min-height: 768px)": function () {
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
                tl.to('#circle2', {
                    top: "158%",
                    left: "35%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#BBDEFB"
                }, 'circles');

                tl.to('#circle1', {
                    top: "148%",
                    left: "28%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#E1BEE7"
                }, 'circles');

                tl.to('#circle6', {
                    top: "137%",
                    left: "35%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFCDD2"
                }, 'circles');

                // Position circle 4 in the middle
                tl.to('#circle4', {
                    top: "146%",
                    left: "47%",
                    rotate: "180deg",
                    scale: 1.2,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#F8BBD0"
                }, 'circles');

                // Position circles 2, 5, 7 vertically on the right side
                tl.to('#circle7', {
                    top: "137%",
                    left: "60%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFF9C4"
                }, 'circles');

                tl.to('#circle3', {
                    top: "148%",
                    left: "68%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#C5CAE9"
                }, 'circles');

                tl.to('#circle5', {
                    top: "158%",
                    left: "60%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#C8E6C9"
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
                    left: "6%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    ease: "power3.out",
                    opacity: 0,
                    // display: "hidden",
                }, 'circles');


                t3.to('#circle4', {
                    top: "212%",
                    left: "5%",
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
                // var t11 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".fifth-section",
                //         start: "0% 100%",
                //         end: "100% 30%",
                //         // duration: "10",
                //         ease: "power3.out",
                //         scrub: true
                //     }
                // })

                // t11.to('#circle1', {
                //     top: "1100%",
                //     left: "5%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t11.to('#circle3', {
                //     top: "1100%",
                //     left: "15%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle6', {
                //     top: "1100%",
                //     left: "30%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle4', {
                //     top: "1100%",
                //     left: "47%",
                //     rotate: "180deg",
                //     scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle7', {
                //     top: "1100%",
                //     left: "70%",
                //     rotate: "180deg",
                //     scale: 1.7,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle5', {
                //     top: "1100%",
                //     left: "80%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle2', {
                //     top: "1100%",
                //     left: "90%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // var t12 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".testimonial-section",
                //         start: "40% 100%",
                //         end: "100% 30%",
                //         // duration: "10",
                //         ease: "power3.out",
                //         scrub: true
                //     }
                // })

                // t12.to('#circle1', {
                //     top: "1240%",
                //     left: "90%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t12.to('#circle2', {
                //     top: "1240%",
                //     left: "5%",
                //     rotate: "180deg",
                //     // scale: 2
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t12.to('#circle4', {
                //     top: "1240%",
                //     left: "46%",
                //     rotate: "180deg",
                //     scale: 0.6,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');




            },
            "(min-width: 1400px) and (max-width: 1909px)": function () {
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
                tl.to('#circle2', {
                    top: "160%",
                    left: "35%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#BBDEFB"
                }, 'circles');

                tl.to('#circle1', {
                    top: "146%",
                    left: "28%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#E1BEE7"
                }, 'circles');

                tl.to('#circle6', {
                    top: "131%",
                    left: "35%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFCDD2"
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
                    background: "#F8BBD0"
                }, 'circles');

                // Position circles 2, 5, 7 vertically on the right side
                tl.to('#circle7', {
                    top: "131%",
                    left: "60%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFF9C4"
                }, 'circles');

                tl.to('#circle3', {
                    top: "146%",
                    left: "68%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#C5CAE9"
                }, 'circles');

                tl.to('#circle5', {
                    top: "160%",
                    left: "60%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#C8E6C9"
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
                    left: "6%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    ease: "power3.out",
                    opacity: 0,
                    // display: "hidden",
                }, 'circles');


                t3.to('#circle4', {
                    top: "212%",
                    left: "5%",
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
                    top: "920%",
                    left: "8%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    opacity: 1,
                    zIndex: 100,
                }, 'circles');

                t10.to('#circle2', {
                    top: "920%",
                    left: "90%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t10.to('#circle3', {
                    top: "920%",
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
                    top: "920%",
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
                    top: "920%",
                    left: "60%",
                    rotate: "180deg",
                    scale: 1,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t10.to('#circle6', {
                    top: "920%",
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
                    top: "920%",
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
                // var t11 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".fifth-section",
                //         start: "0% 100%",
                //         end: "100% 30%",
                //         // duration: "10",
                //         ease: "power3.out",
                //         scrub: true
                //     }
                // })

                // t11.to('#circle1', {
                //     top: "1100%",
                //     left: "5%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t11.to('#circle3', {
                //     top: "1100%",
                //     left: "15%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle6', {
                //     top: "1100%",
                //     left: "30%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle4', {
                //     top: "1100%",
                //     left: "47%",
                //     rotate: "180deg",
                //     scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle7', {
                //     top: "1100%",
                //     left: "70%",
                //     rotate: "180deg",
                //     scale: 1.7,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle5', {
                //     top: "1100%",
                //     left: "80%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle2', {
                //     top: "1100%",
                //     left: "90%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // var t12 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".testimonial-section",
                //         start: "40% 100%",
                //         end: "100% 30%",
                //         // duration: "10",
                //         ease: "power3.out",
                //         scrub: true
                //     }
                // })

                // t12.to('#circle1', {
                //     top: "1240%",
                //     left: "90%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t12.to('#circle2', {
                //     top: "1240%",
                //     left: "5%",
                //     rotate: "180deg",
                //     // scale: 2
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t12.to('#circle4', {
                //     top: "1240%",
                //     left: "46%",
                //     rotate: "180deg",
                //     scale: 0.6,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');




            },
            "(min-width: 1600px) and (max-width: 2559px) and (min-height: 900px) and (max-height: 1440px)": function () {
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
                // kaif PC size
                // Position circles 1, 3, 6 vertically on the left side
                tl.to('#circle2', {
                    top: "160%",
                    left: "33%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#BBDEFB"
                }, 'circles');

                tl.to('#circle1', {
                    top: "146%",
                    left: "26%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#E1BEE7"
                }, 'circles');

                tl.to('#circle6', {
                    top: "134%",
                    left: "33%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFCDD2"
                }, 'circles');

                // Position circle 4 in the middle
                tl.to('#circle4', {
                    top: "145%",
                    left: "44%",
                    rotate: "180deg",
                    scale: 1.2,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#F8BBD0"
                }, 'circles');

                // Position circles 2, 5, 7 vertically on the right side
                tl.to('#circle7', {
                    top: "134%",
                    left: "56%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFF9C4"
                }, 'circles');

                tl.to('#circle3', {
                    top: "146%",
                    left: "63%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#C5CAE9"
                }, 'circles');

                tl.to('#circle5', {
                    top: "160%",
                    left: "56%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#C8E6C9"
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
                    left: "6%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    ease: "power3.out",
                    opacity: 0,
                    // display: "hidden",
                }, 'circles');


                t3.to('#circle4', {
                    top: "212%",
                    left: "5%",
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
                    top: "925%",
                    left: "7%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    opacity: 1,
                    zIndex: 100,
                }, 'circles');

                t10.to('#circle2', {
                    top: "925%",
                    left: "80%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t10.to('#circle3', {
                    top: "925%",
                    left: "32%",
                    rotate: "180deg",
                    scale: 1,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t10.to('#circle4', {
                    top: "925%",
                    left: "46%",
                    rotate: "180deg",
                    scale: 1.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 0,
                }, 'circles');

                t10.to('#circle5', {
                    top: "925%",
                    left: "56%",
                    rotate: "180deg",
                    scale: 1,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t10.to('#circle6', {
                    top: "925%",
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
                    top: "925%",
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
                // var t11 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".fifth-section",
                //         start: "0% 100%",
                //         end: "100% 30%",
                //         // duration: "10",
                //         ease: "power3.out",
                //         scrub: true
                //     }
                // })

                // t11.to('#circle1', {
                //     top: "1100%",
                //     left: "3%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t11.to('#circle3', {
                //     top: "1100%",
                //     left: "12%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle6', {
                //     top: "1100%",
                //     left: "22%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle4', {
                //     top: "1100%",
                //     left: "44%",
                //     rotate: "180deg",
                //     scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle7', {
                //     top: "1100%",
                //     left: "70%",
                //     rotate: "180deg",
                //     scale: 1.7,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle5', {
                //     top: "1100%",
                //     left: "80%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle2', {
                //     top: "1100%",
                //     left: "90%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // var t12 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".testimonial-section",
                //         start: "40% 100%",
                //         end: "100% 30%",
                //         // duration: "10",
                //         ease: "power3.out",
                //         scrub: true
                //     }
                // })

                // t12.to('#circle1', {
                //     top: "1200%",
                //     left: "84%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t12.to('#circle2', {
                //     top: "1200%",
                //     left: "5%",
                //     rotate: "180deg",
                //     // scale: 2
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t12.to('#circle4', {
                //     top: "1200%",
                //     left: "44%",
                //     rotate: "180deg",
                //     scale: 0.6,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');




            },
            "(min-width: 2560px) and (min-height: 1440px)": function () {
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
                tl.to('#circle2', {
                    top: "155%",
                    left: "32%",
                    rotate: "180deg",
                    scale: 0.6,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#BBDEFB"
                }, 'circles');

                tl.to('#circle1', {
                    top: "146%",
                    left: "25%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#E1BEE7"
                }, 'circles');

                tl.to('#circle6', {
                    top: "138%",
                    left: "32%",
                    rotate: "180deg",
                    scale: 0.6,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFCDD2"
                }, 'circles');

                // Position circle 4 in the middle
                tl.to('#circle4', {
                    top: "145%",
                    left: "42%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#F8BBD0"
                }, 'circles');

                // Position circles 2, 5, 7 vertically on the right side
                tl.to('#circle7', {
                    top: "138%",
                    left: "55%",
                    rotate: "180deg",
                    scale: 0.6,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#FFF9C4"
                }, 'circles');

                tl.to('#circle3', {
                    top: "146%",
                    left: "62%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#C5CAE9"
                }, 'circles');

                tl.to('#circle5', {
                    top: "156%",
                    left: "55%",
                    rotate: "180deg",
                    scale: 0.6,
                    duration: 2,
                    visibility: "visible",
                    opacity: 1,
                    background: "#C8E6C9"
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
                    left: "6%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2,
                    ease: "power3.out",
                    opacity: 0,
                    // display: "hidden",
                }, 'circles');


                t3.to('#circle4', {
                    top: "212%",
                    left: "5%",
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
                    top: "925%",
                    left: "7%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    opacity: 1,
                    zIndex: 100,
                }, 'circles');

                t10.to('#circle2', {
                    top: "925%",
                    left: "80%",
                    rotate: "180deg",
                    // scale: 0.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t10.to('#circle3', {
                    top: "925%",
                    left: "32%",
                    rotate: "180deg",
                    scale: 1,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t10.to('#circle4', {
                    top: "925%",
                    left: "46%",
                    rotate: "180deg",
                    scale: 1.8,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 0,
                }, 'circles');

                t10.to('#circle5', {
                    top: "925%",
                    left: "56%",
                    rotate: "180deg",
                    scale: 1,
                    // duration: 2,
                    // ease: "power3.out",
                    // display: "hidden",
                    zIndex: 100,
                    opacity: 1,
                }, 'circles');

                t10.to('#circle6', {
                    top: "925%",
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
                    top: "925%",
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
                // var t11 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".fifth-section",
                //         start: "0% 100%",
                //         end: "100% 30%",
                //         // duration: "10",
                //         ease: "power3.out",
                //         scrub: true
                //     }
                // })

                // t11.to('#circle1', {
                //     top: "1100%",
                //     left: "3%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t11.to('#circle3', {
                //     top: "1100%",
                //     left: "12%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle6', {
                //     top: "1100%",
                //     left: "22%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle4', {
                //     top: "1100%",
                //     left: "44%",
                //     rotate: "180deg",
                //     scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle7', {
                //     top: "1100%",
                //     left: "70%",
                //     rotate: "180deg",
                //     scale: 1.5,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle5', {
                //     top: "1100%",
                //     left: "80%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // t11.to('#circle2', {
                //     top: "1100%",
                //     left: "90%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     zIndex: 100,
                //     opacity: 1,
                // }, 'circles');

                // var t12 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: ".testimonial-section",
                //         start: "40% 100%",
                //         end: "100% 30%",
                //         // duration: "10",
                //         ease: "power3.out",
                //         scrub: true
                //     }
                // })

                // t12.to('#circle1', {
                //     top: "1180%",
                //     left: "82%",
                //     rotate: "180deg",
                //     // scale: 2,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t12.to('#circle2', {
                //     top: "1180%",
                //     left: "5%",
                //     rotate: "180deg",
                //     // scale: 2
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');

                // t12.to('#circle4', {
                //     top: "1180%",
                //     left: "44%",
                //     rotate: "180deg",
                //     scale: 0.6,
                //     // duration: 2,
                //     // ease: "power3.out",
                //     // display: "hidden",
                //     opacity: 1,
                //     zIndex: 1,
                //     // backgroundColor: "",
                // }, 'circles');




            },
            // "all": function () {
            //     // first section
            // },


        })
        gsap.to("#box1", {
            scale: 20,
            transformOrigin: "50% 50%",
            background: "#E1BEE7",
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
            background: "#C5CAE9",
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
            background: "#C8E6C9",
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
            background: "#BBDEFB",
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
        <div ref={containerRef} className={`smooth-scroll ${screen.width < 768 ? "overflow-hidden" : ""}`}>
            <div className="app-max-container">
                <div className="hero-section slide slide1" id="slide1">
                    <div className="container">
                        <div className="hero-content">
                            <div className="circle" id="circle1"></div>
                            <div className="circle" id="circle2"></div>
                            <div className="circle" id="circle3"></div>
                            <div className="circle" id="circle4"></div>
                            <div className="circle" id="circle5"></div>
                            <div className="circle" id="circle6"></div>
                            <div className="circle" id="circle7"></div>
                            <div className="main-container max-h-[80%] flex flex-col md:flex-row w-full gap-4">
                                <div className="left-container w-full md:w-1/2 flex justify-center items-center">
                                    <DotLottieReact
                                        src="https://lottie.host/b1e7a90d-f092-4c98-96ec-ba6ba48098d7/fzCleJXtNi.lottie"
                                        // background="red"
                                        speed="1"
                                        className='md:h-[400px] md:w-[640px]'
                                        // style={{ width: "1240px", height: "900px" }}
                                        loop
                                        autoplay
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20, y: 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: -20 }}
                                    transition={{ duration: 0.8 }}
                                    className="right-container w-full md:w-1/2 flex flex-col justify-center items-start -mt-20 md:mt-0">
                                    <h1 className="font-extrabold text-6xl  md:text-6xl lg:text-7xl">Content</h1>
                                    <h1 className="font-extrabold text-6xl md:text-6xl lg:text-7xl">Marketing</h1>
                                    <h1 className="font-extrabold text-6xl md:text-6xl lg:text-7xl">Excellence</h1>
                                    <div className="text-lg md:text-base lg:text-2xl font-normal mt-4">
                                        We Create Engaging Content That Drives Results.
                                    </div>
                                </motion.div>
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
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: -40 }}
                                transition={{ duration: 0.8 }}
                                className="clients relative top-0  h-[10%] w-full">
                                <div className='h-full w-full flex items-center justify-center'>
                                    <div className="marquee h-full w-full rounded-4xl">
                                        <div className="marquee-content h-full w-full gap-6 md:gap-12 flex items-center">
                                            <img src={axisbank} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 1" />
                                            <img src={ovenry} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 1" />
                                            <img src={JP} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 3" />
                                            <img src={beyondGames} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 9" />
                                            <img src={kimatsu} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 5" />
                                            <img src={witty} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 6" />
                                            <img src={symbiosis} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 7" />
                                            <img src={modena} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 7" />
                                            <img src={electrolab} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 8" />
                                            <img src={leela} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 4" />
                                            <img src={axisbank} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 1" />
                                            <img src={ovenry} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 1" />
                                            <img src={JP} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 3" />
                                            <img src={beyondGames} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 9" />
                                            <img src={kimatsu} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 5" />
                                            <img src={witty} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 6" />
                                            <img src={symbiosis} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 7" />
                                            <img src={modena} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 7" />
                                            <img src={electrolab} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 8" />
                                            <img src={leela} className='h-[10%] md:h-full w-[50%] md:w-auto' alt="Client Logo 4" />
                                        </div>
                                    </div>
                                    <div className='hidden md:visible absolute top-0 left-0 h-full w-[40%] from-white to-transparent bg-gradient-to-r'>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>


                <div className="second-section slide slide2 flex items-center justify-center" id="slide2">

                    <div style={{ backgroundImage: `url(${isDarkMode ? Black_image : White_image})` }}
                        className="container relative bg-no-repeat bg-contain bg-center w-full h-screen  slide slide2">
                        {/* <div className="absolute inset-0 bg-black/40 z-0"></div> */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: 50 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`block w-full font-extrabold text-4xl md:text-5xl lg:text-6xl text-center leading-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Crafting Digital Excellence Through Creative Innovation
                            </h1>
                        </motion.div>
                        {/* <div className='structure h-[70%] bg-amber-950 w-full  flex flex-col items-center justify-center'>
                            <img src={image} alt="structure" className='h-auto w-auto md:p-[10%] p-[0%] lg:p-[20%]' />
                        </div> */}

                        {/* <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center from-white to-transparent bg-gradient-to-r'>
                        <div className='h-auto w-auto flex items-center justify-center'>
                            <div className='h-auto w-auto bg-red-500 rounded-full'>s</div>
                        </div>
                    </div> */}
                    </div>
                </div>

                <div className={`sticky-sections slide flex flex-col ${isDarkMode ? 'bg-black' : 'bg-white'} mx-10`} id='slide5'>
                    {/* <div className='container'> */}
                    <div className={`sticky-section1 ${isDarkMode ? 'bg-black' : 'bg-white'} h-screen w-full sticky-1 flex`}>
                        <div className={`left ${isDarkMode ? 'bg-black' : 'bg-white'} lg:pl-[60px] `}>
                            <div className={`h-20 w-72 md:w-128 flex items-center mt-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                                <div className={`h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-${isDarkMode ? 'white' : 'black'} myCustomSpin flex items-center justify-center`}>
                                    <div className='h-[80%] w-[80%] bg-[#BBDEFB] rounded-full'></div>
                                </div>
                                <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Content marketing</span>
                            </div>
                            <div className='relative  flex items-center   ' ref={ref}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: isMobile ? 70 : 100 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col gap-1"
                                >
                                    {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                    <span className='md:text-2xl text-1xl'>• Story Telling Campaigns</span>
                                    <span className='md:text-2xl text-1xl'>• Copywriting</span>
                                    <span className='md:text-2xl text-1xl'>• Blog Writing</span>
                                    <span className='md:text-2xl text-1xl'>• Press Release</span>
                                    <span className='md:text-2xl text-1xl'>• Content Calander</span>
                                    <span className='md:text-2xl text-1xl'>• SEO Friendly Content</span>
                                    <span className='md:text-2xl text-1xl'>• White Paper</span>
                                    <span className='md:text-2xl text-1xl'>• Info Graphics</span>
                                    <span className='md:text-2xl text-1xl'>• Podcast Scripting</span>
                                    <span className='md:text-2xl text-1xl'>• Industry Reports</span>
                                    <span className='md:text-2xl text-1xl'>• Product Descriptions</span>
                                    <span className='md:text-2xl text-1xl'>• Video Marketing</span>
                                </motion.div>
                            </div>
                        </div>
                        <div className={` h-[60%] absolute top-1/6 left-1/2 hidden md:block`}>
                            {isDarkMode ? (
                                <DotLottieReact
                                    // src="https://lottie.host/c6e99e67-7324-46f4-9a2e-dbaba62b094c/nOitsKhSH4.lottie"
                                    src="https://lottie.host/5395e9ab-d434-4578-9b07-11314eb07be9/ZIGmC9zQ7a.lottie"
                                    loop
                                    autoplay
                                />
                            ) : (
                                <DotLottieReact
                                    // src="https://lottie.host/b1e7a90d-f092-4c98-96ec-ba6ba48098d7/fzCleJXtNi.lottie"
                                    src="https://lottie.host/5395e9ab-d434-4578-9b07-11314eb07be9/ZIGmC9zQ7a.lottie"
                                    loop
                                    autoplay
                                />
                            )}
                        </div>
                    </div>
                    <div className={`sticky-section ${isDarkMode ? 'bg-black' : 'bg-white'} h-screen w-full sticky-2 flex`}>
                        <div className={`left ${isDarkMode ? 'bg-black' : 'bg-white'} lg:pl-[60px] `}>
                            <div className='h-20 w-90 md:w-128 flex items-center mt-20 '>
                                <div className={`h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-${isDarkMode ? 'white' : 'black'} myCustomSpin flex items-center justify-center`}>
                                    <div className='h-[80%] w-[80%] bg-[#FFF9C4] rounded-full'></div>
                                </div>
                                <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Public Relations</span>
                            </div>
                            <div className='relative  flex items-center   ' ref={ref}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: isMobile ? 70 : 100 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col gap-1"
                                >
                                    {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                    <span className='md:text-2xl text-1xl'>• Media Relation</span>
                                    <span className='md:text-2xl text-1xl'>• Event PR</span>
                                    <span className='md:text-2xl text-1xl'>• Crisis Management</span>
                                    <span className='md:text-2xl text-1xl'>• Reputation Management</span>
                                    <span className='md:text-2xl text-1xl'>• Influencer Collaboration</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className={`sticky-section ${isDarkMode ? 'bg-black' : 'bg-white'} h-screen w-full sticky-2 flex`}>
                        <div className={`left ${isDarkMode ? 'bg-black' : 'bg-white'} lg:pl-[60px] `}>
                            <div className='h-20 w-90 md:w-128 flex items-center mt-20 '>
                                <div className={`h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-${isDarkMode ? 'white' : 'black'} myCustomSpin flex items-center justify-center`}>
                                    <div className='h-[80%] w-[80%] bg-[#E1BEE7] rounded-full'></div>
                                </div>
                                <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Social Media</span>
                                {/* <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Social Media</span> */}
                            </div>
                            <div className='relative  flex items-center   ' ref={ref}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: isMobile ? 70 : 100 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col gap-1"
                                >
                                    {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                    <span className='md:text-2xl text-1xl'>• Instagram Marketing</span>
                                    <span className='md:text-2xl text-1xl'>• Facebook Marketing</span>
                                    <span className='md:text-2xl text-1xl'>• Youtube Marketing</span>
                                    <span className='md:text-2xl text-1xl'>• Engagement Posting</span>
                                    <span className='md:text-2xl text-1xl'>• Stories & Reels creation</span>
                                    <span className='md:text-2xl text-1xl'>• Strategy</span>
                                    <span className='md:text-2xl text-1xl'>• Influencer Discovery</span>
                                    <span className='md:text-2xl text-1xl'>• Partnership</span>
                                    <span className='md:text-2xl text-1xl'>• Sponsored Post</span>
                                    <span className='md:text-2xl text-1xl'>• Influencer Events</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className={`sticky-section ${isDarkMode ? 'bg-black' : 'bg-white'} h-screen w-full sticky-4 flex`}>
                        <div className={`left ${isDarkMode ? 'bg-black' : 'bg-white'} lg:pl-[60px] `}>
                            <div className='h-20 w-90 md:w-128 flex items-center mt-20 '>
                                <div className={`h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-${isDarkMode ? 'white' : 'black'} myCustomSpin flex items-center justify-center`}>
                                    <div className='h-[80%] w-[80%] bg-[#C5CAE9] rounded-full'></div>
                                </div>
                                <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Website Services</span>
                            </div>
                            <div className='relative  flex items-center   ' ref={ref}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: isMobile ? 70 : 100 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col gap-1"
                                >
                                    {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                    <span className='md:text-2xl text-1xl'>• Website Design</span>
                                    <span className='md:text-2xl text-1xl'>• Website Development</span>
                                    <span className='md:text-2xl text-1xl'>• Website Audits</span>
                                    <span className='md:text-2xl text-1xl'>• A/B Testing</span>
                                    <span className='md:text-2xl text-1xl'>• UI/UX Optimization</span>
                                    <span className='md:text-2xl text-1xl'>• Speed Optimization</span>
                                    <span className='md:text-2xl text-1xl'>• Website Maintenance</span>
                                    <span className='md:text-2xl text-1xl'>• Interactive Design Features</span>
                                    <span className='md:text-2xl text-1xl'>• CMS Management</span>
                                    <span className='md:text-2xl text-1xl'>• Mobile-First Design</span>
                                    <span className='md:text-2xl text-1xl'>• Customer-Web Tools</span>

                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className={`sticky-section ${isDarkMode ? 'bg-black' : 'bg-white'} h-screen w-full sticky-5 flex`}>
                        <div className={`left ${isDarkMode ? 'bg-black' : 'bg-white'} lg:pl-[60px] `}>
                            <div className='h-20 w-90 md:w-128 flex items-center mt-20 '>
                                <div className={`h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-${isDarkMode ? 'white' : 'black'} myCustomSpin flex items-center justify-center`}>
                                    <div className='h-[80%] w-[80%] bg-[#FFCDD2] rounded-full'></div>
                                </div>
                                <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Event Marketing</span>
                            </div>
                            <div className='relative  flex items-center   ' ref={ref}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: isMobile ? 70 : 100 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col gap-1"
                                >
                                    {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                    <span className='md:text-2xl text-1xl'>• Event Planning</span>
                                    <span className='md:text-2xl text-1xl'>• Brand Activation</span>
                                    <span className='md:text-2xl text-1xl'>• Pop-up Shops</span>
                                    <span className='md:text-2xl text-1xl'>• Webinar Marketing</span>
                                    <span className='md:text-2xl text-1xl'>• Trade Show Support</span>
                                    <span className='md:text-2xl text-1xl'>• Product Launches</span>
                                    <span className='md:text-2xl text-1xl'>• Sponsorship Promotions</span>
                                    <span className='md:text-2xl text-1xl'>• Virtual Event Productions</span>
                                    <span className='md:text-2xl text-1xl'>• Event Branding</span>
                                    <span className='md:text-2xl text-1xl'>• Post-Event Reports</span>

                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className={`sticky-section ${isDarkMode ? 'bg-black' : 'bg-white'} h-screen w-full sticky-6 flex`}>
                        <div className={`left ${isDarkMode ? 'bg-black' : 'bg-white'} lg:pl-[60px] `}>
                            <div className='h-20 w-90 md:w-128 flex items-center mt-20 '>
                                <div className={`h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-${isDarkMode ? 'white' : 'black'} myCustomSpin flex items-center justify-center`}>
                                    <div className='h-[80%] w-[80%] bg-[#C8E6C9] rounded-full'></div>
                                </div>
                                <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>Branding</span>
                            </div>
                            <div className='relative  flex items-center   ' ref={ref}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: isMobile ? 70 : 100 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col gap-1"
                                >
                                    {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                    <span className='md:text-2xl text-1xl'>• Logo Creation</span>
                                    <span className='md:text-2xl text-1xl'>• Brand Identity</span>
                                    <span className='md:text-2xl text-1xl'>• Product Branding</span>
                                    <span className='md:text-2xl text-1xl'>• Rebranding Strategy</span>
                                    <span className='md:text-2xl text-1xl'>• Social Media Graphics</span>
                                    <span className='md:text-2xl text-1xl'>• Poster and Flyer Design</span>
                                    <span className='md:text-2xl text-1xl'>• Banner Ads</span>
                                    <span className='md:text-2xl text-1xl'>• 3D Design</span>
                                    <span className='md:text-2xl text-1xl'>• Animated Graphics</span>

                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className={`sticky-section ${isDarkMode ? 'bg-black' : 'bg-white'}  h-screen w-full sticky-7 flex`}>
                        <div className={`left ${isDarkMode ? 'bg-black' : 'bg-white'} lg:pl-[60px] `}>
                            <div className='h-20 w-90 md:w-128 flex items-center mt-20 '>
                                <div className={`h-[60px] w-[60px] md:h-full md:w-20 rounded-full  border-3 border-dotted border-${isDarkMode ? 'white' : 'black'} myCustomSpin flex items-center justify-center`}>
                                    <div className='h-[80%] w-[80%] bg-[#F8BBD0] rounded-full'></div>
                                </div>
                                <span className='md:text-3xl text-2xl lg:text-4xl font-bold ml-4'>OOH</span>
                            </div>
                            <div className='relative  flex items-center   ' ref={ref}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: isMobile ? 70 : 100 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col gap-1"
                                >
                                    {/* <div className='h-full w-20 rounded-full  border-3 border-dotted border-black myCustomSpin '></div> */}
                                    <span className='md:text-2xl text-1xl'>• Billboard Advertising</span>
                                    <span className='md:text-2xl text-1xl'>• Transit Advertising</span>
                                    <span className='md:text-2xl text-1xl'>• Street Furniture</span>
                                    <span className='md:text-2xl text-1xl'>• Digital Billboards</span>
                                    <span className='md:text-2xl text-1xl'>• Mall Media</span>
                                    <span className='md:text-2xl text-1xl'>• Airport Advertising</span>
                                    <span className='md:text-2xl text-1xl'>• Metro Station Ads</span>
                                    <span className='md:text-2xl text-1xl'>• Bus Shelter Ads</span>
                                    <span className='md:text-2xl text-1xl'>• Retail OOH</span>
                                    <span className='md:text-2xl text-1xl'>• Interactive Displays</span>

                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>

                <div className={`fourth-section mx-1 slide slide4 flex items-center justify-center gap-2 ${isDarkMode ? 'bg-black' : 'bg-white'}`} id="slide4">
                    {/* <div className="containerr"> */}
                    <div className="cardd overflow-hidden  absolute text-white ">
                        {/* <div className="facee face11 overflow-hidden"> */}
                        {/* <div className="contentt flex items-center overflow-hidden"> */}
                        <div className='h-10 w-10 rounded-full ' id='box1'></div>
                        <div className='absolute top-0 z-1000 flex flex-col  items-center h-full w-full '>
                            <div className='pt-20 text-4xl font-bold mb-5'>Fusion Vector</div>
                            <ul className='pl-10 pr-10 pt-2 pb-2 text-base md:text-base list-disc list-inside space-y-3'>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className=' text-gray-800'>Designing the Web, Defining Success</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className=' text-gray-700'>HTML, CSS, JavaScript</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className=' text-gray-700'>Web Development</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className=' text-gray-700'>UI/UX</span>
                                </li>
                            </ul>
                            <div className='mt-1 h-[60%] w-full mx-2' >
                                <img src={fusion_vector} alt="logo" className="contain h-full w-full" />
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div className="cardd overflow-hidden text-white absolute ">
                        {/* <div className="facee face11 overflow-hidden"> */}
                        {/* <div className="contentt flex items-center overflow-hidden"> */}
                        <div className='h-10 w-10 rounded-full ' id='box2'></div>
                        <div className='absolute top-0 z-1000 flex flex-col  items-center h-full w-full '>
                            <div className='pt-20 text-4xl font-bold mb-5'>Fusion Events</div>
                            <ul className='pl-10 pr-10 pt-2 pb-2 text-sm md:text-base list-disc list-inside space-y-3'>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Turning Events into Memories</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Corporate Events</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Wedding Events</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>ATL\BTL Activation</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Exhibitions</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Talent Management</span>
                                </li>
                            </ul>
                            <div className='mt-1 h-[60%] w-full mx-2' >
                                <img src={fusionEvent} alt="logo" className="contain h-full w-full" />
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div className="cardd overflow-hidden text-white absolute ">
                        {/* <div className="facee face11 overflow-hidden"> */}
                        {/* <div className="contentt flex items-center overflow-hidden"> */}
                        <div className='h-10 w-10 rounded-full ' id='box3'></div>
                        <div className='absolute top-0 z-1000 flex flex-col  items-center h-full w-full '>
                            <div className='pt-20 text-4xl font-bold mb-5'>Fusion Horeca</div>
                            <ul className='pl-10 pr-10 pt-2 pb-2 text-sm md:text-lg list-disc list-inside space-y-3'>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Where Luxury Meets Comfort</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Air BNB</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Stay</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Plush Rooms</span>
                                </li>
                            </ul>
                            <div className='mt-1 h-[60%] w-full mx-2' >
                                <img src={fusion_horecaa} alt="logo" className="contain h-full w-full" />
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div className="cardd overflow-hidden text-white absolute ">
                        {/* <div className="facee face11 overflow-hidden"> */}
                        {/* <div className="contentt flex items-center overflow-hidden"> */}
                        <div className='h-10 w-10 rounded-full ' id='box4'></div>
                        <div className='absolute top-0 z-1000 flex flex-col  items-center h-full w-full '>
                            <div className='pt-20 text-4xl font-bold mb-5'>Fusion Fly</div>
                            <ul className='pl-10 pr-10 pt-2 pb-2 text-sm md:text-lg list-disc list-inside space-y-3'>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Travel With Passion</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Fly Global</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>•</span>
                                    <span className='text-gray-700'>Hospitality</span>
                                </li>
                            </ul>
                            <div className='mt-12 h-[60%] w-full mx-2' >
                                <img src={fusion_fly} alt="logo" className="contain h-full w-full" />
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                    {/* </div> */}
                </div>

                <section className={`fifth-section min-h-screen md:py-12 relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                    <div className="container mx-auto px-4 mb-[-50px]">
                        <div className="max-w-6xl mx-auto">
                            {/* Quote Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                            >
                                {/* Large Quote Mark */}
                                <div className="absolute -top-8 md:-top-14 left-4 md:left-8 z-20">
                                    <span className="text-[100px] md:text-[150px] leading-none text-[#ff4d6d]">"</span>
                                </div>

                                {/* Card Content */}
                                <div className={`relative border ${isDarkMode ? 'border-gray-700' : 'border-black'} rounded-sm p-3 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? 'bg-transparent backdrop-blur-sm' : 'bg-white'} max-w-[95vw] md:max-w-full mx-auto mt-22 md:mt-0 mb-4 md:mb-0`}>
                                    {/* Founder Info */}
                                    <div className="md:mt-10 max-w-3xl mx-auto px-2 md:px-4 text-center md:text-left">
                                        <div className="space-y-3 md:space-y-6">
                                            <h3 className={`text-2xl md:text-5xl font-bold tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Harsh Punmiya</h3>
                                            <div className="text-center md:text-left">
                                                <p className={`text-base md:text-2xl font-semibold md:font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Founder & Creative Lead at Fusion Media</p>
                                            </div>
                                            <p className={`mt-2 md:mt-6 text-sm md:text-xl leading-relaxed md:px-0 px-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Passionate about blending creativity with strategy, the vision behind Fusion Media is rooted in delivering powerful brand stories and engaging digital experiences. With a strong belief in the impact of design, storytelling, and innovation, the focus has always been on helping brands grow through bold ideas and modern execution. Every project is approached with a fresh perspective and a commitment to excellence.</p>
                                            <div className="mt-3 md:mt-6">
                                                <a
                                                    href="https://www.linkedin.com/in/harsh-punmiya-b9320b285/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center justify-center px-3 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg ${isDarkMode
                                                        ? 'bg-blue-600 hover:bg-blue-700 text-white hover:text-gray-300'
                                                        : 'bg-blue-500 hover:bg-blue-600 text-white hover:text-gray-300'
                                                        }`}
                                                >
                                                    <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                                    Connect on LinkedIn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <div className="testimonial-section flex flex-col items-center mt-[-30px]" ref={ref}>
                    {/* Testimonial Header */}
                    <div className="text-center mb-10">
                        <h3 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Lobster, cursive' }}>
                            Happy clients with <span className="gradient-text">{inView && <CountUp end={100} duration={3} />}+</span><br />
                            successful Projects
                        </h3>
                        <h2 className="text-[#FF3366] text-2xl font-medium mt-[20px]" style={{ fontFamily: 'Lobster, cursive' }}>TESTIMONIALS</h2>
                    </div>
                    {/* Testimonial Content */}
                    <div className="max-w-[1000px] mx-auto flex flex-col items-center relative bg-gray-400/10 rounded-lg p-2">
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

                <div className="last-section bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:rounded-lg mt-22 h-[280px] flex items-center justify-center" style={{ zIndex: 2147483, position: 'relative' }}>
                    <h2 className="text-5xl md:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Let's create a measurable<br />
                        impact on your business.
                    </h2>
                </div>

            </div>
        </div >
    )
}

export default App