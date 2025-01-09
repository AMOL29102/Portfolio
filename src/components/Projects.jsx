import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Vehicle Dealership - Nikhil Motors',
    description: 'A dealership platform with role-based dashboards for admins, employees, and drivers, enabling efficient vehicle management. Integrated with AWS for secure image uploads and scalable operations, enhancing user engagement and search efficiency.',
    image: '/images/Project1.png',
    demo: 'https://www.nikhilmotors.com',
    source: 'https://github.com/AMOL29102/Vehicle-Dealership',
    techStack: ['', '', '', '', '', ''],
    techImages: ['/images/pg.png', '/images/express.png', '/images/react.png', '/images/node.png', '/images/tailwind.png', '/images/aws.png']
  },
  {
    title: 'Authentication System for Genuine Goods',
    description: 'A blockchain-powered system for authenticating products, combating counterfeit goods in global trade. Features include automated QR code generation, consumer code dispatch, and scalable tracking of products across manufacturers, sellers, and customers.',
    image: '/images/Project2.jpg',
    // demo: 'https://example.com',
    source: 'https://github.com',
    techStack: ['', '', '', '', '',''],
    techImages: ['/images/pg.png', '/images/express.png', '/images/react.png', '/images/node.png', '/images/css.png', '/images/solidity.png']
  },
  {
    title: 'RescueBites',
    description: 'A platform to combat food waste by connecting restaurants with surplus food to individuals in need. RescueBites streamlines food access via pincode, enhances community engagement, and automates food request removal after 18 hours to optimize resource management.',
    image: '/images/Project3.png',
    // demo: 'https://example.com',
    source: 'https://github.com',
    techStack: ['', '', '', '', ''],
    techImages: ['/images/pg.png', '/images/express.png', '/images/react.png', '/images/node.png', '/images/css.png']
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing projects, skills, and achievements with a clean, responsive design. It offers an engaging user experience, featuring interactive elements, live demos, and repositories to highlight expertise and accomplishments.',
    image: '/images/Portfolio.png',
    demo: 'https://amolpatil-ten.vercel.app/',
    source: 'https://amolpatil-ten.vercel.app/',
    techStack: ['', ''],
    techImages: ['/images/react.png', '/images/tailwind.png']
  }
];

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen py-2 pb-24 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border-2 border-gray-500"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-auto  lg:min-h-[20rem] p-0.5 rounded-lg"
                />
                <hr className='border-gray-500'/>
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-300 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={tech} className="inline-flex items-center space-x-1 bg-black px-3 py-1 rounded-full text-sm bg-opacity-0 border-2 border-white ">
                      <img className='h-8 w-8' src={project.techImages[i]} alt="" />
                      {/* <span>{tech}</span> */}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-4">
                  {project.demo && <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;