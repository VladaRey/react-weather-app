import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
let [weatherData, setWeatherData] = useState({ready: false});
let [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
  console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      city: response.data.city,
    });
  }

function search() {
  let apiKey = "9833co795c058e7446f0a2tc1ebbfba5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

if(weatherData.ready) {
return (
  <div className="Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            className="form-control"
            onChange={handleCityChange}
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
    <WeatherInfo data={weatherData} />
  </div>
);
} else {
  search();
  return "Loading...";
} 
}