"use client";

import React, { useState } from "react";
import { FaMagic, FaTrash, FaDownload, FaCopy, FaCheck } from "react-icons/fa";

// Roman Urdu and English stopwords for smart filtering
const stopwords = [
  "ka", "ki", "ko", "se", "me", "mai", "kaun", "kyun", "kya", "hai", "ho",
  "hua", "wala", "the", "a", "an", "and", "or", "but", "for", "to", "of", "with", "is"
];

// Tone-based endings
const funnyEndings = [
  "done-right-bro", "like-a-pro", "noob-proof", "not-a-joke", "lit-af",
  "with-extra-cheese", "banana-approved", "totally-serious", "no-clickbait",
  "just-for-fun", "nailed-it", "totally-epic", "savage", "you-wont-believe", "mind-blown"
];

const casualEndings = [
  "made-easy", "real-talk", "in-style", "for-fun", "beginner-friendly",
  "quick-peek", "no-pressure", "keep-it-simple"
];

type Tone = "professional" | "casual" | "funny";

interface BatchSlug {
  original: string;
  slug: string;
}

interface AiSlugSet {
  professional?: string;
  casual?: string;
  funny?: string;
}

// Smart slug generator with tone options
const generateSlug = (text: string, tone: Tone = "professional"): string => {
  let slug = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (tone === "professional") {
    const stopwordRegex = new RegExp(`\\b(${stopwords.join("|")})\\b`, "gi");
    slug = slug.replace(stopwordRegex, "").replace(/\s+/g, " ").trim();
  }

  slug = slug.replace(/\s+/g, "-");

  if (tone === "casual" && casualEndings.length > 0) {
    slug += `-${casualEndings[Math.floor(Math.random() * casualEndings.length)]}`;
  } else if (tone === "funny" && funnyEndings.length > 0) {
    slug += `-${funnyEndings[Math.floor(Math.random() * funnyEndings.length)]}`;
  }

  return slug;
};

