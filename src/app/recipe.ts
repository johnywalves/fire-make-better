export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface ResultRecipe {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface ResultRecipeDetail {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  lowFodmap: boolean;
  aggregateLikes: number;
  spoonacularScore: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  winePairing: {};
  instructions: string;
  originalId: null;
  spoonacularSourceUrl: string;
  extendedIngredients: Ingredient[];
  analyzedInstructions: Instruction[];
}

interface Measure {
  amount: number;
  unitShort: string;
  unitLong: string;
}

interface Ingredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  original: string;
  originalString: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  metaInformation: string[];
  measures: {
    us: Measure;
    metric: Measure;
  };
}

interface Instruction {
  name: string;
  steps: Step[];
}

interface Step {
  number: number;
  step: string;
  ingredients: StepIngredient[];
  equipment: StepEquipament[];
  length?: {
    number: number;
    unit: string;
  };
}

interface StepIngredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

interface StepEquipament {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}
