import { IrecipesAll } from '../../../../../reducers/recipes/types';
/**
 * ViewRecipeProps.
 *
 * Usage:
 * ```
 *  @param open= open form
 *  @param close= fuction close 
 *  @param recipeView= recipe to show
 * ```
 */
export interface ViewRecipeProps {
  open: boolean;
  close: () => void;
  recipeView:IrecipesAll;
}
