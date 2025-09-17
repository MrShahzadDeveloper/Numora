"use client";
import { useState } from "react";

const temperatureUnits = {
  c: { label: "Celsius" },
  f: { label: "Fahrenheit" },
  k: { label: "Kelvin" },
} as const;

type UnitKey = keyof typeof temperatureUnits;

export default function TemperatureConverterPage() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState<UnitKey>("c");
  const [toUnit, setToUnit] = useState<UnitKey>("f");
  const [result, setResult] = useState<string | null>(null);

  const convertTemperature = (val: number, from: UnitKey, to: UnitKey): number => {
    if (from === to) return val;

    let celsius: number;

    // Convert input to Celsius first
    if (from === "c") celsius = val;
    else if (from === "f") celsius = (val - 32) * (5 / 9);
    else celsius = val - 273.15; // Kelvin to Celsius

    // Convert Celsius to target unit
    if (to === "c") return celsius;
    if (to === "f") return celsius * (9 / 5) + 32;
    if (to === "k") return celsius + 273.15;

    return val;
  };

  const handleConvert = () => {
    if (!value || isNaN(Number(value))) {
      setResult("Please enter a valid number.");
      return;
    }

    const input = Number(value);
    const converted = convertTemperature(input, fromUnit, toUnit);

    setResult(
      `${input} ${temperatureUnits[fromUnit].label} = ${converted.toFixed(2)} ${temperatureUnits[toUnit].label}`
    );
  };

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Temperature Converter
          </h1>
          <p className="text-slate-600 text-lg">
            Convert between Celsius, Fahrenheit, and Kelvin.
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
            placeholder="Enter temperature"
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
                {Object.entries(temperatureUnits).map(([key, unit]) => (
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
                {Object.entries(temperatureUnits).map(([key, unit]) => (
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
