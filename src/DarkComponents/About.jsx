import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';


function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>

        {/* Introduction and Education Section */}
        <motion.div
          variants={sectionVariants}
          className="grid md:grid-cols-2 gap-12 mb-12"
        >
          {/* Introduction */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">Introduction</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I'm a passionate Full Stack Developer with experience in building web applications. I began my journey in software development fueled by curiosity and a desire to understand how the internet works. Along the way, I've also developed a strong interest in blockchain technology, where I gained hands-on experience writing smart contracts in Solidity.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">Education</h3>
            <ul className="space-y-4">
              <li className="text-gray-300 text-lg">
              🎓<span className="text-gray-400">Bachelor of Engineering in Information Technology</span> <br />
                <span className="font-semibold">Pune Institute of Computer Technology</span> <br />
                <span className="text-sm text-gray-400">2022 - 2026</span> <br />
              </li>
              <li className="text-gray-300 text-lg">
              🎓<span className="text-gray-400">Higher Secondary Education</span> <br />
                <span className="font-semibold">Rajarshi Shahu Junior Science College, Latur</span> <br />
                <span className="text-sm text-gray-400">2020 - 2022</span> <br />
              </li>
            </ul>
          </div>

        </motion.div>

        {/* Experience and Quick Facts About Me Section */}
        <motion.div
          variants={sectionVariants}
          className="grid md:grid-cols-2 gap-8" // Increased gap for better spacing
        >
          {/* Experience Section */}
          <div className="max-w-full">
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">Experience</h3>
            <div className="space-y-6">
              <motion.div
                className="bg-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold mb-3">Freelance Intern at Nikhil Motors</h4>
                <p className="text-gray-300">
                  💼 August 2024 - October 2024 <br />
                  As a Full Stack Developer, I contributed to a web app to boost user engagement and expand the store's reach. Key contributions:
                </p>
                <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-300">
                  <li>Built dynamic, responsive UI for vehicle browsing, filtering, and inquiries.</li>
                  <li>Implemented role-based dashboards with authentication and authorization.</li>
                  <li>Integrated real-time inventory updates for vehicle and maintenance status.</li>
                  <li>Deployed the full application using AWS S3 and EC2.</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Quick Facts About Me Section */}
          <div className="max-w-full">
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">Quick Facts</h3>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="list-disc ml-5 mt-3 space-y-8 text-gray-300">
                <li>📝 Co-authored and published a research paper on <p className='inline font-semibold'> Blockchain-based Authentication for Genuine Goods</p> in <p className='inline font-semibold'> IEEE ICBDS Conference. </p></li>
                <li>🎮 Hobbies : <br /> Playing Chess, Coding and Geopolitics.</li>
                <li><p>🌐 Find me on coding platforms : </p><br />
                  <div className='inline lg:p-8'>
                    <a href="https://leetcode.com/u/amolpatilamp555/" target='_blank' className="text-blue-400 lg:ml-12 hover:text-blue-500"><ExternalLink className="w-4 h-4 inline" />  LeetCode</a>
                  </div>
                  <div className='inline lg:p-8 p-4'>
                    <a href="https://www.codechef.com/users/amolpatilamp55" target='_blank' className="text-blue-400  hover:text-blue-500"><ExternalLink className="w-4 h-4 inline" /> CodeChef</a>
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
