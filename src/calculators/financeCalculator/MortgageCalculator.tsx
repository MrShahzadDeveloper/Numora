"use client";
import { useState } from "react";

export default function MortgageCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateMortgage = () => {
    if (!principal || !rate || !years) {
      setResult("Please enter all values.");
      return;
    }

    const P = Number(principal);
    const R = Number(rate) / 12 / 100; // monthly interest rate
    const N = Number(years) * 12; // total number of months

    const monthlyPayment =
      (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    const totalPayment = monthlyPayment * N;
    const totalInterest = totalPayment - P;

    setResult(
      `Monthly Payment = ${monthlyPayment.toFixed(2)}\nTotal Interest = ${totalInterest.toFixed(
        2
      )}\nTotal Payment = ${totalPayment.toFixed(2)}`
    );
  };

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Mortgage Calculator
          </h1>
          <p className="text-slate-600 text-lg">
            Estimate your monthly mortgage payments, total interest, and total
            cost.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
          {/* Principal */}
          <label className="block text-slate-700 mb-2 font-medium">
            Mortgage Amount
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter mortgage amount"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* Rate */}
          <label className="block text-slate-700 mb-2 font-medium">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* Tenure */}
          <label className="block text-slate-700 mb-2 font-medium">
            Loan Term (years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* Button */}
          <button
            onClick={calculateMortgage}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl cursor-pointer py-3 text-lg font-medium"
          >
            Calculate Mortgage
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
