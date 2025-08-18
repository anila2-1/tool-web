"use client";
import { useState, useEffect } from "react";

interface HistoryItem {
  type: string;
  input: string | number;
  output: string | number;
}

interface BatchResult {
  input: string | number;
  output: string;
}

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");
  const [convertedDate, setConvertedDate] = useState("");
  const [convertedTimestamp, setConvertedTimestamp] = useState("");
  const [currentTimestamp, setCurrentTimestamp] = useState(Math.floor(Date.now() / 1000));
  const [timezone, setTimezone] = useState("UTC");
  const [batchInput, setBatchInput] = useState("");
  const [batchResults, setBatchResults] = useState<BatchResult[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [format, setFormat] = useState<"human" | "iso" | "rfc" | "custom">("human");
  const [customFormat, setCustomFormat] = useState("YYYY-MM-DD HH:mm:ss");
  const [activeTab, setActiveTab] = useState<"single" | "batch">("single");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimestamp(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const savedHistory = localStorage.getItem("timestamp_history");
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Error parsing history", e);
      }
    }
  }, []);

  const saveHistory = (item: HistoryItem) => {
    const updatedHistory = [item, ...history].slice(0, 5);
    setHistory(updatedHistory);
    localStorage.setItem("timestamp_history", JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    if (window.confirm("Are you sure you want to clear the history?")) {
      setHistory([]);
      localStorage.removeItem("timestamp_history");
    }
  };

  const formatDate = (dateObj: Date) => {
    if (!dateObj || isNaN(dateObj.getTime())) return "";

    if (timezone === "UTC") {
      return format === "iso"
        ? dateObj.toISOString()
        : format === "rfc"
        ? dateObj.toUTCString()
        : format === "custom"
        ? applyCustomFormat(dateObj)
        : dateObj.toLocaleString("en-US", { timeZone: "UTC" });
    }

    return format === "iso"
      ? dateObj.toISOString()
      : format === "rfc"
      ? dateObj.toUTCString()
      : format === "custom"
      ? applyCustomFormat(dateObj)
      : dateObj.toLocaleString();
  };

  const applyCustomFormat = (dateObj: Date) => {
    const map: Record<string, string> = {
      YYYY: dateObj.getFullYear().toString(),
      MM: String(dateObj.getMonth() + 1).padStart(2, "0"),
      DD: String(dateObj.getDate()).padStart(2, "0"),
      HH: String(dateObj.getHours()).padStart(2, "0"),
      mm: String(dateObj.getMinutes()).padStart(2, "0"),
      ss: String(dateObj.getSeconds()).padStart(2, "0"),
    };
    return customFormat.replace(/YYYY|MM|DD|HH|mm|ss/g, (m) => map[m] || m);
  };

  const handleTimestampConvert = () => {
    if (!timestamp.trim()) return;
    const ts = parseInt(timestamp, 10);
    if (isNaN(ts)) return;
    const dateObj = new Date(ts.toString().length > 10 ? ts : ts * 1000);
    const formatted = formatDate(dateObj);
    setConvertedDate(formatted);
    saveHistory({ type: "timestamp-to-date", input: timestamp, output: formatted });
  };

  const handleDateConvert = () => {
    if (!date) return;
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return;
    const ts = Math.floor(dateObj.getTime() / 1000);
    setConvertedTimestamp(ts.toString());
    saveHistory({ type: "date-to-timestamp", input: date, output: ts });
  };

  const handleBatchConvert = () => {
    if (!batchInput.trim()) return;
    const lines = batchInput.split("\n").map((line) => line.trim()).filter(Boolean);
    const results = lines.map((line) => {
      const ts = parseInt(line, 10);
      if (isNaN(ts)) return { input: line, output: "Invalid timestamp" };
      const dateObj = new Date(ts.toString().length > 10 ? ts : ts * 1000);
      return { 
        input: ts, 
        output: `${formatDate(dateObj)} (${getRelativeTime(dateObj)})` 
      };
    });
    setBatchResults(results);
  };

  const getRelativeTime = (dateObj: Date) => {
    const now = Date.now();
    const diff = dateObj.getTime() - now;
    const seconds = Math.floor(diff / 1000);
    const absSeconds = Math.abs(seconds);

    if (absSeconds < 60) return seconds >= 0 ? "in a few seconds" : "a few seconds ago";
    if (absSeconds < 3600) return seconds >= 0 ? `in ${Math.floor(absSeconds / 60)} min` : `${Math.floor(absSeconds / 60)} min ago`;
    if (absSeconds < 86400) return seconds >= 0 ? `in ${Math.floor(absSeconds / 3600)} hr` : `${Math.floor(absSeconds / 3600)} hr ago`;
    return seconds >= 0 ? `in ${Math.floor(absSeconds / 86400)} days` : `${Math.floor(absSeconds / 86400)} days ago`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-10 mb-20 relative z-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl mt-[-100] shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8">

          {/* Current Timestamp */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm font-medium text-gray-600">Current Unix Timestamp (UTC)</p>
            <p className="font-mono text-xl sm:text-2xl font-bold text-indigo-700 mt-1">{currentTimestamp}</p>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="UTC">UTC</option>
                <option value="LOCAL">Local</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
              <select
                value={format}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e) => setFormat(e.target.value as any)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="human">Human Readable</option>
                <option value="iso">ISO 8601</option>
                <option value="rfc">RFC 2822</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            {format === "custom" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Custom Format</label>
                <input
                  type="text"
                  placeholder="YYYY-MM-DD HH:mm:ss"
                  value={customFormat}
                  onChange={(e) => setCustomFormat(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab("single")}
              className={`py-2 px-4 sm:px-6 text-sm font-semibold border-b-2 transition-all ${
                activeTab === "single"
                  ? "text-indigo-600 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700 border-transparent"
              }`}
            >
              Single Conversion
            </button>
            <button
              onClick={() => setActiveTab("batch")}
              className={`py-2 px-4 sm:px-6 text-sm font-semibold border-b-2 transition-all ${
                activeTab === "batch"
                  ? "text-purple-600 border-purple-600"
                  : "text-gray-500 hover:text-gray-700 border-transparent"
              }`}
            >
              Batch Conversion
            </button>
          </div>

          {/* ✅ Single Conversion */}
          {activeTab === "single" && (
            <div className="space-y-6">
              {/* Timestamp → Date */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Timestamp → Date</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="1625097600"
                    value={timestamp}
                    onChange={(e) => setTimestamp(e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-xl w-full"
                  />
                  <button
                    onClick={handleTimestampConvert}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-md hover:scale-105 transition-transform"
                  >
                    Convert
                  </button>
                </div>
                {convertedDate && (
                  <div className="mt-3 p-3 sm:p-4 bg-gray-50 rounded-xl border text-xs sm:text-sm flex justify-between items-center overflow-x-auto">
                    <code className="font-mono">{convertedDate}</code>
                    <button
                      onClick={() => copyToClipboard(convertedDate)}
                      className="ml-3 text-indigo-600 text-xs sm:text-sm px-3 py-1 bg-white rounded-lg shadow hover:bg-indigo-50"
                    >
                      Copy
                    </button>
                  </div>
                )}
              </div>

              {/* Date → Timestamp */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Date → Timestamp</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-xl w-full"
                  />
                  <button
                    onClick={handleDateConvert}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all shadow text-sm sm:text-base"
                  >
                    Convert
                  </button>
                </div>
                {convertedTimestamp && (
                  <div className="mt-3 p-3 sm:p-4 bg-gray-50 rounded-xl border text-xs sm:text-sm flex justify-between items-center overflow-x-auto">
                    <code className="font-mono">{convertedTimestamp}</code>
                    <button
                      onClick={() => copyToClipboard(convertedTimestamp)}
                      className="ml-3 text-indigo-600 text-xs sm:text-sm px-3 py-1 bg-white rounded-lg shadow hover:bg-indigo-50"
                    >
                      Copy
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ✅ Batch Conversion */}
          {activeTab === "batch" && (
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-800">Batch Timestamp Conversion</label>
              <textarea
                placeholder="Enter one timestamp per line..."
                value={batchInput}
                onChange={(e) => setBatchInput(e.target.value)}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl h-32 resize-y text-sm sm:text-base"
              />
              <button
                onClick={handleBatchConvert}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all shadow text-sm sm:text-base"
              >
                Convert All
              </button>

              {batchResults.length > 0 && (
                <div className="space-y-2 mt-4">
                  {batchResults.map((res, i) => (
                    <div
                      key={i}
                      className="p-3 sm:p-4 bg-gray-50 rounded-xl border text-xs sm:text-sm flex justify-between items-center overflow-x-auto"
                    >
                      <code className="font-mono flex-1">{res.output}</code>
                      <button
                        onClick={() => copyToClipboard(res.output)}
                        className="ml-3 text-indigo-600 text-xs sm:text-sm px-3 py-1 bg-white rounded-lg shadow hover:bg-indigo-50"
                      >
                        Copy
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ✅ History */}
          <div className="mt-10">
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">Recent Conversions</h3>
              {history.length > 0 && (
                <button
                  onClick={clearHistory}
                  className="text-xs sm:text-sm text-red-600 hover:text-red-800 font-medium"
                >
                  Clear History
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <p className="p-4 sm:p-6 text-center text-gray-500 bg-gray-100 rounded-xl text-sm italic">
                No history yet. Start converting!
              </p>
            ) : (
              <div className="space-y-2">
                {history.map((h, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-4 bg-gray-100 rounded-xl border text-xs sm:text-sm flex justify-between items-center overflow-x-auto"
                  >
                    <div className="font-mono flex-1 break-all">
                      <span className="font-medium">{h.input}</span> → {h.output}
                    </div>
                    <button
                      onClick={() => copyToClipboard(h.output.toString())}
                      className="ml-3 text-indigo-600 text-xs sm:text-sm px-3 py-1 bg-white rounded-lg shadow hover:bg-indigo-50"
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
