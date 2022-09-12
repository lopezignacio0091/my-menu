import { Irecipes } from '../../reducers/recipes/types';
export type RecipeResponseType = {
    data: Irecipes[];
    status: number;
  };
  export type CreateResponseType = {
    data: Irecipes;
    status: number;
  };