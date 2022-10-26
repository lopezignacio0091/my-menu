import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from './pages/routes/MainRoute';

const persistor = persistStore(store);

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Router>
          <MainRoute />
        </Router>
      </Provider>
    </PersistGate>
  );
}

export default App;
