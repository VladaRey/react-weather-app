import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autofocus="on"
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
        <h1>New York</h1>
        <ul>
          <li>Wednesday 09:00</li>
          <li>Mostly cloudy</li>
          <div className="row mt-3">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="icon"
              />
              <span className="temperature">11</span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: 72%</li>
                <li>Wind: 13 km/h</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    );
}