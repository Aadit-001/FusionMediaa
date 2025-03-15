import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css';
gsap.registerPlugin(ScrollTrigger);


function App() {

  const containerRef = useRef(null);

    useEffect(() => {
        const locoScroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            multiplier: 3
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(containerRef.current, {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, { duration: 2, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: containerRef.current.style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.defaults({ scroller: containerRef.current });

        // Animation setup
        ScrollTrigger.matchMedia({
            "(min-width: 1367px)": function () {
                const tl = gsap.timeline({ scrollTrigger: {
                    trigger: ".second-section",
                    start: "0% 100%",
                    end: "50% 50%",
                    scrub: true,
                    // markers: true
                }});

                const circles = ['#circle1', '#circle2', '#circle3', '#circle4', '#circle5', '#circle6', '#circle7'];
                
                // Position circles 1, 3, 6 vertically on the left side
                tl.to('#circle1', {
                    top: "150%",
                    left: "35%",
                    rotate: "180deg",
                    scale: 2,
                    duration: 2
                }, 'circles');
                
                tl.to('#circle3', {
                    top: "165%",
                    left: "25%",
                    rotate: "180deg",
                    scale: 1.8,
                    duration: 2
                }, 'circles');
                
                tl.to('#circle6', {
                    top: "177%",
                    left: "34%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2
                }, 'circles');

                // Position circle 4 in the middle
                tl.to('#circle4', {
                    top: "159%",
                    left: "45%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2
                }, 'circles');

                // Position circles 2, 5, 7 vertically on the right side
                tl.to('#circle2', {
                    top: "150%",
                    left: "63%",
                    rotate: "180deg",
                    scale: 2,
                    duration: 2
                }, 'circles');
                
                tl.to('#circle5', {
                    top: "165%",
                    left: "72%",
                    rotate: "180deg",
                    scale: 1.8,
                    duration: 2
                }, 'circles');
                
                tl.to('#circle7', {
                    top: "175%",
                    left: "61%",
                    rotate: "180deg",
                    scale: 0.7,
                    duration: 2
                }, 'circles');

                // second section animation
                var t2 = gsap.timeline({ scrollTrigger: {
                    trigger: ".third-section",
                    start: "0% 100%",
                    end: "50% 50%",
                    scrub: true
                }});

                // Position circles 1, 3, 6 vertically on the left side
                t2.to('#circle1', {
                    top: "240%",
                    left: "4%",
                    rotate: "180deg",
                    scale: 1.8,
                    duration: 2
                }, 'circles');
                
                t2.to('#circle3', {
                    top: "270%",
                    left: "4%",
                    rotate: "180deg",
                    scale: 1,
                    duration: 2
                }, 'circles');
                
                t2.to('#circle6', {
                    top: "300%",
                    left: "4%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2
                }, 'circles');

                // Position circle 4 in the middle
                t2.to('#circle4', {
                    top: "270%",
                    left: "45%",
                    rotate: "180deg",
                    scale: 1.2,
                    duration: 2
                }, 'circles');

                // Position circles 2, 5, 7 vertically on the right side
                t2.to('#circle2', {
                    top: "240%",
                    left: "90%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2
                }, 'circles');
                
                t2.to('#circle5', {
                    top: "270%",
                    left: "90%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2
                }, 'circles');
                
                t2.to('#circle7', {
                    top: "300%",
                    left: "90%",
                    rotate: "180deg",
                    scale: 0.8,
                    duration: 2
                }, 'circles');

                // third section animation
                var t3 = gsap.timeline({ scrollTrigger: {
                    trigger: ".fourth-section",
                    start: "0% 100%",
                    end: "50% 50%",
                    scrub: true
                }});

                t3.to('#circle1, #circle6', {
                    top: "340%",
                    left: "4%",
                    rotate: "180deg",
                    scale: 1.2,
                    duration: 2
                }, 'circles3');

                t3.to('#circle3, #circle4, #circle5', {
                    top: "340%",
                    left: "45%",
                    rotate: "180deg",
                    scale: 1.2,
                    duration: 2
                }, 'circles3');

                t3.to('#circle2, #circle7', {
                    top: "340%",
                    left: "90%",
                    rotate: "180deg",
                    scale: 1.2,
                    duration: 2
                }, 'circles3');
            }
        });

        // Cleanup function
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          locoScroll.destroy();
      };
    }, []);

  return (
    <div ref={containerRef} className=" smooth-scroll">
        <div className="bg-black hero-section slide slide1" id="slide1">
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
        </div>
    </div>
  )
}

export default App