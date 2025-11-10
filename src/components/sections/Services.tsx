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
    className="relative flex flex-col justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-600/30 transition-colors duration-300"
    style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
      backgroundSize: '1.5rem 1.5rem'
    }}
  >
    <div className="flex flex-col items-start gap-3">
      <div className="text-2xl text-blue-600">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-m text-gray-600">{description}</p>
    </div>
    <div className="my-5 h-24 flex items-center justify-center overflow-hidden">{children}</div>
    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
  </motion.div>
);

// --- 1. AI Strategy & MVP Design Visual ---
const StrategyVisual = () => {
    // Strategic roadmap with sequenced milestones and a subtle progress arrow
    const milestones = [
        { x: -42, y: 8 },
        { x: -15, y: -6 },
        { x: 12, y: -2 },
        { x: 36, y: -10 }
    ];
    const path = `M -45 10 C -30 -10, -5 -12, 10 -5 S 35 -5, 45 -10`;
    return (
        <svg width="120" height="60" viewBox="-60 -30 120 60" className="w-full h-full">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
                    <stop offset="100%" stopColor="rgba(59,130,246,0.35)" />
                </linearGradient>
                <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="rgba(37,99,235,0.6)" />
                </marker>
            </defs>
            <motion.path
                d={path}
                stroke="url(#grad)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 0.8 }}
            />
            {milestones.map((m, i) => (
                <g key={i}>
                    <motion.circle
                        cx={m.x}
                        cy={m.y}
                        r="3.5"
                        fill="#3b82f6"
                        initial={{ opacity: 0.3, scale: 0.8 }}
                        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.15, 0.8] }}
                        transition={{ duration: 2.2, delay: i * 0.25, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.circle
                        cx={m.x}
                        cy={m.y}
                        r="8"
                        stroke="#93c5fd"
                        strokeWidth="1"
                        fill="none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.6, 0], r: [8, 12, 16] }}
                        transition={{ duration: 2.2, delay: i * 0.25, repeat: Infinity, ease: "easeOut" }}
                    />
                </g>
            ))}
            <motion.path
                d={path}
                stroke="rgba(37,99,235,0.6)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrow)"
                strokeDasharray="6 6"
                animate={{ strokeDashoffset: [36, 0] }}
                transition={{ duration: 2.4, ease: "linear", repeat: Infinity }}
            />
        </svg>
    );
};

// --- 2. Custom AI Development Visual ---
const DevelopmentVisual = () => {
    // Modular blocks assembling into a stable unit, representing system design and implementation
    const blocks = [
        { key: 1, from: { x: -18, y: -16 }, to: { x: -10, y: -10 } },
        { key: 2, from: { x: 18, y: -16 }, to: { x: 2, y: -10 } },
        { key: 3, from: { x: -18, y: 16 }, to: { x: -10, y: 2 } },
        { key: 4, from: { x: 18, y: 16 }, to: { x: 2, y: 2 } },
        { key: 5, from: { x: 0, y: 0 }, to: { x: -4, y: -4 } },
    ];
    return (
        <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-lg border border-blue-200/60" />
            {blocks.map((b, i) => (
                <motion.div
                    key={b.key}
                    className="absolute w-5 h-5 rounded-md bg-blue-500/80 shadow-sm"
                    initial={{ x: b.from.x, y: b.from.y, opacity: 0, rotate: -6 }}
                    animate={{ x: b.to.x, y: b.to.y, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.9, delay: i * 0.12, type: "spring", stiffness: 180, damping: 18, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.2 }}
                    style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                />
            ))}
            <motion.div
                className="absolute left-1/2 top-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-blue-400/70"
                animate={{ boxShadow: ["0 0 0 0 rgba(59,130,246,0)", "0 0 0 6px rgba(59,130,246,0.12)", "0 0 0 0 rgba(59,130,246,0)"] }}
                transition={{ duration: 2.2, repeat: Infinity }}
            />
        </div>
    );
};

// --- 3. GenAI & LLM Solutions Visual ---
const GenAIVisual = () => {
    // Radiating inference rings with a pulsing core, representing LLM reasoning waves
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-20 h-20">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full"
                        style={{ border: "2px solid rgba(96,165,250,0.7)" }}
                        initial={{ opacity: 0.7, scale: 0.6 }}
                        animate={{ opacity: [0.7, 0.2, 0], scale: [0.6, 1.2, 1.6] }}
                        transition={{ duration: 2.8, delay: i * 0.5, repeat: Infinity, ease: "easeOut" }}
                    />
                ))}
                <motion.div
                    className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-blue-400"
                    animate={{ scale: [1, 1.08, 1], filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <BrainCircuit className="absolute inset-0 m-auto w-8 h-8 text-white drop-shadow-sm" />
            </div>
        </div>
    );
};

