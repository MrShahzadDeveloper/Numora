import BMICalculator from "@/calculators/healthCalculators/BmiCalculator";
import BodyFatCalculator from "@/calculators/healthCalculators/BodyFatCalculator";
import CalorieCalculator from "@/calculators/healthCalculators/CalorieCalculator";
import HeartRateCalculator from "@/calculators/healthCalculators/HeartRateCalculator";
import StepsToCaloriesCalculator from "@/calculators/healthCalculators/StepsToCaloriesCalculator";
import WaterIntakeCalculator from "@/calculators/healthCalculators/WaterIntakeCalculator";
import LengthConverterPage from "@/calculators/unitConversionsCalculators/LengthConvertorCalculators";
import SpeedConverterPage from "@/calculators/unitConversionsCalculators/SpeedConvertorCalculator";
import TemperatureConverterPage from "@/calculators/unitConversionsCalculators/TemperatureConvertorCalculator";
import VolumeConverterPage from "@/calculators/unitConversionsCalculators/VolumeConverterCalculator";
import WeightConverterPage from "@/calculators/unitConversionsCalculators/WeightConverterCalculator";
import AreaConverterPage from "@/calculators/unitConversionsCalculators/AreaConverterCalculator";
import SimpleInterestCalculator from "@/calculators/financeCalculator/SimpleInterest";
import CompoundInterestCalculator from "@/calculators/financeCalculator/CompoundInterestCalculator";
import LoanEmiCalculator from "@/calculators/financeCalculator/LoanEmiCalculator";
import MortgageCalculator from "@/calculators/financeCalculator/MortgageCalculator";
import InvestmentReturnCalculator from "@/calculators/financeCalculator/InvestmentReturnCalculator";
import CurrencyConverterPage from "@/calculators/financeCalculator/CurrencyConvertCalculator";
import ScientificCalculator from "@/calculators/MathsandScienceCalulators/ScientificCalculator";
import PhysicsCalculator from "@/calculators/MathsandScienceCalulators/PhysicsCalculator";
import ChemistryCalculator from "@/calculators/MathsandScienceCalulators/ChemistryCalculator";
import AlgebraCalculator from "@/calculators/MathsandScienceCalulators/AlgebraCalculator";
import GeometryCalculator from "@/calculators/MathsandScienceCalulators/GeometryCalculator";
import StatisticsCalculator from "@/calculators/financeCalculator/StaticticsCalculator";
import TipCalculator from "@/calculators/EverydayLifeCalculators/TipCalculator";
import AgeCalculator from "@/calculators/EverydayLifeCalculators/AgeCalculator";
import TimeZoneConverter from "@/calculators/EverydayLifeCalculators/TimezoneConverterCalculator";
import DiscountCalculator from "@/calculators/EverydayLifeCalculators/DiscountCalculator";
import GPACalculator from "@/calculators/EverydayLifeCalculators/GpaCalculator";
import DayCalculator from "@/calculators/EverydayLifeCalculators/DayCalculator";
import { Metadata } from "next";


interface CalculatorPageProps {
  params: {
    category: string;
    calculator: string;
  };
}

// 👇 Define display names for categories
const displayTitleMap: { [key: string]: string } = {
  health: "Health",
  "unit-conversions": "Unit Conversions",
  finance: "Finance",
  "maths-science": "Math & Science",
  "everyday-life": "Everyday Life",
};

// 👇 Define calculators with titles & descriptions for SEO
const calculatorsMeta: {
  [category: string]: { [calculator: string]: { title: string; description: string } };
} = {
  health: {
    bmi: { title: "BMI Calculator", description: "Calculate your Body Mass Index and check your fitness level." },
    "water-intake": { title: "Water Intake Calculator", description: "Find out how much water you should drink daily." },
    calorie: { title: "Calorie Calculator", description: "Estimate your daily calorie requirements based on activity." },
    "body-fat": { title: "Body Fat Calculator", description: "Calculate your body fat percentage accurately." },
    "steps-to-calories": { title: "Steps to Calories Calculator", description: "Convert your steps into calories burned." },
    "heart-rate": { title: "Heart Rate Calculator", description: "Find your maximum and target heart rates." },
  },
  "unit-conversions": {
    length: { title: "Length Converter", description: "Convert between meters, kilometers, miles, and feet." },
    weight: { title: "Weight Converter", description: "Convert kilograms, pounds, grams, and more." },
    temperature: { title: "Temperature Converter", description: "Convert Celsius, Fahrenheit, and Kelvin easily." },
    speed: { title: "Speed Converter", description: "Convert between km/h, mph, m/s, and knots." },
    area: { title: "Area Converter", description: "Convert between square meters, acres, and hectares." },
    volume: { title: "Volume Converter", description: "Convert liters, milliliters, gallons, and more." },
  },
  finance: {
    "simple-interest": { title: "Simple Interest Calculator", description: "Calculate interest earned or paid on a principal amount." },
    "compound-interest": { title: "Compound Interest Calculator", description: "See how your money grows with compounding." },
    "loan-emi": { title: "Loan EMI Calculator", description: "Estimate monthly payments for your loans." },
    mortgage: { title: "Mortgage Calculator", description: "Calculate your home loan EMIs easily." },
    "investment-return": { title: "Investment Return Calculator", description: "Estimate the future value of your investments." },
    "currency-converter": { title: "Currency Converter", description: "Convert currencies with up-to-date exchange rates." },
  },
  "maths-science": {
    scientific: { title: "Scientific Calculator", description: "Perform advanced scientific and math operations." },
    physics: { title: "Physics Calculator", description: "Solve physics problems including motion, force, and energy." },
    chemistry: { title: "Chemistry Calculator", description: "Calculate molar mass, solution concentration, and more." },
    algebra: { title: "Algebra Calculator", description: "Solve equations, inequalities, and simplify expressions." },
    geometry: { title: "Geometry Calculator", description: "Calculate area, perimeter, and volume of shapes." },
    statistics: { title: "Statistics Calculator", description: "Find mean, median, mode, and standard deviation." },
  },
  "everyday-life": {
    tip: { title: "Tip Calculator", description: "Quickly calculate tips and split bills." },
    age: { title: "Age Calculator", description: "Find your age in years, months, and days." },
    "time-zone": { title: "Time Zone Converter", description: "Convert time between different zones worldwide." },
    discount: { title: "Discount Calculator", description: "Calculate discounts and final prices when shopping." },
    gpa: { title: "GPA Calculator", description: "Easily calculate your Grade Point Average." },
    "day-calculator": { title: "Day Calculator", description: "Find the number of days between two dates." },
  },
};

