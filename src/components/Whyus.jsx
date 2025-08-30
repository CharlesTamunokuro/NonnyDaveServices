import React from 'react'
import { Lightbulb, Handshake, TrendingUp, Clock } from "lucide-react"
import image1 from '../assets/display1.jpeg'
import image2 from '../assets/display2.jpeg'
import image3 from '../assets/display3.jpeg'
import image4 from '../assets/display4.jpeg'

const Whyus = () => {
  return (
    <div className="mt-36 min-h-screen bg-white p-4 sm:p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Images Left Side */}
          <div className="relative w-full h-[500px] mb-10 lg:mb-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Image 1 - Top Left */}
              <div className="absolute top-4 left-4 w-40 h-28 sm:w-56 sm:h-40 md:w-80 md:h-64 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <img
                  src={image1}
                  alt="VR Technology"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
              {/* Image 2 - Middle Left */}
              <div className="absolute top-32 left-12 w-36 h-24 sm:w-48 sm:h-32 md:w-72 md:h-56 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <img
                  src={image2}
                  alt="Modern Office"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
              {/* Image 3 - Bottom Left */}
              <div className="absolute bottom-24 left-8 w-36 h-24 sm:w-48 sm:h-32 md:w-68 md:h-56 transform rotate-8 hover:rotate-0 transition-transform duration-300">
                <img
                  src={image4}
                  alt="Team Collaboration"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
              {/* Image 4 - Bottom Left */}
              <div className="absolute bottom-8 left-32 w-44 h-28 sm:w-60 sm:h-40 md:w-84 md:h-68 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <img
                  src={image3}
                  alt="Innovation"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 w-full">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight">
                Few Reasons Why People Choosing Us!
              </h1>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                We pride ourselves on being the trusted partner for innovative and reliable technology solutions. Here's
                why we stand out
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Innovative Solutions */}
              <div className="bg-white rounded-2xl p-6 text-center space-y-4 shadow">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Innovative</h3>
                  <h3 className="text-xl font-bold text-gray-900">Solutions</h3>
                </div>
              </div>

              {/* Client-Centric Approach */}
              <div className="bg-white rounded-2xl p-6 text-center space-y-4 shadow">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Client-Centric</h3>
                  <h3 className="text-xl font-bold text-gray-900">Approach</h3>
                </div>
              </div>

              {/* Proven Track Record */}
              <div className="bg-white rounded-2xl p-6 text-center space-y-4 shadow">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Proven Track</h3>
                  <h3 className="text-xl font-bold text-gray-900">Record</h3>
                </div>
              </div>

              {/* Timely Delivery */}
              <div className="bg-white rounded-2xl p-6 text-center space-y-4 shadow">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Timely Delivery</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whyus