import React from 'react'
import { Link } from 'react-router-dom'

const WorkTogether = () => {
  return (
    <>
    
    
      <section className="bg-white py-16 relative overflow-hidden">



         {/* Background SVG patterns */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-40 h-40 opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" fill="black" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-56 h-56 opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="150" height="150" fill="black" transform="rotate(45 80 80)" />
        </svg>
      </div>







      <div className="max-w-7xl mx-auto mt-20 mb-16 px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Ready to work together?
          </h2>
          <p className="text-gray-600 mb-6">
            Whether you have a project in mind and you’re looking for a reliable
            partner, or you’re looking to take the next step in your career, we’d
            love to hear from you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/contact"
              className="bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition text-center"
            >
              Build a Project with Us
            </Link>
            <Link
              to="/contact"
              className="border border-blue-950 px-6 py-3 rounded-lg font-semibold text-black hover:bg-gray-100 transition text-center"
            >
              Build a Career with Us
            </Link>
          </div>
        </div>

        {/* Right Visuals */}
       <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
          <div className="w-64 h-64 bg-gradient-to-tr from-gray-100 to-gray-300 rounded-2xl shadow-lg transform rotate-6"></div>
          <div className="absolute w-32 h-32 bg-black/5 rounded-full -top-6 -right-6"></div>
        </div>
      </div>
    </section>
    
    
    </>
  )
}

export default WorkTogether