// components/HeroSection.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

// Using text placeholders that represent industries you serve.
// Replace with actual logos when you have them.
const ClientLogos = () => {
    const logos = [
        <p key="1" className="font-semibold text-xl tracking-wider">Enterprise</p>,
        <p key="2" className="font-semibold text-xl tracking-wider">SaaS</p>,
        <p key="3" className="font-semibold text-xl tracking-wider">FinTech</p>,
        <p key="4" className="font-semibold text-xl tracking-wider">E-commerce</p>,
    ];
    return (
        <div className="flex w-full items-center justify-center gap-8 md:gap-12 flex-wrap">
            {logos.map((logo, index) => (
                <div key={index} className="text-gray-500 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    {logo}
                </div>
            ))}
        </div>
    );
};


const HeroSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80 } },
  } as const;

  return (
    <section className="relative w-full bg-[#101010] text-white py-28 md:py-32 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'%23333\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")',
          backgroundSize: '3rem 3rem',
        }}
      ></div>
      {/* Background Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#101010]"></div>

      <div className="container relative z-20 mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Replaced customer count with your core value proposition */}
          <motion.div
            className="mb-6"
            variants={itemVariants}
          >
             <span className="bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full">
                AI-Native | Outcome-as-a-Service
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
            variants={itemVariants}
          >
            Stop Buying Software.
            <br/>
            Start Buying Outcomes.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="mt-6 max-w-2xl text-lg md:text-xl text-gray-400"
            variants={itemVariants}
          >
            We are an AI-native studio that delivers intelligent automation and GenAI solutions, not as a project, but as a continuous service.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#contact" // Links to your contact section
              className="inline-flex items-center justify-center bg-white text-black font-semibold px-6 py-3 rounded-lg text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Scope Your AI Initiative
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
            <motion.a
              href="#use-cases" // Links to your use cases/blog section
              className="inline-flex items-center justify-center bg-transparent text-white font-semibold px-6 py-3 rounded-lg border-2 border-white/20 hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="mr-2 w-5 h-5" />
              See Our Use Cases
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;