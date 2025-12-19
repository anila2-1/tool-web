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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-indigo-800/90 backdrop-blur-xl shadow-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight drop-shadow-md group-hover:scale-105 transition-all duration-300">
            DevTools
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            href="/"
            className="relative text-white font-medium hover:text-cyan-300 transition-all duration-300 group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Tools Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              className="flex items-center font-medium text-white hover:text-cyan-300 transition-all duration-300"
            >
              Tools
              <span className="ml-1">{isToolsOpen ? <FiChevronUp /> : <FiChevronDown />}</span>
            </button>

            {isToolsOpen && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-64 
                           bg-gradient-to-br from-indigo-600/90 via-purple-600/90 to-indigo-600/90
                           backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 
                           overflow-hidden z-50 animate-fadeIn"
              >
                {tools.map((tool) => (
                  <Link
                    key={tool.path}
                    href={tool.path}
                    className="block px-5 py-3 text-gray-100 font-medium transition-all duration-300
                               hover:bg-white/10 hover:pl-7"
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
            className="relative text-white font-medium hover:text-cyan-300 transition-all duration-300 group"
          >
            Blog
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
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
        <div className="md:hidden bg-gradient-to-br from-indigo-600/95 via-purple-700/90 to-indigo-600/95 backdrop-blur-md rounded-b-2xl mt-2 mx-4 overflow-hidden shadow-2xl border border-white/10 animate-fadeIn">
          <div className="flex flex-col px-4 py-3 space-y-2">
            <Link
              href="/"
              className="py-3 px-4 text-white font-medium rounded-lg hover:bg-white/10 hover:text-cyan-300 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Tools for Mobile */}
            <div>
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="w-full flex justify-between items-center text-white font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-cyan-300 transition"
              >
                Tools
                {isToolsOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {isToolsOpen && (
                <div className="pl-5 mt-2 space-y-2 border-l-2 border-indigo-400">
                  {tools.map((tool) => (
                    <Link
                      key={tool.path}
                      href={tool.path}
                      className="block py-2 px-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
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
              className="py-3 px-4 text-white font-medium rounded-lg hover:bg-white/10 hover:text-cyan-300 transition-all duration-300"
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
