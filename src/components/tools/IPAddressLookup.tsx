"use client";

import React, { useEffect, useState } from "react";
import { FaCopy, FaMapMarkerAlt, FaClock, FaHistory } from "react-icons/fa";

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
    <div className="max-w-4xl mx-auto mt-6 mb-20 px-3 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-lg mt-[-100] border border-gray-200 p-6 sm:p-8">

        {/* Manual Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter IP address (e.g. 8.8.8.8)"
            value={manualIp}
            onChange={(e) => setManualIp(e.target.value)}
            className="w-full sm:flex-1 p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 text-gray-700 placeholder-gray-500 shadow-sm text-sm sm:text-base"
          />
          <button
            onClick={handleManualSearch}
            className="w-full sm:w-auto px-6 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg sm:rounded-xl hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
          >
            Search
          </button>
        </div>

        {/* Loader */}
        {loading && (
          <div className="text-center py-6">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
            <p className="mt-3 text-gray-600 text-sm sm:text-base">Fetching IP details...</p>
          </div>
        )}

        {/* IP Info */}
        {ipInfo && (
          <div className="space-y-6">
            {/* IP Display Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs sm:text-sm font-medium text-gray-600">Your IP Address</span>
                  <p className="text-lg sm:text-xl font-bold text-gray-800 mt-1 break-all">{ip}</p>
                </div>
                <button
                  onClick={copyIp}
                  className="flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-indigo-50 text-indigo-700 rounded-lg sm:rounded-xl hover:bg-indigo-100 hover:text-indigo-800 transition-all duration-200 group font-medium text-sm sm:text-base"
                >
                  <FaCopy className="group-hover:scale-110 transition-transform" />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Info Table */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                      <td className="p-4 sm:p-5 font-semibold text-gray-800 flex items-center gap-2 sm:gap-3 min-w-[160px]">
                        <FaMapMarkerAlt className="text-red-500 text-base sm:text-lg" />
                        Location
                      </td>
                      <td className="p-4 sm:p-5 text-gray-700">
                        {ipInfo.city}, {ipInfo.region}, {ipInfo.country_name}{" "}
                        <span className="ml-2">
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
                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                      <td className="p-4 sm:p-5 font-semibold text-gray-800">ISP</td>
                      <td className="p-4 sm:p-5 text-gray-700">{ipInfo.org || "Unknown"}</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                      <td className="p-4 sm:p-5 font-semibold text-gray-800">ASN</td>
                      <td className="p-4 sm:p-5 text-gray-700">{ipInfo.asn || "N/A"}</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                      <td className="p-4 sm:p-5 font-semibold text-gray-800">Network</td>
                      <td className="p-4 sm:p-5 text-gray-700">{ipInfo.network || "N/A"}</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                      <td className="p-4 sm:p-5 font-semibold text-gray-800">Timezone</td>
                      <td className="p-4 sm:p-5 text-gray-700">{ipInfo.timezone || "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Local Time */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-blue-100 shadow flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-full text-blue-600 flex items-center justify-center">
                <FaClock size={18} className="sm:size-5" />
              </div>
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Local Time:{" "}
                {ipInfo.timezone ? (
                  <span className="font-semibold text-gray-800">
                    {new Date().toLocaleString("en-US", {
                      timeZone: ipInfo.timezone,
                    })}
                  </span>
                ) : (
                  "Unknown"
                )}
              </span>
            </div>
          </div>
        )}

        {/* History */}
        {history.length > 0 && (
          <div className="mt-8 sm:mt-10 bg-gray-50 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200">
            <h2 className="flex items-center gap-2 sm:gap-3 font-bold text-gray-800 text-base sm:text-lg mb-4">
              <FaHistory className="text-indigo-600" /> Search History
            </h2>
            <ul className="space-y-3">
              {history.map((h, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-gray-700 p-3 bg-white rounded-lg hover:bg-indigo-50 transition-colors duration-200 shadow-sm"
                >
                  <span className="font-medium">{h.ip}</span> —{" "}
                  {String(h.city)}, {String(h.country)}{" "}
                  <span className="text-gray-500 ml-1">({h.date})</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
