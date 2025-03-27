export interface Meal {
  name: string;
  page?: number;
  description?: string;
}

export interface DayMeals {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  addOns: string;
}

export interface WeekPlan {
  monday: DayMeals;
  tuesday: DayMeals;
  wednesday: DayMeals;
  thursday: DayMeals;
  friday: DayMeals;
  saturday: DayMeals;
  sunday: DayMeals;
}

export type WeekNumber = 1 | 2 | 3 | 4;
