"use client";
import { useState } from "react";

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState<keyof typeof rates>("USD");
  const [toCurrency, setToCurrency] = useState<keyof typeof rates>("EUR");
  const [result, setResult] = useState<string | null>(null);

  // ✅ Sample static rates (relative to USD)
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    INR: 83.2,
    PKR: 283.74,
    JPY: 147,
    AUD: 1.55,
    CAD: 1.37,
  };

  const handleConvert = () => {
    if (!amount || isNaN(Number(amount))) {
      setResult("Please enter a valid number.");
      return;
    }

    const usdValue = Number(amount) / rates[fromCurrency]; // convert to USD
    const converted = usdValue * rates[toCurrency]; // convert to target currency

    setResult(
      `${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`
    );
  };

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Currency Converter
          </h1>
          <p className="text-slate-600 text-lg">
            Convert between USD, EUR, GBP, INR, PKR, and more.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
          {/* Input */}
          <label className="block text-slate-700 mb-2 font-medium">
            Enter Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          {/* From + To Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-700 mb-2 font-medium">
                From
              </label>
              <select
                value={fromCurrency}
                onChange={(e) =>
                  setFromCurrency(e.target.value as keyof typeof rates)
                }
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
              >
                {Object.keys(rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-700 mb-2 font-medium">
                To
              </label>
              <select
                value={toCurrency}
                onChange={(e) =>
                  setToCurrency(e.target.value as keyof typeof rates)
                }
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none"
              >
                {Object.keys(rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Convert Button */}
          <button
            onClick={handleConvert}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl cursor-pointer py-3 text-lg font-medium"
          >
            Convert
          </button>

          {/* Result */}
          {result && (
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-slate-700 text-center font-medium">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
