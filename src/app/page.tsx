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
      
<section className="relative overflow-hidden bg-gradient-to-r from-indigo-800 via-purple-700 to-fuchsia-700 text-white py-20 px-6">
  {/* Background Glow Effect */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)]"></div>
  
  <div className="relative max-w-4xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
      Ready to Boost Your Productivity?
    </h2>
    <p className="text-lg sm:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
      Join thousands of developers who save hours every week with our all-in-one toolkit.
    </p>

    <div className="flex flex-col sm:flex-row gap-5 justify-center">
      <Link
        href="/tools"
        className="group relative px-8 py-4 bg-white text-indigo-800 rounded-2xl font-semibold 
        shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
      >
        <span className="relative z-10">🚀 Start Using Tools Now</span>
        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></span>
      </Link>
      <Link
        href="/blog"
        className="px-8 py-4 rounded-2xl font-medium border border-white/40 backdrop-blur-sm bg-white/10 text-white hover:bg-white/20 hover:border-white/60 shadow-lg hover:scale-105 transform transition-all duration-300"
      >
        📚 Learn Development Tips
      </Link>
    </div>
  </div>
</section>

      <Footer />
    </div>
  )
}