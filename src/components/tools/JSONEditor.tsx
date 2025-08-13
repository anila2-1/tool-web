'use client'
import React, { useState } from 'react'
import yaml from 'js-yaml'

type JSONNodeProps = {
  data: unknown
  name?: string
  level?: number
}

const JSONNode = ({ data, name = "object", level = 0 }: JSONNodeProps) => {
  const [expanded, setExpanded] = useState(level < 2) // Auto-expand first two levels
  const isObject = (val: unknown) => typeof val === "object" && val !== null

  const toggle = () => setExpanded(!expanded)

  if (!isObject(data)) {
    return (
      <div style={{ marginLeft: `${level * 16}px` }} className="flex items-start py-1">
        <span className="font-semibold text-purple-600 dark:text-purple-400 mr-2">{name}:</span> 
        <span className={
          typeof data === 'string' ? 'text-green-600 dark:text-green-400' : 
          typeof data === 'number' ? 'text-blue-600 dark:text-blue-400' : 
          typeof data === 'boolean' ? 'text-red-600 dark:text-red-400' : ''
        }>
          {String(data)}
        </span>
      </div>
    )
  }

  return (
    <div style={{ marginLeft: `${level * 16}px` }} className="py-1">
      <div 
        onClick={toggle} 
        className="cursor-pointer select-none flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded transition-colors"
      >
        <span className="mr-1.5 text-gray-500 dark:text-gray-400">
          {expanded ? '▼' : '►'}
        </span>
        <span className="font-semibold text-purple-600 dark:text-purple-400">{name}</span>
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          {Array.isArray(data) ? `[${data.length}]` : `{${Object.keys(data).length}}`}
        </span>
      </div>
      {expanded && (
        <div className="border-l-2 border-gray-200 dark:border-gray-600 ml-2 pl-2">
          {Object.entries(data).map(([key, val]) => (
            <JSONNode key={key} data={val} name={key} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

const templates = {
  "Blog Post": `{
  "title": "How to Build a JSON Viewer",
  "author": "Anila Amanat",
  "date": "2025-07-25",
  "tags": ["React", "JSON", "UI"],
  "published": true,
  "content": {
    "intro": "This article helps you build a JSON viewer in React.",
    "body": "Step-by-step explanation with code and UI examples.",
    "conclusion": "Use this to enhance your developer tools."
  }
}`,
  "Resume": `{
  "name": "Anila Amanat",
  "title": "Frontend Developer",
  "email": "anila@example.com",
  "location": "Pakistan",
  "skills": ["React", "Next.js", "Tailwind CSS", "UI/UX"],
  "experience": [
    {
      "company": "Tech Solutions",
      "position": "Web Developer",
      "years": "2022-2024"
    }
  ],
  "education": {
    "degree": "BS Computer Science",
    "university": "Virtual University",
    "year": 2022
  }
}`
}

const JSONEditor = () => {
  const [input, setInput] = useState(`{
  "name": "Anila",
  "age": 23,
  "email": "anilaamanat@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Pakistan",
    "zip": "10001"
  }
}`)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [parsedJSON, setParsedJSON] = useState<any>(null)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const handleLiveChange = (val: string) => {
    setInput(val)
    try {
      const parsed = JSON.parse(val)
      setParsedJSON(parsed)
      setError("")
    } catch {
      setParsedJSON(null)
      setError("Invalid JSON format")
    }
  }

  const handleCopy = () => {
    if (!parsedJSON) return
    navigator.clipboard.writeText(JSON.stringify(parsedJSON, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleExport = () => {
    if (!parsedJSON) return
    const blob = new Blob([JSON.stringify(parsedJSON, null, 2)], {
      type: "application/json",
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "exported.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleExportYAML = () => {
    if (!parsedJSON) return
    const yamlText = yaml.dump(parsedJSON)
    const blob = new Blob([yamlText], { type: "text/yaml" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "exported.yaml"
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleTemplate = (templateName: keyof typeof templates) => {
    const template = templates[templateName]
    if (template) {
      setInput(template)
      handleLiveChange(template)
    }
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result as string
      setInput(text)
      handleLiveChange(text)
    }
    reader.readAsText(file)
  }

  const prettifyJSON = () => {
    try {
      const pretty = JSON.stringify(JSON.parse(input), null, 2)
      setInput(pretty)
      handleLiveChange(pretty)
    } catch {
      setError("Cannot prettify invalid JSON")
    }
  }

  const minifyJSON = () => {
    try {
      const minified = JSON.stringify(JSON.parse(input))
      setInput(minified)
      handleLiveChange(minified)
    } catch {
      setError("Cannot minify invalid JSON")
    }
  }

  const fillDummyJSON = () => {
    const dummy = {
      name: "Generated User",
      email: "ai@autofill.com",
      date: new Date().toISOString(),
      verified: true,
      location: { city: "Lahore", country: "Pakistan" },
      tags: ["AI", "Auto", "Generated"]
    }
    const jsonText = JSON.stringify(dummy, null, 2)
    setInput(jsonText)
    handleLiveChange(jsonText)
  }

  return (
    <section 
      id="json-tool"
      className={`${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      } min-h-screen py-8 px-4 sm:px-6 transition-colors duration-200`}
    >
      <div className="max-w-6xl mx-auto relative">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`absolute top-0 right-0 px-3 py-1.5 rounded-lg text-sm shadow transition-colors ${
            darkMode 
              ? "bg-gray-700 hover:bg-gray-600 text-amber-300" 
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            JSON Format & Viewer
          </h1>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Paste, edit, validate and visualize your JSON data with this interactive tool
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {Object.keys(templates).map((templateName) => (
                <button
                  key={templateName}
                  onClick={() => handleTemplate(templateName as keyof typeof templates)}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow transition ${
                    darkMode 
                      ? "bg-gray-700 hover:bg-gray-600 text-cyan-400" 
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                >
                  {templateName}
                </button>
              ))}
            </div>

            <div className="relative">
              <textarea
                className={`w-full h-64 border rounded-lg p-4 font-mono text-sm shadow focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 focus:ring-cyan-500"
                    : "bg-white border-gray-300 focus:ring-purple-500"
                }`}
                placeholder="Paste or type JSON here..."
                value={input}
                onChange={(e) => handleLiveChange(e.target.value)}
                spellCheck="false"
              />
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button
                  onClick={prettifyJSON}
                  className={`p-1.5 rounded ${
                    darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  title="Prettify JSON"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button
                  onClick={minifyJSON}
                  className={`p-1.5 rounded ${
                    darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  title="Minify JSON"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
              </div>
            </div>

            {error && (
              <div className={`p-3 rounded-lg text-sm ${
                darkMode ? "bg-red-900/50 text-red-300" : "bg-red-100 text-red-700"
              }`}>
                {error}
              </div>
            )}

            <div className="flex flex-wrap gap-3 justify-between">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setInput("")
                    setParsedJSON(null)
                    setError("")
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm shadow transition ${
                    darkMode 
                      ? "bg-gray-700 hover:bg-gray-600" 
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  Clear
                </button>
                <button
                  onClick={fillDummyJSON}
                  className={`px-3 py-1.5 rounded-lg text-sm shadow transition ${
                    darkMode 
                      ? "bg-gray-700 hover:bg-gray-600" 
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  Generate
                </button>
                <label className={`px-3 py-1.5 rounded-lg text-sm shadow transition cursor-pointer ${
                  darkMode 
                    ? "bg-gray-700 hover:bg-gray-600" 
                    : "bg-gray-200 hover:bg-gray-300"
                }`}>
                  Upload
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {parsedJSON && (
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleCopy}
                    className={`px-3 py-1.5 rounded-lg text-sm shadow transition ${
                      copied 
                        ? "bg-green-600 text-white" 
                        : darkMode 
                          ? "bg-purple-700 hover:bg-purple-600" 
                          : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                  <button
                    onClick={handleExport}
                    className={`px-3 py-1.5 rounded-lg text-sm shadow transition ${
                      darkMode 
                        ? "bg-cyan-700 hover:bg-cyan-600" 
                        : "bg-cyan-600 hover:bg-cyan-700 text-white"
                    }`}
                  >
                    Export JSON
                  </button>
                  <button
                    onClick={handleExportYAML}
                    className={`px-3 py-1.5 rounded-lg text-sm shadow transition ${
                      darkMode 
                        ? "bg-amber-700 hover:bg-amber-600" 
                        : "bg-amber-600 hover:bg-amber-700 text-white"
                    }`}
                  >
                    Export YAML
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className={`rounded-lg shadow-lg overflow-hidden ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <div className={`p-4 border-b ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}>
              <h3 className="text-lg font-semibold">JSON Viewer</h3>
            </div>
            <div className="p-4 overflow-auto max-h-[32rem]">
              {parsedJSON ? (
                <JSONNode data={parsedJSON} />
              ) : (
                <div className={`p-8 text-center ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}>
                  {error ? "Invalid JSON - Please correct your input" : "Enter valid JSON to visualize"}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={`text-center text-sm ${
          darkMode ? "text-gray-500" : "text-gray-400"
        }`}>
          Made with ❤️ by Anila Amanat
        </div>
      </div>
    </section>
  )
}

export default JSONEditor