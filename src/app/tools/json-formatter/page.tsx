import JSONEditor from '@/components/tools/JSONEditor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function JSONToolPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">JSON Format & View Tool</h1>
            <p className="text-lg text-gray-600">
              Edit, validate, and visualize JSON data with our powerful tool
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="p-0 sm:p-0">
              <JSONEditor />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}