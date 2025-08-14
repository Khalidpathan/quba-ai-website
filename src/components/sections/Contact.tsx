'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, MapPin } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
} as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-24"
    >
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-6">
          <span className="text-gray-300 text-sm font-medium">Get In Touch</span>
          <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 leading-tight">
          Let's Work <span className="text-gray-400">On Your</span> <br />
          <span className="text-gray-300">Next</span>{' '}
          <span className="text-blue-400 font-normal">AI Project</span>
        </h1>
        <p className="text-xl text-gray-400">
          Have a project in mind or want to discuss how we can help? We’d love to hear from you.
        </p>
      </div>

      {/* Form & Calendly */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-12">
        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
          <form className="space-y-6">
            {[
              { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
              { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
            ].map((field, idx) => (
              <div
                key={field.id}
                className={idx < 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : ''}
              >
                <div>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                  />
                </div>
                {idx === 0 && (
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                    />
                  </div>
                )}
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Calendly Widget */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Schedule a Meeting</h3>
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-white">Book a Consultation</h4>
              <p className="text-gray-400 leading-snug">
                Choose a convenient time for a 30‑minute discussion about your AI project.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden bg-black/40 border border-gray-700/50">
            <InlineWidget
              url="https://calendly.com/your-calendly-username/30min"
              styles={{ height: 'clamp(320px, 45vh, 440px)', width: '100%' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Contact Info Cards BELOW */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Head Office */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="w-12 h-12 rounded-full bg-gray-800/60 border border-gray-700 flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-gray-200" />
          </div>
          <h4 className="text-white text-lg font-semibold mb-2">Head Office</h4>
          <p className="text-gray-300">5899 Alexys Highway Suite 678</p>
          <p className="text-gray-400">NR, Nevada, USA</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="w-12 h-12 rounded-full bg-gray-800/60 border border-gray-700 flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-gray-200" />
          </div>
          <h4 className="text-white text-lg font-semibold mb-2">Phone</h4>
          <p className="text-gray-300">+1 234 567 890</p>
          <p className="text-gray-400">+1 234 567 890</p>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="w-12 h-12 rounded-full bg-gray-800/60 border border-gray-700 flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-gray-200" />
          </div>
          <h4 className="text-white text-lg font-semibold mb-2">Email</h4>
          <p className="text-gray-300">customer@automx.com</p>
          <p className="text-gray-400">client@automx.com</p>
        </motion.div>
      </div>
    </section>
  );
}
