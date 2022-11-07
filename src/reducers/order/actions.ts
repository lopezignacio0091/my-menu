import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderPostType } from "../../sagas/order/types";
import { Order, Product } from "./types";

export const initialState: Order = {
  myOrder: [],
  fetching: false,
  error: false,
  errorMessage: "",
  tables:[]
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state,  action: PayloadAction<Product>) {
      state.myOrder = [...state.myOrder, action.payload];
      state.error = false;
    },
    orderRequest(state,  action: PayloadAction<OrderPostType>) {
      state.fetching = true;
      state.error = false;
    },
    orderSucces(state,  action) {
      state.fetching = true;
      state.error = false;
    },
    orderError(state, action) {
      state.errorMessage = action.payload;
      state.error = true;
      state.fetching = false;
    },
    tablesRequest(state) {
      state.fetching = true;
      state.error = false;
    },
    tablesSucces(state,  action) {
      state.fetching = false;
      state.error = false;
      state.tables = action.payload;
    },
    tablesError(state, action) {
      state.errorMessage = action.payload;
      state.error = true;
      state.fetching = false;
    },
  },
  extraReducers: {},
});

export const { actions } = orderSlice;

export default orderSlice.reducer;
