
/**
 * Recipes.
 *
 * Usage:
 * ```
 *  @param open= open form
 *  @param close= fuction close 
 *  @param isEdit= whether you are editing or not 
 *  @param create= fuction create recipe
 * ```
 */
export interface RecipeProps {
  open: boolean;
  close: () => void;
  isEdit?: boolean;
  create: (value: any) => void;
}
