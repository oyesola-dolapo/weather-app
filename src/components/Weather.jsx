import { useState, useEffect } from "react";
import styles from "./Weather.module.css";
import Details from "./Details";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [speed, setSpeed] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const props = {
    location,
    weather,
    description,
    humidity,
    speed,
    longitude,
    latitude,
  };

  const [value, setValue] = useState("");
  const inputChange = (e) => {
    setValue(e.target.value);
  };

  const searchWeather = async (event) => {
    event.preventDefault();

    const api_key = "ee65bf1f053cbeff6ba31515cfa33bf7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=Metric&appid=${api_key}`;
    const res = await fetch(url);
    const data = await res.json();
    if (value !== "") {
      setLocation(data.name);
      setWeather(data.main.temp);
      setDescription(data.weather[0].description);
      setHumidity(data.main.humidity);
      setSpeed(data.wind.speed);
      setLongitude(data.coord.lon);
      setLatitude(data.coord.lat);
      setValue("");
    }
  };

  return (
    <div className={`${styles.container} min-w-full flex`}>
      <div className={`${styles["blur-overlay"]} -z-10`}></div>
      <div className="left w-1/2 border-2 p-12">
        <header className="text-white text-4xl font-medium mb-8">
          WEATHER APP
        </header>
        <form action="" className="bg-white p-1 w-max" onSubmit={searchWeather}>
          <input
            type="text"
            id="country_input"
            className={` bg-transparent h-full border-none outline-none px-2 w-[20rem]`}
            placeholder="Enter Location"
            onChange={inputChange}
            value={value}
          />
          <button
            type="submit"
            className="search h-full bg-[#89af07] text-white py-2 px-4">
            Search
          </button>
        </form>
      </div>
      <Details props={props} />
    </div>
  );
};

export default Weather;
