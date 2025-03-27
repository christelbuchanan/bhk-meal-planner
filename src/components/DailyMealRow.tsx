import React from 'react';
import { DayMeals } from '../types';
import MealCard from './MealCard';

interface DailyMealRowProps {
  day: string;
  meals: DayMeals;
  rowColor: string;
}

const DailyMealRow: React.FC<DailyMealRowProps> = ({ day, meals, rowColor }) => {
  const breakfastNote = '2 x Apple cider lollie or 2 tsp ACV in 250 ml (8 oz) water before every meal';
  
  return (
    <div className="grid grid-cols-5 gap-1 mb-1">
      <div className={`${rowColor} p-3 flex flex-col justify-center items-center`}>
        <div className="font-bold text-center">{day.toUpperCase()}</div>
        <div className="text-xs text-center mt-2">{breakfastNote}</div>
      </div>
      <MealCard meal={meals.breakfast} bgColor={rowColor} />
      <MealCard meal={meals.lunch} bgColor={rowColor} />
      <MealCard meal={meals.dinner} bgColor={rowColor} />
      <div className={`${rowColor} p-3`}>
        <div className="text-sm">{meals.addOns}</div>
      </div>
    </div>
  );
};

export default DailyMealRow;
