// @/components/ServicesSection.tsx

"use client";

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { Map, CodeXml, Bot, BrainCircuit, Server, DatabaseZap } from 'lucide-react';

// --- Reusable ServiceCard Component (No changes needed here) ---
interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceCard: React.FC<CardProps> = ({ title, description, icon, children }) => (
  <motion.div
    variants={cardVariants}
    className="relative flex flex-col justify-between p-6 bg-black/20 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm overflow-hidden hover:border-purple-400/50 transition-colors duration-300"
    style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
      backgroundSize: '1.5rem 1.5rem'
    }}
  >
    <div className="flex flex-col items-start gap-3">
      <div className="text-2xl text-purple-300">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    <div className="my-5 h-24 flex items-center justify-center overflow-hidden">{children}</div>
    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none"></div>
  </motion.div>
);

// --- 1. AI Strategy & MVP Design Visual ---
const StrategyVisual = () => {
    // A visual that shows points connecting to form a clear path, representing strategy.
    const points = [[-40, 0], [0, -20], [40, 0]];
    return (
        <svg width="100" height="40" viewBox="-50 -30 100 60" className="w-full h-full">
            <motion.path
                d={`M ${points[0][0]} ${points[0][1]} L ${points[1][0]} ${points[1][1]} L ${points[2][0]} ${points[2][1]}`}
                strokeWidth="2"
                stroke="rgba(167, 139, 250, 0.5)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
            />
            {points.map((p, i) => (
                <motion.circle
                    key={i}
                    cx={p[0]}
                    cy={p[1]}
                    r="4"
                    fill="#a78bfa"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.3, repeat: Infinity, repeatType: "mirror", repeatDelay: 2.4 }}
                />
            ))}
        </svg>
    );
};

// --- 2. Custom AI Development Visual ---
const DevelopmentVisual = () => {
    // Abstract representation of code blocks transforming.
    return (
        <motion.div
            className="w-16 h-16 border-2 border-purple-400/50 rounded-lg flex items-center justify-center"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        >
            <motion.div
                className="w-8 h-8 bg-purple-300/80 rounded-sm"
                animate={{ scale: [1, 0.8, 1], borderRadius: ["10%", "50%", "10%"] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            ></motion.div>
        </motion.div>
    );
};

// --- 3. GenAI & LLM Solutions Visual ---
const GenAIVisual = () => {
    // Simulates waves of thought or data being processed by a central core.
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-16 h-16">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 border-2 border-purple-300 rounded-full"
                        initial={{ opacity: 1, scale: 0 }}
                        animate={{ opacity: 0, scale: 1.5 }}
                        transition={{
                            duration: 2,
                            ease: "linear",
                            delay: i * 0.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                ))}
                <BrainCircuit className="absolute inset-0 m-auto w-8 h-8 text-purple-300" />
            </div>
        </div>
    );
};

// --- 4. AI Agents & Automation Visual ---
const AutomationVisual = () => {
    // Represents autonomous agents (dots) moving along a predefined circuit.
    return (
        <div className="w-24 h-16 relative">
            <svg viewBox="0 0 100 60" className="w-full h-full">
                <path d="M 10 30 C 10 10, 40 10, 50 30 S 90 50, 90 30" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
            </svg>
            <motion.div
                className="w-3 h-3 bg-purple-400 rounded-full absolute"
                style={{ top: '50%', left: '10%', transform: 'translate(-50%, -50%)' }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};


// --- 5. MLOps & Scalable Deployment Visual ---
const MLOpsVisual = () => {
    // A clean, professional bar chart showing growth and stability.
    return (
        <div className="w-4/5 h-full flex items-end justify-center gap-2">
            {[0.4, 0.6, 0.5, 0.8, 0.7].map((height, i) => (
                <motion.div
                    key={i}
                    className="w-4 bg-purple-400/80 rounded-t-sm"
                    initial={{ height: "0%" }}
                    animate={{ height: `${height * 100}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.2, repeat: Infinity, repeatType: "mirror", ease: "circOut" }}
                />
            ))}
        </div>
    );
};

// --- 6. Data Strategy & Engineering Visual ---
const DataVisual = () => {
    // Abstract flowing particles representing a data pipeline.
    return (
        <div className="w-full h-full relative">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-300 rounded-full"
                    initial={{ x: 0, y: Math.random() * 80 - 40, opacity: 0 }}
                    animate={{ x: 100, opacity: [0, 1, 0] }}
                    transition={{
                        duration: 2,
                        delay: i * 0.4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

// --- Main ServicesSection Component ---
const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  
  const services = [
    { title: "AI Strategy & MVP Design", description: "We partner with you to identify high-ROI AI opportunities, define project scope, and design a robust MVP architecture.", icon: <Map />, visual: <StrategyVisual /> },
    { title: "Custom AI Development", description: "We build end-to-end, enterprise-grade AI software, from complex data pipelines to intuitive user interfaces.", icon: <CodeXml />, visual: <DevelopmentVisual /> },
    { title: "GenAI & LLM Solutions", description: "Leverage the power of Large Language Models. We build custom chatbots, RAG systems, and content generation tools.", icon: <BrainCircuit />, visual: <GenAIVisual /> },
    { title: "AI Agents & Automation", description: "Deploy a workforce of autonomous AI agents to handle your most complex, repetitive operational tasks 24/7.", icon: <Bot />, visual: <AutomationVisual /> },
    { title: "MLOps & Scalable Deployment", description: "We manage the entire machine learning lifecycle, ensuring your models are robust, scalable, and monitored in production.", icon: <Server />, visual: <MLOpsVisual /> },
    { title: "Data Strategy & Engineering", description: "AI is only as good as its data. We build the foundational data warehouses and pipelines you need for success.", icon: <DatabaseZap />, visual: <DataVisual /> }
  ];

  return (
    <section id="services" className="bg-[#101010] text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
            <span className="bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full">Our Services</span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">End-to-End AI Solutions</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">From foundational data strategy to scalable enterprise-grade AI applications, we cover every stage of your journey.</p>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map(service => (
            <ServiceCard key={service.title} {...service}>
              {service.visual}
            </ServiceCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;