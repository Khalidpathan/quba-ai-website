'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar } from 'lucide-react';
import { InlineWidget } from "react-calendly";

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

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="px-6">
        <div className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-gray-300 text-sm font-medium">Get In Touch</span>
              <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
            >
              Let's Work <span className="text-gray-400">On Your</span>
              <br />
              <span className="text-gray-300">Next</span> <span className="text-blue-400 font-normal">AI Project</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Have a project in mind or want to discuss how we can help your business? 
              We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                variants={itemVariants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

              {/* Calendly Meeting Setup */}
              <motion.div
                variants={itemVariants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-6">Schedule a Meeting</h3>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Book a Consultation</h4>
                      <p className="text-gray-400">Choose a convenient time for a 30-minute discussion about your AI project needs.</p>
                    </div>
                  </div>
                  
                  {/* Calendly Inline Widget */}
                  <div className="rounded-xl overflow-hidden bg-black/40 border border-gray-700/50">
                    <InlineWidget 
                      url="https://calendly.com/your-calendly-username/30min"
                      styles={{
                        height: '630px',
                        width: '100%',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;