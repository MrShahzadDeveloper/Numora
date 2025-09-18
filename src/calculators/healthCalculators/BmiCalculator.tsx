"use client";

import { ArrowLeft, ChevronDown, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"kg" | "lbs">("kg"); // 🔹 unit state
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    let weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // cm → m

    if (
      isNaN(weightNum) ||
      isNaN(heightNum) ||
      weightNum <= 0 ||
      heightNum <= 0
    )
      return;

    // 🔹 convert lbs → kg
    if (unit === "lbs") {
      weightNum = weightNum * 0.453592;
    }

    const bmiValue = weightNum / (heightNum * heightNum);
    setBMI(Math.round(bmiValue * 10) / 10);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 25) setCategory("Normal Weight");
    else if (bmiValue < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  const getBMIColor = () => {
    if (!bmi) return "text-slate-600";
    if (bmi < 18.5) return "text-blue-600";
    if (bmi < 25) return "text-green-600";
    if (bmi < 30) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-[92vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Calculator Card */}
        <div className="p-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-800">
              BMI Calculator
            </h2>
            <p className="text-slate-600">
              Calculate your Body Mass Index to assess your weight status
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
                  {/* Select dropdown */}
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value as "kg" | "lbs")}
                    className="w-full py-1 px-3 pr-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-sm appearance-none"
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>

                  {/* Custom arrow overlay */}
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

            {/* Height Input */}
            <div className="flex flex-col">
              <label htmlFor="height" className="mb-2 text-slate-700">
                Height (cm)
              </label>
              <input
                id="height"
                type="number"
                placeholder="Enter your height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateBMI}
            className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!weight || !height}
          >
            Calculate BMI
          </button>

          {/* Results */}
          {bmi && (
            <div className="mt-6 bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200">
              <div className="text-center">
                <p className="text-3xl mb-2 font-semibold">
                  <span className={getBMIColor()}>Your BMI is: {bmi}</span>
                </p>
                <p className="text-lg text-slate-700">
                  Category: <span className={getBMIColor()}>{category}</span>
                </p>
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="mb-3 font-semibold text-slate-800">What is BMI?</h3>
            <p className="text-slate-600 leading-relaxed">
              Body Mass Index (BMI) is a measure of body fat based on height and
              weight. It&apos;s used as a screening tool to identify possible
              weight problems in adults. A BMI between 18.5 and 24.9 is
              considered normal weight for most adults.
            </p>
            <div className="mt-4 text-sm text-slate-500">
              <div>• Underweight: BMI less than 18.5</div>
              <div>• Normal weight: BMI 18.5 - 24.9</div>
              <div>• Overweight: BMI 25 - 29.9</div>
              <div>• Obese: BMI 30 or greater</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
