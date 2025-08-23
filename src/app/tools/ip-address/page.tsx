import IPAddressLookup from '@/components/tools/IPAddressLookup'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


import type { Metadata } from "next";

// ✅ SEO metadata
export const metadata: Metadata = {
  title: "Free Online IP Address Checker | Find Your Public IP Instantly",
  description:
    "Check your public IP address instantly with our free IP Checker tool. Get IPv4, IPv6, location details, and more in one click.",
  keywords: [
    "IP Address Checker",
    "What is My IP",
    "Find IP Address",
    "Public IP Lookup",
    "IPv4 Checker",
    "IPv6 Checker",
  ],
  alternates: {
    canonical: "http://localhost:3000/tools/ip-checker",
  },
  openGraph: {
    title: "Free Online IP Address Checker | Find Your Public IP Instantly",
    description:
      "Quickly check your public IP address (IPv4 & IPv6) along with geolocation details. Simple and free IP lookup tool.",
    url: "http://localhost:3000/tools/ip-checker",
    siteName: "Tool Web",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online IP Address Checker",
    description:
      "Find your public IP address instantly with our free IP Checker tool. Supports IPv4, IPv6, and location lookup.",
  },
};


export default function IPAddressPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl p-4 font-bold mb-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              IP Address Checker
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 px-2">
              Get detailed <strong>geolocation and network information</strong> for any IP address
            </p>
          </div>
        </div>
      </main>

      {/* Lookup Box */}
      <section className="flex-1 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10">
            <IPAddressLookup />
          </div>

          {/* Article Section */}
          <section className="mt-[-90] p-6 sm:p-8 prose prose-lg max-w-none">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              IP Location Discoverer – Check Location of Public IP
            </h2>

            {/* Intro */}
            <p className="text-gray-700 leading-relaxed mb-6">
              When you type a website address into your browser, the internet connects you to the correct site rapidly. 
              But have you ever wondered how websites know it’s you making the request? 
              The answer lies in your <span className="font-semibold text-indigo-600">IP Address</span>.
            </p>

            {/* Sub Sections */}
            <div className="space-y-10">
              {/* What is IP */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">🔑 What is an IP Address?</h3>
                <p className="text-gray-700 mb-3">
                  An IP (Internet Protocol) address is a unique numeric identifier assigned to every device connected to the internet—
                  whether it’s a computer, mobile, tablet, or server.
                </p>
                <p className="text-gray-700 mb-3">
                  👉 Example: <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono">192.168.0.1</code> (IPv4) or a longer hexadecimal (IPv6).
                </p>
                <p className="text-gray-700">
                  Your ISP assigns you an IP whenever you go online. This allows websites, apps, and servers to recognize your device.
                </p>
              </div>

              {/* Versions */}
<div className="mt-10">
  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
    ⚡ Versions of IP Address
  </h3>
  <ul className="space-y-3">
    <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
      <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 text-white text-base">
        🌐
      </span>
      <p className="text-gray-700">
        <span className="font-semibold text-indigo-600">IPv4:</span> 
        The older 32-bit format (~4 billion addresses)
      </p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
      <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white text-base">
        🚀
      </span>
      <p className="text-gray-700">
        <span className="font-semibold text-indigo-600">IPv6:</span> 
        The newer 128-bit format, nearly infinite addresses
      </p>
    </li>
  </ul>
</div>


             {/* Types of IP Address */}
<div className="mt-10">
  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
    📌 Types of IP Address
  </h3>

  <div className="grid md:grid-cols-2 gap-4">
    {/* Public vs Private */}
    <div className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
      <h4 className="font-semibold text-indigo-700 text-lg mb-2">🌍 Public IP</h4>
      <p className="text-gray-700">
        Used for internet communication, unique across the world.
      </p>
    </div>

    <div className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-green-50 to-white">
      <h4 className="font-semibold text-green-700 text-lg mb-2">🏠 Private IP</h4>
      <p className="text-gray-700">
        Used inside local networks (home, office, LAN).
      </p>
    </div>

    {/* Dynamic */}
    <div className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-yellow-50 to-white">
      <h4 className="font-semibold text-yellow-700 text-lg mb-2">🔄 Dynamic</h4>
      <p className="text-gray-700">
        Changes often, assigned automatically by your ISP.
      </p>
    </div>

    {/* Static */}
    <div className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-pink-50 to-white">
      <h4 className="font-semibold text-pink-700 text-lg mb-2">📌 Static</h4>
      <p className="text-gray-700">
        Fixed address, often used by servers & websites.
      </p>
    </div>
  </div>
</div>


               <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
    🎯 Why Check IP Location?
  </h3>
  <ul className="space-y-3">
    <li className="flex items-start gap-3 p-3 rounded-xl bg-blue-50 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm">🌍</span>
      <p className="text-gray-700">Country, city & region info</p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm">🏢</span>
      <p className="text-gray-700">ISP & organization (ASN)</p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-green-50 border border-green-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white text-sm">🔍</span>
      <p className="text-gray-700">Track unusual logins</p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-pink-50 border border-pink-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white text-sm">🛡️</span>
      <p className="text-gray-700">Enhance online security</p>
    </li>
  </ul>
</div>

{/* 🚀 Common Uses */}
<div className="mt-10">
  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
    🚀 Common Uses
  </h3>
  <ul className="space-y-3">
    <li className="flex items-start gap-3 p-3 rounded-xl bg-yellow-50 border border-yellow-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 text-white text-sm">🔐</span>
      <p className="text-gray-700"><span className="font-semibold text-indigo-600">Security:</span> Detect hacking attempts, block malicious IPs</p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm">🕶️</span>
      <p className="text-gray-700"><span className="font-semibold text-indigo-600">Privacy:</span> VPNs hide your real IP</p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-red-50 border border-red-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white text-sm">📺</span>
      <p className="text-gray-700"><span className="font-semibold text-indigo-600">Streaming:</span> Location-based content (e.g., Netflix regions)</p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-teal-50 border border-teal-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white text-sm">✉️</span>
      <p className="text-gray-700"><span className="font-semibold text-indigo-600">Email:</span> Trace sender’s location</p>
    </li>
  </ul>
</div>

{/* 🔄 Can Your IP Stay the Same? */}
<div className="mt-10">
  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
    🔄 Can Your IP Stay the Same?
  </h3>
  <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-white border border-pink-200 shadow-sm hover:shadow-md transition-all duration-300">
    <p className="text-gray-700 leading-relaxed">
      No. Most IPs change depending on your ISP, Wi-Fi, or location. <br />
      Only a <span className="font-semibold text-pink-600">Static IP</span> stays constant.
    </p>
  </div>
</div>

{/* 🛠️ About IP Tools */}
<div className="mt-10">
  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
    🛠️ About IP Tools
  </h3>
  <ul className="space-y-3">
    <li className="flex items-start gap-3 p-3 rounded-xl bg-cyan-50 border border-cyan-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-cyan-500 text-white text-sm">⚡</span>
      <p className="text-gray-700">Find your public IP instantly</p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-green-50 border border-green-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white text-sm">🛰️</span>
      <p className="text-gray-700">Check ISP, ASN, Proxy & Threat level</p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-orange-50 border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white text-sm">🗺️</span>
      <p className="text-gray-700">View approximate map coordinates</p>
    </li>
  </ul>
  </div>
                <div className="text-gray-800 font-medium bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 border border-yellow-200 rounded-xl p-5 mt-8 shadow-md hover:shadow-lg transition-all duration-300">
                  <p className="text-blue-900">
                    ⚠️ <span className="font-semibold text-red-600">Note:</span> IP-based location is <u>approximate</u>, only your ISP knows your exact address.
                  </p>
                </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
