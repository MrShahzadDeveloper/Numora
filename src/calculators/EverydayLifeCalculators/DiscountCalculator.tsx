"use client";
import React, { useState } from "react";
import { Tag } from "lucide-react";

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    if (!originalPrice || isNaN(Number(originalPrice))) {
      setResult("Please enter a valid original price.");
      return;
    }
    if (!discountPercent || isNaN(Number(discountPercent))) {
      setResult("Please enter a valid discount percentage.");
      return;
    }

    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    setResult(
      `Discount: $${discountAmount.toFixed(2)}, Final Price: $${finalPrice.toFixed(
        2
      )}`
    );
  };

  const handleClear = () => {
    setOriginalPrice("");
    setDiscountPercent("");
    setResult(null);
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
            <Tag className="h-6 w-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Discount Calculator
          </h1>
        </div>

        {/* Inputs */}
        <div className="grid gap-3 mb-4">
          <input
            type="number"
            placeholder="Original Price ($)"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="number"
            placeholder="Discount Percentage (%)"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition mb-3"
        >
          Calculate
        </button>

        {/* Result */}
        {result && (
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
