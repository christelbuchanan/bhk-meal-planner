import React from 'react';
import { WeekNumber } from '../types';

interface WeekSelectorProps {
  activeWeek: WeekNumber;
  setActiveWeek: (week: WeekNumber) => void;
}

const WeekSelector: React.FC<WeekSelectorProps> = ({ activeWeek, setActiveWeek }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
      <div className="flex gap-2">
        <button
          onClick={() => setActiveWeek(1)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeWeek === 1 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Week 1
        </button>
        <button
          onClick={() => setActiveWeek(3)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeWeek === 3 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Week 3
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setActiveWeek(2)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeWeek === 2 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Week 2
        </button>
        <button
          onClick={() => setActiveWeek(4)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeWeek === 4 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Week 4
        </button>
      </div>
    </div>
  );
};

export default WeekSelector;
