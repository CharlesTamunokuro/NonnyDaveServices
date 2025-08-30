import React, { useState, useEffect } from "react"

const testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Nonny Dave Services exceeded our expectations in both building construction and cleaning. Their professionalism and attention to detail made our office renovation stress-free.",
      name: "Chinedu Okafor",
      company: "Okafor & Sons Ltd",
    },
    {
      text: "We rely on Nonny Dave for all our facility maintenance needs. Their team is reliable, efficient, and always delivers quality results.",
      name: "Aisha Bello",
      company: "Bello Properties",
    },
    {
      text: "From start to finish, Nonny Dave Services provided excellent communication and top-notch service. Our new building was completed on time and spotless.",
      name: "John Adeyemi",
      company: "Adeyemi Group",
    },
    {
      text: "The cleaning crew from Nonny Dave Services transformed our workspace. We appreciate their commitment to health, safety, and customer satisfaction.",
      name: "Ngozi Umeh",
      company: "Umeh Consulting",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-12">What Our Clients Say</h2>
        <div className="relative min-h-[200px] flex items-center justify-center">
          <div className="transition-opacity duration-500 ease-in-out">
            <blockquote className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed mb-8 max-w-3xl">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="space-y-2">
              <p className="text-xl font-semibold text-blue-950">{testimonials[currentTestimonial].name}</p>
              <p className="text-blue-950">{testimonials[currentTestimonial].company}</p>
            </div>
          </div>
        </div>
        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentTestimonial ? "bg-black" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default testimonials