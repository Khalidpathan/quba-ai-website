'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

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
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-t border-gray-800/50">
      <div className="container-max py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quba AI</h3>
            <p className="text-gray-400 mb-4">
              Empowering businesses with cutting-edge AI solutions to transform operations and drive innovation.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={item.name}
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{item.title}</h4>
                    <a href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Our Office</h4>
                  <p className="text-gray-400">
                    123 AI Street<br />
                    Tech Valley, CA 94025<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; {currentYear} Quba AI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-gray-500">
              Built with ❤️ by{' '}
              <a 
                href="https://github.com/Khalidpathan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Khalid Pathan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
