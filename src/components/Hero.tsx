'use client'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { FaBolt } from 'react-icons/fa'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800 opacity-95"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm">
            <FaBolt className="mr-2" />
            Developer Essentials
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Supercharge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-pink-400">Workflow</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Premium developer tools with zero setup. Optimized for speed, accuracy, and your productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools" 
              className="relative group flex items-center justify-center px-8 py-4 bg-white text-indigo-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Explore Tools</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-xl"></span>
            </Link>
            <Link 
              href="/blog" 
              className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
            >
              <span>Learn Best Practices</span>
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}