interface CalculatorPageProps {
  params: { category: string; calculator: string };
}

// ✅ Dynamic Metadata
export async function generateMetadata(
  { params }: CalculatorPageProps
): Promise<Metadata> {
  const { category, calculator } = params;
  const displayCategory = displayTitleMap[category] || "Category";

  const meta =
    calculatorsMeta[category]?.[calculator] || {
      title: "Calculator",
      description: "Use this free calculator on Numora.",
    };

  return {
    title: `${meta.title} | ${displayCategory}`,
    description: meta.description,
  };
}

export default function CalculatorPage({ params }: CalculatorPageProps) {
  const { category, calculator } = params;

  return (
    <div className="min-h-[92vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* ✅ Health Calculators */}
      {category === "health" && calculator === "bmi" && <BMICalculator />}
      {category === "health" && calculator === "water-intake" && (
        <WaterIntakeCalculator />
      )}
      {category === "health" && calculator === "calorie" && (
        <CalorieCalculator />
      )}
      {category === "health" && calculator === "body-fat" && (
        <BodyFatCalculator />
      )}
      {category === "health" && calculator === "steps-to-calories" && (
        <StepsToCaloriesCalculator />
      )}
      {category === "health" && calculator === "heart-rate" && (
        <HeartRateCalculator />
      )}

      {/* ✅ Unit Conversion Calculators */}
      {category === "unit-conversions" && calculator === "length" && (
        <LengthConverterPage />
      )}
      {category === "unit-conversions" && calculator === "weight" && (
        <WeightConverterPage />
      )}
      {category === "unit-conversions" && calculator === "temperature" && (
        <TemperatureConverterPage />
      )}
      {category === "unit-conversions" && calculator === "speed" && (
        <SpeedConverterPage />
      )}
      {category === "unit-conversions" && calculator === "area" && (
        <AreaConverterPage />
      )}
      {category === "unit-conversions" && calculator === "volume" && (
        <VolumeConverterPage />
      )}

      {/* ✅ Finance Calculators */}
      {category === "finance" && calculator === "simple-interest" && (
        <SimpleInterestCalculator />
      )}
      {category === "finance" && calculator === "compound-interest" && (
        <CompoundInterestCalculator />
      )}
      {category === "finance" && calculator === "loan-emi" && (
        <LoanEmiCalculator />
      )}
      {category === "finance" && calculator === "mortgage" && (
        <MortgageCalculator />
      )}
      {category === "finance" && calculator === "investment-return" && (
        <InvestmentReturnCalculator />
      )}
      {category === "finance" && calculator === "currency-converter" && (
        <CurrencyConverterPage />
      )}

      {/* ✅ Maths Calculators */}
      {category === "maths-science" && calculator === "scientific" && (
        <ScientificCalculator />
      )}
      {category === "maths-science" && calculator === "physics" && (
        <PhysicsCalculator />
      )}
      {category === "maths-science" && calculator === "chemistry" && (
        <ChemistryCalculator />
      )}
      {category === "maths-science" && calculator === "algebra" && (
        <AlgebraCalculator />
      )}
      {category === "maths-science" && calculator === "geometry" && (
        <GeometryCalculator />
      )}
      {category === "maths-science" && calculator === "statistics" && (
        <StatisticsCalculator />
      )}

      {/* ✅ Everday Life Calculators */}
      {category === "everyday-life" && calculator === "tip" && (
        <TipCalculator />
      )}
      {category === "everyday-life" && calculator === "age" && (
        <AgeCalculator />
      )}
      {category === "everyday-life" && calculator === "time-zone" && (
        <TimeZoneConverter />
      )}
      {category === "everyday-life" && calculator === "discount" && (
        <DiscountCalculator />
      )}
      {category === "everyday-life" && calculator === "gpa" && (
        <GPACalculator />
      )}
      {category === "everyday-life" && calculator === "day-calculator" && (
        <DayCalculator />
      )}

    </div>
  );
}

// ✅ Needed for static export (Next.js 13+)
export async function generateStaticParams() {
  const categories = Object.keys(calculatorsMeta);

  const params = categories.flatMap((category) =>
    Object.keys(calculatorsMeta[category]).map((calculator) => ({
      category,
      calculator,
    }))
  );

  return params;
}
