import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import persistedReducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    })
      .concat(sagaMiddleware)
});

// Inicio el middleware de saga
sagaMiddleware.run(rootSaga);

// Infiero el `RootState` y `AppDispatch` directamente desde la store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
