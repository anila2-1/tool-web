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

              {/* ❓ Why Use a JSON Formatter? */}
  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    ❓ Why Use a JSON Formatter?
  </h3>
  <ul className="space-y-3">
    <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm">👀</span>
      <p className="text-gray-700">
        <span className="font-semibold text-indigo-600">Readability:</span> Pretty-print messy JSON with indentation.
      </p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white text-sm">✅</span>
      <p className="text-gray-700">
        <span className="font-semibold text-indigo-600">Validation:</span> Catch syntax errors instantly (missing commas, quotes, braces).
      </p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white text-sm">📦</span>
      <p className="text-gray-700">
        <span className="font-semibold text-indigo-600">Minify:</span> Remove whitespace for smaller payloads.
      </p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm">🤝</span>
      <p className="text-gray-700">
        <span className="font-semibold text-indigo-600">Workflow:</span> Copy, export, or share clean JSON with your team.
      </p>
    </li>
  </ul>


  {/* 🌟 Key Features */}
  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    🌟 Key Features
  </h3>
  <ul className="grid md:grid-cols-2 gap-4">
    <li className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
      <span className="text-lg">🎨</span>
      <span className="ml-2 text-gray-800 font-medium">Beautify / Pretty-print with custom indentation</span>
    </li>
    <li className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-green-50 to-white">
      <span className="text-lg">🛡️</span>
      <span className="ml-2 text-gray-800 font-medium">Validate JSON and highlight error location</span>
    </li>
    <li className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-yellow-50 to-white">
      <span className="text-lg">⚡</span>
      <span className="ml-2 text-gray-800 font-medium">Minify (compress) JSON for production</span>
    </li>
    <li className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-pink-50 to-white">
      <span className="text-lg">📋</span>
      <span className="ml-2 text-gray-800 font-medium">Copy to clipboard & export as <code className="font-mono">.json</code></span>
    </li>
    <li className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-purple-50 to-white">
      <span className="text-lg">🔑</span>
      <span className="ml-2 text-gray-800 font-medium">Optional: Sort keys A→Z for consistent diffs</span>
    </li>
  </ul>

  {/* 🚫 Common JSON Errors (and Fixes) */}
  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    🚫 Common JSON Errors (and Fixes)
  </h3>
  <ul className="space-y-3">
    <li className="flex items-start gap-3 p-3 rounded-xl bg-red-50 border border-red-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white text-sm">❌</span>
      <p className="text-gray-700">
        <span className="font-semibold text-indigo-600">Trailing commas:</span> Remove the last comma in objects/arrays.
      </p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-orange-50 border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white text-sm">🔒</span>
      <p className="text-gray-700">
        <span className="font-semibold text-indigo-600">Unquoted keys:</span> Keys must be in quotes.
      </p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-yellow-50 border border-yellow-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 text-white text-sm">⚠️</span>
      <p className="text-gray-700">
        <span className="font-semibold text-indigo-600">Single quotes:</span> Use double quotes for strings.
      </p>
    </li>
    <li className="flex items-start gap-3 p-3 rounded-xl bg-pink-50 border border-pink-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white text-sm">🚫</span>
      <p className="text-gray-700">
        <span className="font-semibold text-indigo-600">Invalid numbers/NaN:</span> Use valid numbers; no NaN or Infinity.
      </p>
    </li>
  </ul>


  {/* 📝 How to Use */}
  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
    📝 How to Use
  </h3>
  <ol className="space-y-4">
    <li className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">1</span>
      <p className="text-gray-700">📥 Paste your JSON into the editor.</p>
    </li>
    <li className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white font-bold">2</span>
      <p className="text-gray-700">
        🎨 Click <span className="font-medium">Format</span> to beautify or <span className="font-medium">Minify</span> to compress.
      </p>
    </li>
    <li className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">3</span>
      <p className="text-gray-700">
        🔍 Use <span className="font-medium">Validate</span> to check for syntax errors.
      </p>
    </li>
    <li className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold">4</span>
      <p className="text-gray-700">📤 Copy or export the result for your project.</p>
    </li>
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
