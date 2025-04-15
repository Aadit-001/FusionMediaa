import React, { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

const SERVICES = [
  {
    name: "Web Development",
    description: "Custom web solutions",
    color: "bg-blue-100",
    link: "/services/web-development"
  },
  {
    name: "Mobile Apps",
    description: "Cross-platform mobile apps",
    color: "bg-green-100",
    link: "/services/mobile-apps"
  },
  {
    name: "UI/UX Design",
    description: "Intuitive design experiences",
    color: "bg-purple-100",
    link: "/services/ui-ux"
  },
  {
    name: "Cloud Solutions",
    description: "Scalable cloud infrastructure",
    color: "bg-indigo-100",
    link: "/services/cloud"
  },
  {
    name: "AI & Machine Learning",
    description: "Intelligent system development",
    color: "bg-red-100",
    link: "/services/ai-ml"
  },
  {
    name: "Cybersecurity",
    description: "Robust security solutions",
    color: "bg-yellow-100",
    link: "/services/cybersecurity"
  },
  {
    name: "Digital Marketing",
    description: "Growth-driven strategies",
    color: "bg-pink-100",
    link: "/services/digital-marketing"
  }
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    const handleServiceClick = (link) => {
        navigate(link);
    };

    const isServicesPage = location.pathname === '/services' || location.pathname.startsWith('/services/');

    return (
        <div 
            className={`fixed top-0 w-full transition-all duration-300 ${
                isScrolled ? "h-[8%]" : "h-[10%]"
            } bg-white border-b border-black w-full z-1000 align-middle items-center flex`}
            onMouseLeave={() => setIsServicesHovered(false)}
        > 
            <div className="menuu w-full">
                <Link to="/" className="inline-block w-[20%]">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="logo-img w-full h-auto"
                    />
                </Link>
                <ul className="nav-links relative">
                    <li><NavLink 
                        to="/work" 
                        className={({ isActive }) => 
                            isActive ? "text-purple-600" : ""
                        }
                    >Work</NavLink></li>
                    <li 
                        className="dropdown relative"
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onClick={() => setIsServicesHovered(prevState => !prevState)}
                    >
                        <NavLink 
                            // to="/services" 
                            className={({ isActive }) => 
                                isActive ? "text-purple-600" : ""
                            }
                        >
                            <div className="flex items-center">
                                Services 
                                {isServicesHovered ? (
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-4 w-4 ml-1 transition-transform" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M19 9l-7 7-7-7" 
                                        />
                                    </svg>
                                ) : (
                                    <span className="h-1 w-1 ml-1 bg-gray-400 rounded-full inline-block"></span>
                                )}
                            </div>
                        </NavLink>
                        {(isServicesHovered || isServicesPage) && (
                            <div className="absolute top-full left-1/2 -ml-2 transform -translate-x-1/2 w-[1500%] grid grid-cols-3 gap-4 p-6 bg-white shadow-2xl rounded-lg mt-2">
                                {SERVICES.map((service, index) => (
                                    <div 
                                        key={index} 
                                        className={`${service.color} p-4 rounded-lg flex justify-between items-center cursor-pointer hover:scale-105 transition-transform`}
                                        onClick={() => handleServiceClick(service.link)}
                                    >
                                        <div>
                                            <h3 className="font-bold text-lg">{service.name}</h3>
                                            <p className="text-sm">{service.description}</p>
                                        </div>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-6 w-6" 
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
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                    <li><NavLink 
                        to="/clients" 
                        className={({ isActive }) => 
                            isActive ? "text-purple-600" : ""
                        }
                    >Clients</NavLink></li>
                    <li><NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            isActive ? "text-purple-600" : ""
                        }
                    >About</NavLink></li>
                    {/* ye nikal na hai */}
                    <li><NavLink 
                        to="/blogs" 
                        className={({ isActive }) => 
                            isActive ? "text-purple-600" : ""
                        }
                    >Blogs</NavLink></li>
                    <li><NavLink 
                        to="/admin/blog" 
                        className={({ isActive }) => 
                            isActive ? "text-purple-600" : ""
                        }
                    >Admin</NavLink></li>
                    {/* yaha tak */}
                    <DotLottieReact
                        src="https://lottie.host/c594baa9-4246-49fb-b68d-f0fad72835da/X2IXoQ5QMS.lottie"
                        background="transparent"
                        color="#fff"
                        speed="1"
                        style={isScrolled ? {width: 30, height: 30} : {width: 40, height: 40}}
                        loop
                        autoplay
                    />
                    <Link to="/contact">
                        <button className={`${isScrolled ? 'btnScrolled liquid' : 'btn liquid'}`}><span>contact</span></button>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar