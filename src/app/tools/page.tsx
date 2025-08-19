/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link'
import { FaGlobe, FaClock, FaCode, FaLink, FaArrowRight } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const tools = [
  {
    name: 'IP Address Lookup',
    description: 'Get geolocation and network information for any IP',
    icon: <FaGlobe className="text-blue-600 text-2xl" />,
    path: '/tools/ip-address',
    gradient: 'from-blue-100 via-white to-blue-50',
  },
  {
    name: 'Timestamp Converter',
    description: 'Convert between Unix timestamps and readable dates',
    icon: <FaClock className="text-purple-600 text-2xl" />,
    path: '/tools/timestamp-converter',
    gradient: 'from-purple-100 via-white to-purple-50',
  },
  {
    name: 'JSON Formatter',
    description: 'Beautify and validate JSON data with syntax highlighting',
    icon: <FaCode className="text-green-600 text-2xl" />,
    path: '/tools/json-formatter',
    gradient: 'from-green-100 via-white to-green-50',
  },
  {
    name: 'Slug Generator',
    description: 'Create SEO-friendly URL slugs from any text',
    icon: <FaLink className="text-orange-600 text-2xl" />,
    path: '/tools/slug-generator',
    gradient: 'from-orange-100 via-white to-orange-50',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faff] via-white to-[#eef3ff] relative overflow-hidden">
      {/* Floating Background Blobs */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 rounded-full blur-3xl opacity-30 animate-ping"></div>

      <Navbar />

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight tracking-tight animate-gradient bg-[length:200%_200%]">
            Developer Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Essential utilities to supercharge your workflow — fast, accurate, and beautifully designed.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {tools.map((tool, idx) => (
            <Link
              key={tool.path}
              href={tool.path}
              className={`group relative rounded-3xl p-8 border border-gray-200/40 
                          bg-gradient-to-br ${tool.gradient} 
                          shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
                          hover:shadow-[0_20px_50px_rgba(99,102,241,0.25)]
                          transition-all duration-500 ease-out
                          hover:scale-[1.07] hover:-translate-y-3 overflow-hidden`}
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

              {/* Icon */}
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-white shadow-md border border-gray-100 group-hover:scale-110 group-hover:-rotate-6 transform transition-all duration-500">
                  {tool.icon}
                </div>
                <h2 className="ml-4 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {tool.name}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed mb-6 relative z-10">
                {tool.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-indigo-600 font-semibold relative z-10 group-hover:text-indigo-700 transition-colors duration-300">
                <span>Use Tool</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-28 text-center relative z-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Need a Tool We Don’t Have?
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
            We’re constantly growing. Suggest a tool and help shape the future of DevTools.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-2xl 
                       shadow-lg hover:shadow-2xl text-white 
                       bg-gradient-to-r from-indigo-600 to-purple-600 
                       hover:from-indigo-700 hover:to-purple-700 
                       transform hover:scale-105 transition-all duration-300 ease-out"
          >
            Suggest a Tool
            <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
