import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

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
      delay: i * 0.13,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const menuRef = useRef(null); // Ref for the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close the menu when clicking outside of it
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            className="text-3xl font-bold font-['Poppins'] text-blue-600"
          >
            Portfolio
          </motion.div>
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              initial={{ scale: 1 }}
              animate={{ scale: menuOpen ? 1.2 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </motion.button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* Navigation Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  offset={-100} // Adjust as needed
                  className="cursor-pointer px-4 py-2 rounded-md text-lg font-medium hover:text-blue-400 transition-all duration-300 font-['Poppins']"
                  activeClass="text-blue-500 font-semibold"
                >
                  {item.name}
                </Link>
              ))}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                {isDarkMode ? (
                  <Sun className="w-6 h-6 text-white-400" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            ref={menuRef} // Attach the ref to the mobile menu div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden bg-gray-900/95 text-white px-4 py-6 rounded-lg shadow-lg"
          >
            <button onClick={toggleTheme}>
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>

            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
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