const SlugGenerator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [slugs, setSlugs] = useState<BatchSlug[]>([]);
  const [aiSlugs, setAiSlugs] = useState<AiSlugSet>({});
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedType, setCopiedType] = useState<Tone | "">("");
  const [activeTab, setActiveTab] = useState<"batch" | "single">("batch");

  const handleBatchGenerate = () => {
    const lines = input
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const generated: BatchSlug[] = lines.map((line) => ({
      original: line,
      slug: generateSlug(line),
    }));

    setSlugs(generated);
  };

  const handleSingleGenerate = () => {
    if (!input.trim()) return;

    setAiSlugs({
      professional: generateSlug(input, "professional"),
      casual: generateSlug(input, "casual"),
      funny: generateSlug(input, "funny"),
    });
  };

  const handleClear = () => {
    setInput("");
    setSlugs([]);
    setAiSlugs({});
    setCopiedIndex(null);
    setCopiedType("");
  };

  const handleDownload = () => {
    const text = slugs.map((s) => s.slug).join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "slugs.txt";
    a.click();
  };

  const handleCopy = (text: string, indexOrType: number | Tone) => {
    navigator.clipboard.writeText(text);
    if (typeof indexOrType === "number") {
      setCopiedIndex(indexOrType);
      setTimeout(() => setCopiedIndex(null), 1500);
    } else {
      setCopiedType(indexOrType);
      setTimeout(() => setCopiedType(""), 1500);
    }
  };

  return (
    <section className="py-26 px-6 bg-gray-100 text-gray-800 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 text-center">
          Advanced Slug Generator
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-center">
          Generate SEO-friendly slugs in different tones - professional, casual, or funny.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow p-1">
            <button
              onClick={() => setActiveTab("batch")}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === "batch" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Batch Mode
            </button>
            <button
              onClick={() => setActiveTab("single")}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === "single" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Single with AI
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Input Side */}
          <div className="bg-white rounded-lg shadow p-6">
            <textarea
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-black resize-none"
              rows={6}
              placeholder={
                activeTab === "batch"
                  ? "Enter one title per line for batch processing..."
                  : "Enter a single title to generate multiple slug variants..."
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="mt-6 flex flex-wrap justify-start gap-4">
              <button
                onClick={activeTab === "batch" ? handleBatchGenerate : handleSingleGenerate}
                className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 hover:scale-105 transition-transform"
              >
                <FaMagic /> Generate
              </button>

              <button
                onClick={handleClear}
                className="bg-gray-300 text-gray-800 font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-400 hover:scale-105 transition-transform"
              >
                <FaTrash /> Clear
              </button>

              {slugs.length > 0 && activeTab === "batch" && (
                <button
                  onClick={handleDownload}
                  className="bg-green-600 text-white font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-700 hover:scale-105 transition-transform"
                >
                  <FaDownload /> Download
                </button>
              )}
            </div>
          </div>

          {/* Output Side */}
          <div className="bg-white rounded-lg shadow p-6 overflow-auto max-h-[420px]">
            {activeTab === "batch" ? (
              <>
                <h4 className="text-lg font-semibold mb-4 text-blue-700">
                  {slugs.length > 0 ? "Generated Slugs:" : "Slugs will appear here"}
                </h4>
                {slugs.length > 0 ? (
                  <ul className="space-y-4">
                    {slugs.map((item, index) => (
                      <li
                        key={index}
                        className="border border-gray-200 p-4 rounded-lg flex justify-between items-center hover:shadow"
                      >
                        <div className="text-left">
                          <p className="text-sm text-gray-500 font-medium mb-1">
                            {item.original}
                          </p>
                          <p className="text-blue-700 font-semibold">{item.slug}</p>
                        </div>
                        <button
                          onClick={() => handleCopy(item.slug, index)}
                          className="text-blue-600 hover:text-blue-800 transition"
                          title="Copy to clipboard"
                        >
                          {copiedIndex === index ? <FaCheck /> : <FaCopy />}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">Enter titles and click generate to see results</p>
                )}
              </>
            ) : (
              <>
                <h4 className="text-lg font-semibold mb-4 text-blue-700">
                  {aiSlugs.professional ? "AI Slug Suggestions:" : "AI suggestions will appear here"}
                </h4>
                {aiSlugs.professional ? (
                  <div className="space-y-6">
                    {/* Professional */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-bold text-blue-700">📌 Professional Slug</p>
                      <p className="text-lg text-gray-800 mb-2">{aiSlugs.professional}</p>
                      <button
                        onClick={() => aiSlugs.professional && handleCopy(aiSlugs.professional, "professional")}
                        className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded hover:bg-blue-200"
                      >
                        {copiedType === "professional" ? <FaCheck className="inline" /> : <FaCopy className="inline" />}{" "}
                        {copiedType === "professional" ? "Copied!" : "Copy"}
                      </button>
                    </div>

                    {/* Casual */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-bold text-green-700">😎 Casual Slug</p>
                      <p className="text-lg text-gray-800 mb-2">{aiSlugs.casual}</p>
                      <button
                        onClick={() => aiSlugs.casual && handleCopy(aiSlugs.casual, "casual")}
                        className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded hover:bg-green-200"
                      >
                        {copiedType === "casual" ? <FaCheck className="inline" /> : <FaCopy className="inline" />}{" "}
                        {copiedType === "casual" ? "Copied!" : "Copy"}
                      </button>
                    </div>

                    {/* Funny */}
                    <div className="border-l-4 border-pink-500 pl-4">
                      <p className="font-bold text-pink-700">🤣 Funny Slug</p>
                      <p className="text-lg text-gray-800 mb-2">{aiSlugs.funny}</p>
                      <button
                        onClick={() => aiSlugs.funny && handleCopy(aiSlugs.funny, "funny")}
                        className="text-sm text-pink-600 bg-pink-100 px-3 py-1 rounded hover:bg-pink-200"
                      >
                        {copiedType === "funny" ? <FaCheck className="inline" /> : <FaCopy className="inline" />}{" "}
                        {copiedType === "funny" ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">Enter a title and click generate to see AI suggestions</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlugGenerator;
