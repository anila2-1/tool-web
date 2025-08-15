'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { features } from './../app/data/features'

export default function Features() {
  return (
    <section className="py-20 px-4 flex-1 bg-gradient-to-b from-white via-[#f8faff] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Precision{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
              Developer Tools
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Engineered for professionals who demand accuracy and performance in their daily workflow.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={feature.path}>
                <div
                  className={`relative h-full rounded-2xl p-6 shadow-lg border border-gray-200/50 bg-gradient-to-br ${feature.bg} transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl group overflow-hidden`}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/20 to-transparent"></div>

                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-white/80 shadow-md border border-gray-100 backdrop-blur-sm group-hover:shadow-lg transition-all">
                    <feature.icon className="w-7 h-7 text-indigo-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {feature.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-5 leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Unique Fact Box */}
                  <div className="mb-6 px-3 py-2 bg-white/70 rounded-lg backdrop-blur-sm border border-white/80 shadow-sm">
                    <p className="text-sm font-medium text-gray-700 flex items-center">
                      <span className="text-amber-500 mr-2">✨</span>
                      {feature.uniqueFact}
                    </p>
                  </div>

                  {/* Link */}
                  <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                    <span>Access Tool</span>
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
