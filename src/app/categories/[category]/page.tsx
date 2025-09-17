import { Heart, Droplets, ArrowLeft, Scale, Activity, Footprints, HeartPulse } from "lucide-react";
import Link from "next/link";

interface CategoryPageProps {
  params: { category: string }; // ✅ must use params
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category; // ✅ extract category from params

  // Example calculators
  const healthCalculators = [
    {
      title: "BMI Calculator",
      description:
        "Calculate your Body Mass Index to understand your weight status and health risks.",
      icon: Heart,
      id: "bmi",
    },
    {
      title: "Water Intake Calculator",
      description:
        "Find out how much water you should drink daily based on your body and activity level.",
      icon: Droplets,
      id: "water-intake",
    },
    {
    title: "Calorie Calculator",
    description:
      "Estimate your daily calorie needs based on age, gender, weight, height, and activity level.",
    icon: Scale,
    id: "calorie",
  },
  {
    title: "Body Fat Calculator",
    description:
      "Estimate your body fat percentage using weight, waist, and other body measurements.",
    icon: Activity,
    id: "body-fat",
  },
  {
    title: "Steps to Calories Calculator",
    description:
      "Find out how many calories you burn based on your daily steps and body weight.",
    icon: Footprints,
    id: "steps-to-calories",
  },
  {
    title: "Heart Rate Calculator",
    description:
      "Calculate your maximum heart rate and target training zones for safe workouts.",
    icon: HeartPulse,
    id: "heart-rate",
  },
  ];

  const calculators = category === "health" ? healthCalculators : [];

  return (
    <div className="min-h-[92vh] bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-slate-600 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 text-slate-800 capitalize">
            {category} Calculators
          </h1>
          <p className="text-xl text-slate-600">
            Choose from our collection of {category} calculation tools
          </p>
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {calculators.map((calculator) => (
            <div
              key={calculator.id}
              className="group p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/70 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <calculator.icon className="h-6 w-6 text-cyan-600" />
              </div>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {calculator.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {calculator.description}
              </p>

              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl cursor-pointer py-2">
                <Link href={`/categories/${category}/${calculator.id}`}>Use Calculator</Link>
              </button>
            </div>
          ))}
        </div>

        {calculators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              Calculators for this category are coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
