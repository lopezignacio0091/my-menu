import { Product } from "../../reducers/order/types";

export interface TableGetType {
  status: number;
  data: any;
}

export interface Itable {
  name: string;
  status: string;
  order: IOrder;
}

export interface IOrder {
  date: string;
  products: Product[];
}
