import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/reset.css";
import "./index.css";
import "../src/styles/layout.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

reportWebVitals();
