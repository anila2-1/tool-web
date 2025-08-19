'use client'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { FaBolt } from 'react-icons/fa'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative mt-[-70px] mb-16 bg-gradient-to-tl from-[#fdf3ff] to-[#c0f1ff] via-[#fbefff] text-black overflow-hidden">
      {/* Floating Gradient Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-300/30 rounded-full blur-3xl top-[-120px] left-[-120px]"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-300/30 rounded-full blur-3xl bottom-[-100px] right-[-100px]"
        animate={{ y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-300/30 rounded-full blur-3xl top-1/2 left-1/3"
        animate={{ x: [0, 30, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          {/* Tag */}
          <div className="inline-flex items-center mb-10 px-5 py-2 rounded-full bg-white/60 backdrop-blur-md text-black/90 text-sm shadow-md hover:shadow-lg transition">
            <FaBolt className="mr-2 text-yellow-500" />
            Developer Essentials
          </div>

          {/* Heading */}
<div className="relative inline-block">
  {/* Wave ribbon background */}
  <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 bg-gradient-to-r from-pink-300 via-yellow-100 to-purple-300 rounded-full blur-md opacity-80 -z-10"></span>

  <h1 className="relative text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
    Supercharge Your{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400 drop-shadow-lg">
      Workflow
    </span>
  </h1>
</div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed">
            Premium developer tools with zero setup. Optimized for speed, accuracy, and your productivity.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/tools"
              className="relative px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-gray-700/40 shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              Explore Tools
            </Link>

            <Link
              href="/blog"
              className="flex items-center justify-center px-8 py-4 rounded-xl font-semibold border border-black/20 text-black shadow-gray-700/40 bg-white/70 backdrop-blur-md hover:bg-white/90 transition-all shadow-md hover:shadow-lg group"
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
