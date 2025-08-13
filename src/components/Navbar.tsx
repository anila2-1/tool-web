'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tools = [
    { name: 'Slug Generator', path: '/tools/slug-generator' },
    { name: 'IP Address Lookup', path: '/tools/ip-address' },
    { name: 'JSON Formatter', path: '/tools/json-formatter' },
    { name: 'Timestamp Converter', path: '/tools/timestamp-converter' }
  ]

  return (
    <nav className="bg-white shadow-sm py-4 px-4 sm:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">DevTools</span>
        </Link>
        
        {/* Desktop Navigation */}
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
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="block py-2 px-3 rounded text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="w-full flex justify-between items-center py-2 px-3 rounded text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium"
              >
                Tools
                {isToolsOpen ? (
                  <FiChevronUp className="ml-1" />
                ) : (
                  <FiChevronDown className="ml-1" />
                )}
              </button>
              
              {isToolsOpen && (
                <div className="pl-4 mt-1 space-y-2">
                  {tools.map((tool) => (
                    <Link
                      key={tool.path}
                      href={tool.path}
                      className="block py-2 px-3 rounded text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition"
                      onClick={() => {
                        setIsToolsOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/blog" 
              className="block py-2 px-3 rounded text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}