// --- 4. AI Agents & Automation Visual ---
const AutomationVisual = () => {
    // Three "agents" orbit a workflow rectangle, representing orchestrated automation
    const durations = [4.5, 5.2, 6];
    return (
        <div className="relative w-28 h-20">
            <div className="absolute inset-2 rounded-md border border-gray-200" />
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-2.5 h-2.5 rounded-full"
                    style={{ background: ["#3b82f6", "#60a5fa", "#93c5fd"][i], left: "8px", top: "8px" }}
                    animate={{
                        x: [0, 36, 36, 0, 0],
                        y: [0, 0, 24, 24, 0]
                    }}
                    transition={{
                        times: [0, 0.25, 0.5, 0.75, 1],
                        duration: durations[i],
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                    }}
                />
            ))}
            <motion.div
                className="absolute left-2 right-2 top-2 bottom-2 rounded-md"
                animate={{ boxShadow: ["inset 0 0 0 0 rgba(59,130,246,0)", "inset 0 0 0 4px rgba(59,130,246,0.08)", "inset 0 0 0 0 rgba(59,130,246,0)"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
            />
        </div>
    );
};


// --- 5. MLOps & Scalable Deployment Visual ---
const MLOpsVisual = () => {
    // Production readiness: stable bars with a passing deployment pulse
    const heights = [0.45, 0.62, 0.55, 0.82, 0.74];
    return (
        <div className="relative w-28 h-20">
            <div className="absolute inset-0">
                <svg viewBox="0 0 100 70" className="w-full h-full">
                    <path d="M10 60 H90 M10 45 H90 M10 30 H90" stroke="#e5e7eb" strokeWidth="1" />
                </svg>
            </div>
            <div className="absolute inset-0 px-3 flex items-end justify-between">
                {heights.map((h, i) => (
                    <motion.div
                        key={i}
                        className="w-3 rounded-t-md bg-gradient-to-t from-blue-500 to-blue-400"
                        initial={{ height: "8%" }}
                        animate={{ height: `${h * 100}%` }}
                        transition={{ duration: 0.9, delay: i * 0.08, type: "spring", stiffness: 140, damping: 16, repeat: Infinity, repeatType: "mirror", repeatDelay: 1.4 }}
                    />
                ))}
            </div>
            <motion.div
                className="absolute left-0 right-0 top-0 bottom-0"
                animate={{ background: ["linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.08) 40%, rgba(59,130,246,0) 80%)", "linear-gradient(90deg, rgba(59,130,246,0) 20%, rgba(59,130,246,0.08) 60%, rgba(59,130,246,0) 100%)"] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                style={{ maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)" }}
            />
        </div>
    );
};

// --- 6. Data Strategy & Engineering Visual ---
const DataVisual = () => {
    // Clean data flow: packets travel through lanes with subtle variance
    const lanes = [-12, -4, 4, 12];
    return (
        <div className="relative w-full h-full">
            <svg viewBox="0 0 120 40" className="absolute inset-0 w-full h-full">
                {lanes.map((y, i) => (
                    <path key={i} d={`M10 ${20 + y} Q 40 ${20 + y - 6}, 70 ${20 + y} T 110 ${20 + y}`} stroke="#e5e7eb" strokeWidth="1" fill="none" />
                ))}
            </svg>
            {lanes.map((y, i) => (
  <motion.div
    key={i}
    className="absolute w-1.5 h-1.5 rounded-full"
    style={{
      background: i % 2 === 0 ? "#60a5fa" : "#93c5fd",
      left: 0,
      top: "50%",
      transform: `translateY(calc(-50% + ${y}px))`
    }}
    initial={{ x: 10, opacity: 0 }}
    animate={{ x: [10, 110], opacity: [0, 1, 0] }}
    transition={{ duration: 2.2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
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
    <section id="services" className="bg-white text-gray-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
            <span className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full border border-blue-100">Our Services</span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">End-to-End AI Solutions</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl font-medium text-gray-600">From foundational data strategy to scalable enterprise-grade AI applications, we cover every stage of your journey.</p>
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