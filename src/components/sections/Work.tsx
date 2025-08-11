"use client"

import React from 'react';
import { motion } from "framer-motion";
import { Brain, Code, Database, Server, Bot, Cpu, BarChart3, Users, Shield, Zap, ExternalLink, Star } from 'lucide-react';

// Animation variants
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Work = () => {
  // Sample projects data
  const sampleProjects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      description: "Intelligent product recommendations, automated customer service, and predictive inventory management using machine learning algorithms.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      metrics: { users: "50K+", improvement: "300%", rating: 4.9 },
      tags: ["Next.js", "TensorFlow", "Python", "Redis", "Stripe"]
    },
    {
      id: 2,
      title: "Smart Financial Assistant",
      description: "Mobile banking app with AI fraud detection, spending analysis, and personalized financial advice powered by machine learning.",
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      metrics: { users: "100K+", improvement: "250%", rating: 4.8 },
      tags: ["React Native", "PyTorch", "Node.js", "PostgreSQL", "OpenAI"]
    }
  ];

  // Project features
  const projectFeatures = [
    { icon: Cpu, title: 'AI Integration', desc: 'Seamless system integration' },
    { icon: BarChart3, title: 'Data Analytics', desc: 'Actionable business insights' },
    { icon: Shield, title: 'AI Security', desc: 'Protected AI implementations' },
    { icon: Zap, title: 'Performance Optimization', desc: 'Efficient AI solutions' }
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header Section */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8"
          >
            <span className="text-gray-300 text-sm font-medium">Our Portfolio</span>
            <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
          >
            Transforming Business <span className="text-gray-400">With</span>
            <br />
            <span className="text-gray-300">AI-Powered</span> <span className="text-blue-400 font-normal">Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Discover how we've transformed businesses with cutting-edge AI solutions, 
            delivering exceptional results and measurable impact.
          </p>
        </div>
      </div>

      {/* Main Projects Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {sampleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mr-4`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="bg-black/40 rounded-xl p-6 border border-gray-700/30">
                  <h4 className="text-lg font-medium text-white mb-4">Tech Stack</h4>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 py-3 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-400">{project.metrics.users}</div>
                      <div className="text-xs text-gray-500">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-400">+{project.metrics.improvement}</div>
                      <div className="text-xs text-gray-500">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-sm font-bold text-yellow-400">{project.metrics.rating}</span>
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">View Project</span>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Features Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {projectFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: ["easeOut"] as const
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
