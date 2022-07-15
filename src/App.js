import React, { useState } from "react";
import axios from "axios";
import Navigation from "./components/navigation.jsx";

const ICONS = {
  Rain: "https://cdn-icons-png.flaticon.com/512/1779/1779861.png",
  Snow: "https://cdn-icons-png.flaticon.com/512/1779/1779887.png",
  Clouds: "https://cdn-icons-png.flaticon.com/512/1779/1779754.png",
  Clear: "https://cdn-icons-png.flaticon.com/512/1779/1779906.png",
  Default:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/640px-HD_transparent_picture.png",
};

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API = process.env.REACT_APP_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  //const weatherIcon = ICONS[data.weather[0].main] ?? ICONS.Default;

  const iconKey = data?.weather?.[0].main ?? "Default";
  const weatherIcon = ICONS[iconKey] ?? ICONS.Default;

  /*
  let iconKey = "Default";
  if (data && data.weather && data.weather[0] && data.weather[0].main) {
    iconKey = data.weather[0].main;
  }
  let weatherIcon = ICONS.Default;
  if (ICONS.keys().includes(iconKey)) {
    weatherIcon = ICONS[iconKey];
  }
*/

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div>
            <img src={weatherIcon} alt="lorem ipsum" />
          </div>

          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.main ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold">{data.main.humidity.toFixed()}%</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
