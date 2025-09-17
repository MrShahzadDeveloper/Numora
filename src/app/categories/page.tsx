// app/categories/page.tsx
import { CategoryCard } from "@/components/CategoryCard";
import { Heart, Scale, DollarSign, Beaker, Clock } from "lucide-react";

const CategoriesPage = () => {
  const categories = [
    {
      id: "health",
      title: "Health",
      description:
        "Calculate BMI, water intake, calories, and other health metrics for a better lifestyle.",
      icon: Heart,
      calculators: ["BMI Calculator", "Water Intake", "Calorie Counter"],
    },
    {
      id: "unit-conversions",
      title: "Unit Conversions",
      description:
        "Convert between different units of measurement including height, weight, distance, and temperature.",
      icon: Scale,
      calculators: ["Height", "Weight", "Distance", "Temperature"],
    },
    {
      id: "finance",
      title: "Finance",
      description:
        "Calculate loans, EMI, discounts, and currency conversions for smart financial planning.",
      icon: DollarSign,
      calculators: ["Loan Calculator", "EMI", "Discount", "Currency"],
    },
    {
      id: "maths-science",
      title: "Math & Science",
      description:
        "Advanced scientific calculations, physics formulas, and chemistry computations.",
      icon: Beaker,
      calculators: ["Scientific", "Physics", "Chemistry"],
    },
    {
      id: "everyday-life",
      title: "Everyday Life",
      description:
        "Simple daily calculations including tip calculator, age calculator, and time zones.",
      icon: Clock,
      calculators: ["Tip Calculator", "Age Calculator", "Time Zone"],
    },
  ];

  return (
    <section className="p-20 flex flex-col gap-20">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-bold text-slate-800">Choose Your Category</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Find the perfect calculator for your needs from our comprehensive collection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            calculators={item.calculators}
            id={item.id} // Used for navigation
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesPage;
