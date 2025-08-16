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
              IP Address Checker
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
<div className="mt-0.5">
  <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2">
    IP Location Discoverer – Check Location of Public IP
  </h2>
  <p className="text-gray-700 leading-relaxed mb-4">
When you type a website address into your browser, the internet connects you to the correct site rapidly. 
But have you ever wondered how websites know it’s you making the request? The answer lies in your IP Address.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    What is an IP Address?
  </h3>
  <p className="text-gray-700 leading-relaxed mb-4">
    An IP (Internet Protocol) address is a unique numeric identifier assigned to every device connected to the internet—
    whether it’s a computer, mobile, tablet, or server. Without an IP address, you cannot send or receive data online.
  </p>
  <p className="text-gray-700 leading-relaxed mb-4">
    👉 Example format: <span className="font-mono">192.168.0.1</span> (IPv4) or a longer hexadecimal (IPv6).
  </p>
  <p className="text-gray-700 leading-relaxed mb-6">
    Your ISP (Internet Service Provider) assigns you an IP whenever you go online. This allows websites, apps, and servers to recognize your device.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    Versions of IP Address
  </h3>
  <ul className="list-disc pl-5 text-gray-700 space-y-2">
    <li><span className="font-medium text-gray-900">IPv4:</span> The older and most common format (32-bit). Limited to ~4 billion addresses.</li>
    <li><span className="font-medium text-gray-900">IPv6:</span> The newer format (128-bit). It provides a nearly endless supply of addresses and will eventually take over from IPv4.</li>
  </ul>

  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    Types of IP Address
  </h3>
  <p className="text-gray-700 leading-relaxed mb-4">
    Public IP – Used for direct communication on the internet (e.g., websites, servers).<br />
    Private IP – Used inside local networks (e.g., your Wi-Fi router).
  </p>
  <ul className="list-disc pl-5 text-gray-700 space-y-2">
    <li><span className="font-medium text-gray-900">Dynamic:</span> Changes frequently, usually assigned by ISP.</li>
    <li><span className="font-medium text-gray-900">Static:</span> Fixed, used by servers or networks.</li>
  </ul>

  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    Why is Checking IP Location Important?
  </h3>
  <p className="text-gray-700 leading-relaxed mb-4">
    Your IP address reveals:
  </p>
  <ul className="list-disc pl-5 text-gray-700 space-y-2">
    <li>Approximate country, city, and region</li>
    <li>ISP (Internet Service Provider)</li>
    <li>Organization or ASN details</li>
    <li>Device activity source (useful for tracking unusual logins)</li>
  </ul>

  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    Common Uses
  </h3>
  <ul className="list-disc pl-5 text-gray-700 space-y-2">
    <li><span className="font-medium text-gray-900">Security:</span> Detect hacking attempts, block malicious IPs</li>
    <li><span className="font-medium text-gray-900">Privacy:</span> VPNs hide your real IP to access geo-restricted content</li>
    <li><span className="font-medium text-gray-900">E-commerce & Streaming:</span> Websites show location-based products or content (e.g., Netflix regions)</li>
    <li><span className="font-medium text-gray-900">Email Tracing:</span> Find sender’s location from headers</li>
  </ul>

  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    Can Your IP Stay the Same?
  </h3>
  <p className="text-gray-700 leading-relaxed mb-6">
    No. Your IP often changes depending on your ISP, Wi-Fi, or location (home, office, library). 
    Only a static IP stays constant.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    About IP Tools
  </h3>
  <p className="text-gray-700 leading-relaxed mb-4">
    Services like IPLocation.io or our IP Location Discoverer allow you to:
  </p>
  <ul className="list-disc pl-5 text-gray-700 space-y-2">
    <li>Find your public IP instantly</li>
    <li>Check ISP, ASN, network type, proxy status, and threat level</li>
    <li>View approximate map coordinates</li>
  </ul>
  <p className="text-gray-700 leading-relaxed mt-4">
    ⚠️ <span className="font-medium text-gray-900">Note:</span> IP-based location is approximate, not exact. 
    Only your ISP knows your precise location.
  </p>
</div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
