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


interface CalculatorPageProps {
  params: {
    category: string;
    calculator: string;
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
