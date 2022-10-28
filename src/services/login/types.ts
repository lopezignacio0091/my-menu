import { ILogin } from "../../reducers/login/types";

export type LoginResponseType = {
    data: ILogin[];
    status: number;
  };