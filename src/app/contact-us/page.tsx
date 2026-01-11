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
              Contact Us
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto relative z-10">
            Get in touch with us for any questions or feedback.
          </p>
        </div>

        {/* Contact Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">w1techy8@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Global</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Send Message
                </button>
              </form>
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
