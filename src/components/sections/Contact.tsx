'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
} as const;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-24"
    >
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

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
        {/* Contact Form (2/3 width) */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
                className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                className="w-full bg-black/40 border border-gray-700/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === 'sending'}
              className="w-full mt-4 bg-white text-black px-6 cursor-pointer py-3 rounded-lg font-medium text-lg hover:shadow-lg transition disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <p className="mt-4 text-green-400">Thank you! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-500">Oops, something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>

        {/* Contact & Location (right aligned) */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          {/* Head Office */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <div className="w-12 h-12 rounded-full bg-gray-800/60 border border-gray-700 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-gray-200" />
            </div>
            <h4 className="text-white text-lg font-semibold mb-2">Head Office</h4>
            <p className="text-gray-300">5899 Alexys Highway Suite 678</p>
            <p className="text-gray-400">NR, Nevada, USA</p>
          </div>

          {/* Phone */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <div className="w-12 h-12 rounded-full bg-gray-800/60 border border-gray-700 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-gray-200" />
            </div>
            <h4 className="text-white text-lg font-semibold mb-2">Phone</h4>
            <p className="text-gray-300">+1 (234) 567-890</p>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <div className="w-12 h-12 rounded-full bg-gray-800/60 border border-gray-700 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-gray-200" />
            </div>
            <h4 className="text-white text-lg font-semibold mb-2">Email</h4>
            <p className="text-gray-300">info@qubasoftware.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
