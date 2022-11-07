import { AxiosResponse } from "axios";
import api from "../../config/api";
import { OrderPostType } from "../../sagas/order/types";
import { TableGetType } from "./types";

export const getTables = (): Promise<AxiosResponse<TableGetType>> =>
  api.get(`/table`);

export const putTable = (
  data: OrderPostType
): Promise<AxiosResponse<TableGetType>> => api.put(`/table/${data.id}`, data);
