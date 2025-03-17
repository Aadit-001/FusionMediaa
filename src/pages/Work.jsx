import React from 'react';
import bus from '../assets/bus.png';  
import airport from '../assets/airport.png';
import billboard from '../assets/billboard.png';
import theatre from '../assets/theatre.png';
import metro from '../assets/metro.png';
import busstop from '../assets/busstop.png';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "RIGI",
      description: "Connected Commerce for Empowerment Platform",
      image: bus,
      
    },
    {
      id: 2,
      title: "BMW",
      description: "Optimized Car Interface for Digital Studio",
      image: airport,
      
    },
    {
      id: 3,
      title: "SPS Canada",
      description: "Simplified Integration System Dashboard",
      image: billboard,
      
    },
    {
      id: 4,
      title: "Nirmal Bang",
      description: "Streamlined Investment Platform",
      image: theatre,
      
    },
    {
      id: 5,
      title: "Tesla Motors",
      description: "Electric Vehicle Dashboard Interface",
      image: metro,
      
    },
    {
      id: 6,
      title: "SpaceX",
      description: "Mission Control Dashboard",
      image: busstop,
      
    }
  ];

  return (
    <div className="main-container"> {/* Extremely increased spacing */}
      <div className="container mx-auto px-4 md:px-6">
      <div className="h-[60px]"></div>
        {/* Small "WORK" text above heading */}
        <p className="text-gray-500 uppercase tracking-wider mb-4">WORK</p>
        
        {/* Header Section */}
        <div className="mb-24"> {/* Increased bottom margin */}
          <h1 className="text-4xl md:text-5xl font-normal mb-4 leading-tight"> 
            We Have<br />
            Designed Experiences<br />
            For Over 260 Projects.
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-24"> {/* Doubled bottom margin */}
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6"> {/* Added margin bottom */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[400px] object-cover" 
                />
              </div>
              <div className="space-y-3"> {/* Using space-y for consistent spacing */}
                <h3 className="text-2xl font-normal">{project.title}</h3> {/* Adjusted size and removed bold */}
                <p className="text-gray-600">{project.description}</p>
                <p className="text-gray-500">{project.category}</p>
                <p className="text-gray-500 hover:text-black transition-colors">{project.viewLink}</p>
              </div>
            </div>
          ))}
        </div>

        {/* "More Work" Section */}
        <div className="border border-gray-300 rounded-lg py-10 px-16 flex justify-between items-center h-32"> 
          <p className="text-gray-700 text-4xl font-medium ml-[100px]">We have more awesome work to show</p> {/* Using ml-[100px] instead of pl */}
          <button className="bg-[#6366F1] text-white rounded-full p-4 hover:bg-[#5558DD] transition-colors mr-[100px]"> {/* Using mr-[100px] */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="h-[80px]"></div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-[#6366F1] via-[#7C3AED] to-[#8B5CF6] text-white py-60 rounded-lg h-[300px] flex items-center justify-center"> {/* Increased mb-20 to mb-[200px] */}
          <h2 className="text-5xl md:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight">
            Let's create a measurable<br />
            impact on your business.
          </h2>
        </div>
      </div>
    </div>
    
  );
};

export default Work;