import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import './index.css';

import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App</h1>
    <Weather />
    <div className="footer">
      <a href="" target="blank_">Open source code,</a> by Vladyslava Podzirei
    </div>
  </StrictMode>
);
