import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`min-h-screen py-20 ${isDarkMode ? '' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>About Me</h2>

        {/* Introduction and Education Section */}
        <motion.div
          variants={sectionVariants}
          className="grid md:grid-cols-2 gap-12 mb-12"
        >
          {/* Introduction */}
          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Introduction</h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              Hello! I'm a passionate Full Stack Developer with experience in building web applications. I began my journey in software development fueled by curiosity and a desire to understand how the internet works. Along the way, I've also developed a strong interest in blockchain technology, where I gained hands-on experience writing smart contracts in Solidity.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Education</h3>
            <ul className="space-y-4">
              <li className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              🎓<span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Bachelor of Engineering in Information Technology</span> <br />
                <span className="font-semibold">Pune Institute of Computer Technology</span> <br />
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>2022 - 2026</span> <br />
              </li>
              <li className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              🎓<span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Higher Secondary Education</span> <br />
                <span className="font-semibold">Rajarshi Shahu Junior Science College, Latur</span> <br />
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>2020 - 2022</span> <br />
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Experience and Quick Facts Section */}
        <motion.div
          variants={sectionVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Experience Section Title */}
          <div className="md:col-span-2">
            <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Experience</h3>
          </div>

          {/* FPL Technologies (Left Column) */}
          <motion.div
            className={`p-6 rounded-2xl h-full transition-all duration-300 border ${isDarkMode ? 'bg-gray-900/40 backdrop-blur-xl border-gray-700/50 shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/10' : 'bg-white/70 backdrop-blur-xl border-gray-200/80 shadow-lg hover:border-blue-400/50 hover:shadow-xl'}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className={`text-xl font-semibold mb-3 ${isDarkMode ? '' : 'text-gray-800'}`}>
              FPL Technologies Pvt. Ltd. | Software Developer
            </h4>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              💼 Jan 2026 - Present
            </p>
            <ul className={`list-disc ml-5 mt-3 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Managed the core credit card billing vertical, ensuring accurate, automated, and scalable financial processing.</li>
              <li>Engineered backend logic for daily interest accruals, monthly statement generation, and dynamic due-date assignments.</li>
              <li>Built and orchestrated automated financial data pipelines and batch processes using AWS and Apache Airflow.</li>
              <li>Integrated OpenSearch for operational logging and Apache Superset for monitoring critical billing metrics.</li>
              <li>Ensured high system reliability through rigorous testing, utilizing GitLab for version control and Taiga for agile project tracking.</li>
            </ul>
          </motion.div>

          {/* Nikhil Motors (Right Column) */}
          <motion.div
            className={`p-6 rounded-2xl h-full transition-all duration-300 border ${isDarkMode ? 'bg-gray-900/40 backdrop-blur-xl border-gray-700/50 shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/10' : 'bg-white/70 backdrop-blur-xl border-gray-200/80 shadow-lg hover:border-blue-400/50 hover:shadow-xl'}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className={`text-xl font-semibold mb-3 ${isDarkMode ? '' : 'text-gray-800'}`}>
              {isDarkMode ? 'SDE Intern at Nikhil Motors' : 'Freelance Intern at Nikhil Motors'}
            </h4>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              💼 August 2024 - October 2024 <br />
              As a Full Stack Developer, I contributed to a web app to boost user engagement and expand the store's reach. Key contributions:
            </p>
            <ul className={`list-disc ml-5 mt-3 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Built dynamic, responsive UI for vehicle browsing, filtering, and inquiries.</li>
              <li>Implemented role-based dashboards with authentication and authorization.</li>
              <li>Integrated real-time inventory updates for vehicle and maintenance status.</li>
              <li>Deployed the full application using AWS S3 and EC2.</li>
            </ul>
          </motion.div>

          {/* Quick Facts Section (Left Column) */}
          <div className="md:col-span-1 mt-4">
            <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Quick Facts</h3>
            <motion.div
              className={`p-6 rounded-2xl h-full transition-all duration-300 border ${isDarkMode ? 'bg-gray-900/40 backdrop-blur-xl border-gray-700/50 shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/10' : 'bg-white/70 backdrop-blur-xl border-gray-200/80 shadow-lg hover:border-blue-400/50 hover:shadow-xl'}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ul className={`list-disc ml-5 mt-3 space-y-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>📝 Co-authored and published a research paper on <p className='inline font-semibold'> Blockchain-based Authentication for Genuine Goods</p> in <p className='inline font-semibold'> IEEE ICBDS Conference. </p></li>
                <li>🎮 Hobbies : <br /> Playing Chess, Coding and Geopolitics.</li>
                <li><p>🌐 Find me on coding platforms : </p><br />
                  <div className='inline lg:p-8'>
                    <a href="https://leetcode.com/u/amolpatilamp555/" target='_blank' rel="noopener noreferrer" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-500' : 'text-blue-600 hover:font-medium'} lg:ml-12`}><ExternalLink className="w-4 h-4 inline" />  LeetCode</a>
                  </div>
                  <div className='inline lg:p-8 p-4'>
                    <a href="https://www.codechef.com/users/amolpatilamp55" target='_blank' rel="noopener noreferrer" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-500' : 'text-blue-600 hover:font-medium'}`}><ExternalLink className="w-4 h-4 inline" /> CodeChef</a>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default About;
