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
    <div id="timestamp-converter" className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-2xl mt-10 mb-10">
      <h2 className="text-3xl font-extrabold mb-4 text-center text-gray-800">Unix Timestamp Converter</h2>

      {/* Live timestamp */}
      <div className="text-center mb-6">
        <p className="text-gray-700 text-lg">Current Timestamp:</p>
        <p className="font-mono text-2xl text-blue-600">{currentTimestamp}</p>
      </div>

      {/* Timezone & format */}
      <div className="flex flex-wrap gap-4 mb-4 justify-center">
        <div>
          <label className="mr-2 font-medium">Timezone:</label>
          <select 
            value={timezone} 
            onChange={(e) => setTimezone(e.target.value)} 
            className="border p-2 rounded-lg"
          >
            <option value="UTC">UTC</option>
            <option value="LOCAL">Local</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">Format:</label>
          <select 
            value={format} 
            onChange={(e) => setFormat(e.target.value)} 
            className="border p-2 rounded-lg"
          >
            <option value="human">Human</option>
            <option value="iso">ISO</option>
            <option value="rfc">RFC</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>

      {format === "custom" && (
        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="YYYY-MM-DD HH:mm:ss"
            value={customFormat}
            onChange={(e) => setCustomFormat(e.target.value)}
            className="border p-2 rounded-lg w-64 text-center"
          />
        </div>
      )}

      {/* Timestamp → Date */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Timestamp → Date</label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter timestamp"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            className="flex-1 border p-2 rounded-lg"
          />
          <button 
            onClick={handleTimestampConvert} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Convert
          </button>
        </div>
        {convertedDate && (
          <div className="mt-2 p-2 bg-gray-100 rounded-lg flex justify-between items-center">
            <span>{convertedDate}</span>
            <button 
              onClick={() => copyToClipboard(convertedDate)} 
              className="text-blue-500 hover:underline"
            >
              Copy
            </button>
          </div>
        )}
      </div>

      {/* Date → Timestamp */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Date → Timestamp</label>
        <div className="flex gap-2">
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex-1 border p-2 rounded-lg"
          />
          <button 
            onClick={handleDateConvert} 
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Convert
          </button>
        </div>
        {convertedTimestamp && (
          <div className="mt-2 p-2 bg-gray-100 rounded-lg flex justify-between items-center">
            <span>{convertedTimestamp}</span>
            <button 
              onClick={() => copyToClipboard(convertedTimestamp)} 
              className="text-green-500 hover:underline"
            >
              Copy
            </button>
          </div>
        )}
      </div>

      {/* Batch Conversion */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Batch Timestamp Conversion</label>
        <textarea
          placeholder="Enter multiple timestamps (one per line)"
          value={batchInput}
          onChange={(e) => setBatchInput(e.target.value)}
          className="w-full border p-2 rounded-lg h-24"
        />
        <button 
          onClick={handleBatchConvert} 
          className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Convert All
        </button>
        {batchResults.length > 0 && (
          <div className="mt-2 space-y-2">
            {batchResults.map((res, i) => (
              <div key={i} className="p-2 bg-gray-100 rounded-lg flex justify-between">
                <span>
                  {res.input} → {res.output}
                </span>
                <button 
                  onClick={() => copyToClipboard(res.output)} 
                  className="text-purple-500 hover:underline"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* History */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg text-gray-800">Recent History</h3>
          {history.length > 0 && (
            <button 
              onClick={clearHistory} 
              className="text-red-500 hover:underline"
            >
              Clear History
            </button>
          )}
        </div>
        {history.length === 0 && <p className="text-gray-500">No recent conversions.</p>}
        {history.map((h, i) => (
          <div key={i} className="p-2 bg-gray-50 rounded-lg mb-1 flex justify-between">
            <span>
              {h.input} → {h.output}
            </span>
            <button 
              onClick={() => copyToClipboard(h.output.toString())} 
              className="text-blue-500 hover:underline"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}