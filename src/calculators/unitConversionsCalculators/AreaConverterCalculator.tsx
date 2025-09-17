"use client";

import { useState } from "react";

const areaUnits = {
  sqm: { label: "Square Meters", factor: 1 },
  sqkm: { label: "Square Kilometers", factor: 1_000_000 },
  sqcm: { label: "Square Centimeters", factor: 0.0001 },
  sqmm: { label: "Square Millimeters", factor: 0.000001 },
  ha: { label: "Hectares", factor: 10_000 },
  acre: { label: "Acres", factor: 4046.86 },
  sqmi: { label: "Square Miles", factor: 2_589_988.11 },
  sqyd: { label: "Square Yards", factor: 0.836127 },
  sqft: { label: "Square Feet", factor: 0.092903 },
  sqin: { label: "Square Inches", factor: 0.00064516 },
} as const;

// ✅ Type of unit keys
type AreaUnitKey = keyof typeof areaUnits;

export default function AreaConverterPage() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<AreaUnitKey>("sqm");
  const [toUnit, setToUnit] = useState<AreaUnitKey>("sqft");
  const [result, setResult] = useState<string | null>(null);

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) {
      setResult("Please enter a valid number.");
      return;
    }

    const sqMeters = Number(value) * areaUnits[fromUnit].factor;
    const converted = sqMeters / areaUnits[toUnit].factor;

    setResult(
      `${value} ${areaUnits[fromUnit].label} = ${converted} ${areaUnits[toUnit].label}`
    );
  };

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Area Converter</h1>
          <p className="text-slate-600 text-lg">
            Convert between square meters, acres, square feet, hectares, and more.
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
            placeholder="Enter area"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* From + To Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 mb-2 font-medium">From</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as AreaUnitKey)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
              >
                {Object.entries(areaUnits).map(([key, unit]) => (
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
                onChange={(e) => setToUnit(e.target.value as AreaUnitKey)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
              >
                {Object.entries(areaUnits).map(([key, unit]) => (
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
