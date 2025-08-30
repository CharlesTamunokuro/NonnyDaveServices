import React from 'react';

const projects = [
  {
    id: 1,
    image: 'http://googleusercontent.com/file_content/0',
    title: 'LAX Midfield Satellite Concourse (MSC) North',
    location: 'CALIFORNIA, US',
    fullInfo: 'This project involved the construction of the new Midfield Satellite Concourse at Los Angeles International Airport, a state-of-the-art facility designed to enhance passenger experience and operational efficiency.',
  },
  {
    id: 2,
    image: 'http://googleusercontent.com/file_content/0',
    title: 'FCL Grassy Lake Fertilizer Terminal',
    location: 'ALBERTA, CA',
    fullInfo: 'Development of a major fertilizer terminal in Grassy Lake, Alberta, focusing on modern storage solutions and efficient distribution networks for agricultural needs.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/600x400', // Placeholder for the third image
    title: 'Example Project Three',
    location: 'TEXAS, US',
    fullInfo: 'A comprehensive infrastructure project focusing on urban development and sustainable community planning in a rapidly growing metropolitan area.',
  },
  // Add more projects as needed
];

const Card = ({ items }) => {
  return (
    <section className="py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden group cursor-pointer bg-white shadow-lg rounded-lg"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Initial Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-0 opacity-100">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-200 uppercase">{item.location}</p>
              </div>

              {/* Full Info Overlay (Visible on Hover) */}
              <div className="absolute inset-0 bg-white p-6 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-md text-gray-600 mb-4">{item.fullInfo}</p>
                <p className="text-sm text-gray-500 uppercase">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;