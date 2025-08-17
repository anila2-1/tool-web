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
    bgColor: 'bg-blue-50',
    hoverColor: 'hover:from-blue-50 hover:to-blue-100'
  },
  {
    name: 'Timestamp Converter',
    description: 'Convert between Unix timestamps and readable dates',
    icon: <FaClock className="text-purple-600 text-2xl" />,
    path: '/tools/timestamp-converter',
    bgColor: 'bg-purple-50',
    hoverColor: 'hover:from-purple-50 hover:to-purple-100'
  },
  {
    name: 'JSON Formatter',
    description: 'Beautify and validate JSON data with syntax highlighting',
    icon: <FaCode className="text-green-600 text-2xl" />,
    path: '/tools/json-formatter',
    bgColor: 'bg-green-50',
    hoverColor: 'hover:from-green-50 hover:to-green-100'
  },
  {
    name: 'Slug Generator',
    description: 'Create SEO-friendly URL slugs from any text',
    icon: <FaLink className="text-orange-600 text-2xl" />,
    path: '/tools/slug-generator',
    bgColor: 'bg-orange-50',
    hoverColor: 'hover:from-orange-50 hover:to-orange-100'
  }
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight tracking-tight">
            Developer Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Essential utilities to streamline your development workflow — fast, accurate, and free.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {tools.map((tool) => (
            <Link
              key={tool.path}
              href={tool.path}
              className={`${tool.bgColor} group relative p-6 rounded-2xl border border-gray-200 
                          hover:border-indigo-300 hover:shadow-xl transition-all duration-300 
                          transform hover:scale-105 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Icon & Title */}
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-white shadow-sm">
                  {tool.icon}
                </div>
                <h2 className="ml-4 text-lg font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-200">
                  {tool.name}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {tool.description}
              </p>

              {/* Hover Arrow */}
              <div className="flex items-center text-indigo-600 group-hover:text-indigo-800 transition-colors duration-200">
                <span className="text-sm font-medium">Use tool</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </div>

              {/* Subtle Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl`}></div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Need a Tool We Don’t Have?
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-lg">
            We’re always expanding. Suggest a tool and help shape the future of DevTools.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-4 text-base font-semibold rounded-xl 
                       shadow-lg hover:shadow-2xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 
                       hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 
                       transition-all duration-300 ease-in-out"
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