"use client";

import React, { useEffect, useState } from "react";
import {
  FaCopy,
  FaMapMarkerAlt,
  FaClock,
  FaHistory,
} from "react-icons/fa";

export default function IpChecker() {
  const [ip, setIp] = useState("");
  type IpInfo = {
    city?: string;
    region?: string;
    country_name?: string;
    country_code?: string;
    org?: string;
    asn?: string;
    network?: string;
    timezone?: string;
    latitude?: number;
    longitude?: number;
    [key: string]: unknown;
  };
  const [ipInfo, setIpInfo] = useState<IpInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [manualIp, setManualIp] = useState("");
  const [copied, setCopied] = useState(false);
  type HistoryEntry = {
    ip: string;
    city: unknown;
    country: unknown;
    date: string;
  };
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("ipSearchHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
    fetchUserIp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserIp = async () => {
    try {
      setLoading(true);
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();
      setIp(ipData.ip);
      fetchIpDetails(ipData.ip);
    } catch (error) {
      console.error("Error fetching IP:", error);
      setLoading(false);
    }
  };

  const fetchIpDetails = async (ipAddress: string) => {
    try {
      const res = await fetch(`https://ipapi.co/${ipAddress}/json/`);
      const data = await res.json();
      setIpInfo(data);
      addToHistory(ipAddress, data);
    } catch (error) {
      console.error("Error fetching IP details:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToHistory = (
    ipAddress: string,
    info: { city: unknown; country_name: unknown }
  ) => {
    const newEntry = {
      ip: ipAddress,
      city: info.city,
      country: info.country_name,
      date: new Date().toLocaleString(),
    };
    const updatedHistory = [newEntry, ...history].slice(0, 5);
    setHistory(updatedHistory);
    localStorage.setItem("ipSearchHistory", JSON.stringify(updatedHistory));
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
    <div className="max-w-3xl mx-auto mt-[-80] mb-10 p-6">
      {/* Manual Search */}
      <div className="flex mb-5">
        <input
          type="text"
          placeholder="Enter IP address"
          value={manualIp}
          onChange={(e) => setManualIp(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        <button
          onClick={handleManualSearch}
          className="px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-r-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="text-center text-gray-500 animate-pulse">Loading...</p>
      )}

      {/* IP Info */}
      {ipInfo && (
        <div className="space-y-5">
          {/* IP Display */}
          <div className="flex items-center justify-between bg-white/60 backdrop-blur-md p-4 rounded-xl shadow border border-gray-200 hover:shadow-lg transition">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">Your IP:</span>
              <span className="text-gray-700">{ip}</span>
            </div>
            <button
              onClick={copyIp}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition"
            >
              <FaCopy /> {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Info Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" /> Location
                  </td>
                  <td className="p-3">
                    {ipInfo.city}, {ipInfo.region}, {ipInfo.country_name}{" "}
                    <span className="text-lg">
                      {ipInfo.country_code &&
                        String.fromCodePoint(
                          ...ipInfo.country_code
                            .toUpperCase()
                            .split("")
                            .map((c) => 127397 + c.charCodeAt(0))
                        )}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">ISP</td>
                  <td className="p-3">{ipInfo.org}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold">ASN</td>
                  <td className="p-3">{ipInfo.asn || "N/A"}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Network</td>
                  <td className="p-3">{ipInfo.network || "N/A"}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold">Timezone</td>
                  <td className="p-3">{ipInfo.timezone}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Local Time */}
          <div className="flex items-center gap-2 bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm">
            <FaClock className="text-blue-500" />
            <span className="text-gray-700">
              Local Time:{" "}
              {new Date().toLocaleString("en-US", {
                timeZone: ipInfo.timezone,
              })}
            </span>
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="mt-8 bg-white/60 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow">
          <h2 className="flex items-center gap-2 font-bold text-gray-800 mb-3">
            <FaHistory className="text-indigo-500" /> Search History
          </h2>
          <ul className="space-y-1 text-sm text-gray-600">
            {history.map((h, i) => (
              <li key={i}>
                {h.ip} — {String(h.city)}, {String(h.country)} ({h.date})
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
