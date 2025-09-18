"use client";

import { ArrowLeft, Activity } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BodyFatCalculator() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");
  const [bodyFat, setBodyFat] = useState<number | null>(null);

  const calculateBodyFat = () => {
    const h = parseFloat(height);
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const hp = parseFloat(hip);

    if (!h || !w || !n || (gender === "female" && !hp)) {
      alert("Please fill all required fields.");
      return;
    }

    let result = 0;
    if (gender === "male") {
      result =
        86.010 * Math.log10(w - n) -
        70.041 * Math.log10(h) +
        36.76;
    } else {
      result =
        163.205 * Math.log10(w + hp - n) -
        97.684 * Math.log10(h) -
        78.387;
    }

    setBodyFat(parseFloat(result.toFixed(1)));
  };

  const getFatCategory = () => {
    if (bodyFat === null) return "";
    if (gender === "male") {
      if (bodyFat < 6) return "Essential Fat";
      if (bodyFat <= 14) return "Athletes";
      if (bodyFat <= 17) return "Fitness";
      if (bodyFat <= 24) return "Average";
      return "Obese";
    } else {
      if (bodyFat < 14) return "Essential Fat";
      if (bodyFat <= 21) return "Athletes";
      if (bodyFat <= 24) return "Fitness";
      if (bodyFat <= 31) return "Average";
      return "Obese";
    }
  };

  const inputClass =
    "h-12 px-4 rounded-xl border border-slate-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-500 transition";

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 py-12">
        
        {/* Calculator Card */}
        <div className="p-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Activity className="h-8 w-8 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Body Fat Calculator
            </h2>
            <p className="text-slate-600">
              Estimate your body fat percentage using the U.S. Navy Method
            </p>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="mb-2 text-slate-700">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`${inputClass}`}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-slate-700">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className={inputClass}
                placeholder="e.g. 175"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-slate-700">Waist (cm)</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className={inputClass}
                placeholder="e.g. 80"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-slate-700">Neck (cm)</label>
              <input
                type="number"
                value={neck}
                onChange={(e) => setNeck(e.target.value)}
                className={inputClass}
                placeholder="e.g. 38"
              />
            </div>

            {gender === "female" && (
              <div className="flex flex-col md:col-span-2">
                <label className="mb-2 text-slate-700">Hip (cm)</label>
                <input
                  type="number"
                  value={hip}
                  onChange={(e) => setHip(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 98"
                />
              </div>
            )}
          </div>

          {/* Button */}
          <button
            onClick={calculateBodyFat}
            disabled={!height || !waist || !neck || (gender === "female" && !hip)}
            className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Calculate Body Fat
          </button>

          {/* Results */}
          {bodyFat !== null && (
            <div className="mt-6 bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200">
              <div className="text-center">
                <p className="text-3xl mb-2 font-semibold text-cyan-700">
                  {bodyFat}% Body Fat
                </p>
                <p className="text-lg text-slate-700">
                  Category: <span className="font-medium">{getFatCategory()}</span>
                </p>
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="mb-3 font-semibold text-slate-800">What is Body Fat %?</h3>
            <p className="text-slate-600 leading-relaxed">
              Body fat percentage is the proportion of fat in your body compared
              to everything else (muscles, bones, water, organs, etc). The U.S.
              Navy method uses simple body measurements to estimate this value.
            </p>
            <div className="mt-4 text-sm text-slate-500">
              <div>• Men: 6–24% is considered healthy</div>
              <div>• Women: 14–31% is considered healthy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
