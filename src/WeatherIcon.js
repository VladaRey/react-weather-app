import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    let codeMaping = {
      "clear-sky-day": "CLEAR_DAY",
      "clear-sky-night": "CLEAR_NIGHT",
      "few-clouds-day": "PARTLY_CLOUDY_DAY",
      "few-cloudy-night": "PARTLY_CLOUDY_NIGHT",
      "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
      "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
      "broken-clouds-day": "CLOUDY",
      "broken-clouds-night": "CLOUDY",
      "shower-rain-day": "RAIN",
      "shower-rain-night": "RAIN",
      "rain-day": "RAIN",
      "rain-night": "RAIN",
      "thunderstorm-day": "RAIN",
      "thunderstorm-night": "RAIN",
      "snow-day": "SNOW",
      "snow-night": "SNOW",
      "mist-day": "FOG",
      "mist-night": "FOG",
    };
    return (
      <ReactAnimatedWeather
        icon={codeMaping[props.code]}
        color="#1e1e1e"
        size={props.size}
        animate="true"
      />
    );
}