export interface CreateRecipeType {
  name: string;
  score: number;
  cooked: boolean;
  instructions: string;
  ingredients: string[];
}

export interface FilterType {
  value: string;
  filter:string;
}

export interface ViewType {
    id: number;
  }
  