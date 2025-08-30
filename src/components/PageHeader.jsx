import React from 'react'
import { Link } from "react-router-dom";

const PageHeader = ({ title, currentPage, backgroundImage }) => {
  return (
    <>
    
     <div
      className="relative bg-cover bg-center h-60 flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mt-6 mx-20 px-6 text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="mt-2 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <span className="text-cyan-400">{currentPage}</span>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default PageHeader