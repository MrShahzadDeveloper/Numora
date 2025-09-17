"use client";
import { useState } from "react";

export default function InvestmentReturnCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [contribution, setContribution] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateInvestment = () => {
    if (!principal || !rate || !years) {
      setResult("Please enter all required values.");
      return;
    }

    const P = Number(principal);
    const R = Number(rate) / 100; // annual return
    const T = Number(years);
    const C = contribution ? Number(contribution) : 0;

    // Compound interest formula with recurring annual contribution
    // Final = P(1 + R)^T + C * [((1 + R)^T - 1) / R]
    const futureValue =
      P * Math.pow(1 + R, T) + (C > 0 ? C * ((Math.pow(1 + R, T) - 1) / R) : 0);

    const totalContribution = P + C * T;
    const profit = futureValue - totalContribution;

    setResult(
      `Future Value = ${futureValue.toFixed(2)}\nTotal Contribution = ${totalContribution.toFixed(
        2
      )}\nProfit = ${profit.toFixed(2)}`
    );
  };

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Investment Return Calculator
          </h1>
          <p className="text-slate-600 text-lg">
            Estimate the future value of your investment with compound growth.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
          {/* Principal */}
          <label className="block text-slate-700 mb-2 font-medium">
            Initial Investment
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter initial amount"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* Rate */}
          <label className="block text-slate-700 mb-2 font-medium">
            Annual Rate of Return (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter annual return rate"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* Years */}
          <label className="block text-slate-700 mb-2 font-medium">
            Investment Duration (years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter number of years"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* Annual Contribution */}
          <label className="block text-slate-700 mb-2 font-medium">
            Annual Contribution (optional)
          </label>
          <input
            type="number"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            placeholder="Enter yearly contribution"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* Button */}
          <button
            onClick={calculateInvestment}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl cursor-pointer py-3 text-lg font-medium"
          >
            Calculate Returns
          </button>

          {/* Result */}
          {result && (
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-slate-700 text-center whitespace-pre-line font-medium">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
