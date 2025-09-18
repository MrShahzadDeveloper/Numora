// app/categories/[category]/page.tsx
import {
  Heart,
  Droplets,
  Scale,
  Activity,
  Footprints,
  HeartPulse,
  Ruler,
  Weight,
  Thermometer,
  Gauge,
  Square,
  Box,
  DollarSign,
  Percent,
  PiggyBank,
  Landmark,
  CreditCard,
  TrendingUp,
  FunctionSquare,
  Shapes,
  BarChart,
  Clock,
  Calendar,
  Globe,
  BookOpen,
  CalendarDays,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

const displayTitleMap: { [key: string]: string } = {
  health: "Health",
  "unit-conversions": "Unit Conversions",
  finance: "Finance",
  "maths-science": "Maths & Science",
  "everyday-life": "Everyday Life",
};



export async function generateMetadata(
  { params }: CategoryPageProps
): Promise<Metadata> {
  const category = params.category;
  const displayTitle = displayTitleMap[category] || "Category";

  return {
    title: `${displayTitle} Calculators`,
    description: `Explore free ${displayTitle.toLowerCase()} calculators on Numora. Find tools for ${displayTitle.toLowerCase()} to make your life easier.`,
  };
}


interface Calculator {
  title: string;
  description: string;
  icon: typeof Heart;
  id: string;
}

interface CategoryPageProps {
  params: { category: string };
}

// All calculators mapped by category
const calculatorsData: { [key: string]: Calculator[] } = {
  health: [
    { title: "BMI Calculator", description: "Calculate your Body Mass Index.", icon: Heart, id: "bmi" },
    { title: "Water Intake Calculator", description: "Find out how much water you should drink daily.", icon: Droplets, id: "water-intake" },
    { title: "Calorie Calculator", description: "Estimate your daily calorie needs.", icon: Scale, id: "calorie" },
    { title: "Body Fat Calculator", description: "Estimate your body fat percentage.", icon: Activity, id: "body-fat" },
    { title: "Steps to Calories Calculator", description: "Find out how many calories you burn.", icon: Footprints, id: "steps-to-calories" },
    { title: "Heart Rate Calculator", description: "Calculate your maximum heart rate.", icon: HeartPulse, id: "heart-rate" },
  ],
  "unit-conversions": [
    { title: "Length Converter", description: "Convert between meters, kilometers, miles, feet, and more.", icon: Ruler, id: "length" },
    { title: "Weight Converter", description: "Convert between kilograms, pounds, grams, ounces, and more.", icon: Weight, id: "weight" },
    { title: "Temperature Converter", description: "Convert between Celsius, Fahrenheit, and Kelvin.", icon: Thermometer, id: "temperature" },
    { title: "Speed Converter", description: "Convert between km/h, mph, m/s, and knots.", icon: Gauge, id: "speed" },
    { title: "Area Converter", description: "Convert between square meters, acres, hectares, and more.", icon: Square, id: "area" },
    { title: "Volume Converter", description: "Convert between liters, milliliters, gallons, and more.", icon: Box, id: "volume" },
  ],
  finance: [
    { title: "Simple Interest Calculator", description: "Calculate interest earned or paid on a principal amount.", icon: Percent, id: "simple-interest" },
    { title: "Compound Interest Calculator", description: "Find out how your money grows with compounding interest.", icon: PiggyBank, id: "compound-interest" },
    { title: "Loan EMI Calculator", description: "Estimate monthly payments for loans.", icon: CreditCard, id: "loan-emi" },
    { title: "Mortgage Calculator", description: "Calculate monthly mortgage payments.", icon: Landmark, id: "mortgage" },
    { title: "Investment Return Calculator", description: "Estimate future value of investments.", icon: TrendingUp, id: "investment-return" },
    { title: "Currency Converter", description: "Convert between currencies using exchange rates.", icon: DollarSign, id: "currency-converter" },
  ],
  "maths-science": [
    { title: "Scientific Calculator", description: "Perform advanced math operations.", icon: Percent, id: "scientific" },
    { title: "Physics Calculator", description: "Solve physics problems like motion, force, energy.", icon: Gauge, id: "physics" },
    { title: "Chemistry Calculator", description: "Compute molar mass, solution concentration, etc.", icon: Activity, id: "chemistry" },
    { title: "Algebra Calculator", description: "Solve equations, inequalities, and simplify expressions.", icon: FunctionSquare, id: "algebra" },
    { title: "Geometry Calculator", description: "Calculate area, perimeter, and volume of shapes.", icon: Shapes, id: "geometry" },
    { title: "Statistics Calculator", description: "Compute mean, median, mode, and standard deviation.", icon: BarChart, id: "statistics" },
  ],
  "everyday-life": [
    { title: "Tip Calculator", description: "Calculate tips and split bills easily.", icon: Clock, id: "tip" },
    { title: "Age Calculator", description: "Find out your age in years, months, and days.", icon: Calendar, id: "age" },
    { title: "Time Zone Converter", description: "Convert time between different time zones.", icon: Globe, id: "time-zone" },
    { title: "Discount Calculator", description: "Calculate discounts and final prices.", icon: Percent, id: "discount" },
    { title: "GPA Calculator", description: "Calculate your Grade Point Average for school or college.", icon: BookOpen, id: "gpa" },
    { title: "Day Calculator", description: "Find the number of days between two dates.", icon: CalendarDays, id: "day-calculator" },
  ],
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category;
  const displayTitleMap: { [key: string]: string } = {
    health: "Health",
    "unit-conversions": "Unit Conversions",
    finance: "Finance",
    "maths-science": "Maths & Science",
    "everyday-life": "Everyday Life",
  };
  const displayTitle = displayTitleMap[category] || category;

  const calculators = calculatorsData[category] || [];

  return (
    <div className="min-h-[92vh] bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-slate-800">
            {displayTitle} Calculators
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            Choose from our collection of {displayTitle} calculation tools
          </p>
        </div>

        {/* Grid of Calculators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {calculators.map((calculator) => (
            <div
              key={calculator.id}
              className="group p-5 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/70 backdrop-blur-sm flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <calculator.icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600" />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-1 sm:mb-2">
                {calculator.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
                {calculator.description}
              </p>

              {/* Button */}
              <div className="mt-auto">
                <Link href={`/categories/${category}/${calculator.id}`}>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl cursor-pointer py-2 text-sm sm:text-base">
                    Use Calculator
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback */}
        {calculators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-base sm:text-lg">
              Calculators for this category are coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
