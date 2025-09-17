"use client";
import { useState } from "react";

export default function LoanEmiCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateEMI = () => {
    if (!principal || !rate || !time) {
      setResult("Please enter all values.");
      return;
    }

    const P = Number(principal);
    const R = Number(rate) / 12 / 100; // monthly interest rate
    const N = Number(time) * 12; // total months

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = EMI * N;
    const totalInterest = totalPayment - P;

    setResult(
      `Monthly EMI = ${EMI.toFixed(2)}\nTotal Interest = ${totalInterest.toFixed(
        2
      )}\nTotal Payment = ${totalPayment.toFixed(2)}`
    );
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Loan EMI Calculator
        </h1>
        <p className="text-slate-600 text-lg">
          Calculate your monthly loan repayment, total interest, and total
          payment.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
        {/* Principal */}
        <label className="block text-slate-700 mb-2 font-medium">
          Loan Amount
        </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter loan amount"
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

        {/* Time */}
        <label className="block text-slate-700 mb-2 font-medium">
          Loan Tenure (years)
        </label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time in years"
          className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
        />

        {/* Button */}
        <button
          onClick={calculateEMI}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl cursor-pointer py-3 text-lg font-medium"
        >
          Calculate EMI
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
