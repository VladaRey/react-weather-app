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
      <a href="https://github.com/VladaRey/react-weather-app" target="_blank" rel="noreferrer">
        Open source code,
      </a>{" "}
      by Vladyslava Podzirei
    </div>
  </StrictMode>
);
