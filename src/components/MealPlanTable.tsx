import React from 'react';
import { WeekPlan } from '../types';
import DailyMealRow from './DailyMealRow';

interface MealPlanTableProps {
  weekPlan: WeekPlan;
}

const MealPlanTable: React.FC<MealPlanTableProps> = ({ weekPlan }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-5 gap-1 mb-1">
          <div className="p-3 font-bold text-center"></div>
          <div className="p-3 font-bold text-center">BREAK your FAST</div>
          <div className="p-3 font-bold text-center">LUNCH</div>
          <div className="p-3 font-bold text-center">DINNER</div>
          <div className="p-3 font-bold text-center">
            <div>MEAL ADD ONS</div>
            <div className="text-sm">Up to 2 PER DAY</div>
          </div>
        </div>

        {/* Days */}
        <DailyMealRow 
          day="Monday" 
          meals={weekPlan.monday} 
          rowColor="bg-gray-200" 
        />
        <DailyMealRow 
          day="Tuesday" 
          meals={weekPlan.tuesday} 
          rowColor="bg-gray-200" 
        />
        <DailyMealRow 
          day="Wednesday" 
          meals={weekPlan.wednesday} 
          rowColor="bg-green-100" 
        />
        <DailyMealRow 
          day="Thursday" 
          meals={weekPlan.thursday} 
          rowColor="bg-gray-200" 
        />
        <DailyMealRow 
          day="Friday" 
          meals={weekPlan.friday} 
          rowColor="bg-gray-200" 
        />
        <DailyMealRow 
          day="Saturday" 
          meals={weekPlan.saturday} 
          rowColor="bg-green-100" 
        />
        <DailyMealRow 
          day="Sunday" 
          meals={weekPlan.sunday} 
          rowColor="bg-gray-200" 
        />
      </div>
    </div>
  );
};

export default MealPlanTable;
