import TimestampConverter from '@/components/tools/TimestampConverter'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TimestampPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Timestamp Converter</h1>
            <p className="text-lg text-gray-600">
              Convert between Unix timestamps and human-readable dates instantly
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="p-6 sm:p-8">
              <TimestampConverter />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}