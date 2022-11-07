export interface Order {
  myOrder: Product[];
  fetching: boolean;
  error: boolean;
  errorMessage: string;
  tables : Table[]
}

export interface IOrder {
  date: string;
  products: Product[];
}

export interface Product {
  id: number;
  link: string;
  price: number;
  type: string;
  name: string;
}

export interface OrderService {
  name: string;
  products: Product[];
  date: string;
}

export interface Table {
  id: number;
  name: string;
  order: IOrder;
  status: StatusOrder;
}

export type StatusOrder = "CERRADA" | "ABIERTA" | "RESERVADA" | "CUENTA";
