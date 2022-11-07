import { Product } from "../../reducers/order/types";

export interface OrderPostType {
  order: IOrder;
  id: number;
  status:string;
  name:string;
}

export interface IOrder {
  date: string;
  products: Product[];
}