import SlugGenerator from '@/components/tools/SlugGenerator'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SlugGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Slug Generator
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Create clean, SEO-friendly slugs from any text in seconds.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6 sm:p-8">
              <SlugGenerator />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
