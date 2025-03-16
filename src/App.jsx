import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './App.css';
import Navbar from './components/Navbar'; 

gsap.registerPlugin(ScrollTrigger);


function App() {

  const containerRef = useRef(null);

    useEffect(() => {
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
                smooth: false,
                multiplier: 0.5
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
    <>
    <Navbar/>
    <div ref={containerRef} className=" smooth-scroll">
        {/* <div className="bg-black hero-section slide slide1" id="slide1">
            <div className="container">
                <div className="hero-content">
                    <div className="circle" id="circle1"></div>
                    <div className="circle" id="circle2"></div>
                    <div className="circle" id="circle3"></div>
                    <div className="circle" id="circle4"></div>
                    <div className="circle" id="circle5"></div>
                    <div className="circle" id="circle6"></div>
                    <div className="circle" id="circle7"></div>
                </div>
            </div>
        </div>

        <div className="second-section slide slide2" id="slide2">
            <div className="container">
                <div className="content-wrapper">
                    dks
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
                    <div className="img-section">dsd</div>
                    <div className="content-section">dsd</div>
                </div>
            </div>
        </div> */}

    {/* </div> */}
    


    {/* // <div ref={containerRef} className="smooth-scroll"> */}
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
                        <div className="left-container">
                            <div className="design">
                                <DotLottieReact
                                    src="https://lottie.host/b1e7a90d-f092-4c98-96ec-ba6ba48098d7/fzCleJXtNi.lottie"
                                    background="transparent"
                                    speed="1"
                                    style={{width: 900, height: 900}}
                                    loop
                                    autoplay
                                />
                            </div>
                            <div className="right-container">
                                <h1 className="heading">Design</h1>
                                <h1 className="heading">Thinking</h1>
                                <h1 className="heading">Accelarate</h1>
                                <p className="paragraph-hero">
                                    We Revolutionize User Experience Using Behavioural Science.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="second-section slide slide2" id="slide2">
            <div className="container">
                <div className="content-wrapper">
                    dks
                </div>
            </div>
            <div className="left-container">
                
            </div>
        </div>

        <div className="third-section slide slide3" id="slide3">
            <div className="container">
                <div className="content-wrapper">
                   ,dnf,
                </div>
            </div>
            <div className="left-container">
                
            </div>
        </div>
        <div className="fourth-section slide slide4" id="slide4">
            <div className="container">
                <div className="content-wrapper">
                    ds
                </div>
            </div>
            <div className="left-container">
                
            </div>
        </div>
    </div>
    </>
  )
}

export default App