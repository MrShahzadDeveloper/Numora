"use client";
import React, { useState } from "react";
import { Gauge } from "lucide-react";

export default function PhysicsCalculator() {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState<string | number>("");

  const handleClick = (value: string) => {
    setFormula((prev) => prev + value);
  };

  const handleClear = () => {
    setFormula("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calc = Function("return " + formula)();
      setResult(calc);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
            <Gauge className="h-6 w-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Physics Calculator
          </h1>
        </div>

        {/* Display */}
        <div className="bg-slate-100 rounded-lg p-4 text-right mb-4">
          <p className="text-slate-500 text-sm">Formula</p>
          <p className="text-xl font-mono break-all">{formula || "0"}</p>
          <p className="text-slate-500 text-sm mt-2">Result</p>
          <p className="text-2xl font-bold text-slate-800">{result || "—"}</p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          {[
            "F=", "m*", "a", "v*", "t", "s*", "+", "-",
            "(", ")", "Math.sqrt(", "^", "1/2", "PE=", "KE=",
          ].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === "F=") handleClick("m*a");
                else if (btn === "PE=") handleClick("m*9.81*h");
                else if (btn === "KE=") handleClick("0.5*m*v**2");
                else handleClick(btn);
              }}
              className="py-3 bg-white rounded-lg shadow hover:shadow-md hover:bg-cyan-50 transition font-medium text-slate-700"
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleCalculate}
            className="py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Calculate
          </button>
          <button
            onClick={handleClear}
            className="py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
