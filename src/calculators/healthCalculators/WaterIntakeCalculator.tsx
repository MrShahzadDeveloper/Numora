"use client";

import { Droplets, ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [unit, setUnit] = useState<"kg" | "lbs">("kg"); // 🔹 unit state
  const [result, setResult] = useState<number | null>(null);

  const calculateWaterIntake = () => {
    let w = parseFloat(weight);
    const a = parseFloat(activity);

    if (isNaN(w) || w <= 0) return;

    // 🔹 Convert lbs → kg
    if (unit === "lbs") {
      w = w * 0.453592;
    }

    // Base intake: 33 ml per kg
    let waterLiters = w * 0.033;

    // Extra: +0.35 L per 30 min activity
    if (!isNaN(a) && a > 0) {
      waterLiters += (a / 30) * 0.35;
    }

    setResult(parseFloat(waterLiters.toFixed(2)));
  };

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
              <Droplets className="h-8 w-8 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Water Intake Calculator
            </h2>
            <p className="text-slate-600">
              Find out how much water you should drink daily based on your body
              and activity level
            </p>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Weight Input + Unit Selector */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="weight" className="text-slate-700 mr-5">
                  Weight
                </label>
                <div className="relative w-14">
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value as "kg" | "lbs")}
                    className="w-full py-1 px-3 pr-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-sm appearance-none"
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 w-4 h-4" />
                </div>
              </div>
              <input
                id="weight"
                type="number"
                placeholder={`Enter your weight in ${unit}`}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Activity Input */}
            <div className="flex flex-col">
              <label htmlFor="activity" className="mb-2 text-slate-700">
                Daily Activity (minutes)
              </label>
              <input
                id="activity"
                type="number"
                placeholder="Enter your activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateWaterIntake}
            className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!weight}
          >
            Calculate
          </button>

          {/* Results */}
          {result !== null && (
            <div className="mt-6 bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200">
              <div className="text-center">
                <p className="text-3xl mb-2 font-semibold text-cyan-700">
                  {result} Liters/day
                </p>
                <p className="text-lg text-slate-700">
                  Recommended water intake
                </p>
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="mb-3 font-semibold text-slate-800">
              How is water intake calculated?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Your daily water intake is estimated based on your weight and
              activity level. Generally, you need about{" "}
              <strong>33 ml of water per kilogram of body weight</strong>.
              Additional water is recommended for physical activity.
            </p>
            <div className="mt-4 text-sm text-slate-500">
              <div>• Base: 33 ml per kg of body weight</div>
              <div>• +0.35 L for every 30 minutes of activity</div>
              <div>• Example: 70kg person with 60 min activity ≈ 3.6 L/day</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
