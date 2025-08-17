import IPAddressLookup from '@/components/tools/IPAddressLookup'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function IPAddressPage() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              IP Address Checker
            </h1>
            <p className='max-w-2xl mx-auto text-lg text-gray-600'>
              Get detailed geolocation and network information for any IP address
            </p>
          </div>
             </div>
      </main>
          
          {/* Lookup Box */}
                <main className="flex-1 pb-16">

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-10">
              <IPAddressLookup />
            </div>
          
          {/* Article Section */}
<section className="mt-8 p-6 sm:p-8 prose prose-lg max-w-none">
  
  {/* Heading */}
  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    🌍 IP Location Discoverer – Check Location of Public IP
  </h2>
  
  {/* Intro */}
  <p className="text-gray-700 leading-relaxed mb-6">
    When you type a website address into your browser, the internet connects you to the correct site rapidly. 
    But have you ever wondered how websites know it’s you making the request? 
    The answer lies in your <span className="font-semibold text-indigo-600">IP Address</span>.
  </p>

  {/* Sub Sections */}
  <div className="space-y-8">
    
    {/* What is IP */}
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">🔑 What is an IP Address?</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        An IP (Internet Protocol) address is a unique numeric identifier assigned to every device connected to the internet— 
        whether it’s a computer, mobile, tablet, or server.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        👉 Example: <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono">192.168.0.1</code> (IPv4) or a longer hexadecimal (IPv6).
      </p>
      <p className="text-gray-700 leading-relaxed">
        Your ISP assigns you an IP whenever you go online. This allows websites, apps, and servers to recognize your device.
      </p>
    </div>

    {/* Versions */}
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">⚡ Versions of IP Address</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><span className="font-semibold text-indigo-600">IPv4:</span> The older 32-bit format (~4 billion addresses)</li>
        <li><span className="font-semibold text-indigo-600">IPv6:</span> The newer 128-bit format, nearly infinite addresses</li>
      </ul>
    </div>

    {/* Types */}
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">📌 Types of IP Address</h3>
      <p className="text-gray-700 mb-3">
        Public IP – Used for internet<br />Private IP – Used inside local networks
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><span className="font-semibold text-indigo-600">Dynamic:</span> Changes often (assigned by ISP)</li>
        <li><span className="font-semibold text-indigo-600">Static:</span> Fixed, used by servers</li>
      </ul>
    </div>

    {/* Importance */}
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">🎯 Why Check IP Location?</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Country, city & region info</li>
        <li>ISP & organization (ASN)</li>
        <li>Track unusual logins</li>
        <li>Enhance online security</li>
      </ul>
    </div>

    {/* Uses */}
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">🚀 Common Uses</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><span className="font-semibold text-indigo-600">Security:</span> Detect hacking attempts, block malicious IPs</li>
        <li><span className="font-semibold text-indigo-600">Privacy:</span> VPNs hide your real IP</li>
        <li><span className="font-semibold text-indigo-600">Streaming:</span> Location-based content (e.g., Netflix regions)</li>
        <li><span className="font-semibold text-indigo-600">Email:</span> Trace sender’s location</li>
      </ul>
    </div>

    {/* Same IP */}
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">🔄 Can Your IP Stay the Same?</h3>
      <p className="text-gray-700 leading-relaxed">
        No. Most IPs change depending on your ISP, Wi-Fi, or location. 
        Only a <span className="font-semibold text-pink-600">Static IP</span> stays constant.
      </p>
    </div>

    {/* Tools */}
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">🛠️ About IP Tools</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Find your public IP instantly</li>
        <li>Check ISP, ASN, Proxy & Threat level</li>
        <li>View approximate map coordinates</li>
      </ul>
      <p className="text-gray-800 font-medium bg-yellow-100 p-4 rounded-lg">
        ⚠️ <span className="font-semibold text-red-600">Note:</span> IP-based location is <u>approximate</u>, only your ISP knows your exact address.
      </p>
    </div>
  </div>
</section>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}
