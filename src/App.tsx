import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routing from "./routing/Routing";
import { store } from "./store";
import "./App.css";
import axios from "axios";
import { addDefaultsToAxios } from "./utils/localStorage";

const App: React.FC = () => {
  addDefaultsToAxios();
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
