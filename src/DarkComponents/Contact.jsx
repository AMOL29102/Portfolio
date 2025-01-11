import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function Contact() {
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center space-x-12">
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/AMOL29102"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors">
                <Github className="w-8 h-8" />
              </div>
              <span>GitHub</span>
            </motion.a>
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/amol-patil-53389325a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="w-8 h-8" />
              </div>
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:amolpatilap2910@gmail.com"
              className="flex flex-col items-center space-y-2"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <span>Email</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;