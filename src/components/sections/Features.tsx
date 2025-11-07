// components/FeaturesSection.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,      // Icon for Fast MVP Delivery
  Zap,         // Icon for AI-Native Core
  TrendingUp,  // Icon for Outcome-as-a-Service
  ShieldCheck, // Icon for Your IP, Your Asset
  Layers,      // Icon for Full-Stack AI Team
  BrainCircuit, // New Icon for AI-Augmented Team
} from 'lucide-react';

// Define the type for a single feature
type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// Array of features, with the new AI-Augmented Team feature
const features: Feature[] = [
  {
    icon: TrendingUp,
    title: 'Outcome-as-a-Service',
    description: 'Stop paying for billable hours. Our success is tied to yours through performance-based pricing.',
  },
  {
    icon: BrainCircuit, // New Feature
    title: 'AI-Augmented Team',
    description: 'Our engineers are amplified by a suite of custom AI agents, allowing us to build faster, smarter, and more efficiently than traditional teams.',
  },
  {
    icon: Rocket,
    title: 'Sprint-Based Delivery',
    description: 'Go from idea to a functional AI prototype in weeks. We deliver value iteratively through focused, high-speed sprints.',
  },
  {
    icon: Layers,
    title: 'Full-Stack AI Team',
    description: 'Access a complete team of AI strategists, data scientists, and MLOps engineers on demand.',
  },
  {
    icon: Zap,
    title: 'AI-Native Core',
    description: 'We build with AI at the core, delivering solutions that are smarter, more scalable, and deeply integrated.',
  },
  {
    icon: ShieldCheck,
    title: 'Your IP, Your Asset',
    description: 'Every solution we build is unique to you. You own the intellectual property, securing your competitive edge.',
  },
];

const FeaturesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  } as const;

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="bg-blue-500/20 text-blue-200 text-sm font-medium px-3 py-1.5 rounded-full border border-blue-500/30">
            Our Edge
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            The New Standard for AI Development
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            We've replaced the traditional delivery model with a faster, smarter, and results-driven approach.
          </p>
        </div>
        <motion.div
          className="relative mt-16 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center text-center p-4"
              variants={itemVariants}
            >
              <div className="bg-blue-500/10 p-3 rounded-full mb-4 border border-blue-500/20">
                <feature.icon className="w-7 h-7 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;