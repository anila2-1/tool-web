'use client'
import React, { useState } from 'react'
import yaml from 'js-yaml'

type JSONNodeProps = {
  data: unknown
  name?: string
  level?: number
}

const JSONNode = ({ data, name = "object", level = 0 }: JSONNodeProps) => {
  const [expanded, setExpanded] = useState(level < 2)
  const isObject = (val: unknown) => typeof val === "object" && val !== null

  const toggle = () => setExpanded(!expanded)

  if (!isObject(data)) {
    return (
      <div style={{ marginLeft: `${level * 16}px` }} className="flex items-start py-1">
        <span className="font-semibold text-purple-600 mr-2">{name}:</span> 
        <span className={
          typeof data === 'string' ? 'text-green-600' : 
          typeof data === 'number' ? 'text-blue-600' : 
          typeof data === 'boolean' ? 'text-red-600' : ''
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
        className="cursor-pointer select-none flex items-center hover:bg-gray-200 px-2 py-1 rounded transition-colors"
      >
        <span className="mr-1.5 text-gray-500">
          {expanded ? '▼' : '►'}
        </span>
        <span className="font-semibold text-purple-600">{name}</span>
        <span className="ml-2 text-sm text-gray-500">
          {Array.isArray(data) ? `[${data.length}]` : `{${Object.keys(data).length}}`}
        </span>
      </div>
      {expanded && (
        <div className="border-l-2 border-gray-200 ml-2 pl-2">
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
  "author": "Ava",
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
  "name": "Ava",
  "title": "Frontend Developer",
  "email": "ava@example.com",
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
  const [input, setInput] = useState("")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [parsedJSON, setParsedJSON] = useState<any>(null)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

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
      className="py-20 px-6 relative mt-0.5 z-10 "
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-3xl shadow-xl border border-gray-200 p-10 sm:p-8 justify-center mt-[-130]  mb-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {Object.keys(templates).map((templateName) => (
                <button
                  key={templateName}
                  onClick={() => handleTemplate(templateName as keyof typeof templates)}
                  className='px-4 mb-3 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:scale-105 transition-transform'
                >
                  {templateName}
                </button>
              ))}
            </div>

            <div className="relative">
              <textarea
                className='w-full h-72 border rounded-xl p-4 font-mono text-sm shadow-lg focus:outline-none focus:ring-4 transition'
                placeholder="Paste or type JSON here..."
                value={input}
                onChange={(e) => handleLiveChange(e.target.value)}
                spellCheck="false"
              />
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button
                  onClick={prettifyJSON}
                  className="p-1.5 rounded bg-gray-200 hover:bg-gray-300"
                  title="Prettify JSON"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button
                  onClick={minifyJSON}
                  className="p-1.5 rounded bg-gray-200 hover:bg-gray-300"
                  title="Minify JSON"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg text-sm bg-red-100 text-red-700">
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
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 shadow-md"
                >
                  Clear
                </button>
                <button
                  onClick={fillDummyJSON}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 shadow-md"
                >
                  Generate
                </button>
                <label className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 shadow-md cursor-pointer">
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
                      copied ? "bg-green-600 text-white" : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                  <button
                    onClick={handleExport}
                    className="px-3 py-1.5 rounded-lg text-sm shadow transition bg-cyan-600 hover:bg-cyan-700 text-white"
                  >
                    Export JSON
                  </button>
                  <button
                    onClick={handleExportYAML}
                    className="px-3 py-1.5 rounded-lg text-sm shadow transition bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    Export YAML
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
  {/* Header */}
  <div className="px-5 py-4 bg-white border-b border-gray-200">
    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
      JSON Viewer
    </h3>
  </div>

  {/* Content */}
  <div className="p-4 overflow-auto max-h-[480px] min-h-[200px] ">
    {parsedJSON ? (
      <JSONNode data={parsedJSON} />
    ) : (
      <div className="p-8 text-center text-gray-500 italic transition-opacity duration-200">
        {error ? (
          <div className="flex flex-col items-center gap-2 text-red-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Invalid JSON — Please correct your input</span>
          </div>
        ) : (
          <p className="text-sm">Enter valid JSON to visualize the structure</p>
        )}
      </div>
    )}
  </div>
</div>
</div>

      </div>
    </section>
  )
}

export default JSONEditor
