import { AxiosResponse } from "axios";
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { actions } from "../../reducers/recipes/actions";
import * as RecipesService from "../../services/recipes/recipes";
import {
  RecipeResponseType,
  CreateResponseType,
  ViewResponseType,
} from "../../services/recipes/types";
import { CreateRecipeType, FilterType, ViewType } from "./types";

export function* getRecipes(): Generator<
  CallEffect<AxiosResponse<RecipeResponseType>> | PutEffect<{ type: string }>,
  void,
  RecipeResponseType
> {
  try {
    const response = yield call(RecipesService.recipes);
    if (response.status === 200) {
      yield put(actions.recipesSuccess(response?.data));
    }
  } catch (error) {
    yield put(actions.recipesError(true));
  }
}

export function* createRecipe({
  payload,
}: PayloadAction<CreateRecipeType>): Generator<
  CallEffect<AxiosResponse<CreateResponseType>> | PutEffect<{ type: string }>,
  void,
  CreateResponseType
> {
  try {
    const response = yield call(RecipesService.create, payload);
    if (response.status === 200) {
      yield put(actions.recipesSuccess(response?.data));
    }
  } catch (error) {
    yield put(actions.recipesError(true));
  }
}

export function* filterRecipes({
  payload,
}: PayloadAction<FilterType>): Generator<
  CallEffect<AxiosResponse<RecipeResponseType>> | PutEffect<{ type: string }>,
  void,
  RecipeResponseType
> {
  try {
    const response = yield call(RecipesService.filter,payload);
    if (response.status === 200) {
      yield put(actions.recipesSuccess(response?.data));
    }
  } catch (error) {
    yield put(actions.recipesError(true));
  }
}

export function* viewRequest({
  payload,
}: PayloadAction<ViewType>): Generator<
  CallEffect<AxiosResponse<ViewResponseType>> | PutEffect<{ type: string }>,
  void,
  ViewResponseType
> {
  try {
    const response = yield call(RecipesService.viewRecipe,payload);
    if (response.status === 200) {
      yield put(actions.viewRecipeSucces(response?.data));
    }
  } catch (error) {
    yield put(actions.recipesError(true));
  }
}

const sagas: ForkEffect<never>[] = [
  takeLatest(actions.recipesRequest.type, getRecipes),
  takeLatest(actions.recipesCreate.type, createRecipe),
  takeLatest(actions.filterRequest.type, filterRecipes),
  takeLatest(actions.viewRecipe.type, viewRequest),
];

export default sagas;
