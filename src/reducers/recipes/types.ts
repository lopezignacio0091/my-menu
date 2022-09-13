export interface Irecipes {
  id: number;
  name: string;
  score: number;
  cooked: boolean;
}
export interface IrecipesAll {
  id: number;
  name: string;
  score: number;
  cooked: boolean;
  ingredients:string[],
  instructions:string,
}

export interface Recipes {
  fetching: boolean;
  error: boolean;
  recipes: Irecipes[];
  succesCreate: boolean;
  viewRecipe: Irecipes;
}
