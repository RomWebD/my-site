import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { InfoProvider } from "./Components/context";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <InfoProvider>
  <Router>
    <App />
  </Router>
  </InfoProvider>,
  document.getElementById("root")
);

