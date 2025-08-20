import TimestampConverter from '@/components/tools/TimestampConverter'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TimestampPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl p-4 font-bold mb-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Timestamp Converter
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Convert between Unix timestamps and human-readable dates instantly
            </p>
          </div>
        </div>
      </main>

      <main className="flex-1 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Converter Tool */}
          <div className="p-6 sm:p-8">
            <TimestampConverter />
          </div>

          {/* Article Section */}
          <section className="mt-[-90] p-6 sm:p-8 prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is a Unix Timestamp?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A Unix timestamp is a number that represents time by counting the total seconds
              that have passed since <span className="font-semibold text-indigo-600">January 1, 1970 </span>
               at midnight in Coordinated Universal Time (UTC) or Greenwich Mean Time (GMT).
              It does not include leap seconds.
            </p>
            <p className="text-gray-700 mb-4">
              This format is commonly used in 💻 programming, 🗄️ databases, and 
              🔌 application programming interfaces (APIs) because it offers a straightforward 
              and uniform method for storing and comparing dates and times. 
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
              🔑 How Do You Change a Unix Timestamp into a Regular Date?
            </h3>
            <p className="text-gray-700 mb-4">
              To change a Unix timestamp into a standard date and time format:
            </p>
            <ul className="space-y-3">
  <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm">📥</span>
    <p className="text-gray-700">
      <span className="font-semibold text-indigo-600">Input:</span> Enter the Unix timestamp into the converter tool.
    </p>
  </li>

  <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white text-sm">🕒</span>
    <p className="text-gray-700">
      <span className="font-semibold text-indigo-600">Convert:</span> The tool will display the correct date and time according to your timezone.
    </p>
  </li>
</ul>

           {/* Example */}
<div className="bg-gradient-to-br mt-6 from-blue-50 to-white border border-gray-200 rounded-2xl p-5 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
  <div className="flex items-center gap-2 mb-3">
    <span className="text-lg">🔹</span>
    <p className="text-gray-800 font-semibold text-lg">Example:</p>
  </div>
  <p className="text-gray-700 mt-2 text-sm sm:text-base">
    Unix Timestamp: 
    <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono mx-1">1672531200</code>  
    → Date: 
    <span className="font-semibold text-indigo-600">January 1, 2023 00:00:00 (UTC)</span>
  </p>
</div>


            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
              🔄 Converting a Readable Date into a Unix Timestamp
            </h3>
            <p className="text-gray-700 mb-4">
              The process can also be reversed:
            </p>
            {/* Steps */}
<ul className="space-y-3">
  <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm">📝</span>
    <p className="text-gray-700">
      <span className="font-semibold text-indigo-600">Input:</span> Enter a specific date and time into the Date to Unix Converter tool.
    </p>
  </li>

  <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white text-sm">⚡</span>
    <p className="text-gray-700">
      <span className="font-semibold text-indigo-600">Convert:</span> The tool will return the corresponding Unix timestamp.
    </p>
  </li>
</ul>

{/* Example */}
<div className="bg-gradient-to-br mt-6 from-blue-50 to-white border border-gray-200 rounded-2xl p-5 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
  <div className="flex items-center gap-2 mb-3">
    <span className="text-lg">🔹</span>
    <p className="text-gray-800 font-semibold text-lg">Example:</p>
  </div>
  <p className="text-gray-700 mt-2 text-sm sm:text-base">
    Date: 
    <span className="font-semibold text-indigo-600 mx-1">March 10, 2025 15:30:00 (UTC)</span>  
    → Unix Timestamp: 
    <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono mx-1">1741620600</code>
  </p>
</div>


            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
              🌐 Can Unix Timestamps Be Changed Based on Time Zones?
            </h3>
            <p className="text-gray-700 mb-4">
              Yes. Most converters let you switch between different ⏰ time zones. 
              By choosing a specific zone, you can instantly view the correct local 
              date and time for that Unix timestamp.
            </p>
            <div className='text-gray-800 font-medium bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 border border-yellow-200 rounded-xl p-5 mt-8 shadow-md hover:shadow-lg transition-all duration-300'>
            <p className="text-blue-900">
              ✅ In short, Unix timestamps serve as the standard “language of time” in computing, 
              enabling smooth communication between systems, databases, and different time zones.
            </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
