import React from 'react';

const HeroPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="w-full px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-lg font-medium text-gray-600 tracking-wider uppercase">
            Quba AI
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 leading-tight">
            Built for{' '}
            <span className="italic font-light text-gray-700">Fast-Moving</span>
            <br />
            <span className="font-normal">Businesses.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Prospect surfaces what matters, automates the rest,<br />
            and keeps you moving with intention.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get started now
            </button>
            <button className="text-gray-700 px-8 py-4 font-medium hover:text-gray-900 transition-colors">
              Explore more
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center">
            {/* User Avatars */}
            <div className="flex -space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-3 border-white shadow-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">JD</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 border-white shadow-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">SM</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-3 border-white shadow-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">AL</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-3 border-white shadow-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">MK</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">Rated 4.97/5 from 500+ reviews</span>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Elements for Visual Interest */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="fixed top-40 right-16 w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-32 left-20 w-1 h-1 bg-green-300 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
      <div className="fixed bottom-60 right-32 w-2 h-2 bg-orange-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};

export default HeroPage;