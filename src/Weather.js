import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <input type="search" placeholder="Enter a city..." autofocus="" />
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Wednesday 09:00</li>
          <li>Mostly cloudy</li>
          <div className="row">
            <div className="col-6">
              <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="icon"/>
              24° C
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