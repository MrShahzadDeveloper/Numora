"use client";
import React, { useState } from "react";
import { Activity } from "lucide-react";

export default function ChemistryCalculator() {
  const [mass, setMass] = useState("");
  const [moles, setMoles] = useState("");
  const [volume, setVolume] = useState("");
  const [result, setResult] = useState<string | number>("");

  const handleClear = () => {
    setMass("");
    setMoles("");
    setVolume("");
    setResult("");
  };

  const calculateMolarity = () => {
    if (!moles || !volume) {
      setResult("Enter moles and volume");
      return;
    }
    setResult(parseFloat(moles) / parseFloat(volume));
  };

  const calculateDensity = () => {
    if (!mass || !volume) {
      setResult("Enter mass and volume");
      return;
    }
    setResult(parseFloat(mass) / parseFloat(volume));
  };

  const calculateMoles = () => {
    if (!mass) {
      setResult("Enter mass");
      return;
    }
    // Simplified: assume molar mass = 1 g/mol
    setResult(parseFloat(mass) / 1);
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
            <Activity className="h-6 w-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Chemistry Calculator
          </h1>
        </div>

        {/* Inputs */}
        <div className="grid gap-4 mb-6">
          <input
            type="number"
            placeholder="Mass (g)"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="number"
            placeholder="Moles (mol)"
            value={moles}
            onChange={(e) => setMoles(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="number"
            placeholder="Volume (L)"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Result */}
        {result !== "" && (
          <div className="mb-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-center font-medium text-slate-700">
            {result}
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          <button
            onClick={calculateMolarity}
            className="py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Molarity
          </button>
          <button
            onClick={calculateDensity}
            className="py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Density
          </button>
          <button
            onClick={calculateMoles}
            className="py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Moles
          </button>
        </div>

        <button
          onClick={handleClear}
          className="w-full py-3 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
