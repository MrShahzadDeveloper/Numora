"use client";

import { ArrowLeft, Scale, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");
  const [unit, setUnit] = useState<"kg" | "lbs">("kg"); // 🔹 unit state
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    let w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) return;

    // 🔹 Convert lbs → kg
    if (unit === "lbs") {
      w = w * 0.453592;
    }

    // BMR calculation (Mifflin-St Jeor Equation)
    const bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    // Apply activity multiplier
    const activityFactor = parseFloat(activity);
    const totalCalories = bmr * activityFactor;

    setCalories(Math.round(totalCalories));
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
              <Scale className="h-8 w-8 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Calorie Calculator
            </h2>
            <p className="text-slate-600">
              Estimate your daily calorie needs based on age, gender, weight,
              height, and activity level.
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

            {/* Height Input */}
            <div className="flex flex-col">
              <label htmlFor="height" className="mb-2 text-slate-700">
                Height (cm)
              </label>
              <input
                id="height"
                type="number"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Age Input */}
            <div className="flex flex-col">
              <label htmlFor="age" className="mb-2 text-slate-700">
                Age (years)
              </label>
              <input
                id="age"
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Gender Input */}
            <div className="flex flex-col">
              <label htmlFor="gender" className="mb-2 text-slate-700">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Activity Level */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="activity" className="mb-2 text-slate-700">
                Activity Level
              </label>
              <select
                id="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
              >
                <option value="1.2">Sedentary (little or no exercise)</option>
                <option value="1.375">
                  Lightly active (light exercise/sports 1-3 days/week)
                </option>
                <option value="1.55">
                  Moderately active (moderate exercise 3-5 days/week)
                </option>
                <option value="1.725">
                  Very active (hard exercise 6-7 days/week)
                </option>
                <option value="1.9">
                  Super active (very hard exercise & physical job)
                </option>
              </select>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateCalories}
            className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!weight || !height || !age}
          >
            Calculate Calories
          </button>

          {/* Results */}
          {calories && (
            <div className="mt-6 bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200">
              <div className="text-center">
                <p className="text-3xl mb-2 font-semibold text-cyan-700">
                  Your daily calorie needs: {calories} kcal
                </p>
                <p className="text-lg text-slate-700">
                  This is an estimate based on your details and activity level.
                </p>
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="mb-3 font-semibold text-slate-800">
              How this works
            </h3>
            <p className="text-slate-600 leading-relaxed">
              This calculator uses the{" "}
              <span className="font-semibold">Mifflin-St Jeor Equation</span> to
              estimate your Basal Metabolic Rate (BMR) and multiplies it by an
              activity factor to calculate your Total Daily Energy Expenditure
              (TDEE). This gives you an idea of how many calories you need to
              maintain your current weight.
            </p>
            <div className="mt-4 text-sm text-slate-500">
              <div>• To lose weight: eat fewer calories than your TDEE</div>
              <div>• To gain weight: eat more calories than your TDEE</div>
              <div>• To maintain: eat close to your TDEE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
