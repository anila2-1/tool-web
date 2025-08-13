'use client'

import Navbar from './../components/Navbar'
import Footer from './../components/Footer'
import Hero from './../components/Hero'
import Features from './../components/Features'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to boost your productivity?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who save hours every week with our toolkit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="px-8 py-4 bg-white text-indigo-700 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Using Tools Now
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 hover:border-white/50 transition-colors"
            >
              Learn Development Tips
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}