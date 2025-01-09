import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Delay each item
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold font-['Poppins'] bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              initial={{ scale: 1 }}
              animate={{ scale: menuOpen ? 1.2 : 1 }} // Add scaling effect
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </motion.button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={700}
                  className="cursor-pointer px-4 py-2 rounded-md text-lg font-medium hover:text-blue-400 transition-all duration-300 font-['Poppins']"
                  activeClass="text-blue-500 font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden bg-gray-900/95 text-white px-4 py-6 rounded-lg shadow-lg"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass the index for delay
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setMenuOpen(false)} // Close menu on click
                  className="block py-2 text-lg font-medium hover:text-blue-400 transition-all duration-300 font-['Poppins']"
                  activeClass="text-blue-500 font-semibold"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
