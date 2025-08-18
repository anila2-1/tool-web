"use client";

import React, { useState } from "react";
import { FaMagic, FaTrash, FaDownload, FaCopy, FaCheck } from "react-icons/fa";

// Stopwords for SEO-friendly slugs
const stopwords = [
  "ka", "ki", "ko", "se", "me", "mai", "kaun", "kyun", "kya", "hai", "ho", "hua", "wala",
  "the", "a", "an", "and", "or", "but", "for", "to", "of", "with", "is"
];

// Fun & engaging endings
const funnyEndings = [
  "done-right-bro", "like-a-pro", "noob-proof", "not-a-joke", "lit-af", "with-extra-cheese",
  "banana-approved", "totally-serious", "no-clickbait", "just-for-fun", "nailed-it", "totally-epic",
  "savage", "you-wont-believe", "mind-blown"
];

const casualEndings = [
  "made-easy", "real-talk", "in-style", "for-fun", "beginner-friendly", "quick-peek", "no-pressure", "keep-it-simple"
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

  if (tone === "casual") {
    slug += `-${casualEndings[Math.floor(Math.random() * casualEndings.length)]}`;
  }
  if (tone === "funny") {
    slug += `-${funnyEndings[Math.floor(Math.random() * funnyEndings.length)]}`;
  }

  return slug;
};

const SlugGenerator = () => {
  const [input, setInput] = useState("");
  const [slugs, setSlugs] = useState<BatchSlug[]>([]);
  const [aiSlugs, setAiSlugs] = useState<AiSlugSet>({});
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"batch" | "single">("batch");

  const handleBatchGenerate = () => {
    const lines = input.split("\n").map((line) => line.trim()).filter(Boolean);
    const generated = lines.map((line) => ({ original: line, slug: generateSlug(line) }));
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
  };

  const handleDownload = () => {
    const text = slugs.map((s) => s.slug).join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "slugs.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 mb-20 relative z-10">
      {/* ✅ Main Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl mt-[-100] shadow-xl border border-gray-200 overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8">
          {/* Tabs */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex bg-white rounded-full shadow-md p-1 border border-gray-200">
              <button
                onClick={() => setActiveTab("batch")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === "batch"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Batch Mode
              </button>
              <button
                onClick={() => setActiveTab("single")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === "single"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                AI Suggestions
              </button>
            </div>
          </div>

          {/* Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Input Panel */}
            <div className="flex flex-col min-h-[350px] sm:min-h-[400px] md:min-h-[480px]">
              <textarea
                className="w-full flex-1 p-3 sm:p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 text-gray-800 resize-none shadow-sm transition-all text-sm sm:text-base"
                placeholder={activeTab === "batch" ? "✍️ Enter one title per line..." : "✨ Enter a single title for AI slug variants..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                spellCheck="false"
              />
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
                <button
                  onClick={activeTab === "batch" ? handleBatchGenerate : handleSingleGenerate}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all shadow text-sm sm:text-base"
                >
                  <FaMagic /> Generate
                </button>
                <button
                  onClick={handleClear}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 hover:scale-105 transition-all text-sm sm:text-base"
                >
                  <FaTrash /> Clear
                </button>
                {slugs.length > 0 && activeTab === "batch" && (
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 hover:shadow-lg hover:scale-105 transition-all shadow text-sm sm:text-base"
                  >
                    <FaDownload /> Download
                  </button>
                )}
              </div>
            </div>

            {/* Output Panel */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200 flex flex-col min-h-[350px] sm:min-h-[400px] md:min-h-[480px] overflow-auto">
              {activeTab === "batch" ? (
                <>
                  <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800">
                    {slugs.length > 0 ? "✨ Generated Slugs" : "Results will appear here"}
                  </h4>
                  {slugs.length > 0 ? (
                    <ul className="space-y-3">
                      {slugs.map((item, index) => (
                        <li
                          key={index}
                          className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 flex justify-between items-center hover:shadow-md transition-all group"
                        >
                          <div className="pr-2">
                            <p className="text-xs text-gray-500 mb-1 truncate max-w-[200px] sm:max-w-xs">
                              {item.original}
                            </p>
                            <p className="font-mono text-xs sm:text-sm text-gray-800 break-all">
                              {item.slug}
                            </p>
                          </div>
                          <button
                            onClick={() => handleCopy(item.slug, index)}
                            className="text-indigo-600 hover:text-indigo-800 transition-colors p-2"
                            title="Copy Slug"
                          >
                            {copiedIndex === index ? (
                              <FaCheck className="text-green-500" />
                            ) : (
                              <FaCopy />
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 italic text-center mt-6 sm:mt-8 text-sm sm:text-base">
                      Enter titles and click &ldquo;Generate&rdquo; to see results
                    </p>
                  )}
                </>
              ) : (
                <>
                  <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800">
                    {aiSlugs.professional ? "🤖 AI Slug Suggestions" : "AI suggestions will appear here"}
                  </h4>
                  {aiSlugs.professional ? (
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-500 p-4 rounded-xl">
                        <p className="font-semibold text-indigo-700 text-xs sm:text-sm">📌 Professional</p>
                        <p className="font-mono text-xs sm:text-sm text-gray-800 mt-1 break-all">{aiSlugs.professional}</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-xl">
                        <p className="font-semibold text-green-700 text-xs sm:text-sm">😎 Casual</p>
                        <p className="font-mono text-xs sm:text-sm text-gray-800 mt-1 break-all">{aiSlugs.casual}</p>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-4 rounded-xl">
                        <p className="font-semibold text-pink-700 text-xs sm:text-sm">🤣 Funny</p>
                        <p className="font-mono text-xs sm:text-sm text-gray-800 mt-1 break-all">{aiSlugs.funny}</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-400 italic text-center mt-6 sm:mt-8 text-sm sm:text-base">
                      Enter a title and click &ldquo;Generate&ldquo; to see AI suggestions
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlugGenerator;
