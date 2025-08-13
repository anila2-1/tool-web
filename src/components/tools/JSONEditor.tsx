'use client'
import React, { useState } from 'react'
import yaml from 'js-yaml'

type JSONNodeProps = {
  data: unknown
  name?: string
  level?: number
}

const JSONNode = ({ data, name = "object", level = 0 }: JSONNodeProps) => {
  const [expanded, setExpanded] = useState(level === 0)
  const isObject = (val: unknown) => typeof val === "object" && val !== null

  const toggle = () => setExpanded(!expanded)

  if (!isObject(data)) {
    return (
      <div style={{ marginLeft: level * 20 }} className="text-sm">
        <span className="font-medium">{name}:</span> {String(data)}
      </div>
    )
  }

  return (
    <div style={{ marginLeft: level * 20 }} className="text-sm">
      <div onClick={toggle} className="cursor-pointer select-none">
        {expanded ? "▼" : "►"} <span className="font-semibold">{name}</span>{" "}
        {Array.isArray(data) ? `[${data.length}]` : `{${Object.keys(data).length}}`}
      </div>
      {expanded &&
        Object.entries(data).map(([key, val]) => (
          <JSONNode key={key} data={val} name={key} level={level + 1} />
        ))}
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
      setError("❌ Invalid JSON format.")
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
      setError("❌ Cannot prettify invalid JSON")
    }
  }

  const minifyJSON = () => {
    try {
      const minified = JSON.stringify(JSON.parse(input))
      setInput(minified)
      handleLiveChange(minified)
    } catch {
      setError("❌ Cannot minify invalid JSON")
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
    <section id="json-tool"
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen py-12 px-4 transition-all`}
    >
      <div className="max-w-5xl mx-auto relative">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm shadow"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <h2 className="text-4xl font-extrabold mb-4 text-center text-cyan-600 dark:text-cyan-400">
          JSON Format & View Tool
        </h2>
        <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
          Paste your JSON below or load a template to get started.
        </p>

        <div className="flex flex-wrap gap-2 mb-4 py-2 px-2 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-inner">
          {Object.keys(templates).map((templateName) => (
            <button
              key={templateName}
              onClick={() => handleTemplate(templateName as keyof typeof templates)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow transition"
            >
              Load {templateName}
            </button>
          ))}

          <button
            onClick={() => {
              setInput("")
              setParsedJSON(null)
              setError("")
            }}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow transition"
          >
            Clear JSON
          </button>

          <button
            onClick={fillDummyJSON}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow transition"
          >
            Generate Dummy
          </button>

          <button
            onClick={prettifyJSON}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow transition"
          >
            Prettify
          </button>

          <button
            onClick={minifyJSON}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow transition"
          >
            Minify
          </button>

          <label className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow transition cursor-pointer">
            Upload JSON
            <input
              type="file"
              accept=".json"
              onChange={handleUpload}
              className="hidden"
            />
          </label>
        </div>

        <textarea
          className={`w-full h-60 border rounded-lg p-4 font-mono text-sm shadow focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            darkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          }`}
          placeholder="Paste JSON here..."
          value={input}
          onChange={(e) => handleLiveChange(e.target.value)}
        />
        
        {error && (
          <div className="mt-2 p-2 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        {parsedJSON && (
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            <button
              onClick={handleCopy}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow transition font-medium"
            >
              {copied ? "✅ Copied!" : "📋 Copy JSON"}
            </button>

            <button
              onClick={handleExport}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition font-medium"
            >
              ⬇️ Export .json
            </button>

            <button
              onClick={handleExportYAML}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg shadow transition font-medium"
            >
              🟡 Export .yaml
            </button>
          </div>
        )}

        {parsedJSON && (
          <div className={`mt-8 p-6 rounded-lg shadow-lg overflow-auto ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}>
            <h3 className="text-xl font-bold mb-4">JSON Viewer</h3>
            <JSONNode data={parsedJSON} />
          </div>
        )}
      </div>
    </section>
  )
}

export default JSONEditor