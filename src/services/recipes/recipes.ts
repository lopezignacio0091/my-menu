import { AxiosResponse } from "axios";
import {
  RecipeResponseType,
  CreateResponseType,
  ViewResponseType,
} from "./types";
import api from "../../config/api";
import {
  CreateRecipeType,
  FilterType,
  ViewType,
} from "../../sagas/recipes/types";

export const recipes = (): Promise<AxiosResponse<RecipeResponseType>> =>
  api.get(`/recipes`);

export const create = (
  data: CreateRecipeType
): Promise<AxiosResponse<CreateResponseType>> => api.post(`/recipes`, data);

export const filter = ({
  filter,
  value,
}: FilterType): Promise<AxiosResponse<RecipeResponseType>> =>
  api.get(`/recipes?${filter}=${value}`);

export const viewRecipe = (
  id: ViewType
): Promise<AxiosResponse<ViewResponseType>> => api.get(`/recipes/${id}`);
