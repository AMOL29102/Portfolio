import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
  return (
    <div className="min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-blue-500 lg:block md:block">Amol Patil</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300">Full Stack Developer</h2>
          <p className="text-gray-400 max-w-lg text-lg">
            I build exceptional and scalable web applications with modern technologies.
            Let's work together to bring your ideas to life.
          </p>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/AMOL29102"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/amol-patil-53389325a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:amolpatilap2910@gmail.com"
            >
              <Mail className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </motion.a>
          </div>
          <div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1F_UUywJCc4Hn0qhX4LhdhzQdQetO8jcl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="hover:bg-transparent hover:text-white bg-white text-gray-800 font-semibold py-2 px-4 border border-white-400 rounded shadow transition-all duration-200 ">
                Resume
              </button>
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Hover Effect Fixed */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <img
                src="/images/banner_photo2.jpg"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-blue-500 shadow-lg"
              />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-blue-500/10 pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
