import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import serviceimg from '../assets/serviceimg1.jpg'

const contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess('')
    setError('')

    // Simulate form submission (no backend)
    setTimeout(() => {
      if (form.name && form.email && form.message) {
        setSuccess('Your message has been sent successfully!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setError('Please fill in all fields.')
      }
      setLoading(false)
    }, 1200)
  }

  return (
    <>


    <PageHeader
      title=" Contact Us"
      currentPage="Contact"
      backgroundImage={serviceimg}
    />
    <div className="max-w-7xl mx-auto px-6 py-3"></div>



      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-blue-950 mb-8 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-950 mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring"
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                className="bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {success && <p className="text-green-600 mt-3">{success}</p>}
              {error && <p className="text-red-600 mt-3">{error}</p>}
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-950 mb-4">Where We Are Located</h3>
            <p className="text-gray-700 mb-2">
              2 East West Road Rumokuro, PH
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span> nonnydaveservices@yahoo.com
            </p>
            <p className="text-gray-700 mb-6">
              <span className="font-semibold">Phone:</span>+234 803 392 3033
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.432369860318!2d6.996807073640392!3d4.866995340196305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d1fa7abec9b3%3A0x89637b691012a8f0!2s2%20E%20-%20W%20Rd%2C%20Umuibo%2C%20Port%20Harcourt%20500102%2C%20Rivers!5e0!3m2!1sen!2sng!4v1756559862188!5m2!1sen!2sng"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact




