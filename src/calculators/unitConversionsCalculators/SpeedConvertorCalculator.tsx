"use client";
import { useState } from "react";

const speedUnits = {
  "mps": { label: "Meters/second" },
  "kph": { label: "Kilometers/hour" },
  "mph": { label: "Miles/hour" },
  "kn": { label: "Knots" },
} as const;

type UnitKey = keyof typeof speedUnits;

export default function SpeedConverterPage() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<UnitKey>("mps");
  const [toUnit, setToUnit] = useState<UnitKey>("kph");
  const [result, setResult] = useState<string | null>(null);

  const convertSpeed = (val: number, from: UnitKey, to: UnitKey): number => {
    if (from === to) return val;

    // First convert input to meters/second
    let mps: number;
    switch (from) {
      case "mps":
        mps = val;
        break;
      case "kph":
        mps = val / 3.6;
        break;
      case "mph":
        mps = val * 0.44704;
        break;
      case "kn":
        mps = val * 0.514444;
        break;
      default:
        mps = val;
    }

    // Convert meters/second to target
    switch (to) {
      case "mps":
        return mps;
      case "kph":
        return mps * 3.6;
      case "mph":
        return mps / 0.44704;
      case "kn":
        return mps / 0.514444;
      default:
        return val;
    }
  };

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) {
      setResult("Please enter a valid number.");
      return;
    }

    const input = Number(value);
    const converted = convertSpeed(input, fromUnit, toUnit);

    setResult(
      `${input} ${speedUnits[fromUnit].label} = ${converted.toFixed(2)} ${speedUnits[toUnit].label}`
    );
  };

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Speed Converter
          </h1>
          <p className="text-slate-600 text-lg">
            Convert between meters/second, kilometers/hour, miles/hour, and knots.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
          {/* Input */}
          <label className="block text-slate-700 mb-2 font-medium">
            Enter Value
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter speed"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* From + To Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 mb-2 font-medium">
                From
              </label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as UnitKey)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
              >
                {Object.entries(speedUnits).map(([key, unit]) => (
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
                {Object.entries(speedUnits).map(([key, unit]) => (
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
