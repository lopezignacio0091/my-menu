export interface Irecipes {
  id: number;
  name: string;
  score: number;
  cooked: boolean;
}

export interface Recipes {
  fetching: boolean;
  error: boolean;
  recipes: Irecipes[];
  succesCreate: boolean;
}
