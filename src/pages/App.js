import React from "react";
import { Routes, store } from "../config";
import "./App.css";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
