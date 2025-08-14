'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ShoppingCart, Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Track scroll position for background opacity
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navigationItems = [
    { name: 'QubaAI', href: '/', color: 'text-blue-300' },
    { name: 'Services', href: '/pricing', color: 'text-white' },
    { name: 'Work', href: '/features', color: 'text-white' },
    { name: 'Testimonials', href: '/features', color: 'text-white' },
    { name: 'Contact', href: '/pricing', color: 'text-white' },
    
  ]


  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-4 right-4 z-50"
      >
        <div className="max-w-xl mx-auto">
          <motion.div
            className={`backdrop-blur-xl rounded-2xl px-4 py-2 border transition-all duration-500 ${
              isScrolled 
                ? 'border-white/30 bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-800/90 shadow-2xl' 
                : 'border-gray-700/30 bg-gradient-to-r from-gray-900/70 via-black/70 to-gray-800/70 shadow-xl'
            }`}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center">

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`${item.color} text-sm font-medium hover:text-blue-200 transition-all duration-300 relative group`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-200 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
                
              </nav>

              {/* Enhanced Right Side Actions */}
              <div className="flex items-center space-x-3">
                {/* Enhanced Shopping Cart */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  
                </motion.div>

                {/* Enhanced Login Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group border border-white/20"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative">Book a Call</span>
                </motion.button>

                {/* Enhanced Mobile Menu Button */}
                <motion.button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-white hover:text-blue-200 transition-colors duration-200 p-1.5 rounded-lg hover:bg-white/10 border border-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle mobile menu"
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* Enhanced Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-3 pt-3 border-t border-white/20 overflow-hidden"
                >
                  <nav className="flex flex-col space-y-2">
                    {navigationItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${item.color} text-sm font-medium hover:text-blue-200 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:translate-x-2 transform`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="pt-2"
                    >
                    </motion.div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.header>

      {/* Enhanced Backdrop for dropdown and mobile menu */}
      <AnimatePresence>
        {(isDropdownOpen || isMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => {
              setIsDropdownOpen(false)
              setIsMenuOpen(false)
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Header