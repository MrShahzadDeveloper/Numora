import React from "react";
import { Heart, Scale, DollarSign, Beaker, Clock } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import Button from "@/components/Button";

const HomePage = () => {
  const homeCategories = [
    {
      title: "Health",
      description:
        "Calculate BMI, water intake, calories, and other health metrics for a better lifestyle.",
      icon: Heart,
      calculators: ["BMI Calculator", "Water Intake", "Calorie Counter", "Body Fat Calculator", "Steps to Calories Calculator", "Heart Rate Calculator"],
    },
    {
      title: "Unit Conversions",
      description:
        "Convert between different units of measurement including height, weight, distance, and temperature.",
      icon: Scale,
      calculators: ["Height", "Weight", "Distance", "Temperature"],
    },
    {
      title: "Finance",
      description:
        "Calculate loans, EMI, discounts, and currency conversions for smart financial planning.",
      icon: DollarSign,
      calculators: ["Loan Calculator", "EMI", "Discount", "Currency"],
    },
  ];

  const categories = [
    {
      title: "Health",
      description: "Calculate BMI, water intake, calories, and other health metrics for a better lifestyle.",
      icon: Heart,
      calculators: ["BMI Calculator", "Water Intake", "Calorie Counter"]
    },
    {
      title: "Unit Conversions",
      description: "Convert between different units of measurement including height, weight, distance, and temperature.",
      icon: Scale,
      calculators: ["Height", "Weight", "Distance", "Temperature"]
    },
    {
      title: "Finance",
      description: "Calculate loans, EMI, discounts, and currency conversions for smart financial planning.",
      icon: DollarSign,
      calculators: ["Loan Calculator", "EMI", "Discount", "Currency"]
    },
    {
      title: "Math & Science",
      description: "Advanced scientific calculations, physics formulas, and chemistry computations.",
      icon: Beaker,
      calculators: ["Scientific", "Physics", "Chemistry"]
    },
    {
      title: "Everyday Life",
      description: "Simple daily calculations including tip calculator, age calculator, and time zones.",
      icon: Clock,
      calculators: ["Tip Calculator", "Age Calculator", "Time Zone"]
    }
  ];

  return (
    <>
      <section className="h-screen bg-gradient-to-br from-[#EFF6FF] via-white to-[#F1FDFB] flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-center text-5xl">
            Calculate Anything in Seconds <br /> with{" "}
            <span className="bg-gradient-to-r from-[#008FBE] to-[#125FF9] text-transparent bg-clip-text ">
              Numora
            </span>
          </h1>
          <p className="text-center text-lg text-gray-700">
            Your ultimate calculation hub. From health metrics to financial
            planning, <br /> scientific calculations to everyday math -
            we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {homeCategories.map((item, index) => (
            <div key={index}>
              <CategoryCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                calculators={item.calculators}
              />
            </div>
          ))}
        </div>

        <div className="w-[200px] ">
          <Button title="More!" />
        </div>
      </section>

      <section className="h-screen mt-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl">Choose Your Category</h1>
          <p className="text-lg text-gray-600">Find the perfect calculator for your needs from our comprehensive collection</p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((item, index) => (
            <div key={index}>
              <CategoryCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                calculators={item.calculators}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
