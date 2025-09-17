import { LucideIcon } from "lucide-react";
import Button from "./Button";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  calculators: string[];
  onNavigate?: (page: string, category?: string) => void;
}

export function CategoryCard({
  title,
  description,
  icon: Icon,
  calculators,
}: CategoryCardProps) {
  return (
    <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/70 backdrop-blur-sm rounded-xl h-[420px] flex flex-col">
      <div className="p-8 flex flex-col flex-1 text-center">
        
        {/* Top content grows but stays aligned */}
        <div className="flex-1 flex flex-col">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-8 w-8 text-cyan-600" />
          </div>

          {/* Title */}
          <h3 className="text-xl text-slate-800 mb-3 min-h-[2.5rem] flex items-center justify-center">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-4 min-h-[4.5rem]">
            {description}
          </p>

          {/* Calculators */}
          <div className="text-sm text-slate-500 mb-6 min-h-[2rem] flex items-center justify-center">
            {calculators.join(" • ")}
          </div>
        </div>

        {/* Button fixed at bottom */}
        <div>
          <Button title={title} />
        </div>
      </div>
    </div>
  );
}
