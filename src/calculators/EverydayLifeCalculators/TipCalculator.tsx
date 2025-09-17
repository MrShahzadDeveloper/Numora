"use client";
import React, { useState } from "react";
import { Clock } from "lucide-react";

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [people, setPeople] = useState("1");
  const [result, setResult] = useState<string | null>(null);

  const handleClear = () => {
    setBillAmount("");
    setTipPercentage("");
    setPeople("1");
    setResult(null);
  };

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercentage);
    const numPeople = parseInt(people);

    if (isNaN(bill) || isNaN(tip) || isNaN(numPeople) || numPeople <= 0) {
      setResult("Please enter valid numbers.");
      return;
    }

    const totalTip = (bill * tip) / 100;
    const totalBill = bill + totalTip;
    const perPerson = totalBill / numPeople;

    setResult(
      `Tip: $${totalTip.toFixed(2)}, Total: $${totalBill.toFixed(
        2
      )}, Per Person: $${perPerson.toFixed(2)}`
    );
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
            <Clock className="h-6 w-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">Tip Calculator</h1>
        </div>

        {/* Inputs */}
        <div className="grid gap-3 mb-4">
          <input
            type="number"
            placeholder="Bill Amount ($)"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
          />
          <input
            type="number"
            placeholder="Tip Percentage (%)"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
            className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
          />
          <input
            type="number"
            placeholder="Number of People"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
          />
        </div>

        {/* Buttons */}
        <button
          onClick={calculateTip}
          className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition mb-3"
        >
          Calculate
        </button>
        <button
          onClick={handleClear}
          className="w-full py-3 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition"
        >
          Clear
        </button>

        {/* Result */}
        {result && (
          <div className="mt-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-center text-slate-700 font-medium">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
