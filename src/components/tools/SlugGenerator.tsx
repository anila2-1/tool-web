"use client";

import React, { useState } from "react";
import { FaMagic, FaTrash, FaDownload, FaCopy, FaCheck } from "react-icons/fa";

const stopwords = ["ka","ki","ko","se","me","mai","kaun","kyun","kya","hai","ho","hua","wala","the","a","an","and","or","but","for","to","of","with","is"];

const funnyEndings = [
  "done-right-bro","like-a-pro","noob-proof","not-a-joke","lit-af","with-extra-cheese",
  "banana-approved","totally-serious","no-clickbait","just-for-fun","nailed-it","totally-epic","savage","you-wont-believe","mind-blown"
];

const casualEndings = [
  "made-easy","real-talk","in-style","for-fun","beginner-friendly","quick-peek","no-pressure","keep-it-simple"
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
  let slug = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, " ").trim();
  if (tone === "professional") {
    const stopwordRegex = new RegExp(`\\b(${stopwords.join("|")})\\b`, "gi");
    slug = slug.replace(stopwordRegex, "").replace(/\s+/g, " ").trim();
  }
  slug = slug.replace(/\s+/g, "-");
  if (tone === "casual") slug += `-${casualEndings[Math.floor(Math.random() * casualEndings.length)]}`;
  if (tone === "funny") slug += `-${funnyEndings[Math.floor(Math.random() * funnyEndings.length)]}`;
  return slug;
};

const SlugGenerator: React.FC = () => {
  const [input, setInput] = useState("");
  const [slugs, setSlugs] = useState<BatchSlug[]>([]);
  const [aiSlugs, setAiSlugs] = useState<AiSlugSet>({});
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copiedType, setCopiedType] = useState<Tone | "">("");
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
    setInput(""); setSlugs([]); setAiSlugs({}); setCopiedIndex(null); setCopiedType("");
  };

  const handleDownload = () => {
    const text = slugs.map((s) => s.slug).join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "slugs.txt"; a.click();
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
    <section className="py-20 px-6 relative mt-0.5 z-10">
      <div className="max-w-6xl mx-auto">

        {/* Tabs */}
        <div className="flex justify-center mt-[-100] mb-6">
          <div className="inline-flex bg-white/80 backdrop-blur-md rounded-full shadow-lg p-1">
            <button
              onClick={() => setActiveTab("batch")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === "batch"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Batch Mode
            </button>
            <button
              onClick={() => setActiveTab("single")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === "single"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Single with AI
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Input Panel */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col h-[460px]">
            <textarea
              className="w-full flex-1 p-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-300 text-gray-800 resize-none transition-all"
              placeholder={activeTab === "batch" ? "✍️ Enter one title per line..." : "✨ Enter a single title for AI slug variants..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="mt-4 flex flex-wrap gap-4">
              <button
                onClick={activeTab === "batch" ? handleBatchGenerate : handleSingleGenerate}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 hover:scale-105 shadow-lg transition-transform"
              >
                <FaMagic /> Generate
              </button>
              <button
                onClick={handleClear}
                className="bg-gray-200 text-gray-800 font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-gray-300 hover:scale-105 transition-transform"
              >
                <FaTrash /> Clear
              </button>
              {slugs.length > 0 && activeTab === "batch" && (
                <button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 hover:scale-105 shadow-lg transition-transform"
                >
                  <FaDownload /> Download
                </button>
              )}
            </div>
          </div>

          {/* Output Panel */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col h-[460px] overflow-auto">
            {activeTab === "batch" ? (
              <>
                <h4 className="text-xl font-bold mb-6 text-blue-700">
                  {slugs.length > 0 ? "✨ Generated Slugs:" : "Slugs will appear here"}
                </h4>
                {slugs.length > 0 ? (
                  <ul className="space-y-4">
                    {slugs.map((item, index) => (
                      <li
                        key={index}
                        className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex justify-between items-center hover:shadow-md transition"
                      >
                        <div>
                          <p className="text-sm text-gray-500 mb-1">{item.original}</p>
                          <p className="font-semibold text-gray-900">{item.slug}</p>
                        </div>
                        <button
                          onClick={() => handleCopy(item.slug, index)}
                          className="text-blue-600 hover:text-blue-800 transition"
                        >
                          {copiedIndex === index ? <FaCheck /> : <FaCopy />}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 italic">Enter titles and click generate to see results</p>
                )}
              </>
            ) : (
              <>
                <h4 className="text-xl font-bold mb-6 text-blue-700">
                  {aiSlugs.professional ? "🤖 AI Slug Suggestions:" : "AI suggestions will appear here"}
                </h4>
                {aiSlugs.professional ? (
                  <div className="space-y-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                      <p className="font-bold text-blue-700">📌 Professional</p>
                      <p className="text-gray-800">{aiSlugs.professional}</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                      <p className="font-bold text-green-700">😎 Casual</p>
                      <p className="text-gray-800">{aiSlugs.casual}</p>
                    </div>
                    <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-lg">
                      <p className="font-bold text-pink-700">🤣 Funny</p>
                      <p className="text-gray-800">{aiSlugs.funny}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400 italic">Enter a title and click generate to see AI suggestions</p>
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
