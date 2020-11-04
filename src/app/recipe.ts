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
