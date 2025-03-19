import React from 'react'
import { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link , NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
        <div className={`fixed top-0 w-full transition-all duration-300 ${
        isScrolled ? "h-[8%] bg-white border-b border-black w-full z-1000 align-middle items-center flex " : "nav-container"
      }`}> 
            <div className="menuu">
                <Link to="/" className="inline-block w-[20%]">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="logo-img w-full h-auto"
                    />
                </Link>
                <ul className="nav-links">
                    <li><NavLink to="/work" isActive={(isActive) => isActive ? "active" : ""}>Work</NavLink></li>
                    <li className="dropdown"><NavLink to="/services" isActive={(isActive) => isActive ? "active" : ""}>Services</NavLink></li>
                    <li><NavLink to="/clients" isActive={(isActive) => isActive ? "active" : ""}>Clients</NavLink></li>
                    <li><NavLink to="/about" isActive={(isActive) => isActive ? "active" : ""}>About</NavLink></li>
                    <DotLottieReact
                        src="https://lottie.host/c594baa9-4246-49fb-b68d-f0fad72835da/X2IXoQ5QMS.lottie"
                        background="transparent"
                        color="#fff"
                        speed="1"
                        style={isScrolled ? {width: 30, height: 30} : {width: 40, height: 40}}
                        loop
                        autoplay
                    />
                    {/* <DotLottieReact
                        src="https://lottie.host/c5595e97-ee5d-447e-8287-4c46cf76334e/JxhDDL6tDz.lottie"
                        background="transparent"
                        speed="1"
                        style="width: 30px; height: 30px"
                        loop
                        autoplay
                    /> */}
                    <Link to="/contact">
                        <button className={`${isScrolled ? 'btnScrolled liquid' : 'btn liquid'}`}><span>contact</span></button>
                    </Link>
                </ul>
            </div>
        </div>
  )
}

export default Navbar