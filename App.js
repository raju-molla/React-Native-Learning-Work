import React from "react";
import { Provider } from "react-redux";
import MainComponent from "./src/MainComponent";
import Store from "./src/redux/store";

export default function App() {
  return (
    <Provider store = {Store}>
      <MainComponent />
    </Provider>
  );
}
