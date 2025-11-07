'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from 'lucide-react';

const navigation = {
  social: [
    { name: 'GitHub', href: 'https://github.com/Khalidpathan', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/Khalidpathan', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/Khalidpathan', icon: Linkedin },
    { name: 'Email', href: 'mailto:info@quba-ai.com', icon: Mail },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 border-t border-gray-800/50 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Re-aligned small divs */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
          {/* Social Icons */}
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
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Subscribe Email */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:flex-none px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 backdrop-blur-sm"
            />
            <motion.button
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </div>

          {/* Scroll to Top & Copyright */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center">
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Quba AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Full-Width QubaAI Branding Section */}
      <div className="relative border-t border-gray-800/30 w-full h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
        <motion.div
          className="relative z-10 py-4 w-full text-center overflow-hidden "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black tracking-tighter select-none w-full leading-none mb-2"
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
            Quba
          </motion.h1>
          <motion.div
            className="h-1 w-48 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2"
            initial={{ width: 0 }}
            whileInView={{ width: "12rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-gray-300 text-md sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Pioneering the future of artificial intelligence
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
