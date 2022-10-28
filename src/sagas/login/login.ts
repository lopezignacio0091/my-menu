import { AxiosResponse } from "axios";
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import { LoginResponseType } from "../../services/login/types";
import { LoginGetType } from "./types";
import * as LoginService from "../../services/login/login";
import { actions } from "../../reducers/login/actions";
import { PayloadAction } from "@reduxjs/toolkit";
import { replace } from "connected-react-router";
import Routes from "../../constants/Routes";
import { saveValue } from "../../utils/localStorage";

export function* getLogin({
  payload,
}: PayloadAction<LoginGetType>): Generator<
  CallEffect<AxiosResponse<LoginResponseType>> | PutEffect<{ type: string }>,
  void,
  LoginResponseType
> {
  try {
    const response = yield call(LoginService.auth, payload);
    if (response.status === 200 && !!response.data.length) {
      saveValue("user", response.data);
      yield put(actions.loginSuccess(response?.data));
      yield put(replace(Routes.INDEX));
    } else {
      throw "Los datos ingresados son Incorrectos.";
    }
  } catch (error) {
    yield put(actions.loginError(error));
  }
}

const sagas: ForkEffect<never>[] = [
  takeLatest(actions.loginRequest.type, getLogin),
];

export default sagas;
