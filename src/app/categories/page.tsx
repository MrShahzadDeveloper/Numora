// app/categories/page.tsx
import { CategoryCard } from "@/components/CategoryCard";
import { Heart, Scale, DollarSign, Beaker, Clock } from "lucide-react";
import type { Metadata } from "next";

// ✅ Static metadata for the categories page
export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse calculator categories on Numora. Health, Finance, Unit Conversions, Math & Science, and Everyday Life calculators all in one place.",
};

const CategoriesPage = () => {
  const categories = [
    {
      id: "health",
      title: "Health",
      description:
        "Calculate BMI, water intake, calories, and other health metrics for a better lifestyle.",
      icon: Heart,
      calculators: ["BMI Calculator", "Water Intake", "Calorie Counter etc."],
    },
    {
      id: "unit-conversions",
      title: "Unit Conversions",
      description:
        "Convert between different units of measurement including height, weight, distance, and temperature.",
      icon: Scale,
      calculators: ["Height", "Weight", "Distance", "Temperature etc."],
    },
    {
      id: "finance",
      title: "Finance",
      description:
        "Calculate loans, EMI, discounts, and currency conversions for smart financial planning.",
      icon: DollarSign,
      calculators: ["Loan Calculator", "EMI", "Discount", "Currency etc."],
    },
    {
      id: "maths-science",
      title: "Maths & Science",
      description:
        "Advanced scientific calculations, physics formulas, and chemistry computations.",
      icon: Beaker,
      calculators: ["Scientific", "Physics", "Chemistry etc."],
    },
    {
      id: "everyday-life",
      title: "Everyday Life",
      description:
        "Simple daily calculations including tip calculator, age calculator, and time zones.",
      icon: Clock,
      calculators: ["Tip Calculator", "Age Calculator", "Time Zone etc."],
    },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 flex flex-col gap-12 sm:gap-16 md:gap-20">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-slate-800">
          Choose Your Category
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
          Find the perfect calculator for your needs from our comprehensive collection
        </p>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto w-full">
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            calculators={item.calculators}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesPage;
