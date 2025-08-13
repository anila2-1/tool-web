import IPAddressLookup from '@/components/tools/IPAddressLookup'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function IPAddressPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IP Address Lookup</h1>
            <p className="text-lg text-gray-600">
              Get detailed geolocation and network information for any IP address
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="p-6 sm:p-8">
              <IPAddressLookup />
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">About IP Lookup</h2>
            <p className="text-gray-600 mb-4">
              Our IP Address Lookup tool provides comprehensive information including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Geolocation (country, city, region)</li>
              <li>Internet Service Provider (ISP) details</li>
              <li>Network information (ASN, organization)</li>
              <li>Timezone and approximate coordinates</li>
              <li>Proxy/VPN detection</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}