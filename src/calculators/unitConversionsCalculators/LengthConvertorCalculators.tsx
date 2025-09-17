"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const lengthUnits = {
  m: { label: "Meters", factor: 1 },
  km: { label: "Kilometers", factor: 1000 },
  cm: { label: "Centimeters", factor: 0.01 },
  mm: { label: "Millimeters", factor: 0.001 },
  mi: { label: "Miles", factor: 1609.34 },
  yd: { label: "Yards", factor: 0.9144 },
  ft: { label: "Feet", factor: 0.3048 },
  in: { label: "Inches", factor: 0.0254 },
} as const;

// ✅ Type of unit keys ("m" | "km" | "cm" | ...)
type UnitKey = keyof typeof lengthUnits;

export default function LengthConverterPage() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<UnitKey>("m");
  const [toUnit, setToUnit] = useState<UnitKey>("km");
  const [result, setResult] = useState<string | null>(null);

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) {
      setResult("Please enter a valid number.");
      return;
    }

    const meters = Number(value) * lengthUnits[fromUnit].factor;
    const converted = meters / lengthUnits[toUnit].factor;

    setResult(
      `${value} ${lengthUnits[fromUnit].label} = ${converted} ${lengthUnits[toUnit].label}`
    );
  };

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Length Converter</h1>
          <p className="text-slate-600 text-lg">
            Convert between meters, kilometers, miles, feet, and more.
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
            placeholder="Enter length"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* From + To Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 mb-2 font-medium">From</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as UnitKey)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
              >
                {Object.entries(lengthUnits).map(([key, unit]) => (
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
                onChange={(e) => setToUnit(e.target.value as UnitKey)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
              >
                {Object.entries(lengthUnits).map(([key, unit]) => (
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
