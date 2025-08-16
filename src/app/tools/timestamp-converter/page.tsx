import TimestampConverter from '@/components/tools/TimestampConverter'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TimestampPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Timestamp Converter</h1>
            <p className="text-lg text-gray-600">
              Convert between Unix timestamps and human-readable dates instantly
            </p>
          </div>

          {/* Converter Tool */}
          <div className="p-6 sm:p-8 bg-gray-50 rounded-2xl">
            <TimestampConverter />
          </div>

          {/* Article Section */}
<section className="mt-8 p-6 sm:p-8">
  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
    What is a Unix Timestamp?
  </h2>
  <p className="text-gray-700 mb-4">
    A Unix timestamp is a number that represents time by counting the total seconds 
    that have passed since January 1, 1970, at midnight in Coordinated Universal Time (UTC) 
    or Greenwich Mean Time (GMT). It does not include leap seconds.
  </p>
  <p className="text-gray-700 mb-4">
    This format is commonly used in programming, databases, and application programming 
    interfaces (APIs) because it offers a straightforward and uniform method for storing 
    and comparing dates and times. For instance, many scheduling and availability APIs 
    use Unix timestamps to indicate specific time periods.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
    How Do You Change a Unix Timestamp into a Regular Date?
  </h3>
  <p className="text-gray-700 mb-4">
    To change a Unix timestamp into a standard date and time format:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>Input the timestamp into a Unix to Date Converter tool.</li>
    <li>
      The converter provides the correct date and time based on your current timezone 
      or a chosen one.
    </li>
  </ul>

  {/* Example */}
  <div className="bg-white border rounded-lg p-4 mb-6">
    <p className="text-gray-800 font-medium">🔹 Example:</p>
    <p className="text-gray-700 mt-2">
      Unix Timestamp: <code className="bg-gray-100 px-2 py-1 rounded">1672531200</code>  
      → Date: <span className="font-semibold">January 1, 2023 00:00:00 (UTC)</span>
    </p>
  </div>

  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
    Converting a Readable Date into a Unix Timestamp
  </h3>
  <p className="text-gray-700 mb-4">
    The process can also be reversed:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>Enter a specific date and time into the Date to Unix Converter tool.</li>
    <li>The tool will return the corresponding Unix timestamp.</li>
  </ul>

  {/* Example */}
  <div className="bg-white border rounded-lg p-4 mb-6">
    <p className="text-gray-800 font-medium">🔹 Example:</p>
    <p className="text-gray-700 mt-2">
      Date: <span className="font-semibold">March 10, 2025 15:30:00 (UTC)</span>  
      → Unix Timestamp: <code className="bg-gray-100 px-2 py-1 rounded">1741620600</code>
    </p>
  </div>

  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
    Can Unix Timestamps Be Changed Based on Time Zones?
  </h3>
  <p className="text-gray-700 mb-4">
    Yes. Most converters let you switch between different time zones. By choosing a 
    specific zone, you can instantly view the correct local date and time for that 
    Unix timestamp.
  </p>

  <p className="text-gray-700 font-medium">
    In short, Unix timestamps serve as the standard “language of time” in computing, 
    enabling smooth communication between systems, databases, and different time zones.
  </p>
</section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
