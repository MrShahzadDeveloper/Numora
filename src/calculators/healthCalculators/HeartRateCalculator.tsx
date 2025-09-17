"use client";

import { ArrowLeft, Activity } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HeartRateCalculator() {
  const [age, setAge] = useState("");
  const [resting, setResting] = useState("");
  const [zones, setZones] = useState<{ moderate: string; vigorous: string } | null>(null);

  const calculateHeartRate = () => {
    const a = parseInt(age);
    const r = resting ? parseInt(resting) : 70; // default avg resting HR = 70 bpm

    if (!a || a <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    const mhr = 220 - a;

    // Karvonen formula
    const moderateMin = Math.round(((mhr - r) * 0.5) + r);
    const moderateMax = Math.round(((mhr - r) * 0.7) + r);
    const vigorousMin = Math.round(((mhr - r) * 0.7) + r);
    const vigorousMax = Math.round(((mhr - r) * 0.85) + r);

    setZones({
      moderate: `${moderateMin} - ${moderateMax} bpm`,
      vigorous: `${vigorousMin} - ${vigorousMax} bpm`,
    });
  };

  const inputClass =
    "h-12 px-4 rounded-xl border border-slate-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-500 transition";

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 py-12">
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
              <Activity className="h-8 w-8 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Heart Rate Calculator
            </h2>
            <p className="text-slate-600">
              Estimate your target heart rate zones for safe and effective workouts.
            </p>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="mb-2 text-slate-700">Age (years)</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className={inputClass}
                placeholder="e.g. 30"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-slate-700">Resting Heart Rate (bpm)</label>
              <input
                type="number"
                value={resting}
                onChange={(e) => setResting(e.target.value)}
                className={inputClass}
                placeholder="Optional (default 70)"
              />
            </div>
          </div>

          {/* Button */}
          <button
            onClick={calculateHeartRate}
            disabled={!age}
            className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Calculate Heart Rate Zones
          </button>

          {/* Results */}
          {zones && (
            <div className="mt-6 bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200">
              <div className="text-center space-y-2">
                <p className="text-lg text-slate-700">
                  <span className="font-semibold">Moderate Intensity:</span>{" "}
                  <span className="text-green-600">{zones.moderate}</span>
                </p>
                <p className="text-lg text-slate-700">
                  <span className="font-semibold">Vigorous Intensity:</span>{" "}
                  <span className="text-red-600">{zones.vigorous}</span>
                </p>
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="mb-3 font-semibold text-slate-800">
              Understanding Heart Rate Zones
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Your maximum heart rate is estimated as 220 minus your age. Target
              heart rate zones are percentages of this maximum and help guide
              safe, effective workouts. The Karvonen method uses your resting
              heart rate to make results more personalized.
            </p>
            <div className="mt-4 text-sm text-slate-500">
              <div>• Moderate Intensity: 50% – 70% of max heart rate</div>
              <div>• Vigorous Intensity: 70% – 85% of max heart rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
