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
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-5 px-10 sm:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">DevTools</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white font-bold">
            Home
          </Link>
          
          {/* Tools Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              className="flex items-white font-bold"
            >
              Tools
              {isToolsOpen ? (
                <FiChevronUp className="ml-1" />
              ) : (
                <FiChevronDown className="ml-1" />
              )}
            </button>
            
            {isToolsOpen && (
  <div
    className="absolute left-1/2 transform -translate-x-1/2 mt-4 
               w-62 max-w-[90vw]
               bg-white/80 backdrop-blur-md 
               rounded-2xl shadow-2xl 
               py-4 px-2 
               z-50 border border-white/40 animate-fadeIn"
  >
    {tools.map((tool) => (
      <Link
        key={tool.path}
        href={tool.path}
        className="block px-5 py-3 text-gray-800 font-medium 
                   rounded-lg transition-all duration-200
                   hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 
                   hover:text-white hover:shadow-md"
        onClick={() => setIsToolsOpen(false)}
      >
        {tool.name}
      </Link>
    ))}
  </div>
)}

          </div>

          <Link href="/blog" className="text-white font-bold">
            Blog
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="block py-2 px-3 rounded text-black font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="w-full justify-between items-center text-black py-2 px-3 rounded flex items-white font-bold"
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
              className="block py-2 px-3 rounded text-black font-bold"
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