
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const page = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Animated header with floating elements */}
        <div className="relative text-center mb-16">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200/30 rounded-full filter blur-xl animate-float-slow" />
          <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-200/30 rounded-full filter blur-xl animate-float-medium" />

          <h1 className="text-5xl md:text-6xl font-bold mb-4 relative z-10">
            <span className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
              About Us
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto relative z-10">
            Discover who we are and what drives our mission to empower developers with cutting-edge tools and insights.
          </p>
        </div>

        {/* About Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a team of passionate developers dedicated to creating innovative tools that simplify complex tasks.
              Our platform offers a suite of utilities designed to boost productivity and enhance the development experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h3>
              <p className="text-gray-600">
                We provide free, easy-to-use tools for developers, including JSON formatters, IP address lookups,
                slug generators, and timestamp converters. Our tools are built with modern web technologies
                to ensure speed and reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the go-to resource for developers worldwide, offering comprehensive solutions
                that save time and reduce errors in everyday coding tasks.
              </p>
            </div>
          </div>
        </div>

        {/* Floating background elements */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full filter blur-3xl animate-float-slow" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full filter blur-3xl animate-float-medium" />
          <div className="absolute bottom-1/3 left-1/2 w-80 h-80 bg-gradient-to-bl from-cyan-100/20 to-blue-100/20 rounded-full filter blur-3xl animate-float-fast" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page
