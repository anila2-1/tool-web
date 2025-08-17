import JSONEditor from '@/components/tools/JSONEditor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function JSONToolPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl p-4 font-bold mb-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              JSON Format & Viewer
            </h1>
            <p className='max-w-2xl mx-auto text-lg text-gray-600'>
              Paste, edit, validate and visualize your JSON data with this interactive tool
            </p>
          </div>
        </div>
      </main>

      {/* JSON Formatter */}
      <main className="flex-1 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10">
            <JSONEditor />
          </div>

          {/* Article Section */}
          <section className="mt-[-90] p-6 sm:p-8 prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
             JSON Formatter & Validator – Clean, Beautify, and Check JSON
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              JSON Formatter helps you instantly <span className="font-semibold">beautify, validate, and
              minify</span> JSON. Paste raw JSON and get readable output with proper indentation, or compress
              it for production. It also catches common errors ⚡ so you can fix them fast.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              📘 What is JSON?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              JSON (JavaScript Object Notation) is a lightweight data format 🌍 used by APIs, apps, and databases.
              It stores data as <span className="font-semibold text-indigo-600">key:value</span> pairs and arrays, and is both
              human- and machine-readable 🤖.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-800 font-medium mb-2">📂 Example JSON</p>
              <pre className="overflow-x-auto text-sm">
                <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono">
{`{
  "name": "Ava",
  "age": 27,
  "skills": ["React", "Node", "SQL"],
  "active": true
}`}
                </code>
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              ❓ Why Use a JSON Formatter?
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>👀 <span className="font-semibold text-indigo-600">Readability:</span> Pretty-print messy JSON with indentation.</li>
              <li>✅ <span className="font-semibold text-indigo-600">Validation:</span> Catch syntax errors instantly (missing commas, quotes, braces).</li>
              <li>📦 <span className="font-semibold text-indigo-600">Minify:</span> Remove whitespace for smaller payloads.</li>
              <li>🤝 <span className="font-semibold text-indigo-600">Workflow:</span> Copy, export, or share clean JSON with your team.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              🌟 Key Features
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>🎨 Beautify / Pretty-print with custom indentation</li>
              <li>🛡️ Validate JSON and highlight error location</li>
              <li>⚡ Minify (compress) JSON for production</li>
              <li>📋 Copy to clipboard & export as <span className="font-mono">.json</span></li>
              <li>🔑 Optional: Sort keys A→Z for consistent diffs</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              🚫 Common JSON Errors (and Fixes)
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>❌ <span className="font-semibold text-indigo-600">Trailing commas:</span> Remove the last comma in objects/arrays.</li>
              <li>🔒 <span className="font-semibold text-indigo-600">Unquoted keys:</span> Keys must be in quotes.</li>
              <li>⚠️ <span className="font-semibold text-indigo-600">Single quotes:</span> Use double quotes for strings.</li>
              <li>🚫 <span className="font-semibold text-indigo-600">Invalid numbers/NaN:</span> Use valid numbers; no NaN or Infinity.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              📝 How to Use
            </h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2">
              <li>📥 Paste your JSON into the editor.</li>
              <li>🎨 Click <span className="font-medium">Format</span> to beautify or <span className="font-medium">Minify</span> to compress.</li>
              <li>🔍 Use <span className="font-medium">Validate</span> to check for syntax errors.</li>
              <li>📤 Copy or export the result for your project.</li>
            </ol>

            <div className="text-gray-800 font-medium bg-yellow-100 rounded-lg p-4 mt-6">
              <p className="text-blue-900">
                ⚠️ <span className="font-semibold text-red-600">Note:</span> This tool works entirely in your browser 🌐.
                Your JSON is <span className="font-semibold">not uploaded</span> to any server 🔒.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
