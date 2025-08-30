import React from 'react'
import Image  from '../assets/hero.jpg'

const Header = () => {
  return (
      <main className="bg-white mt-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-3xl xl:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Your One-Stop Solution for Cleaning & Building Excellence
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
            we make life easier for individuals, families, and businesses by providing professional cleaning services and connecting you with trusted building experts. From sparkling clean spaces to successful construction projects
            </p>
            <a href="/services">
            
            <button className="bg-blue-950 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Learn More
            </button>
            
            </a>
          </div>

         {/* Right Content - Container Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative animate-fade-in opacity-0 animate-delay-300">
              <img
                src={Image}
                alt="AXCON Shipping Container"
                className="w-full h-auto max-w-lg mx-auto hover:scale-102 transition-all duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header