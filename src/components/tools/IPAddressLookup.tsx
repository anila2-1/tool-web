"use client";

import React, { useEffect, useState } from "react";
import {
  FaCopy,
  FaGlobe,
  FaMapMarkerAlt,
  FaClock,
  FaHistory,
  FaShieldAlt,
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
    // Load search history from localStorage
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
    <div className="max-w-3xl mx-auto mb-10 p-6 bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-xl shadow-2xl rounded-3xl mt-10 border border-white/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white p-6 rounded-2xl mb-6 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20"></div>
        <h1 className="text-3xl font-extrabold flex items-center justify-center gap-3 tracking-wide relative z-10">
          <FaGlobe className="text-yellow-300 drop-shadow" /> IP Address Checker
        </h1>
        <p className="text-sm mt-1 opacity-90 relative z-10">
          Get your IP, location, and network details instantly.
        </p>
      </div>

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

          {/* Location Info */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl shadow-inner border border-blue-100">
            <div className="flex items-center gap-2 mb-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span className="font-bold">Location:</span>
              <span className="text-gray-700">
                {ipInfo.city}, {ipInfo.region}, {ipInfo.country_name}{" "}
                <span className="text-xl">
                  {ipInfo.country_code &&
                    String.fromCodePoint(
                      ...ipInfo.country_code
                        .toUpperCase()
                        .split("")
                        .map((c) => 127397 + c.charCodeAt(0))
                    )}
                </span>
              </span>
            </div>
            <p>
              <strong>ISP:</strong>{" "}
              <span className="text-gray-700">{ipInfo.org}</span>
            </p>
            <p>
              <strong>ASN:</strong>{" "}
              <span className="text-gray-700">{ipInfo.asn || "N/A"}</span>
            </p>
            <p>
              <strong>Network:</strong>{" "}
              <span className="text-gray-700">{ipInfo.network || "N/A"}</span>
            </p>
            <p>
              <strong>Timezone:</strong>{" "}
              <span className="text-gray-700">{ipInfo.timezone}</span>
            </p>
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

          {/* Map */}
          {ipInfo.latitude && ipInfo.longitude && (
            <iframe
              title="map"
              width="100%"
              height="250"
              className="rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
              src={`https://maps.google.com/maps?q=${ipInfo.latitude},${ipInfo.longitude}&z=12&output=embed`}
            ></iframe>
          )}
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

      {/* Privacy Tips */}
      <div className="mt-6 bg-yellow-50/80 backdrop-blur-sm p-4 rounded-xl border border-yellow-200 shadow-inner">
        <h2 className="flex items-center gap-2 font-bold text-yellow-700 mb-2">
          <FaShieldAlt /> Privacy Tips
        </h2>
        <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
          <li>Use a VPN to hide your IP address.</li>
          <li>Avoid sharing your IP publicly.</li>
          <li>Be cautious on public Wi-Fi networks.</li>
          <li>Regularly check your IP for security.</li>
        </ul>
      </div>
    </div>
  );
}
