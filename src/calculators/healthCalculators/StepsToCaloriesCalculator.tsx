"use client";

import { ArrowLeft, ChevronDown, Footprints } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function StepsToCaloriesCalculator() {
  const [steps, setSteps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<"kg" | "lbs">("kg"); // 🔹 add unit state
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    const s = parseFloat(steps);
    let w = parseFloat(weight);

    if (isNaN(s) || isNaN(w) || s <= 0 || w <= 0) {
      alert("Please enter valid steps and weight.");
      return;
    }

    // 🔹 convert lbs → kg
    if (unit === "lbs") {
      w = w * 0.453592;
    }

    // Formula: calories ≈ steps * (0.57 × weightKg / 1000)
    const result = (s * (0.57 * w)) / 1000;
    setCalories(parseFloat(result.toFixed(1)));
  };

  const inputClass =
    "h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none";

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/categories/health"
          className="mb-8 flex items-center text-slate-600 hover:text-cyan-600"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Health
        </Link>

        {/* Calculator Card */}
        <div className="p-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Footprints className="h-8 w-8 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Steps to Calories Calculator
            </h2>
            <p className="text-slate-600">
              Estimate how many calories you burn based on your daily steps.
            </p>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Steps Input */}
            <div className="flex flex-col">
              <label className="mb-2 text-slate-700">Steps</label>
              <input
                type="number"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                className={inputClass}
                placeholder="e.g. 10000"
              />
            </div>

            {/* Weight Input + Unit Selector */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="weight" className="text-slate-700 mr-5">
                  Weight
                </label>
                <div className="relative w-14">
                  {/* Select dropdown */}
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value as "kg" | "lbs")}
                    className="w-full py-1 px-3 pr-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-sm appearance-none"
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>

                  {/* Custom arrow */}
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 w-4 h-4" />
                </div>
              </div>
              <input
                id="weight"
                type="number"
                placeholder={`Enter your weight in ${unit}`}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {/* Button */}
          <button
            onClick={calculateCalories}
            disabled={!steps || !weight}
            className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Calculate Calories
          </button>

          {/* Results */}
          {calories !== null && (
            <div className="mt-6 bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200">
              <div className="text-center">
                <p className="text-3xl mb-2 font-semibold text-cyan-700">
                  {calories} kcal
                </p>
                <p className="text-lg text-slate-700">
                  burned from {steps} steps
                </p>
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="mb-3 font-semibold text-slate-800">
              How does this work?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              On average, walking 1,000 steps burns about 30–50 calories
              depending on weight and speed. This calculator provides an
              estimate using your weight to make it more accurate.
            </p>
            <div className="mt-4 text-sm text-slate-500">
              <div>• 5,000 steps ≈ 150–250 kcal</div>
              <div>• 10,000 steps ≈ 300–500 kcal</div>
              <div>• Heavier weight = more calories burned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
