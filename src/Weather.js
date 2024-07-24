import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
let [weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response) {
  console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

function search() {
  let apiKey = "9833co795c058e7446f0a2tc1ebbfba5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

if(weatherData.ready) {
return (
  <div className="Weather">
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
    <h1>{props.defaultCity}</h1>
    <ul>
      <li><FormattedDate date={weatherData.date} /></li>
      <li className="text-capitalize">{weatherData.description}</li>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={weatherData.icon}
            alt={weatherData.description}
          />
          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </ul>
  </div>
);
} else {
  search();
  return "Loading...";
} 
}