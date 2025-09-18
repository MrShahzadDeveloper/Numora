// components/CategoryCard.tsx
import { LucideIcon } from "lucide-react";
import Button from "./Button";

interface CategoryCardProps {
  title: string;
  id: string;
  description: string;
  icon: LucideIcon;
  calculators: string[];
}

export function CategoryCard({
  title,
  id,
  description,
  icon: Icon,
  calculators,
}: CategoryCardProps) {
  return (
    <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/70 backdrop-blur-sm rounded-xl flex flex-col h-auto min-h-[360px] sm:min-h-[400px] md:min-h-[420px]">
      <div className="p-6 sm:p-8 flex flex-col flex-1 text-center">
        <div className="flex-1 flex flex-col">
          {/* Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-600" />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl text-slate-800 mb-2 sm:mb-3 min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4 min-h-[3.5rem] sm:min-h-[4.5rem]">
            {description}
          </p>

          {/* Calculators */}
          <div className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 min-h-[1.5rem] sm:min-h-[2rem] flex items-center justify-center">
            {calculators.join(" • ")}
          </div>
        </div>

        {/* Button */}
        <div>
          <Button title={title} id={id} />
        </div>
      </div>
    </div>
  );
}
