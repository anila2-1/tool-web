import IPAddressLookup from '@/components/tools/IPAddressLookup'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function IPAddressPage() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-0.5">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
              IP Address Lookup
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get detailed geolocation and network information for any IP address
            </p>
          </div>
          
          {/* Lookup Box */}
          <div className="">
            <div className="p-6 sm:p-10">
              <IPAddressLookup />
            </div>
          </div>
          
          {/* Article Section */}
          <div className="mt-3 ">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2">
              How to Get Someone’s IP Address
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Getting someone’s IP address can be as simple as clicking a link, joining a chat, or
              receiving an email. There are multiple ways to find IP addresses, but it’s important
              to use them responsibly and ethically.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Once you have an IP address, you can use our tool to find out more about the ISP,
              the region, and whether the user might be using a proxy or VPN.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              What You Will Get With This Tool
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><span className="font-medium text-gray-900">ISP & Organization:</span> Name and ownership details</li>
              <li><span className="font-medium text-gray-900">Geolocation:</span> Country, state, city</li>
              <li><span className="font-medium text-gray-900">Coordinates:</span> Approximate latitude and longitude</li>
              <li><span className="font-medium text-gray-900">Timezone:</span> Local time zone information</li>
              <li><span className="font-medium text-gray-900">Privacy Check:</span> Proxy or VPN usage detection</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
