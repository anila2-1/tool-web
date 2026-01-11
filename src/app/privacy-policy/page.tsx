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
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto relative z-10">
            Learn how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you create an account, use our tools,
              or contact us for support. This may include your name, email address, and any data you input into our tools.
            </p>
            <p className="text-gray-600">
              We also automatically collect certain information about your device and usage of our services,
              including IP address, browser type, and usage patterns.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• To provide and maintain our services</li>
              <li>• To communicate with you about our services</li>
              <li>• To improve and personalize your experience</li>
              <li>• To comply with legal obligations</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
              except as described in this policy or as required by law.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: w1techy8@gmail.com
            </p>
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
