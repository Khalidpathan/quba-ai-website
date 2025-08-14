'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/Khalidpathan',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/Khalidpathan',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/Khalidpathan',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:info@quba-ai.com',
      icon: Mail,
    },
  ],
  services: [
    { name: 'AI Consulting', href: '#consulting' },
    { name: 'Machine Learning', href: '#ml' },
    { name: 'Data Analytics', href: '#analytics' },
    { name: 'Automation', href: '#automation' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Privacy Policy', href: '#privacy' },
  ],
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@quba-ai.com',
    href: 'mailto:info@quba-ai.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (234) 567-890',
    href: 'tel:+1234567890',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'San Francisco, CA',
    href: '#location',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 border-t border-gray-800/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_var(--tw-gradient-stops))] from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Newsletter Section */}
          <motion.div
            className="border-t border-gray-800/50 pt-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
              {/* Left Side - Social Icons */}
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={item.name}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Center - Newsletter */}
              <div className="text-center max-w-md">
                <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest AI insights</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 backdrop-blur-sm"
                  />
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>

              {/* Right Side - Arrow Up Button */}
              <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8">
              <motion.p
                className="text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                &copy; {currentYear} Quba AI. All rights reserved. Crafted with ❤️ for the future.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Full-Width QubaAI Branding Section */}
        <div className="relative border-t border-gray-800/30 w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
          <motion.div
            className="relative z-10 py-16 w-full text-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter select-none w-full"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.1) 50%, rgba(59,130,246,0.3) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 0 40px rgba(59,130,246,0.3)",
              }}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 60px rgba(59,130,246,0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              QubaAI
            </motion.h1>
            <motion.div
              className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Pioneering the future of artificial intelligence
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}