'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { features } from './../app/data/features' // Assuming you have a features data file

export default function Features() {
  return (
    <section className="py-20 px-4 flex-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Developer Tools</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Engineered for professionals who demand accuracy and performance in their daily workflow.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={feature.path}>
                <div className={`h-full bg-gradient-to-br ${feature.bg} p-6 rounded-2xl border border-gray-200/50 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg flex flex-col group`}>
                  <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-200 group-hover:shadow-md transition-all">
                    <feature.icon />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{feature.name}</h3>
                  <p className="text-gray-600 mb-5 flex-grow">{feature.description}</p>
                  <div className="mb-5 px-3 py-2 bg-white/70 rounded-lg backdrop-blur-sm border border-white/80">
                    <p className="text-sm font-medium text-gray-700 flex items-center">
                      <span className="text-amber-500 mr-2">✨</span>
                      {feature.uniqueFact}
                    </p>
                  </div>
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