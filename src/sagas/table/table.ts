import { AxiosResponse } from "axios";
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import * as TableService from "../../services/table/table";
import { actions } from "../../reducers/order/actions";

export function* getTables() : Generator<
  CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
  void,
  any
> {
  try {
    const response = yield call(TableService.getTables);
    if (response.status === 200 && !!response.data.length) {
      yield put(actions.tablesSucces(response?.data));
    } else {
      // eslint-disable-next-line no-throw-literal
      throw "Error petición.";
    }
  } catch (error) {
    yield put(actions.tablesError(error));
  }
}

const sagas: ForkEffect<never>[] = [
  takeLatest(actions.tablesRequest.type, getTables),
];

export default sagas;
