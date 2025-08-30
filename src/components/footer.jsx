import React from 'react'
import { Facebook, Instagram, Linkedin, Music2, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const footer = () => {
  return (
    <>
      <footer className="bg-blue-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Left Section */}
            <div>
              <h2 className="text-xl font-bold mb-3">NONNY DAVE SERVICES</h2>
              <p className="text-sm leading-relaxed">
                We specialize in delivering high quality tech solutions that drive
                business growth and innovation. Our services are tailored to meet
                unique needs of individuals and organizations in today&apos;s
                digital world.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="https://www.instagram.com/nonny_dave?igsh=d2RsZnFtMHFhanFj&utm_source=qr" className="p-2 bg-blue-950 rounded-lg hover:bg-gray-700">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/share/16REw1C6yV/?mibextid=wwXIfr" className="p-2 bg-blue-950 rounded-lg hover:bg-gray-700">
                  <Facebook className="w-5 h-5" />
                </a>
              
                <a href="#" className="p-2 bg-blue-950 rounded-lg hover:bg-gray-700">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Address</h2>
              <p className="text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                2 East West Road Rumokuro, PH
              </p>
              <p className="text-sm mt-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                +234 803 392 3033
              </p>
              <p className="text-sm mt-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                nonnydaveservices@yahoo.com
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                    <ChevronRight className="w-4 h-4 text-white" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                    <ChevronRight className="w-4 h-4 text-white" />
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                    <ChevronRight className="w-4 h-4 text-white" />
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                    <ChevronRight className="w-4 h-4 text-white" />
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Newsletter</h2>
              <p className="text-sm mb-3">Subscribe to our Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 w-full rounded-l-lg border text-white bg-blue-950"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-gray-200">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
          © Nonny Dave, All Right Reserved.
        </div>
      </footer>
    </>
  )
}

export default footer