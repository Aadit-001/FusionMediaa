import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
        <div class="nav-container"> 
            <div class="menuu">
                <img src={logo} alt="Logo" width="20%" class="logo-img"/>
                <ul class="nav-links">
                    <li><Link to="/work">Work</Link></li>
                    <li class="dropdown"><Link to="/services">Services</Link></li>
                    <li><Link to="/clients">Clients</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <DotLottieReact
                        src="https://lottie.host/c594baa9-4246-49fb-b68d-f0fad72835da/X2IXoQ5QMS.lottie"
                        background="transparent"
                        color="#fff"
                        speed="1"
                        style={{width: 40, height: 40}}
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
                    <button class="btn liquid"><span>contact</span></button>
                </ul>
            </div>
        </div>
  )
}

export default Navbar