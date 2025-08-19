'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { features } from './../app/data/features'

export default function Features() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-white via-[#f9fbff] to-[#f0f4ff] overflow-hidden">
      
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 rounded-full blur-3xl opacity-30 animate-ping"></div>

<div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Power Up With{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
              Developer Tools
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Designed for professionals who want precision, speed and a modern edge in their workflow.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Link href={feature.path} className="h-full group">
                <div
                  className={`relative h-full flex flex-col rounded-3xl p-8 
                    bg-white/70 backdrop-blur-xl border border-gray-200/40 
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
                    transition-all duration-500 ease-out
                    hover:scale-[1.07] hover:-translate-y-4 
                    hover:shadow-[0_15px_45px_rgba(99,102,241,0.25)] 
                    overflow-hidden`}
                >
                  {/* Gradient Glow Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>

                  {/* Floating Icon */}
                  <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl 
                    bg-gradient-to-br from-indigo-50 to-white shadow-md border border-gray-200 
                    group-hover:shadow-indigo-400/50 transition-all transform
                    group-hover:scale-110 group-hover:-rotate-6">
                    <feature.icon className="w-8 h-8 text-indigo-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {feature.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-5 leading-relaxed text-base flex-grow">
                    {feature.description}
                  </p>

                  {/* Unique Fact Box */}
                  <div className="mb-6 px-3 py-2 bg-gradient-to-r from-white/90 to-indigo-50/70 rounded-lg backdrop-blur-md border border-gray-200 shadow-sm">
                    <p className="text-sm font-medium text-gray-700 flex items-center">
                      <span className="text-amber-500 mr-2">✨</span>
                      {feature.uniqueFact}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors mt-auto">
                    <span>Access Tool</span>
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
      
    </section>
  )
}
