'use client'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { FaBolt } from 'react-icons/fa'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative mt-[-70px] mb-16 bg-gradient-to-br from-[#eecdff] via-[#a6fbff] to-[#f7d6ff] text-black overflow-hidden">
      {/* Floating Blobs */}
      <div className="absolute w-96 h-96 bg-pink-300/30 rounded-full blur-3xl top-[-120px] left-[-120px] animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-blue-300/30 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tag */}
          <div className="inline-flex items-center mb-6 px-5 py-2 rounded-full bg-white/60 backdrop-blur-md text-black/90 text-sm shadow-md hover:shadow-lg transition">
            <FaBolt className="mr-2 text-yellow-500" />
            Developer Essentials
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Supercharge Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500 drop-shadow-lg">
              Workflow
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-black/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium developer tools with zero setup. Optimized for speed, accuracy, and your productivity.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/tools"
              className="relative px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              Explore Tools
            </Link>

            <Link
              href="/blog"
              className="flex items-center justify-center px-8 py-4 rounded-xl font-semibold border border-black/20 text-black bg-white/70 backdrop-blur-md hover:bg-white/90 transition-all shadow-md hover:shadow-lg group"
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
