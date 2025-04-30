import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import { HiCode, HiOutlinePencilAlt, HiOutlineLightBulb } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [showSkills, setShowSkills] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Show skills animation after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkills(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Parallax effect calculations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // Skill items for the animated bubble
  const skillItems = [
    { icon: HiCode, label: "React", color: "bg-indigo-500" },
    { icon: HiOutlinePencilAlt, label: "UI/UX", color: "bg-cyan-500" },
    { icon: HiOutlineLightBulb, label: "Design", color: "bg-pink-500" },
  ]

  return (
    <motion.section
      ref={containerRef}
      style={{
        scale: scale,
        transformOrigin: 'top center'
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0.3 + Math.random() * 0.4
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0.3 + Math.random() * 0.4
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className={`absolute ${["w-64 h-64", "w-96 h-96", "w-48 h-48"][i % 3]
              } rounded-full blur-3xl ${["from-cyan-500/20", "from-indigo-500/20", "from-pink-500/20"][i % 3]
              } ${["to-cyan-500/5", "to-indigo-500/5", "to-pink-500/5"][i % 3]
              } bg-gradient-to-r`}
          />
        ))}
      </div>

      {/* Gradient Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-secondary)] to-[var(--color-accent)] opacity-10 z-0"
      />

      {/* Hero Content */}
      <motion.div
        style={{
          y: textY,
          opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0])
        }}
        className="relative z-10 text-center px-4 flex flex-col items-center md:flex-row md:text-left md:max-w-6xl md:px-8 lg:gap-12"
      >

        {/* Left Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
          className="w-full md:w-2/5 flex justify-center"
        >
          <div className="relative flex items-center justify-center">
            {/* Animated rings around profile image */}
            <motion.div
              animate={{
                rotate: 360,
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute rounded-full border-2 border-dashed border-[var(--color-primary)] opacity-50"
              style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
            />
            <motion.div
              animate={{
                rotate: -360,
                transition: { duration: 30, repeat: Infinity, ease: "linear" }
              }}
              className="absolute rounded-full border-2 border-dashed border-[var(--color-accent)] opacity-30"
              style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
            />

            {/* Profile Image with Hover Effect */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(34, 211, 238, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative rounded-full overflow-hidden border-4 border-white/20 shadow-2xl w-60 h-60 md:w-72 md:h-72 z-10"
            >
              <img
                src="/profile.jpeg"
                alt="Anushka Jadhav"
                onLoad={() => setIsImageLoaded(true)}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/40 to-[var(--color-accent)]/40 mix-blend-overlay"
              />
            </motion.div>

            {/* Floating skill bubbles with spawn-and-spread animation */}
            <div className="absolute inset-0 pointer-events-none">
              <AnimatePresence>
                {showSkills && skillItems.map((skill, index) => {
                  // Calculate positions to spread evenly in a circle
                  const angle = index * (Math.PI * 2 / 3) + (Math.PI / 6)
                  const radius = 200 // Position over the outer rotating ring

                  return (
                    <motion.div
                      key={skill.label}
                      initial={{
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: Math.cos(angle) * radius,
                        y: Math.sin(angle) * radius
                      }}
                      transition={{
                        opacity: { delay: index * 0.2, duration: 0.3 },
                        scale: { delay: index * 0.2, duration: 0.5 },
                        x: { delay: index * 0.2 + 0.3, duration: 0.8, type: "spring", stiffness: 50 },
                        y: { delay: index * 0.2 + 0.3, duration: 0.8, type: "spring", stiffness: 50 }
                      }}
                      className={`absolute ${skill.color} text-white p-3 rounded-full shadow-lg flex items-center justify-center pointer-events-auto`}
              style = {{
                  width: '45px',
                  height: '45px',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-22.5px', // Half of width to center
                  marginTop: '-22.5px',  // Half of height to center
                  zIndex: 20
                }}
            >
                {/* Icon with bobbing animation */}
                <motion.div
                  animate={{
                    y: [0, -5, 0, 5, 0]
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  <skill.icon className="text-xl" />
                </motion.div>
              </motion.div>
              )
        })}
            </AnimatePresence>

            {/* Add rotating ring for the bubbles to follow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                rotate: 360
              }}
              transition={{
                opacity: { delay: 0.8, duration: 0.5 },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.2
                }
              }}
              className="absolute w-full h-full flex items-center justify-center"
              style={{ pointerEvents: "none" }}
            >
              {showSkills && skillItems.map((skill, index) => {
                const angle = index * (Math.PI * 2 / 3) + (Math.PI / 6)
                const radius = 200

                return (
                  <motion.div
                    key={`orbit-${skill.label}`}
              initial = {{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1 + (index * 0.2) }}
              className="absolute w-2 h-2 rounded-full bg-white/30"
              style={{
                transform: `translate(${ Math.cos(angle) * radius }px, ${ Math.sin(angle) * radius }px)`,
              }}
            />
              )
        })}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Right Column - Text & Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full md:w-3/5 mt-8 md:mt-0"
      >
        {/* Dynamic Typing Introduction */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-[var(--color-text-primary)]">
          <TypeAnimation
            sequence={[
              'Hi, I\'m Anushka Jadhav',
              1000,
              'A UI/UX Designer',
              1000,
              'A Web Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        {/* Gradient subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl text-[var(--color-text-secondary)] mb-5">
            Crafting digital experiences that blend
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] 
                text-transparent bg-clip-text font-medium"> creativity with cutting-edge technology</span>
          </p>
        </motion.div>

        {/* Brief intro text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[var(--color-text-secondary)] mb-6 max-w-xl"
        >
          I specialize in creating intuitive interfaces and responsive websites
          that deliver exceptional user experiences across all devices.
          Let's build something amazing together!
        </motion.p>

        {/* Interactive Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {[
            {
              icon: FaDownload,
              text: 'Download CV',
              color: 'bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/80',
              href: '/resume.pdf'
            },
            {
              icon: FaLinkedin,
              text: 'LinkedIn',
              color: 'bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/80',
              href: 'https://linkedin.com/in/anushka-jadhav-a45411257'
            },
            {
              icon: FaGithub,
              text: 'GitHub',
              color: 'bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/80',
              href: 'https://github.com/TechWolf405'
            }
          ].map((button, index) => (
            <motion.a
              key={button.text}
              href={button.href}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8 + index * 0.2,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-full 
                  text-white font-medium tracking-wide
                  transition-all duration-300 ease-out
                  ${button.color}
                `}
            >
              <button.icon className="text-xl" />
              {button.text}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>

      {/* Scroll Indicator */ }
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 1.5,
      type: "spring",
      stiffness: 100
    }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-secondary)]"
  >
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="flex flex-col items-center"
    >
      <span className="mb-2 text-sm font-medium">Scroll Down</span>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </motion.div>
  </motion.div>
    </motion.section >
  )
}