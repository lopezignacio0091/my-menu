import { AxiosResponse } from "axios";
import { RecipeResponseType , CreateResponseType } from "./types";
import api from "../../config/api";
import { CreateRecipeType } from "../../sagas/recipes/types";

export const recipes = (): Promise<AxiosResponse<RecipeResponseType>> =>
  api.get(`/recipes`);

  export const create = (
    data: CreateRecipeType,
  ): Promise<AxiosResponse<CreateResponseType>> =>
  api.post(`/recipes`,data);
