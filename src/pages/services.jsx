import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import serviceimg from '../assets/serviceimg1.jpg'
import WorkTogether from '../components/WorkTogether';
import PageHeader from '../components/PageHeader'
import png1 from '../assets/png1.jpeg'
import png2 from '../assets/png2.jpeg'
import png3 from '../assets/png3.jpeg'

const projects = [
  {
    id: 1,
    image: png1,
    title: 'FOUNDATION LAYING',
    location: 'PORT HARCOURT, NG',
    fullInfo: 'This project involved the construction of the new Midfield Satellite Concourse at Los Angeles International Airport, a state-of-the-art facility designed to enhance passenger experience and operational efficiency.',
  },
  {
    id: 2,
    image: png2,
    title: 'BUILDING CONSTRUCTION FINISHING',
    location: 'PORT HARCOURT, NG',
    fullInfo: 'Development of a major fertilizer terminal in Grassy Lake, Alberta, focusing on modern storage solutions and efficient distribution networks for agricultural needs.',
  },
  {
    id: 3,
    image: png3,
    title: 'CIVIL ENGINEERING WORKS',
    location: 'PORT HARCOURT, NG',
    fullInfo: 'A comprehensive infrastructure project focusing on urban development and sustainable community planning in a rapidly growing metropolitan area.',
  },
  // Add more projects as needed
];

const services = () => {


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
      title="Services"
      currentPage="Services"
      backgroundImage={serviceimg}
    />
    <div className="max-w-7xl mx-auto px-6 py-3"></div>


      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Making Life Easier, One Service at a Time</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
             Combining expertise, innovation, and care to serve you better.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/2 p-6">
              <div className="flex items-center mb-4">
                <span className="w-12 h-1 bg-blue-950 mr-4"></span>
                <p className="text-sm font-semibold text-blue-950 uppercase">BUILDINGS SERVICE</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 leading-tight mb-4">
                Construction <br />
                Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Our suite of integrated construction services ensure the highest degree of quality, safety, efficiency and innovation on your projects.
              </p>
              <div className="flex items-center">
                <span className="w-1 h-16 bg-blue-950 mr-4"></span>
                <p className="text-sm font-bold text-gray-800 uppercase">SERVICE OVERVIEW</p>
              </div>
              {/* Service Overview & List */}
              <div className="mt-6">
                {/* <h4 className="text-lg font-semibold text-blue-950 mb-2">Service Overview</h4> */}
                <p className="text-gray-700 mb-4">
                  Our construction services cover every aspect of your building project, from initial planning to final completion. We focus on quality, safety, and efficiency to deliver outstanding results for residential, commercial, and industrial clients.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Engineers (Structural & Civil)</li>
                  <li>Architects & Building Designers</li>
                  <li>Surveyors (land & property measurement)</li>
                  <li>Builders & Masons</li>
                  <li>Plumbers & Water System Experts</li>
                  <li>Project Managers & Supervisors</li>
                  <li>Roofers & POP/False Ceiling Experts</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-20">
              <img 
                src={serviceimg}
                alt="A construction worker welding on a building"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Reusable Card Section */}
        <Card items={projects} />




        <div className="container mt-9 mx-auto px-4">
         

          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/2 p-6">
              <div className="flex items-center mb-4">
                <span className="w-12 h-1 bg-blue-950 mr-4"></span>
                <p className="text-sm font-semibold text-blue-950 uppercase">PROFESSIONAL CLEANING SERVICE</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 leading-tight mb-4">
                Cleaning <br />
                Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Our suite of integrated construction services ensure the highest degree of quality, safety, efficiency and innovation on your projects.
              </p>
              <div className="flex items-center">
                <span className="w-1 h-16 bg-blue-950 mr-4"></span>
                <p className="text-sm font-bold text-gray-800 uppercase">SERVICE OVERVIEW</p>
              </div>
              <div className="mt-6">
 
  <p className="text-gray-700 mb-4">
    Our professional cleaning services are designed to create healthy, comfortable, and welcoming environments for homes, offices, and commercial spaces. We use modern cleaning techniques, safe products, and a detail-oriented approach to guarantee spotless results.
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>Residential Cleaning</li>
    <li>Office & Commercial Cleaning</li>
    <li>Post-Construction Cleaning</li>
    <li>Deep Cleaning & Sanitization</li>
    <li>Floor Care (Tiles, Carpets, Wood)</li>
    <li>Window & Glass Cleaning</li>
    <li>Move-In/Move-Out Cleaning</li>
  </ul>

  </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-36">
              <img 
                src={serviceimg}
                alt="A construction worker welding on a building"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>


      </section>

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

    </>
  )
}

export default services