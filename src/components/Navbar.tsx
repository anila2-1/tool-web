'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function Navbar() {
  const [isToolsOpen, setIsToolsOpen] = useState(false)

  const tools = [
    { name: 'Slug Generator', path: '/tools/slug-generator' },
    { name: 'IP Address Lookup', path: '/tools/ip-address' },
    { name: 'JSON Formatter', path: '/tools/json-formatter' },
    { name: 'Timestamp Converter', path: '/tools/timestamp-converter' }
  ]

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">DevTools</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
            Home
          </Link>
          
          {/* Tools Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              className="flex items-center text-gray-700 hover:text-indigo-600 font-medium"
            >
              Tools
              {isToolsOpen ? (
                <FiChevronUp className="ml-1" />
              ) : (
                <FiChevronDown className="ml-1" />
              )}
            </button>
            
            {isToolsOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                {tools.map((tool) => (
                  <Link
                    key={tool.path}
                    href={tool.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    onClick={() => setIsToolsOpen(false)}
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" className="text-gray-700 hover:text-indigo-600 font-medium">
            Blog
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}