"use client";

import React, { useEffect, useState } from "react";
import { FaCopy, FaMapMarkerAlt, FaClock, FaHistory, FaSearch } from "react-icons/fa";

export default function IpChecker() {
  const [ip, setIp] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ipInfo, setIpInfo] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [manualIp, setManualIp] = useState("");
  const [copied, setCopied] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("ipSearchHistory");
    if (savedHistory) setHistory(JSON.parse(savedHistory));
    fetchUserIp();
    // eslint-disable-next-line
  }, []);

  const fetchUserIp = async () => {
    try {
      setLoading(true);
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();
      setIp(ipData.ip);
      fetchIpDetails(ipData.ip);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchIpDetails = async (ipAddress: string) => {
    try {
      const res = await fetch(`https://ipapi.co/${ipAddress}/json/`);
      const data = await res.json();
      setIpInfo(data);
      addToHistory(ipAddress, data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addToHistory = (ipAddress: string, info: any) => {
    const newEntry = {
      ip: ipAddress,
      city: info.city,
      country: info.country_name,
      date: new Date().toLocaleString(),
    };
    const updated = [newEntry, ...history].slice(0, 5);
    setHistory(updated);
    localStorage.setItem("ipSearchHistory", JSON.stringify(updated));
  };

  const handleManualSearch = () => {
    if (manualIp.trim() !== "") {
      setIp(manualIp);
      fetchIpDetails(manualIp);
    }
  };

  const copyIp = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 mb-20 px-4 relative">
      {/* Stylish Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-60 rounded-full" />

      <div className="backdrop-blur-xl bg-white/70 mt-[-100] border border-gray-200 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:shadow-indigo-200">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
        IP Address Checker
        </h1>

        {/* Manual Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Enter IP address (e.g. 8.8.8.8)"
            value={manualIp}
            onChange={(e) => setManualIp(e.target.value)}
            className="w-full sm:flex-1 p-4 rounded-xl border border-gray-300 shadow-sm 
                       focus:outline-none focus:ring-4 focus:ring-indigo-200 
                       text-gray-700 placeholder-gray-400 text-base bg-white/80"
          />
          <button
            onClick={handleManualSearch}
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl 
                       bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
                       font-semibold hover:from-indigo-700 hover:to-purple-700 
                       hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FaSearch /> Search
          </button>
        </div>

        {/* Loader */}
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 font-medium">Fetching IP details...</p>
          </div>
        )}

        {/* IP Info */}
        {ipInfo && (
          <div className="space-y-8">
            {/* IP Display */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-600">Your IP Address</p>
                  <h2 className="text-2xl font-bold text-gray-900">{ip}</h2>
                </div>
                <button
                  onClick={copyIp}
                  className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 
                             rounded-lg shadow hover:shadow-md hover:bg-gray-50 
                             text-indigo-600 font-medium transition-all duration-200"
                >
                  <FaCopy />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Info Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
              <table className="w-full text-sm md:text-base">
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-indigo-50/50">
                    <td className="p-5 font-semibold text-gray-800 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-red-500" /> Location
                    </td>
                    <td className="p-5 text-gray-700">
                      {ipInfo.city}, {ipInfo.region}, {ipInfo.country_name}
                    </td>
                  </tr>
                  <tr className="hover:bg-indigo-50/50">
                    <td className="p-5 font-semibold text-gray-800">ISP</td>
                    <td className="p-5 text-gray-700">{ipInfo.org || "Unknown"}</td>
                  </tr>
                  <tr className="hover:bg-indigo-50/50">
                    <td className="p-5 font-semibold text-gray-800">ASN</td>
                    <td className="p-5 text-gray-700">{ipInfo.asn || "N/A"}</td>
                  </tr>
                  <tr className="hover:bg-indigo-50/50">
                    <td className="p-5 font-semibold text-gray-800">Timezone</td>
                    <td className="p-5 text-gray-700">{ipInfo.timezone || "N/A"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Local Time */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl flex items-center gap-3 border border-blue-100 shadow">
              <FaClock className="text-blue-600 text-lg" />
              <span className="text-gray-700 font-medium">
                Local Time:{" "}
                <span className="font-bold text-gray-900">
                  {ipInfo.timezone
                    ? new Date().toLocaleString("en-US", {
                        timeZone: ipInfo.timezone,
                      })
                    : "Unknown"}
                </span>
              </span>
            </div>
          </div>
        )}

        {/* History */}
        {history.length > 0 && (
          <div className="mt-10">
            <h2 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-4">
              <FaHistory className="text-indigo-600" /> Search History
            </h2>
            <ul className="space-y-3">
              {history.map((h, i) => (
                <li
                  key={i}
                  className="p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-indigo-50/40 transition-all duration-200"
                >
                  <span className="font-medium">{h.ip}</span> — {h.city},{" "}
                  {h.country}
                  <span className="text-gray-500 ml-2 text-sm">({h.date})</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
