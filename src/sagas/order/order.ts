import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from "redux-saga/effects";
import { actions } from "../../reducers/order/actions";
import { OrderPostType } from "./types";
import * as TableService from "../../services/table/table";

export function* postOrder({
    payload,
  }: PayloadAction<OrderPostType>): Generator<
    CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
    void,
    any
  > {
    try { 
      const response = yield call(TableService.putTable, payload);
      if (response.status === 200 && !!response.data.length) {
       
        yield put(actions.orderSucces(response?.data));
      } else {
        throw "Los datos ingresados son Incorrectos.";
      }
    } catch (error) {
      yield put(actions.orderError(error));
    }
  }
  


const sagas: ForkEffect<never>[] = [
    takeLatest(actions.orderRequest.type, postOrder),
  ];
  
  export default sagas;