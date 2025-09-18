import React from "react";
import { Heart, Scale, DollarSign, Beaker, Clock } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import Button from "@/components/Button";

const HomePage = () => {
  const homeCategories = [
    {
      id: "health",
      title: "Health",
      description:
        "Calculate BMI, water intake, calories, and other health metrics for a better lifestyle.",
      icon: Heart,
      calculators: [
        "BMI Calculator",
        "Water Intake",
        "Calorie Counter",
        "Body Fat Calculator",
        "Steps to Calories Calculator",
        "Heart Rate Calculator",
      ],
    },
    {
      id: "unit-conversions",
      title: "Unit Conversions",
      description:
        "Convert between different units of measurement including height, weight, distance, and temperature.",
      icon: Scale,
      calculators: ["Height Calculator", "Weight Calculator", "Distance Calculator", "Temperature Calculator"],
    },
    {
      id: "finance",
      title: "Finance",
      description:
        "Calculate loans, EMI, discounts, and currency conversions for smart financial planning.",
      icon: DollarSign,
      calculators: ["Loan Calculator", "EMI Calculator", "Discount Calculator", "Currency Calculator"],
    },
  ];

  const categories = [
    {
      id: "health",
      title: "Health",
      description:
        "Calculate BMI, water intake, calories, and other health metrics for a better lifestyle.",
      icon: Heart,
      calculators: ["BMI Calculator", "Water Intake Calculator", "Calorie Counter"],
    },
    {
      id: "unit-conversions",
      title: "Unit Conversions",
      description:
        "Convert between different units of measurement including height, weight, distance, and temperature.",
      icon: Scale,
      calculators: ["Height Calculator", "Weight Calculator", "Distance Calculator", "Temperature Calculator"],
    },
    {
      id: "finance",
      title: "Finance",
      description:
        "Calculate loans, EMI, discounts, and currency conversions for smart financial planning.",
      icon: DollarSign,
      calculators: ["Loan Calculator", "EMI Calculator", "Discount Calculator", "Currency Converter"],
    },
    {
      id: "maths-science",
      title: "Math & Science",
      description:
        "Advanced scientific calculations, physics formulas, and chemistry computations.",
      icon: Beaker,
      calculators: ["Scientific Calculator", "Physics Calculator", "Chemistry Calculator"],
    },
    {
      id: "everyday-life",
      title: "Everyday Life",
      description:
        "Simple daily calculations including tip calculator, age calculator, and time zones.",
      icon: Clock,
      calculators: ["Tip Calculator", "Age Calculator", "Time Zone Calculator"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#EFF6FF] via-white to-[#F1FDFB] flex flex-col gap-10 justify-center items-center px-4 py-4">
        <div className="flex flex-col gap-6 py-10">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl">
            Calculate Anything in Seconds <br /> with{" "}
            <span className="bg-gradient-to-r from-[#008FBE] to-[#125FF9] text-transparent bg-clip-text">
              Numora
            </span>
          </h1>
          <p className="text-center text-base sm:text-lg text-gray-700">
            Your ultimate calculation hub. From health metrics to financial
            planning, <br className="hidden sm:block" /> scientific calculations
            to everyday math - we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
          {homeCategories.map((item) => (
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

        {/* <div className="w-[150px] sm:w-[200px]">
          <Button title="More!" id="all-categories" />
        </div> */}
      </section>

      {/* Full Categories Section */}
      <section className="min-h-screen mt-10 px-4">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Choose Your Category</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Find the perfect calculator for your needs from our comprehensive collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-8 w-full">
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
    </>
  );
};

export default HomePage;
