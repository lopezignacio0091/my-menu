import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectSelf = (state: any) => state;

export const recipesSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.recipes.recipes
);
export const loadingSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.recipes.fetching
);
export const errorSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.recipes.error
);
export const succesSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.recipes.succesCreate
);

export const viewRecipeSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.recipes.viewRecipe
);
