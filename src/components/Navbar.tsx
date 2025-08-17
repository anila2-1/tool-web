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
    <nav className="bg-indigo-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
            DevTools
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            href="/"
            className="text-white font-medium transition-all duration-300 hover:text-blue-200 hover:scale-105 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Tools Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              className="flex items-center font-medium text-white transition-all duration-300 hover:text-blue-200 hover:scale-105 group"
            >
              Tools
              <span className="ml-1 mt-0.5 transition-transform duration-300 group-hover:rotate-180">
                {isToolsOpen ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>

            {/* Dropdown Menu */}
          {isToolsOpen && (
  <div
    className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-64 max-w-[90vw] 
               bg-gradient-to-br from-cyan-100/80 via-blue-50/70 to-teal-100/60 
               backdrop-blur-lg rounded-xl shadow-2xl border border-white/30 
               overflow-hidden z-50 animate-fadeIn"
  >
    {tools.map((tool) => (
      <Link
        key={tool.path}
        href={tool.path}
        className="block px-5 py-3 text-gray-800 font-medium transition-all duration-200
                   hover:bg-white/40 hover:shadow-md hover:scale-101"
        onClick={() => setIsToolsOpen(false)}
      >
        {tool.name}
      </Link>
    ))}
  </div>
)}
          </div>

          <Link
            href="/blog"
            className="text-white font-medium transition-all duration-300 hover:text-blue-200 hover:scale-105 relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-800/95 backdrop-blur-md rounded-b-xl mt-2 mx-4 overflow-hidden shadow-xl">
          <div className="flex flex-col space-y-1 px-4 py-3">
            <Link
              href="/"
              className="py-3 px-4 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="border-t border-white/20 pt-3">
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="w-full flex justify-between items-center text-white font-medium py-3 px-4 rounded-lg hover:bg-white/20 transition"
              >
                Tools
                {isToolsOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {isToolsOpen && (
                <div className="pl-5 mt-2 space-y-2 border-l-2 border-indigo-500">
                  {tools.map((tool) => (
                    <Link
                      key={tool.path}
                      href={tool.path}
                      className="block py-2 px-3 text-blue-100 hover:text-white hover:bg-white/10 rounded transition-all duration-200"
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
              className="py-3 px-4 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
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



