import React, { useState, useEffect, useRef } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import logoWhite from '../assets/logoWhite.png';

const SERVICES = [
  {
    name: "Content Marketing",
    description: "Engaging content that connects.",
    lightColor: "bg-blue-100",
    link: "/services/contentmarketing"
  },
  {
    name: "Branding",
    description: "Identity that stands out.",
    lightColor: "bg-green-100",
    link: "/services/branding"
  },
  {
    name: "Social Media Marketing",
    description: "Buzz where it matters.",
    lightColor: "bg-purple-100",
    link: "/services/socialmediamarketing"
  },
  {
    name: "Website Services",
    description: "Websites that work.",
    lightColor: "bg-indigo-100",
    link: "/services/website"
  },
  {
    name: "Event Marketing",
    description: "Events that pop.",
    lightColor: "bg-red-100",
    link: "/services/eventmarketing"
  },
  {
    name: "Public Relations",
    description: "Shaping public voice.",
    lightColor: "bg-yellow-100",
    link: "/services/publicrelations"
  },
  {
    name: "OOH",
    description: "Ads that turn heads.",
    lightColor: "bg-pink-100",
    link: "/services/ooh"
  }
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const servicesTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleServiceClick = (link) => {
        setIsServicesHovered(false);
        setIsMobileMenuOpen(false);
        navigate(link);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavigation = (e) => {
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const isServicesPage = location.pathname === '/services' || location.pathname.startsWith('/services/');

    const handleServicesMouseEnter = () => {
        if (servicesTimeoutRef.current) {
            clearTimeout(servicesTimeoutRef.current);
        }
        setIsServicesHovered(true);
    };

    const handleServicesMouseLeave = () => {
        servicesTimeoutRef.current = setTimeout(() => {
            setIsServicesHovered(false);
        }, 200); // 200ms delay before closing
    };

    return (
        <div 
            className={`fixed top-0 w-full transition-all duration-300 ${
                isScrolled ? "h-[8%]" : "h-[10%]"
            } ${isDarkMode ? 'bg-black border-b border-gray-800' : 'bg-white border-b border-gray-200'} w-full z-50 align-middle items-center flex`}
        > 
            <div className={`menuu w-full ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <Link to="/" className="inline-block w-[50%] pl-4 flex items-center justify-center" onClick={handleNavigation}>
                    <img 
                        src={isDarkMode ? logoWhite : logo} 
                        alt="Logo" 
                        className={`logo-img ${isDarkMode ? 'w-[400px] h-[80px]' : 'w-full h-auto max-h-[60px]'}`}
                        style={{ 
                            objectFit: 'contain',
                            transform: isDarkMode ? 'scale(1)' : 'none',
                            maxWidth: '100%'
                        }}
                    />
                </Link>
                
                {/* Mobile Menu Button */}
                <button 
                    className={`md:hidden p-2 ${isDarkMode ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-600'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
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
                            d="M4 6h16M4 12h16M4 18h16" 
                        />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <ul className={`nav-links hidden md:flex ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <li><NavLink 
                        to="/work" 
                        className={({ isActive }) => 
                            isActive ? "text-purple-600" : isDarkMode ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black"
                        }
                        onClick={handleNavigation}
                    >Work</NavLink></li>
                    <li 
                        className="relative"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                    >
                        <NavLink 
                            to="#"
                            className={({ isActive }) => 
                                isActive || isServicesPage ? (isDarkMode ? "text-white" : "text-gray-900") : isDarkMode ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-gray-900"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation();
                            }}
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
                                    <span className={`h-1 w-1 ml-1 ${isDarkMode ? 'bg-gray-300' : 'bg-gray-400'} rounded-full inline-block`}></span>
                                )}
                            </div>
                        </NavLink>
                        {isServicesHovered && (
                            <div 
                                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] grid grid-cols-3 gap-4 p-6 ${
                                    isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
                                } shadow-2xl rounded-lg mt-2`}
                                onMouseEnter={handleServicesMouseEnter}
                                onMouseLeave={handleServicesMouseLeave}
                            >
                                {SERVICES.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-lg flex justify-between items-center cursor-pointer hover:scale-105 transition-transform ${
                                            isDarkMode ? 'bg-gray-900 hover:bg-gray-800' : service.lightColor
                                        }`}
                                        onClick={() => handleServiceClick(service.link)}
                                    >
                                        <div>
                                            <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.name}</h3>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{service.description}</p>
                                        </div>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}
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
                            isActive ? "text-purple-600" : isDarkMode ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black"
                        }
                        onClick={handleNavigation}
                    >Clients</NavLink></li>
                    <li><NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            isActive ? "text-purple-600" : isDarkMode ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black"
                        }
                        onClick={handleNavigation}
                    >About</NavLink></li>
                    <li><NavLink 
                        to="/blogs" 
                        className={({ isActive }) => 
                            isActive ? "text-purple-600" : isDarkMode ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black"
                        }
                        onClick={handleNavigation}
                    >Blogs</NavLink></li>
                    <li><NavLink 
                        to="/admin/view" 
                        className={({ isActive }) => 
                            isActive ? "text-purple-600" : isDarkMode ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black"
                        }
                        onClick={handleNavigation}
                    >Admin</NavLink></li>
                    <li>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-700 hover:text-gray-900'}`}
                        >
                            {isDarkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </li>
                    <Link to="/contact" onClick={handleNavigation}>
                        <button className={`${isScrolled ? 'btnScrolled liquid' : 'btn liquid'} ${
                            isDarkMode ? 'text-white border-white hover:bg-white hover:text-black' : 'text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white'
                        }`}>
                            <span>contact</span>
                        </button>
                    </Link>
                </ul>

                {/* Mobile Navigation Menu */}
                <div className={`mobile-menu md:hidden fixed top-0 left-0 w-full h-full ${
                    isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
                } z-50 transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-8">
                            <Link to="/" onClick={handleNavigation}>
                                <img src={isDarkMode ? logoWhite : logo} alt="Logo" className="w-32" />
                            </Link>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`p-2 hover:opacity-75 transition-opacity ${isDarkMode ? 'text-white' : 'text-black'}`}
                            >
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
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className="space-y-4">
                            <li>
                                <NavLink 
                                    to="/work" 
                                    className={`block text-xl py-2 transition-colors ${isDarkMode ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-black'}`}
                                    onClick={handleNavigation}
                                >Work</NavLink>
                            </li>
                            <li>
                                <div className="text-xl py-2">
                                    <div 
                                        className={`flex items-center cursor-pointer transition-colors ${isDarkMode ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-black'}`}
                                        onClick={() => setIsServicesHovered(!isServicesHovered)}
                                    >
                                        Services
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className={`h-4 w-4 ml-1 transition-transform ${isServicesHovered ? 'rotate-180' : ''}`}
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
                                    </div>
                                    {isServicesHovered && (
                                        <div className={`mt-2 space-y-2 pl-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} p-4 rounded-lg transition-colors`}>
                                            {SERVICES.map((service, index) => (
                                                <div
                                                    key={index}
                                                    className={`p-3 rounded-lg cursor-pointer transition-colors hover:opacity-90 ${
                                                        isDarkMode ? 'bg-gray-900 hover:bg-gray-800' : service.lightColor
                                                    }`}
                                                    onClick={() => handleServiceClick(service.link)}
                                                >
                                                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.name}</h3>
                                                    <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>{service.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li>
                                <NavLink 
                                    to="/clients" 
                                    className={`block text-xl py-2 transition-colors ${isDarkMode ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-black'}`}
                                    onClick={handleNavigation}
                                >Clients</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about" 
                                    className={`block text-xl py-2 transition-colors ${isDarkMode ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-black'}`}
                                    onClick={handleNavigation}
                                >About</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/blogs" 
                                    className={`block text-xl py-2 transition-colors ${isDarkMode ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-black'}`}
                                    onClick={handleNavigation}
                                >Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/admin/view" 
                                    className={`block text-xl py-2 transition-colors ${isDarkMode ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-black'}`}
                                    onClick={handleNavigation}
                                >Admin</NavLink>
                            </li>
                            <li>
                                <button
                                    onClick={toggleDarkMode}
                                    className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-gray-900 text-yellow-400' : 'hover:bg-gray-100 text-gray-700'}`}
                                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                >
                                    {isDarkMode ? (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar