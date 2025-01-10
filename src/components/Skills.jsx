import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'HTML', icon: '/images/html.png' },
  { name: 'CSS', icon: '/images/css.png' },
  { name: 'JavaScript', icon: '/images/javascript.png' },
  { name: 'React', icon: '/images/react.png' },
  { name: 'Node.js', icon: '/images/node.png' },
  { name: 'Express', icon: '/images/express.png' },
  { name: 'Tailwind', icon: '/images/tailwind.png' },
  { name: 'MongoDB', icon: '/images/mongodb.png' },
  { name: 'PostgreSQL', icon: '/images/pg.png' },
  { name: 'Git', icon: '/images/git.png' },
  { name: 'Solidity', icon: '/images/solidity.png' },
  { name: 'Figma', icon: '/images/figma.png' },
  { name: 'AWS', icon: '/images/aws.png' },
  { name: 'Postman', icon: '/images/postman.png' },

];

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-7 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="relative  w-32 h-32 rounded-[20%] bg-gray-800 bg-opacity-50 border-2 border-blue-500 flex items-center justify-center text-4xl mb-4 transition-transform shadow-lg hover:shadow-blue-500/50">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <span className="text-lg font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
