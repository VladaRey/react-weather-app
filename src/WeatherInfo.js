import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clear-fix d-flex">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} size={52} />
              </div>
              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6 details">
            <ul>
              <li>Precipitation: 15%</li>
              <li>
                Humidity: <strong>{props.data.humidity}%</strong>
              </li>
              <li>
                Wind: <strong>{props.data.wind} km/h</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}