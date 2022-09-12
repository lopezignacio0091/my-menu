import React from "react";
import { Home } from "./pages/Home/Home";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./store";
import { Provider } from "react-redux";

const persistor = persistStore(store);

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Home />
      </Provider>
    </PersistGate>
  );
}

export default App;
