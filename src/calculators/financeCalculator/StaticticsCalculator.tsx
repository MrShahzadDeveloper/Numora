"use client";
import React, { useState } from "react";
import { BarChart } from "lucide-react";

export default function StatisticsCalculator() {
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState<string | number>("");

  const handleClear = () => {
    setNumbers("");
    setResult("");
  };

  const calculateMean = () => {
    const nums = numbers.split(",").map(Number).filter((n) => !isNaN(n));
    if (nums.length === 0) return setResult("Enter valid numbers");
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    setResult(mean.toFixed(2));
  };

  const calculateMedian = () => {
    const nums = numbers.split(",").map(Number).filter((n) => !isNaN(n));
    if (nums.length === 0) return setResult("Enter valid numbers");
    nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    const median = nums.length % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid];
    setResult(median.toFixed(2));
  };

  const calculateMode = () => {
    const nums = numbers.split(",").map(Number).filter((n) => !isNaN(n));
    if (nums.length === 0) return setResult("Enter valid numbers");
    const freq: Record<number, number> = {};
    nums.forEach((n) => (freq[n] = (freq[n] || 0) + 1));
    const maxFreq = Math.max(...Object.values(freq));
    const mode = Object.keys(freq)
      .filter((key) => freq[Number(key)] === maxFreq)
      .join(", ");
    setResult(mode);
  };

  const calculateStdDev = () => {
    const nums = numbers.split(",").map(Number).filter((n) => !isNaN(n));
    if (nums.length === 0) return setResult("Enter valid numbers");
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const variance = nums.reduce((sum, n) => sum + (n - mean) ** 2, 0) / nums.length;
    setResult(Math.sqrt(variance).toFixed(2));
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
            <BarChart className="h-6 w-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">Statistics Calculator</h1>
        </div>

        {/* Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter numbers separated by commas"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button
            onClick={calculateMean}
            className="py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Mean
          </button>
          <button
            onClick={calculateMedian}
            className="py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Median
          </button>
          <button
            onClick={calculateMode}
            className="py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Mode
          </button>
          <button
            onClick={calculateStdDev}
            className="py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Std Dev
          </button>
        </div>

        {/* Result */}
        {result !== "" && (
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
