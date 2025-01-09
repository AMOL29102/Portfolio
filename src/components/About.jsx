import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen py-20 bg-gray-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 text-xl">
              I'm a passionate Full Stack Developer with over 5 years of experience in building
              web applications. My journey in software development started with a curiosity
              about how things work on the internet, which led me to pursue a career in web development.
            </p>
            <p className="text-gray-300 text-xl">
              I specialize in building scalable web applications using modern technologies
              and best practices. My approach to development focuses on creating clean,
              maintainable code that delivers exceptional user experiences.
            </p>
          </div>
          <div className="space-y-6">
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li>🎓 Computer Science Graduate</li>
                <li>💼 5+ Years of Professional Experience</li>
                <li>🌍 Remote Work Enthusiast</li>
                <li>📚 Continuous Learner</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;