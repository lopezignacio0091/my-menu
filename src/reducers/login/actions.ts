import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginGetType } from "../../sagas/login/types";
import { getValue } from "../../utils/localStorage";
import { Login } from "./types";

export const initialState: Login = {
  user: getValue("user", true) || null,
  fetching: false,
  error: false,
  errorMessage: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<LoginGetType>) {
      state.fetching = true;
      state.error = false;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.fetching = false;
      state.error = false;
      state.errorMessage = "";
    },
    loginError(state, action) {
      state.errorMessage = action.payload;
      state.error = true;
      state.fetching = false;
    },
  },
  extraReducers: {},
});

export const { actions } = loginSlice;

export default loginSlice.reducer;
