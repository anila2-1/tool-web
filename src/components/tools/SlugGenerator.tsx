"use client";

import React, { useState } from "react";
import { FaMagic, FaTrash, FaDownload, FaCopy, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

// Stopwords for SEO-friendly slugs
const stopwords = [
  "ka", "ki", "ko", "se", "me", "mai", "kaun", "kyun", "kya", "hai", "ho", "hua", "wala",
  "the", "a", "an", "and", "or", "but", "for", "to", "of", "with", "is"
];

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
    <section className="py-16 px-6 mb-20 relative z-10">
      {/* Glassmorphism Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl mt-[-110] rounded-3xl shadow-2xl border border-gray-200/60 overflow-hidden"
      >
        <div className="p-6 sm:p-10">
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-full shadow-md p-1 border border-gray-200">
              {["batch", "single"].map((tab) => (
                <button
                  key={tab}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab === "batch" ? "📑 Batch Mode" : "🤖 AI Suggestions"}
                </button>
              ))}
            </div>
          </div>

          {/* Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Input Panel */}
            <div className="flex flex-col h-full">
              <textarea
                className="w-full flex-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 text-gray-800 resize-none shadow-sm transition-all text-base bg-white/60 min-h-[380px] md:min-h-[420px]"
                placeholder={activeTab === "batch" ? "✍️ Enter one title per line..." : "✨ Enter a single title for AI slug variants..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                spellCheck="false"
              />
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={activeTab === "batch" ? handleBatchGenerate : handleSingleGenerate}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all shadow-md"
                >
                  <FaMagic /> Generate
                </button>
                <button
                  onClick={handleClear}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 hover:scale-105 transition-all"
                >
                  <FaTrash /> Clear
                </button>
                {slugs.length > 0 && activeTab === "batch" && (
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 hover:shadow-lg hover:scale-105 transition-all shadow-md"
                  >
                    <FaDownload /> Download
                  </button>
                )}
              </div>
            </div>

            {/* Output Panel */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-inner flex flex-col h-full min-h-[380px] md:min-h-[420px] max-h-[520px] overflow-y-auto">
              {activeTab === "batch" ? (
                <>
                  <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800 flex-shrink-0">
                    {slugs.length > 0 ? "✨ Generated Slugs" : "⚡ Results will appear here"}
                  </h4>
                  {slugs.length > 0 ? (
                    <ul className="space-y-2 flex-1 overflow-y-auto pr-2">
                      {slugs.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-white/80 backdrop-blur rounded-xl border border-gray-200 p-3 flex justify-between items-start hover:shadow-lg transition-all group flex-shrink-0"
                        >
                          <div className="pr-3 flex-1 min-w-0">
                            <p className="text-xs text-gray-500 mb-1 truncate">
                              {item.original}
                            </p>
                            <p className="font-mono text-sm text-gray-800 break-words line-clamp-2">
                              {item.slug}
                            </p>
                          </div>
                          <button
                            onClick={() => handleCopy(item.slug, index)}
                            className="text-indigo-600 hover:text-indigo-800 transition-all p-2 flex-shrink-0 ml-2"
                            title="Copy Slug"
                          >
                            {copiedIndex === index ? (
                              <FaCheck className="text-green-500 animate-bounce" />
                            ) : (
                              <FaCopy />
                            )}
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 italic text-center flex-1 flex items-center justify-center text-sm sm:text-base">
                      Enter titles and click <b className="ml-1">Generate</b> 🚀
                    </p>
                  )}
                </>
              ) : (
                <>
                  <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800 flex-shrink-0">
                    {aiSlugs.professional ? "🤖 AI Slug Suggestions" : "💡 AI will suggest here"}
                  </h4>
                  {aiSlugs.professional ? (
                    <div className="space-y-3 flex-1 overflow-y-auto pr-2">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-500 p-4 rounded-xl flex-shrink-0">
                        <p className="font-semibold text-indigo-700 text-sm sm:text-base">📌 Professional</p>
                        <p className="font-mono text-xs sm:text-sm text-gray-800 mt-1 break-words">{aiSlugs.professional}</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-xl flex-shrink-0">
                        <p className="font-semibold text-green-700 text-sm sm:text-base">😎 Casual</p>
                        <p className="font-mono text-xs sm:text-sm text-gray-800 mt-1 break-words">{aiSlugs.casual}</p>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-4 rounded-xl flex-shrink-0">
                        <p className="font-semibold text-pink-700 text-sm sm:text-base">🤣 Funny</p>
                        <p className="font-mono text-xs sm:text-sm text-gray-800 mt-1 break-words">{aiSlugs.funny}</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-400 italic text-center flex-1 flex items-center justify-center text-sm sm:text-base">
                      Enter a title and click <b className="ml-1">Generate</b> ✨
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SlugGenerator;
