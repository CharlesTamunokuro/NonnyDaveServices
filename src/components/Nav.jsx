import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Nav = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = [
    { to: '/about', label: 'About us' },
    { to: '/services', label: 'Services' },
    { to: '/approach', label: 'Our Approach' },
    // { to: '/technology', label: 'Technology' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo + Company Name */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <Link to="/" className="text-lg sm:text-xl font-bold text-blue-900">
              NONNY DAVE SERVICES
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium ${
                    location.pathname === link.to
                      ? 'text-blue-900 border-b-2 border-black'
                      : 'text-gray-700 hover:text-blue-950'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-black focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                // X icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with transition */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white border-t border-gray-100 shadow-lg z-40 transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-8 opacity-0 pointer-events-none'
        }`}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="px-4 py-4 flex flex-col space-y-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-base font-medium rounded ${
                location.pathname === link.to
                  ? 'text-black bg-gray-100'
                  : 'text-gray-700 hover:text-black hover:bg-gray-50'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
