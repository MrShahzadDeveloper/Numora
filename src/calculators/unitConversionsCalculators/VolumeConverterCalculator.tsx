"use client";

import { useState } from "react";

const volumeUnits = {
  ml: { label: "Milliliters", factor: 0.001 },
  l: { label: "Liters", factor: 1 },
  cu_m: { label: "Cubic Meters", factor: 1000 },
  cu_cm: { label: "Cubic Centimeters", factor: 0.001 },
  cu_mm: { label: "Cubic Millimeters", factor: 0.000001 },
  cu_in: { label: "Cubic Inches", factor: 0.0163871 },
  cu_ft: { label: "Cubic Feet", factor: 28.3168 },
  cu_yd: { label: "Cubic Yards", factor: 764.555 },
  gal: { label: "US Gallons", factor: 3.78541 },
  qt: { label: "US Quarts", factor: 0.946353 },
  pt: { label: "US Pints", factor: 0.473176 },
  cup: { label: "US Cups", factor: 0.24 },
  tbsp: { label: "Tablespoons", factor: 0.0147868 },
  tsp: { label: "Teaspoons", factor: 0.00492892 },
} as const;

// ✅ Type of unit keys
type VolumeUnitKey = keyof typeof volumeUnits;

export default function VolumeConverterPage() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<VolumeUnitKey>("l");
  const [toUnit, setToUnit] = useState<VolumeUnitKey>("ml");
  const [result, setResult] = useState<string | null>(null);

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) {
      setResult("Please enter a valid number.");
      return;
    }

    const liters = Number(value) * volumeUnits[fromUnit].factor;
    const converted = liters / volumeUnits[toUnit].factor;

    setResult(
      `${value} ${volumeUnits[fromUnit].label} = ${converted} ${volumeUnits[toUnit].label}`
    );
  };

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Volume Converter</h1>
          <p className="text-slate-600 text-lg">
            Convert between liters, milliliters, gallons, cubic meters, and more.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
          {/* Input */}
          <label className="block text-slate-700 mb-2 font-medium">Enter Value</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter volume"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* From + To Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 mb-2 font-medium">From</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as VolumeUnitKey)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
              >
                {Object.entries(volumeUnits).map(([key, unit]) => (
                  <option key={key} value={key}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-700 mb-2 font-medium">To</label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value as VolumeUnitKey)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
              >
                {Object.entries(volumeUnits).map(([key, unit]) => (
                  <option key={key} value={key}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Convert Button */}
          <button
            onClick={handleConvert}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl cursor-pointer py-3 text-lg font-medium"
          >
            Convert
          </button>

          {/* Result */}
          {result && (
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-slate-700 text-center font-medium">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
