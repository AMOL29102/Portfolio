import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

function Contact() {
  const { isDarkMode } = useTheme();
  
  // State for form submission
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', text: '' }); // type: 'success' | 'error' | ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', text: 'Please fill out all fields.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', text: '' });

    try {
      const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5005/api/contact'
        : '/api/contact';

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          text: data.error || 'Something went wrong. Please try again later.' 
        });
      }
    } catch (error) {
      console.error('Contact Form Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        text: 'Unable to reach the server. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={`min-h-screen py-20 ${isDarkMode ? '' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h2 
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Contact Info & Socials */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-5 space-y-8"
            >
              <div className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/40 border-gray-700/80 shadow-2xl shadow-blue-500/5' 
                  : 'bg-white/70 border-gray-200/80 shadow-xl'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Contact Details
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-[#4a8dc9]/10 text-[#4a8dc9]'
                    }`}>
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email Me</p>
                      <a href="mailto:amolpatilap2910@gmail.com" className={`font-medium hover:underline transition-colors ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-[#4a8dc9] hover:text-blue-600'}`}>
                        amolpatilap2910@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-[#4a8dc9]/10 text-[#4a8dc9]'
                    }`}>
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>My GitHub</p>
                      <a href="https://github.com/AMOL29102" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline transition-colors ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-[#4a8dc9] hover:text-blue-600'}`}>
                        github.com/AMOL29102
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-[#4a8dc9]/10 text-[#4a8dc9]'
                    }`}>
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>My LinkedIn</p>
                      <a href="https://www.linkedin.com/in/amol-patil-53389325a/" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline transition-colors ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-[#4a8dc9] hover:text-blue-600'}`}>
                        linkedin.com/in/amol-patil-53389325a
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-dashed border-gray-600/30">
                  <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Let's Connect!</h4>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Whether you have an interesting gig, a startup idea, or just want to chat about development — feel free to drop a message or reach out on socials.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-7"
            >
              <form 
                onSubmit={handleSubmit}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 space-y-6 ${
                  isDarkMode 
                    ? 'bg-gray-800/40 border-gray-700/80 shadow-2xl shadow-blue-500/5' 
                    : 'bg-white/70 border-gray-200/80 shadow-xl'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Send a Message
                </h3>

                {/* Status Message */}
                <AnimatePresence mode="wait">
                  {submitStatus.text && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-start space-x-3 p-4 rounded-xl text-sm ${
                        submitStatus.type === 'success'
                          ? isDarkMode ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-green-50 text-green-800 border border-green-200'
                          : isDarkMode ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <span>{submitStatus.text}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200 ${
                        isDarkMode
                          ? 'bg-gray-900/60 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#4a8dc9] focus:ring-1 focus:ring-[#4a8dc9]'
                      }`}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="johndoe@example.com"
                      className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200 ${
                        isDarkMode
                          ? 'bg-gray-900/60 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#4a8dc9] focus:ring-1 focus:ring-[#4a8dc9]'
                      }`}
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200 resize-none ${
                        isDarkMode
                          ? 'bg-gray-900/60 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#4a8dc9] focus:ring-1 focus:ring-[#4a8dc9]'
                      }`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-200 ${
                    isSubmitting 
                      ? 'cursor-not-allowed opacity-80' 
                      : ''
                  } ${
                    isDarkMode 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                      : 'bg-[#4a8dc9] hover:bg-[#3d7bb3] text-white shadow-lg shadow-[#4a8dc9]/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
