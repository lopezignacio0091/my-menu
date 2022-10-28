import { AxiosResponse } from "axios";
import api from "../../config/api";
import { LoginResponseType } from "./types";
import { LoginGetType } from "../../sagas/login/types";

export const auth = ({
  password,
  email,
}: LoginGetType): Promise<AxiosResponse<LoginResponseType>> =>
  api.get(`/users?email=${email}&password=${password}`);
