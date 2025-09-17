"use client";
import React, { useState } from "react";
import { Globe } from "lucide-react";

// ✅ List of common time zones
const timeZones = [
  { label: "UTC", value: "UTC" },
  { label: "New York (EST)", value: "America/New_York" },
  { label: "London (GMT)", value: "Europe/London" },
  { label: "Paris (CET)", value: "Europe/Paris" },
  { label: "Tokyo (JST)", value: "Asia/Tokyo" },
  { label: "Karachi (PKT)", value: "Asia/Karachi" },
  { label: "Sydney (AEST)", value: "Australia/Sydney" },
];

export default function TimeZoneConverter() {
  const [inputTime, setInputTime] = useState("");
  const [fromZone, setFromZone] = useState("UTC");
  const [toZone, setToZone] = useState("UTC");
  const [result, setResult] = useState<string | null>(null);

  const handleConvert = () => {
    if (!inputTime) {
      setResult("Please enter a time.");
      return;
    }

    try {
      // Split input time into hours and minutes
      const [hours, minutes] = inputTime.split(":").map(Number);

      // Create a Date object for today in the FROM time zone
      const now = new Date();
      // Set UTC hours relative to the fromZone offset
      const utcDate = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate(),
          hours,
          minutes
        )
      );

      // Format to target timezone
      const converted = utcDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: toZone,
      });

      setResult(`${inputTime} (${fromZone}) = ${converted} (${toZone})`);
    } catch {
      setResult("Invalid time or time zone.");
    }
  };

  const handleClear = () => {
    setInputTime("");
    setFromZone("UTC");
    setToZone("UTC");
    setResult(null);
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
            <Globe className="h-6 w-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Time Zone Converter
          </h1>
        </div>

        {/* Input Time */}
        <div className="mb-4">
          <label className="block text-slate-700 mb-2 font-medium">
            Enter Time
          </label>
          <input
            type="time"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
          />
        </div>

        {/* From & To Time Zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-slate-700 mb-2 font-medium">From</label>
            <select
              value={fromZone}
              onChange={(e) => setFromZone(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            >
              {timeZones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-700 mb-2 font-medium">To</label>
            <select
              value={toZone}
              onChange={(e) => setToZone(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            >
              {timeZones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition mb-3"
        >
          Convert
        </button>

        {/* Result */}
        {result && (
          <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-center font-medium text-slate-700">
            {result}
          </div>
        )}

        {/* Clear Button */}
        <button
          onClick={handleClear}
          className="w-full mt-4 py-3 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
