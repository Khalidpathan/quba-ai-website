'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  avatar: string
  rating: number
  quote: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Figo Nath",
    avatar: "/avatars/figo.jpg",
    rating: 5,
    quote: "We've reduced project delivery times by nearly 40% since integrating their solution. It's intuitive, efficient, and reliable.",
    date: "May 10, 2024"
  },
  {
    id: 2,
    name: "Liam Everhart",
    avatar: "/avatars/liam.jpg", 
    rating: 5,
    quote: "Youflow has totally changed the way we handle transactions. Everything just clicks, and we've seen some awesome improvements in how efficiently we operate.",
    date: "April 10, 2024"
  },
  {
    id: 3,
    name: "Carmen Waters",
    avatar: "/avatars/carmen.jpg",
    rating: 5,
    quote: "The Youflow platform has revolutionized our transaction processes. Everything flows seamlessly now, and we've experienced remarkable gains in operational efficiency.",
    date: "June 12, 2024"
  },
  {
    id: 4,
    name: "Carole Ken",
    avatar: "/avatars/carole.jpg",
    rating: 5,
    quote: "Customer support has been outstanding throughout our journey. The team is incredibly responsive and helpful for our growing teams.",
    date: "July 10, 2024"
  },
  {
    id: 5,
    name: "Mike Johnson",
    avatar: "/avatars/mike.jpg",
    rating: 5,
    quote: "The analytics dashboard provides incredible insights that have helped us make better business decisions and optimize our workflow.",
    date: "March 15, 2024"
  },
  {
    id: 6,
    name: "Sarah Chen",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
    quote: "Implementation was smooth and the ROI has been exceptional. Our team productivity has increased by 60% since adoption.",
    date: "February 28, 2024"
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-orange-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full flex flex-col">
      {/* Header with avatar and name */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-600"
          />
        </div>
        <div>
          <h4 className="text-white font-medium">{testimonial.name}</h4>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-300 text-sm leading-relaxed flex-grow mb-4">
        "{testimonial.quote}"
      </blockquote>

      {/* Date */}
      <div className="text-gray-500 text-xs">
        {testimonial.date}
      </div>
    </div>
  )
}

export default function TestimonialsPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 4
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage
    const end = start + testimonialsPerPage
    return testimonials.slice(start, end)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            {/* Left Content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                  Testimonials
                </span>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                What Clients Think
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  About Our Services
                </span>
              </h1>
            </div>

            {/* Right Content */}
            <div className="lg:w-2/5">
              <p className="text-gray-400 text-lg leading-relaxed">
                Our financial management platform is transforming the way 
                people manage their money. Here's what some of our users have 
                to say about their experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Navigation Controls */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={prevPage}
            className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
            disabled={currentPage === 0}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentPage ? 'bg-orange-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentTestimonials().map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}
