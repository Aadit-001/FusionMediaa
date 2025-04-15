import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Branding = () => {
  const navigate = useNavigate();

  const services = [
    {
      category: "Design",
      items: [
        { title: "Logo Creation", description: "Crafting intuitive and visually appealing user interfaces" },
        { title: "Brand Identity", description: "Bringing designs to life with pixel-perfect implementation" },
        { title: "Product Branding", description: "Establishing consistent design standards and patterns" },
        { title: "Rebranding Strategy", description: "Building scalable and maintainable design frameworks" }
      ]
    },
    {
      category: "Experience",
      items: [
        { title: "Social Media Graphics", description: "Creating seamless and engaging user experiences" },
        { title: "Poster and Flyer Design", description: "Understanding user needs through data-driven insights" },
        { title: "Banner Ads", description: "Strategic guidance for optimal user experience" },
        { title: "3D Design", description: "Crafting clear and compelling content that guides users" },
        { title: "Animated Graphics", description: "Crafting clear and compelling content that guides users" }
      ]
    },
  ];

  const processSteps = [
    {
      icon: (
        <motion.svg 
          className="w-16 h-16 mb-6"
          viewBox="0 0 48 48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.path
            d="M8 12h32v4H8zm0 10h32v4H8zm0 10h32v4H8z"
            stroke="#FF4D6D"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.circle
            cx="36"
            cy="14"
            r="6"
            fill="#FF4D6D"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          />
        </motion.svg>
      ),
      title: "Research & Discovery",
      description: "We dive deep into understanding your brand's essence, target audience, and market positioning through comprehensive research and stakeholder interviews."
    },
    {
      icon: (
        <motion.svg 
          className="w-16 h-16 mb-6"
          viewBox="0 0 48 48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.path
            d="M24 6L4 26l20 20 20-20L24 6z"
            stroke="#FF4D6D"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
        </motion.svg>
      ),
      title: "Strategy Development",
      description: "We craft a comprehensive branding strategy that aligns with your business objectives and resonates with your target audience."
    },
    {
      icon: (
        <motion.svg 
          className="w-16 h-16 mb-6"
          viewBox="0 0 48 48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            stroke="#FF4D6D"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
          <motion.path
            d="M12 24l8 8 16-16"
            stroke="#FF4D6D"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          />
        </motion.svg>
      ),
      title: "Creative Execution",
      description: "We bring your brand to life through carefully crafted visual elements, maintaining consistency across all touchpoints."
    },
    {
      icon: (
        <motion.svg 
          className="w-16 h-16 mb-6"
          viewBox="0 0 48 48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.path
            d="M6 6l36 36M6 42l36-36"
            stroke="#FF4D6D"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          />
        </motion.svg>
      ),
      title: "Implementation & Launch",
      description: "We ensure smooth implementation of your brand assets and guide you through the launch process with comprehensive brand guidelines."
    }
  ];

  const otherServices = [
    {
      name: "Content Marketing",
      description: "Engaging content that connects.",
      color: "bg-blue-100",
      link: "/services/web-development"
    },
    {
      name: "Social Media Marketing",
      description: "Buzz where it matters.",
      color: "bg-purple-100",
      link: "/services/ui-ux"
    },
    {
      name: "Website Services",
      description: "Websites that work.",
      color: "bg-indigo-100",
      link: "/services/cloud"
    },
    {
      name: "Event Marketing",
      description: "Events that pop.",
      color: "bg-red-100",
      link: "/services/ai-ml"
    },
    {
      name: "Public Relations",
      description: "Shaping public voice.",
      color: "bg-yellow-100",
      link: "/services/cybersecurity"
    },
    {
      name: "OOH",
      description: "Ads that turn heads.",
      color: "bg-pink-100",
      link: "/services/digital-marketing"
    }
  ];

  const handleServiceClick = (link) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <div className="absolute top-8 right-[35%] mt-14">
        <div className="mb-4 -ml-[5px]">
          <h1 className="text-[#FF4D6D] text-2xl font-semibold">BRANDING</h1>
        </div>
        <nav className="flex items-center gap-2 text-lg justify-end">
          <Link to="/" className="text-gray-900 hover:text-gray-600">Home</Link>
          <span className="text-gray-400">•</span>
          <Link to="/services" className="text-gray-900 hover:text-gray-600">Services</Link>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400">Branding</span>
        </nav>
      </div>

      <div className="flex min-h-screen mt-2">
        {/* Left Side - Animation Space */}
        <div className="w-1/2 flex items-center justify-center">
          {/* Space for animation */}
          <div className="relative">
            <div className="w-[400px] h-[400px]">
              {/* Dotted circle */}
              <div className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-full animate-spin-slow"></div>
              {/* Red dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF4D6D] rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF4D6D] rounded-full"></div>
              {/* Center icon */}
              <div className="absolute inset-0 m-auto w-32 h-32">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border-2 border-gray-800 rounded-full"></div>
                  {/* Brain circuit lines */}
                  <div className="absolute inset-8 flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-gray-800 rounded-full flex items-center justify-center">
                      {/* Add small red dots here */}
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-1.5 h-1.5 bg-[#FF4D6D] rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-[#FF4D6D] rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-[#FF4D6D] rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-[#FF4D6D] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content 7*/}
        <div className="w-1/2 flex items-center ">
          <div className="max-w-xl">
            <div className="mb-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[60px] font-bold leading-tight tracking-tight"
              >
                We create<br />
                designs to<br />
                augment User<br />
                Experiences.
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-8 py-16  ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-[#FF4D6D] text-2xl font-bold mb-6 tracking-wide text-left ml-8">What Do We Serve ?</h1>
            <h3 className="text-4xl font-bold max-w-3xl leading-tight text-left ml-8">
              We help you translate a simple idea into an exotic Digital design transformation vision.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-8 ml-8">
            {services.flatMap(category => category.items).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative pb-4">
                  <h3 className="text-[28px] font-medium text-black mb-3">
                    {service.title}
                  </h3>
                  <div className="absolute bottom-0 left-0 w-full border-b-[3px] border-dotted border-black opacity-70" style={{ borderBottomWidth: '3px', borderStyle: 'dotted', borderSpacing: '4px' }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Do It Section */}
      <div className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-[#FF4D6D] text-2xl font-bold mb-6">HOW WE DO IT ?</h2>
            <h3 className="text-4xl font-bold">
              Leaving no stone unturned at every step.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center group">
                  <div className="relative">
                    {step.icon}
                    <motion.div
                      className="absolute inset-0 bg-pink-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-gray-200"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <motion.div
                      className="absolute right-0 -top-1 w-2 h-2 bg-[#FF4D6D] rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Work Section */}
      <div className="px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FF4D6D] text-4xl font-medium mb-12 text-left ml-18"
          >
            Design.
          </motion.h2>

          <div className="space-y-10 max-w-4xl mx-auto">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <img
                src="https://fabrikbrands.com/wp-content/uploads/Examples-Of-Corporate-Branding-01-scaled.jpg"
                alt="Corporate Identity Project"
                className="w-full max-w-5xl h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 max-w-3xl ml-4"
            >
              <h3 className="text-4xl font-bold tracking-tight">Corporate Identity</h3>
              <p className="text-xl text-gray-800 leading-relaxed">
                Crafted a cohesive brand identity system that elevates business presence and connects with the target audience.
              </p>
              <div className="flex items-center gap-x-4 text-gray-600">
                <span className="font-medium">Brand Strategy</span>
                <span className="text-[#FF4D6D]">•</span>
                <span className="font-medium">Visual Identity</span>
                <span className="text-[#FF4D6D]">•</span>
                <span className="font-medium">Guidelines</span>
                <span className="text-[#FF4D6D]">•</span>
                <span className="font-medium">Collateral</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Other Services Section */}
      <div className="px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FF4D6D] text-4xl font-medium mb-16 text-left ml-18"
          >
            Explore Other Services.
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                className={`${service.color} p-8 rounded-lg flex justify-between items-center cursor-pointer hover:scale-105 transition-transform`}
                onClick={() => handleServiceClick(service.link)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div>
                  <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-700">{service.description}</p>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
