import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import recipes from './recipes/actions';
import login from './login/actions';

const persistConfig = {
  key: "root",
  whitelist: [] as any,
  storage,
};

// eslint-disable-next-line @typescript-eslint/no-shadow
const rootReducer = () =>
  combineReducers({
    recipes,
    login
  });
const persistedReducer = persistReducer(persistConfig, rootReducer());
export default persistedReducer;
