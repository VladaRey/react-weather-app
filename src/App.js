import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Norway"/>
        <footer>
          This project was coded by Vladyslava Podzirei and is {""}
          <a
            href="https://github.com/VladaRey/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
