import React from 'react'
import { ArrowRight } from "lucide-react"
// import { Broom, Building2 } from "lucide-react";
import { useState, useEffect } from 'react'


const Section = () => {



const [counters, setCounters] = useState({
    jobsDone: 0,
    satisfiedCustomers: 0,
    accuracy: 0,
    yearsExperience: 0,
  })

  useEffect(() => {
    const targets = {
      jobsDone: 15420,
      satisfiedCustomers: 8950,
      accuracy: 99.8,
      yearsExperience: 25,
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        jobsDone: Math.floor(targets.jobsDone * progress),
        satisfiedCustomers: Math.floor(targets.satisfiedCustomers * progress),
        accuracy: Math.floor(targets.accuracy * progress * 10) / 10,
        yearsExperience: Math.floor(targets.yearsExperience * progress),
      })

      if (currentStep >= steps) {
        setCounters(targets)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

 return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 gap-10">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-500 mb-8 tracking-[0.2em] uppercase">INDUSTRIES WE SERVE</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-8 max-w-lg text-balance leading-tight">
              Proffesional Cleaning & Building Services Tailored to Your Needs.
            </h1>
          </div>

          <div className="flex-1 max-w-lg md:ml-16">
            <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
             At Nonny Dave Services, we are committed to making life easier for individuals, families, and businesses. We specialize in delivering professional cleaning services and building project connections by linking clients with trusted experts who guarantee quality results.
            </p>
          <a href="/about">
            <button className="group w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </a>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Professional Cleaning Services */}
          <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
            <div className="mb-6">
             {/* <Broom className="w-10 h-10 text-blue-600" /> */}
              <h3 className="text-2xl font-bold text-blue-950 mb-3">Professional Cleaning Services</h3>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-base">
               A clean environment is more than just looks it’s about health, comfort, and peace of mind. At Nonny Dave Services, our team of experienced cleaners goes beyond surface-level tidying to ensure every space is fresh, hygienic, and welcoming. We use modern cleaning techniques, safe products, and a detail-oriented approach to guarantee spotless results, whether it’s your home, office, or post-project site.
              </p>
            </div>
             <a href="/services">
             <button className="bg-blue-950 mt-5 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Learn More
            </button>
             </a>
          </div>

          {/* Building Project Connect Services */}
          <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-950 mb-3">Building Project Connect Services</h3>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-base">
                Turning your building dream into reality requires the right professionals and that’s where Nonny Dave Services comes in. We connect you with a trusted network of skilled experts who handle every stage of your project, from foundation to finishing.
                <br /><br />
                Whether you’re building a home, office, or large-scale structure, we make the process easier by ensuring you work only with qualified, reliable, and result-driven specialists.
              </p>
            </div>
             <a href="/services">
             <button className="bg-blue-950 mt-5 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Learn More
            </button>
             </a>
          </div>
        </div>
      </div>


       {/* Stats Counter Section */}
        <div className="mt-5 bg-white rounded-2xl shadow-xl border border-gray-200 p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-950 mb-4">Our Track Record</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Numbers that speak to our commitment to excellence and reliability in our professional services
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gray-50 rounded-xl p-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-4xl font-bold text-blue-950 mb-2">{counters.jobsDone.toLocaleString()}+</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Jobs Completed</div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gray-50 rounded-xl p-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-4xl font-bold text-blue-950 mb-2">
                    {counters.satisfiedCustomers.toLocaleString()}+
                  </div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Satisfied Customers</div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gray-50 rounded-xl p-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-4xl font-bold text-blue-950 mb-2">{counters.accuracy}%</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Job Accuracy</div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gray-50 rounded-xl p-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-4xl font-bold text-blue-950 mb-2">{counters.yearsExperience}+</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Section

