import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mousePosition.x, springConfig);
  const y = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(800px at ${x}px ${y}px, rgba(29, 78, 216, 0.12), transparent 80%)`
      }}
    />
  );
}

export default MouseTracker;