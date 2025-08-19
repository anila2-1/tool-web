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
      
<section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-700 text-white py-24 px-6">
  {/* Background Decorative Blobs */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] bg-indigo-500/20 rounded-full blur-3xl animate-bounce"></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent)]"></div>

  <div className="relative max-w-4xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight drop-shadow-xl">
      Supercharge Your Productivity ⚡
    </h2>

    {/* Subtitle */}
    <p className="text-lg sm:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
      Join <span className="font-bold text-yellow-300">10,000+ developers</span> using our modern AI-powered toolkit 
      to save hours every week.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <Link
        href="/tools"
        className="group relative px-8 py-4 bg-white text-indigo-800 rounded-2xl font-semibold 
        shadow-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:-translate-y-1 
        transition-all duration-300 overflow-hidden"
      >
        <span className="relative z-10">🚀 Start Using Tools Now</span>
        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      </Link>

      <Link
        href="/blog"
        className="px-8 py-4 rounded-2xl font-medium border border-white/40 backdrop-blur-md 
        bg-white/10 text-white hover:bg-white/20 hover:border-white/60 
        shadow-lg hover:scale-110 transform transition-all duration-300"
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