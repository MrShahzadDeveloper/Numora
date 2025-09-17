"use client";
import { useState } from "react";

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateSI = () => {
    if (!principal || !rate || !time) {
      setResult("Please enter all values.");
      return;
    }
    const si = (Number(principal) * Number(rate) * Number(time)) / 100;
    setResult(`Simple Interest = ${si.toFixed(2)}`);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Simple Interest Calculator</h1>
        <p className="text-slate-600 text-lg">
          Calculate interest earned or paid on a principal amount.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
        <label className="block text-slate-700 mb-2 font-medium">Principal Amount</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
        />

        <label className="block text-slate-700 mb-2 font-medium">Rate of Interest (%)</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter rate"
          className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
        />

        <label className="block text-slate-700 mb-2 font-medium">Time (years)</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time"
          className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
        />

        <button
          onClick={calculateSI}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl cursor-pointer py-3 text-lg font-medium"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-slate-700 text-center font-medium">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
