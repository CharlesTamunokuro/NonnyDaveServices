import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import png4 from '../assets/png4.jpeg'
import png5 from '../assets/png5.jpeg'
import hero from '../assets/hero.jpg'
import WorkTogether from '../components/WorkTogether'
import serviceimg from '../assets/serviceimg1.jpg'

const About = () => {
  // Animation state for page load
  const [loaded, setLoaded] = useState(false)
  // State for scroll-to-top button
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div
        className={`transition-all duration-700 ease-out transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <PageHeader
          title="About Us"
          currentPage="About"
          backgroundImage={serviceimg}
        />
        <div className="max-w-7xl mx-auto px-6 py-3"></div>

        <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Your One-Stop Partner for Cleaning & Building Excellence</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover our journey, the principles that guide us, and how we're dedicated to empowering your business to grow and thrive.
              </p>
            </div>

            {/* Main Content with Slanted Animated Images */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-700 mb-4">
                  Founded in 2020, Nonny Dave Services began with a simple mission: to help businesses and individuals connect with trusted professionals and achieve their goals. Over the years, we have grown into a leading provider of cleaning and building project services, known for our commitment to quality, reliability, and customer satisfaction.
                </p>
                <p className="text-gray-700 mb-4">
                  Our journey has been shaped by a passion for excellence and a dedication to making a difference in the lives of our clients. We believe that every project, big or small, deserves the highest level of attention and care. Our team of experts brings years of experience and a deep understanding of industry best practices to every job.
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  To become the leading trusted service provider that people can count on for both cleaning excellence and construction solutions
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To provide reliable, affordable, and professional services that make our clients’ lives easier from keeping their spaces sparkling clean to ensuring successful building projects.
                </p>
                <p className="text-gray-700 mb-4">
                  Whether you need professional cleaning, building project connections, or expert advice, Nonny Dave Services is here to help you achieve your vision. Join us on our journey and experience the difference that true dedication and expertise can make.
                </p>
              </div>
              {/* Two Slanted, Animated Images */}
              <div className="hidden md:flex flex-col items-center gap-6">
                <img
                  src={png4}
                  alt="About Nonny Dave"
                  className="rounded-xl shadow-lg w-64 h-64 object-cover md:w-80 md:h-80 transform -rotate-6 animate-shake"
                />
                <img
                  src={png5}
                  alt="Team Nonny Dave"
                  className="rounded-xl shadow-lg w-56 h-56 object-cover md:w-72 md:h-72 transform rotate-6 animate-shake"
                />
              </div>
            </div>


          <div className="bg-white py-16 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Who we are</h3>
                <p className="text-gray-700 mb-4">
                  We are leaders of next-generation technological services and consulting, 
                  enabling and empowering clients in various sectors, industries and countries 
                  to best navigate their digital transformation.
                </p>
                {/* <a href="#" className="text-blue-600 font-medium hover:underline">
                  Read more →
                </a> */}
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate responsibility</h3>
                <p className="text-gray-700 mb-4">
                  We bring you powerful advantages to navigate your digital.
                </p>
                {/* <a href="#" className="text-blue-600 font-medium hover:underline">
                  Read more →
                </a> */}
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership</h3>
                <p className="text-gray-700 mb-4">
                  Our work leans on the different perspectives and experiences 
                  shared by our team.
                </p>
                {/* <a href="#" className="text-blue-600 font-medium hover:underline">
                  Read more →
                </a> */}
              </div>

            </div>
          </div>
        </div>


            {/* Card Section


            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Core Values</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover our journey, the principles that guide us, and how we're dedicated to empowering your business to grow and thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust</h3>
                <p className="text-gray-700">
                  Founded in 2020, Closeify began with a simple mission: to help businesses connect with their customers in more meaningful ways.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We believe in transparency, innovation, and customer success. These core values guide every decision we make.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-700">
                  To empower businesses of all sizes with tools that drive growth, foster relationships, and create lasting success.
                </p>
              </div>
            </div> */}

            {/* Follow Us Section
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 text-lg font-medium underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-lg font-medium underline"
                >
                  Facebook
                </a>
              </div>
            </div> */}
          </div>
        </section>
        <div className="bg-white py-16 px-6 lg:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="p-2">
                <img
                  src={hero} // Replace with your image path
                  alt="CEO"
                  className="rounded-lg object-cover"
                />
                <div className="text-center mt-4">
                  <h3 className="font-bold text-lg text-gray-900">OJUKWU CHINONSO DAVID</h3>
                  <p className="text-sm text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet The CEO</h2>
              <p className="text-gray-700 mb-4">
               Ojukwu Chinonso David is the visionary CEO of Nonny Dave Services, a company making a remarkable impact in the building construction and industrial cleaning industry with its mission to deliver world-class solutions that combine quality, reliability, and innovation.
              </p>
              <p className="text-gray-700 mb-4">
               A target-oriented and self-motivated professional, Mr. Ojukwu possesses exceptional leadership and project management skills, anchored by a high level of integrity. His expertise, developed through years of experience in both non-governmental and private organizations, enables him to execute projects efficiently and contribute meaningfully to organizations and communities that value excellence and sustainable growth.
              </p>
              <p className="text-gray-700 mb-4">
               With 8 years of experience in the construction and facility management sector, Mr. Ojukwu has collaborated with notable organizations such as Slate Construction Ltd, Directed Services Ltd, Magdon Facility Management, and GalaxyHub Industrial Services. His career reflects a consistent drive to add value through high-quality project delivery and dependable service solutions.
              </p>
              <p className="text-gray-700">
               Mr. Ojukwu brings a deep understanding of purpose and the methodologies required to empower teams, manage complex projects, and maintain high-performance standards. With expertise in building construction, industrial cleaning, and facility maintenance, he has successfully trained teams, led large-scale projects, and established a reputation for excellence and professionalism across various fields.
              </p>
              {/* Social Icons */}
              <div className="mt-8">
                <p className="text-base text-gray-600 mb-3 font-medium">Check him out on his socials:</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/1Amntqq8U5/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.326v21.348C0 23.408.592 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.593 1.325-1.326V1.326C24 .592 23.408 0 22.675 0"/>
                    </svg>
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="hover:text-blue-700 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/>
                      </svg>
                      </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WorkTogether />
      </div>
      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition duration-300"
          aria-label="Scroll to top"
        >
          ↑ 
        </button>
      )}
      {/* Add shake animation style */}
      <style>
        {`
          .animate-shake {
            animation: shake 1s infinite;
          }
          @keyframes shake {
            0% { transform: rotate(-6deg) translateY(0); }
            20% { transform: rotate(-3deg) translateY(-2px); }
            40% { transform: rotate(6deg) translateY(2px); }
            60% { transform: rotate(3deg) translateY(-2px); }
            80% { transform: rotate(-6deg) translateY(2px); }
            100% { transform: rotate(-6deg) translateY(0); }
          }
        `}
      </style>
    </>
  )
}
export default About
