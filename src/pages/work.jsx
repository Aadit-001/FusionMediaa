import React from 'react';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "RIGI",
      description: "Connected Commerce for Empowerment Platform",
      image: "/images/rigi-project.jpg",
      category: "UI/UX - Web"
    },
    {
      id: 2,
      title: "BMW",
      description: "Optimized Car Interface for Digital Studio",
      image: "/images/bmw-project.jpg",
      category: "UI/UX - Mobile"
    },
    {
      id: 3,
      title: "SPS Canada",
      description: "Simplified Integration System Dashboard",
      image: "/images/sps-project.jpg",
      category: "UI/UX - Web"
    },
    {
      id: 4,
      title: "Nirmal Bang",
      description: "Streamlined Investment Platform",
      image: "/images/nirmal-project.jpg",
      category: "UI/UX - Mobile"
    },
    {
      id: 5,
      title: "Tesla Motors",
      description: "Electric Vehicle Dashboard Interface",
      image: "/images/tesla-project.jpg",
      category: "UI/UX - Web"
    },
    {
      id: 6,
      title: "SpaceX",
      description: "Mission Control Dashboard",
      image: "/images/spacex-project.jpg",
      category: "UI/UX - Web"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4">
          We Have<br />
          Designed Experiences<br />
          For Over 260 Projects.
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-20 text-center bg-purple-700 text-white py-20">
        <h2 className="text-4xl font-bold">
          Let's create a measurable<br />
          impact on your business.
        </h2>
      </div>
    </div>
  );
};

export default Work;