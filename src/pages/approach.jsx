import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import approachImg2 from '../assets/display1.jpeg' // Use your preferred image for the right sidee
import WorkTogether from '../components/WorkTogether'
import serviceimg from '../assets/serviceimg1.jpg'

const approachSteps = [
  {
    title: "Understanding Your Needs",
    desc: "We begin by carefully listening to your requirements. Whether it’s professional cleaning or a construction project, we take the time to fully understand your expectations.",
    icon: (
      <svg className="w-10 h-10 text-gray-700 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01" />
      </svg>
    ),
  },
  {
    title: "Customized Planning",
    desc: "No two clients are alike. That’s why we design tailored solutions that align perfectly with your goals, budget, and timelines.",
    icon: (
      <svg className="w-10 h-10 text-gray-700 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8v8H8z" />
      </svg>
    ),
  },
  {
    title: "Professional Execution",
    desc: "Our skilled team applies industry best practices, modern tools, and attention to detail to ensure every job is completed to the highest standard.",
    icon: (
      <svg className="w-10 h-10 text-gray-700 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support & Trust",
    desc: "Our relationship doesn’t end at project delivery. We provide continuous support, ensuring lasting satisfaction and building long-term partnerships.",
    icon: (
      <svg className="w-10 h-10 text-gray-700 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8a5 5 0 00-10 0c0 5 5 9 5 9s5-4 5-9z" />
      </svg>
    ),
  },
]

const coreValues = [
  {
    title: "Integrity",
    desc: "We are transparent and honest in all our dealings.",
    icon: (
      <svg className="w-8 h-8 text-gray-700 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V4" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    desc: "We consistently go the extra mile to exceed expectations.",
    icon: (
      <svg className="w-8 h-8 text-gray-700 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    desc: "You can always count on us to deliver on time and with quality.",
    icon: (
      <svg className="w-8 h-8 text-gray-700 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="7" rx="2" stroke="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "We apply modern methods and techniques to deliver smarter solutions.",
    icon: (
      <svg className="w-8 h-8 text-gray-700 mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6M9 9l6 6" />
      </svg>
    ),
  },
]

const approach = () => {


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
      title=" Our Approach"
      currentPage="Approach"
      backgroundImage={serviceimg}
    />
    <div className="max-w-7xl mx-auto px-6 py-10"></div>


      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Our Winning Formula</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Discover our journey, the principles that guide us, and how we're dedicated to empowering your business to grow and thrive.
        </p>
      </div>

      <div className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Our Approach Section: Text left, Image right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Approach</h2>
              <p className="text-gray-700 mb-6">
                At <span className="font-semibold">NONNY DAVE SERVICES</span>, we don’t just provide services — 
                we build trust, deliver excellence, and put our clients first. Every project we handle 
                is guided by professionalism, innovation, and a deep commitment to making life easier 
                for individuals, families, and businesses.
              </p>
              <p className="text-gray-700">
                Our approach ensures that every client receives more than just a service — they gain a 
                trusted partner. With <span className="font-semibold">NONNY DAVE SERVICES</span>, you can be 
                confident of solutions designed around your needs, delivered with professionalism, care, and 
                excellence.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={approachImg2}
                alt="Our Approach"
                className="w-full max-w-md h-64 object-cover rounded-xl shadow"
              />
            </div>
          </div>

          {/* How We Work with Icons */}
          <h3 className="text-2xl font-semibold text-blue-950 mb-8 text-center">How We Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {approachSteps.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300 flex flex-col items-center"
              >
                {item.icon}
                <h4 className="text-lg font-semibold text-blue-950 mb-3 text-center">{item.title}</h4>
                <p className="text-gray-700 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <h3 className="text-2xl font-semibold text-blue-950 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {coreValues.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300 flex flex-col items-center"
              >
                {item.icon}
                <h4 className="text-lg font-semibold text-blue-950 mb-3 text-center">{item.title}</h4>
                <p className="text-gray-700 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Why It Matters */}
          <h4 className="text-3xl font-semibold text-blue-950 mb-8 text-center">Why It Matters</h4>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src={approachImg2}
                alt="Why It Matters"
                className="w-full h-64 object-cover rounded-xl shadow"
              />
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:items-start">
              <p className="text-gray-700 text-center md:text-left max-w-2xl mx-auto mb-6">
                Our approach ensures that every client receives more than just a service — they gain a 
                trusted partner. With <span className="font-semibold">NONNY DAVE SERVICES</span>, you can be 
                confident of solutions designed around your needs, delivered with professionalism, care, and 
                excellence.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 rounded-lg font-semibold text-white bg-blue-950 hover:bg-blue-800 shadow transition-colors duration-200"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>

            <WorkTogether/>

           

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

    </>

  )
}

export default approach