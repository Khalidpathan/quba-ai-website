'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
      });
    };

    // Initial set
    updateDimensions();

    // Update on resize
    window.addEventListener('resize', updateDimensions);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Generate random elements
    const count = Math.min(15, Math.floor(dimensions.width / 100)); // Responsive count
    const newElements: FloatingElement[] = [];
    const colors = [
      'bg-primary-500/10',
      'bg-secondary-500/10',
      'bg-accent-500/10',
      'bg-white/5',
    ];

    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 100 + Math.random() * 300, // Between 100-400px
        duration: 30 + Math.random() * 45, // Between 30-75s
        delay: Math.random() * -50, // Start at different times
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setElements(newElements);
  }, [dimensions]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full ${element.color} blur-3xl`}
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
