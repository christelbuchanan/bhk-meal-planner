import React, { useState } from 'react';
import Header from './components/Header';
import WeekSelector from './components/WeekSelector';
import MealPlanTable from './components/MealPlanTable';
import Footer from './components/Footer';
import { week1Plan, week2Plan, week3Plan, week4Plan } from './data/mealPlans';
import { WeekNumber } from './types';

function App() {
  const [activeWeek, setActiveWeek] = useState<WeekNumber>(1);

  const getWeekPlan = () => {
    switch (activeWeek) {
      case 1:
        return week1Plan;
      case 2:
        return week2Plan;
      case 3:
        return week3Plan;
      case 4:
        return week4Plan;
      default:
        return week1Plan;
    }
  };

  const getWeekTitle = () => {
    if (activeWeek === 1 || activeWeek === 3) {
      return `Week ${activeWeek} + Week ${activeWeek + 2} Meal Plan`;
    } else {
      return `Week ${activeWeek} + Week ${activeWeek + 2} Meal Plan`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-6 font-cursive">{getWeekTitle()}</h2>
        
        <WeekSelector activeWeek={activeWeek} setActiveWeek={setActiveWeek} />
        
        <MealPlanTable weekPlan={getWeekPlan()} />
        
        <div className="mt-8 bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">How to use this meal plan:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Follow the daily meal suggestions for optimal results</li>
            <li>Click on any meal to see more details</li>
            <li>Choose up to 2 add-ons per day from either the fresh or fast campers list</li>
            <li>Remember to have your apple cider vinegar or lollie before each meal</li>
            <li>Use leftovers as indicated to minimize food waste</li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
