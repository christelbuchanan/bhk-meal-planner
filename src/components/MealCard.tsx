import React, { useState } from 'react';
import { Meal } from '../types';
import { ExternalLink } from 'lucide-react';

interface MealCardProps {
  meal: Meal;
  bgColor?: string;
}

const MealCard: React.FC<MealCardProps> = ({ meal, bgColor = 'bg-gray-200' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${bgColor} p-3 h-full flex flex-col justify-between transition-all duration-200 ${
        isHovered ? 'shadow-lg scale-[1.02]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center font-medium">{meal.name}</div>
      {meal.page && (
        <div className="text-center text-sm mt-1 flex items-center justify-center">
          <span>Page {meal.page}</span>
          <ExternalLink className="h-3 w-3 ml-1" />
        </div>
      )}
    </div>
  );
};

export default MealCard;
