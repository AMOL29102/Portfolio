import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, X, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

function Hero() {
  const { isDarkMode } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className={`min-h-screen pt-16 flex items-center ${isDarkMode ? '' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? '' : 'text-gray-800'}`}>
            Hi, I'm <span className={`${isDarkMode ? 'text-blue-500' : 'text-[#4a8dc9]'} lg:block md:block`}>Amol Patil</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Full Stack Developer</h2>
          <p className={`max-w-lg text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
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
              <Github className={`w-6 h-6 transition-colors ${isDarkMode ? 'hover:text-blue-500' : 'text-gray-800 hover:text-[#4a8dc9]'}`} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/amol-patil-53389325a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className={`w-6 h-6 transition-colors ${isDarkMode ? 'hover:text-blue-500' : 'text-gray-800 hover:text-[#4a8dc9]'}`} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:amolpatilap2910@gmail.com"
            >
              <Mail className={`w-6 h-6 transition-colors ${isDarkMode ? 'hover:text-blue-500' : 'text-gray-800 hover:text-[#4a8dc9]'}`} />
            </motion.a>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsResumeOpen(true)}
              className="inline-block"
            >
              {isDarkMode ? (
                <span className="inline-block hover:bg-transparent hover:text-white bg-white text-gray-800 font-semibold py-2 px-4 border border-white-400 rounded shadow transition-all duration-200 cursor-pointer">
                  Resume
                </span>
              ) : (
                <span className="inline-block bg-[#4a8dc9] text-white font-semibold py-2 px-4 border border-[#4a8dc9] rounded shadow transition-all duration-200 cursor-pointer">
                  Resume
                </span>
              )}
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <img
                src="/images/banner_photo2.jpg"
                alt="Profile"
                className={`rounded-full w-full h-full object-cover border-4 shadow-lg ${isDarkMode ? 'border-blue-500' : 'border-[#4a8dc9]'}`}
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
              className={`absolute inset-0 rounded-full pointer-events-none ${isDarkMode ? 'bg-blue-500/10' : 'bg-[#4a8dc9]/10'}`}
            />
          </div>
        </motion.div>
      </div>

      {/* Premium Resume Preview Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative w-full h-[85vh] max-w-5xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 ${
                isDarkMode 
                  ? 'bg-gray-900 border-gray-700/80 shadow-blue-500/5' 
                  : 'bg-white border-gray-200/80 shadow-2xl'
              }`}
            >
              {/* Modal Header */}
              <div className={`flex items-center justify-between px-6 py-4 border-b ${
                isDarkMode ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'
              }`}>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Resume Preview
                </h3>
                <div className="flex items-center space-x-3">
                  {/* Download Button */}
                  <a
                    href="/images/resume.pdf"
                    download="Amol_Patil_Resume.pdf"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition-all duration-200 ${
                      isDarkMode 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20' 
                        : 'bg-[#4a8dc9] hover:bg-[#3d7bb3] text-white shadow-[#4a8dc9]/20'
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  {/* Close Button */}
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className={`p-2 rounded-xl border transition-all duration-200 ${
                      isDarkMode 
                        ? 'border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white' 
                        : 'border-gray-300 hover:bg-gray-100 text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body (IFrame Preview) */}
              <div className="flex-1 bg-gray-950 relative">
                {/* Fallback Loader while iframe loads */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gray-950">
                  <div className={`w-10 h-10 border-4 border-t-transparent rounded-full animate-spin ${
                    isDarkMode ? 'border-blue-500' : 'border-[#4a8dc9]'
                  }`}></div>
                </div>
                <iframe
                  src="/images/resume.pdf"
                  className="w-full h-full border-0"
                  title="Resume Preview"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hero;
