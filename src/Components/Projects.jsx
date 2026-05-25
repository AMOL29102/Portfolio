import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const projects = [
  {
    title: 'Vehicle Dealership - Nikhil Motors',
    description: 'A dealership platform with role-based dashboards for admins, employees, and drivers, enabling efficient vehicle management. Integrated with AWS for secure image uploads and scalable operations, enhancing user engagement and search efficiency.',
    image: '/images/Project1.png',
    source: 'https://github.com/AMOL29102/Vehicle-Dealership',
    techStack: ['', '', '', '', '', ''],
    techImages: ['/images/pg.png', '/images/express.png', '/images/react.png', '/images/node.png', '/images/tailwind.png', '/images/aws.png']
  },
  {
    title: 'Authentication System for Genuine Goods',
    description: 'A blockchain-powered system for authenticating products, combating counterfeit goods in global trade. Features include automated QR code generation, consumer code dispatch, and scalable tracking of products across manufacturers, sellers, and customers.',
    image: '/images/Project2.jpg',
    source: 'https://github.com/AMOL29102/Fake-Product-Identification',
    techStack: ['', '', '', '', '',''],
    techImages: ['/images/pg.png', '/images/express.png', '/images/react.png', '/images/node.png', '/images/css.png', '/images/solidity.png']
  },
  {
    title: 'RescueBites',
    description: 'A platform to combat food waste by connecting restaurants with surplus food to individuals in need. RescueBites streamlines food access via pincode, enhances community engagement, and automates food request removal after 18 hours to optimize resource management.',
    image: '/images/Project3.png',
    source: 'https://github.com/AMOL29102/Leftover-Food-Management',
    techStack: ['', '', '', '', ''],
    techImages: ['/images/pg.png', '/images/express.png', '/images/react.png', '/images/node.png', '/images/css.png']
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing projects, skills, and achievements with a clean, responsive design. It offers an engaging user experience, featuring interactive elements, live demos, and repositories to highlight expertise and accomplishments.',
    imageDark: '/images/DarkPortfolio.png',
    imageLight: '/images/LightPortfolio2.png',
    demo: 'https://patilamol.vercel.app/',
    source: 'https://github.com/AMOL29102/Portfolio',
    techStack: ['', ''],
    techImages: ['/images/react.png', '/images/tailwind.png']
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing projects, skills, and achievements with a clean, responsive design. It offers an engaging user experience, featuring interactive elements, live demos, and repositories to highlight expertise and accomplishments.',
    imageDark: '/images/DarkPortfolio.png',
    imageLight: '/images/LightPortfolio2.png',
    demo: 'https://patilamol.vercel.app/',
    source: 'https://github.com/AMOL29102/Portfolio',
    techStack: ['', ''],
    techImages: ['/images/react.png', '/images/tailwind.png']
  }
];

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { isDarkMode } = useTheme();

  const scrollRef = React.useRef(null);

  // Duplicate projects for seamless infinite loop
  const displayProjects = [...projects, ...projects];

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId;
    
    const scroll = () => {
      if (el) {
        el.scrollLeft += 1;
        
        // When we scroll exactly half of the total scrollable width, 
        // reset to 0 to create an infinite loop effect seamlessly.
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleManualScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    
    // Enable manual infinite scrolling in both directions
    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft = 1; // Jump back to start safely
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft = el.scrollWidth / 2 - 1; // Jump to middle when scrolling left
    }
  };

  return (
    <div className={`min-h-screen py-20 ${isDarkMode ? '' : 'bg-transparent'}`}>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? '' : 'text-gray-800'}`}>Projects</h2>
        
        <div 
          ref={ref} 
          className="relative w-full"
        >
          <div 
            ref={scrollRef}
            onScroll={handleManualScroll}
            className="flex gap-8 overflow-x-auto py-8 no-scrollbar"
          >
            {displayProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index % projects.length) * 0.2 }}
                className={`w-[85vw] md:w-[380px] shrink-0 group relative rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border flex flex-col ${
                  isDarkMode 
                    ? 'bg-gray-900/40 backdrop-blur-xl border-gray-700/50 shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/20' 
                    : 'bg-white/70 backdrop-blur-xl border-gray-200/80 shadow-lg hover:border-blue-400/50 hover:shadow-2xl'
                }`}
              >
                <div className="relative overflow-hidden p-2 pb-0">
                  <img
                    src={project.title === 'Portfolio Website' ? (isDarkMode ? project.imageDark : project.imageLight) : project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className={`text-xl font-bold ${isDarkMode ? '' : 'text-gray-800'}`}>{project.title}</h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span key={tech + i} className={`inline-flex items-center space-x-1 px-2 py-1 rounded-lg text-sm transition-colors border ${isDarkMode ? 'bg-gray-800/80 border-gray-600 hover:border-blue-400/50' : 'bg-gray-100 border-gray-300 hover:border-blue-400/50'}`}>
                        <img className="h-6 w-6 object-contain" src={project.techImages[i]} alt="tech" />
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4 mt-4">
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${isDarkMode ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-medium">Live Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'}`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-medium">Source</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
