import React, { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

const SERVICES = [
  {
    name: "Content Marketing",
    description: "Engaging content that connects.",
    color: "bg-blue-100",
    link: "/services/contentmarketing"
  },
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

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
        setIsServicesHovered(false);
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
        navigate(link);
    };

    const isServicesPage = location.pathname === '/services' || location.pathname.startsWith('/services/');

    return (
        <div 
            className={`fixed md:pl-[4%] md:pr-[8%] w-screen top-0 transition-all duration-300 ${
                isScrolled ? "h-[8%]" : "h-[10%]"
            } bg-white border-b border-black w-full z-1000 align-middle items-center flex`}
            onMouseLeave={() => setIsServicesHovered(false)}
        > 
            <div className="menuu w-full flex items-center justify-between ">
                {/* Logo */}
                <Link to="/" className="inline-block w-[100%] md:w-[15%]">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="logo-img w-full h-auto"
                    />
                </Link>
                {/* Desktop Nav */}
                <ul className="nav-links  relative hidden md:flex items-center gap-3">
                    <li><NavLink 
                        to="/work" 
                        className={({ isActive }) => 
                            isActive ? "text-purple-600" : ""
                        }
                    >Work</NavLink></li>
                    <li 
                        className="relative"
                        onMouseEnter={() => setIsServicesHovered(true)}
                    >
                        <NavLink 
                            to="/services"
                            className={({ isActive }) => 
                                isActive || isServicesPage ? "text-purple-600" : ""
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
                        {isServicesHovered && (
                            <div className="absolute top-full left-1/2 -ml-2 transform -translate-x-1/2 w-[1500%] grid grid-cols-3 gap-4 p-6 bg-white shadow-2xl rounded-lg mt-2 z-50">
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

                {/* Mobile Nav */}
                <div className="flex items-center justify-end w-full md:hidden">
                    <DotLottieReact
                        src="https://lottie.host/c594baa9-4246-49fb-b68d-f0fad72835da/X2IXoQ5QMS.lottie"
                        background="transparent"
                        color="#fff"
                        speed="1"
                        style={isScrolled ? {width: 40, height: 30} : {width: 40, height: 40}}
                        loop
                        autoplay
                    />
                    <button
                        className="ml-2 p-2 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Open menu"
                    >
                        {/* Hamburger Icon */}
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-2xl z-50 flex flex-col p-4 animate-fadeIn">
                        <NavLink to="/work" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Work</NavLink>
                        <button className="py-2 flex items-center w-full" onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}>
                            <span>Services</span>
                            <svg className={`ml-2 w-4 h-4 transform transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                        </button>
                        {isMobileServicesOpen && (
                            <div className="pl-4 flex flex-col">
                                {SERVICES.map((service, idx) => (
                                    <button
                                        key={idx}
                                        className="py-2 text-left hover:bg-gray-100 rounded"
                                        onClick={() => handleServiceClick(service.link)}
                                    >
                                        <span className="font-bold">{service.name}</span>
                                        <span className="block text-xs text-gray-500">{service.description}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                        <NavLink to="/clients" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Clients</NavLink>
                        <NavLink to="/about" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
                        <NavLink to="/blogs" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Blogs</NavLink>
                        <NavLink to="/admin/blog" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Admin</NavLink>
                        <Link to="/contact" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="btn liquid w-full"><span>Contact</span></button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar