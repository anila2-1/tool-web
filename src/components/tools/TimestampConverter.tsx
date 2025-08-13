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
  const [format, setFormat] = useState("human");
  const [customFormat, setCustomFormat] = useState("YYYY-MM-DD HH:mm:ss");
  const [activeTab, setActiveTab] = useState<"single" | "batch">("single");

  // Live clock
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimestamp(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Load history from localStorage
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
    if (!dateObj) return "";

    if (timezone === "UTC") {
      return format === "iso"
        ? dateObj.toISOString()
        : format === "rfc"
        ? dateObj.toUTCString()
        : format === "custom"
        ? applyCustomFormat(dateObj)
        : dateObj.toUTCString();
    }

    switch (format) {
      case "iso":
        return dateObj.toISOString();
      case "rfc":
        return dateObj.toUTCString();
      case "custom":
        return applyCustomFormat(dateObj);
      default:
        return dateObj.toLocaleString();
    }
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
    const lines = batchInput.split("\n");
    const results = lines.map((line) => {
      const ts = parseInt(line.trim(), 10);
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
    if (absSeconds < 3600)
      return seconds >= 0 ? `in ${Math.floor(absSeconds / 60)} min` : `${Math.floor(absSeconds / 60)} min ago`;
    if (absSeconds < 86400)
      return seconds >= 0 ? `in ${Math.floor(absSeconds / 3600)} hr` : `${Math.floor(absSeconds / 3600)} hr ago`;
    return seconds >= 0 ? `in ${Math.floor(absSeconds / 86400)} days` : `${Math.floor(absSeconds / 86400)} days ago`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">Unix Timestamp Converter</h1>
          <div className="text-center mt-4">
            <p className="text-sm sm:text-base font-medium">Current Timestamp:</p>
            <p className="font-mono text-xl sm:text-2xl font-bold mt-1">{currentTimestamp}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Timezone & Format Controls */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
              <select 
                value={timezone} 
                onChange={(e) => setTimezone(e.target.value)} 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="UTC">UTC</option>
                <option value="LOCAL">Local</option>
              </select>
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
              <select 
                value={format} 
                onChange={(e) => setFormat(e.target.value)} 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="human">Human Readable</option>
                <option value="iso">ISO 8601</option>
                <option value="rfc">RFC 2822</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            {format === "custom" && (
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">Custom Format</label>
                <input
                  type="text"
                  placeholder="YYYY-MM-DD HH:mm:ss"
                  value={customFormat}
                  onChange={(e) => setCustomFormat(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-2 px-4 font-medium text-sm ${activeTab === "single" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("single")}
            >
              Single Conversion
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${activeTab === "batch" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("batch")}
            >
              Batch Conversion
            </button>
          </div>

          {/* Single Conversion */}
          {activeTab === "single" && (
            <div className="space-y-6">
              {/* Timestamp to Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timestamp → Date</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Enter timestamp (e.g., 1625097600)"
                    value={timestamp}
                    onChange={(e) => setTimestamp(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button 
                    onClick={handleTimestampConvert} 
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Convert
                  </button>
                </div>
                {convertedDate && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-md border border-gray-200 flex justify-between items-center">
                    <span className="font-mono text-sm sm:text-base">{convertedDate}</span>
                    <button 
                      onClick={() => copyToClipboard(convertedDate)} 
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none"
                    >
                      Copy
                    </button>
                  </div>
                )}
              </div>

              {/* Date to Timestamp */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date → Timestamp</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button 
                    onClick={handleDateConvert} 
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Convert
                  </button>
                </div>
                {convertedTimestamp && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-md border border-gray-200 flex justify-between items-center">
                    <span className="font-mono text-sm sm:text-base">{convertedTimestamp}</span>
                    <button 
                      onClick={() => copyToClipboard(convertedTimestamp)} 
                      className="text-green-600 hover:text-green-800 text-sm font-medium focus:outline-none"
                    >
                      Copy
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Batch Conversion */}
          {activeTab === "batch" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Batch Timestamp Conversion</label>
              <textarea
                placeholder="Enter multiple timestamps (one per line)"
                value={batchInput}
                onChange={(e) => setBatchInput(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
              />
              <button 
                onClick={handleBatchConvert} 
                className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Convert All
              </button>
              
              {batchResults.length > 0 && (
                <div className="mt-4 space-y-2">
                  {batchResults.map((res, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-md border border-gray-200 flex justify-between items-center">
                      <div className="font-mono text-xs sm:text-sm">
                        <span className="font-medium">{res.input}</span> → {res.output}
                      </div>
                      <button 
                        onClick={() => copyToClipboard(res.output)} 
                        className="text-purple-600 hover:text-purple-800 text-sm font-medium focus:outline-none"
                      >
                        Copy
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* History */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium text-gray-900">Recent Conversions</h3>
              {history.length > 0 && (
                <button 
                  onClick={clearHistory} 
                  className="text-sm text-red-600 hover:text-red-800 focus:outline-none"
                >
                  Clear History
                </button>
              )}
            </div>
            
            {history.length === 0 ? (
              <p className="text-sm text-gray-500 p-3 bg-gray-50 rounded-md">No conversion history yet.</p>
            ) : (
              <div className="space-y-2">
                {history.map((h, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-md border border-gray-200 flex justify-between items-center">
                    <div className="font-mono text-xs sm:text-sm">
                      <span className="font-medium">{h.input}</span> → {h.output}
                    </div>
                    <button 
                      onClick={() => copyToClipboard(h.output.toString())} 
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none"
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
    </div>
  );
}