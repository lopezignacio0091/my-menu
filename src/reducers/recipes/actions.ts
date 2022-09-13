/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateRecipeType, FilterType } from "../../sagas/recipes/types";
import { Recipes } from "./types";

export const initialState: Recipes = {
  recipes: null,
  error: false,
  fetching: false,
  succesCreate: false,
  viewRecipe: null,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    recipesRequest(state) {
      state.fetching = true;
      state.error = false;
    },
    recipesSuccess(state, action) {
      state.recipes = action.payload;
      state.fetching = false;
      state.succesCreate = false;
    },
    recipesError(state, action) {
      state.error = true;
      state.fetching = false;
    },
    recipesCreate(state, action: PayloadAction<CreateRecipeType>) {
      state.succesCreate = true;
    },
    filterRequest(state, action) {
      state.fetching = true;
      state.error = false;
      state.recipes = action.payload;
    },
    viewRecipe(state, action) {
      state.error = false;
    },
    viewRecipeSucces(state, action) {
      state.viewRecipe = action.payload;
    },
    viewRecipeReset(state) {
      state.viewRecipe = null;
    },
  },
  extraReducers: {},
});

export const { actions } = recipesSlice;

export default recipesSlice.reducer;
