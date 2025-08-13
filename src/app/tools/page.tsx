import Link from 'next/link'
import { FaGlobe, FaClock, FaCode, FaLink, FaArrowRight } from 'react-icons/fa'

const tools = [
  {
    name: 'IP Address Lookup',
    description: 'Get geolocation and network information for any IP',
    icon: <FaGlobe className="text-blue-500 text-2xl" />,
    path: '/tools/ip-address',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  {
    name: 'Timestamp Converter',
    description: 'Convert between Unix timestamps and readable dates',
    icon: <FaClock className="text-purple-500 text-2xl" />,
    path: '/tools/timestamp-converter',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100'
  },
  {
    name: 'JSON Formatter',
    description: 'Beautify and validate JSON data with syntax highlighting',
    icon: <FaCode className="text-green-500 text-2xl" />,
    path: '/tools/json-formatter',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  },
  {
    name: 'Slug Generator',
    description: 'Create SEO-friendly URL slugs from any text',
    icon: <FaLink className="text-orange-500 text-2xl" />,
    path: '/tools/slug-generator',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100'
  }
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Developer Tools
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Essential utilities to streamline your development workflow
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.path}
              href={tool.path}
              className={`${tool.bgColor} ${tool.borderColor} group relative p-6 rounded-xl border-2 hover:border-indigo-300 transition-all duration-200 hover:shadow-lg overflow-hidden`}
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  {tool.icon}
                </div>
                <h2 className="ml-4 text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {tool.name}
                </h2>
              </div>
              <p className="text-gray-600 mb-6">{tool.description}</p>
              
              <div className="absolute bottom-4 left-6 flex items-center text-indigo-600 group-hover:text-indigo-800 transition-colors">
                <span className="text-sm font-medium">Use tool</span>
                <FaArrowRight className="ml-2 text-sm" />
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-medium text-gray-900">
            Looking for something else?
          </h3>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            We&apos;re constantly adding new tools. Let us know what you&apos;d like to see next!
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Suggest a Tool
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}