"use client";
import { useState } from "react";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("1"); // compounding frequency per year
  const [result, setResult] = useState<string | null>(null);

  const calculateCI = () => {
    if (!principal || !rate || !time || !frequency) {
      setResult("Please enter all values.");
      return;
    }

    const P = Number(principal);
    const R = Number(rate) / 100;
    const T = Number(time);
    const N = Number(frequency);

    const A = P * Math.pow(1 + R / N, N * T);
    const CI = A - P;

    setResult(
      `Compound Interest = ${CI.toFixed(2)} \nTotal Amount = ${A.toFixed(2)}`
    );
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Compound Interest Calculator
        </h1>
        <p className="text-slate-600 text-lg">
          Calculate compound interest and final amount over time.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
        {/* Principal */}
        <label className="block text-slate-700 mb-2 font-medium">
          Principal Amount
        </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
        />

        {/* Rate */}
        <label className="block text-slate-700 mb-2 font-medium">
          Rate of Interest (%)
        </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter rate"
          className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
        />

        {/* Time */}
        <label className="block text-slate-700 mb-2 font-medium">
          Time (years)
        </label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time"
          className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
        />

        {/* Frequency */}
        <label className="block text-slate-700 mb-2 font-medium">
          Compounding Frequency
        </label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
        >
          <option value="1">Yearly</option>
          <option value="2">Half-Yearly</option>
          <option value="4">Quarterly</option>
          <option value="12">Monthly</option>
          <option value="365">Daily</option>
        </select>

        {/* Button */}
        <button
          onClick={calculateCI}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl cursor-pointer py-3 text-lg font-medium"
        >
          Calculate
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-slate-700 text-center whitespace-pre-line font-medium">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
