import BMICalculator from "@/calculators/BmiCalculator";
import BodyFatCalculator from "@/calculators/BodyFatCalculator";
import CalorieCalculator from "@/calculators/CalorieCalculator";
import HeartRateCalculator from "@/calculators/HeartRateCalculator";
import StepsToCaloriesCalculator from "@/calculators/StepsToCaloriesCalculator";
import WaterIntakeCalculator from "@/calculators/WaterIntakeCalculator";

interface CalculatorPageProps {
  params: {
    category: string;
    calculator: string;
  };
}

export default function CalculatorPage({ params }: CalculatorPageProps) {
  const { calculator } = params;

  return (
    <div className="min-h-[92vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-5">
      {/* Example: Render based on calculator */}
      {calculator === "bmi" && (
        <div>
          {/* Your BMI calculator form goes here */}
          <BMICalculator />
        </div>
      )}

      {calculator === "water-intake" && (
        <div>
            <WaterIntakeCalculator />
        </div>
      )}

      {calculator === "calorie" && (
        <div>
            <CalorieCalculator />
        </div>
      )}
      
      {calculator === "body-fat" && (
        <div>
            <BodyFatCalculator />
        </div>
      )}
      
      {calculator === "steps-to-calories" && (
        <div>
					<StepsToCaloriesCalculator />
        </div>
      )}

      {calculator === "heart-rate" && (
        <div>
					<HeartRateCalculator />
        </div>
      )}
      
    </div>
  );
}
