import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import bookmyshow from '../assets/clients/bookmyshow.png';
import youtube from '../assets/clients/youtube.png';
import axisbank from '../assets/clients/axisbank.png';  
import quest from '../assets/clients/quest.png';
import symbiosis from '../assets/clients/symbiosis.png';
import witty from '../assets/clients/witty.png';
import tata from '../assets/clients/tata.png';
import electrolab from '../assets/clients/electrolab.png';
import nesco from '../assets/clients/nesco.png';
import svcbank from '../assets/clients/svcbank.png';
import leela from '../assets/clients/leela.png';
import vi from '../assets/clients/VI.png';
import kimatsu from '../assets/clients/kimatsu.png';
import jp from '../assets/clients/JP.png';



const Clients = () => {
  const clientLogos = [
    { id: 1, name: 'BookMyShow', logo: bookmyshow },
    { id: 2, name: 'Youtube', logo: youtube },
    { id: 3, name: 'Axis Bank', logo: axisbank },
    { id: 4, name: 'Quest', logo: quest },
    { id: 5, name: 'Symbiosis', logo: symbiosis },
    { id: 6, name: 'Witty', logo: witty },
    { id: 7, name: 'Tata', logo: tata },
    { id: 8, name: 'Electrolab', logo: electrolab },
    { id: 9, name: 'NESCO', logo: nesco },
    { id: 10, name: 'SVC Bank', logo: svcbank },
    { id: 11, name: 'Leela', logo: leela },
    { id: 12, name: 'VI', logo: vi },
    { id: 13, name: 'Kimatsu', logo: kimatsu },
    { id: 14, name: 'JP', logo: jp },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Fusion Media has been instrumental in transforming our digital presence. Their innovative approach and attention to detail have helped us achieve remarkable results.",
      name: "Sarah Johnson",
      position: "CEO, TechVision Inc.",
      image: bookmyshow
    },
    {
      id: 2,
      text: "Working with Fusion Media has been a game-changer for our business. Their creative solutions and technical expertise have exceeded our expectations.",
      name: "Michael Chen",
      position: "Director, Innovation Labs",
      image: bookmyshow
    },
    {
      id: 3,
      text: "The team's dedication to quality and innovation is unmatched. They've helped us create experiences that truly resonate with our users.",
      name: "Emma Williams",
      position: "Head of Design, Future Corp",
      image: bookmyshow
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

  return (
    <div className="pt-[600px] mt-[500px] main-container">
      <div className="container mx-auto px-4 md:px-6">
        <div className="h-[60px]"></div>
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-gray-500 mb-8 justify-center">
          <span>Home</span>
          <span>•</span>
          <span className="text-gray-400">Clients</span>
        </div>

        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
            We make happy clients by<br />
            interconnecting technology<br />
            with business & art.
          </h2>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-32">
          <DotLottieReact
            src="https://lottie.host/83a9fd3a-e1a0-448b-b854-f1e911428554/yCSoUfNkOr.lottie"
            loop
            autoplay
            style={{ width: '400px', height: '400px' }}
          />
        </div>

        {/* Clients Title */}
        <div className="flex justify-center mb-[200px]">
          <h1 className="text-[#FF3366] text-5xl font-medium">Our Partners</h1>
        </div>

        {/* Spacing div */}
        <div className="h-[100px]"></div>

        {/* Clients Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-18 mb-[100px] mx-[-8px]">
          {clientLogos.map((client) => (
            <div 
              key={client.id} 
              className="flex items-center justify-center px-2"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-18 w-auto transition-all duration-300"
              />
            </div>
          ))}
        </div>

          {/* Spacing div */}
        <div className="h-[100px]"></div>

        {/* Testimonials Section */}
        <div className="mb-[200px] flex flex-col items-center">
          {/* Testimonial Header */}
          <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold">
              Happy clients with 100+<br />
              successful Projects
            </h3>
            
            {/* Spacing div */}
            <div className="h-[30px]"></div>

            <h2 className="text-[#FF3366] text-2xl font-medium mb-4">TESTIMONIALS</h2>    
          </div>

           {/* Spacing div */}
        <div className="h-[50px]"></div>

          {/* Testimonial Content */}
          <div className="max-w-[900px] mx-auto flex flex-col items-center relative">
            {/* Quote Mark */}
            <span className="absolute -left-16 top-0 text-[#FF3366] text-[120px] font-serif leading-none">"</span>
            
            {/* Testimonial Text */}
            <div className="text-center w-full">
              <p className="text-2xl md:text-3xl font-normal mb-16 leading-relaxed text-left pl-8">
                {testimonials[currentTestimonial].text}
              </p>
           {/* Spacing div */}
        <div className="h-[50px]"></div>
              {/* Author Info */}
              <div className="flex items-center justify-start w-full gap-4 mb-24  pl-8">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-[#FF3366]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

                 {/* Spacing div */}
        <div className="h-[100px]"></div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-[#6366F1] via-[#7C3AED] to-[#8B5CF6] text-white py-60 rounded-lg mb-[200px] h-[300px] flex items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight">
            Ready to transform<br />
            your digital presence?
          </h2>
        </div>
                 {/* Spacing div */}
                 <div className="h-[100px]"></div>
      </div>
    </div>
  );
};

export default Clients;
