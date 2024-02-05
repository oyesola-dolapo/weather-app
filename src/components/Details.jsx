import React from "react";
import styles from "./Details.module.css";

const Details = ({ props }) => {
  const dets = [
    {
      icon: "../../icons/humidity.png",
      sign: "%",
      title: "Humidity",
      prop: props.humidity,
    },
    {
      icon: "../../icons/wind.png",
      sign: "KM/H",
      title: "Wind Speed",
      prop: props.speed,
    },
    {
      icon: "../../icons/lon.png",
      sign: "",
      title: "Longitude",
      prop: props.longitude,
    },
    {
      icon: "../../icons/lat.png",
      sign: "",
      title: "Latitude",
      prop: props.latitude,
    },
  ];

  return (
    <div className="right py-4 md:w-1/2 flex flex-col items-center sm:py-12 text-white">
      <div className="location text-4xl  font-bold">{props.location}</div>
      <div className="icon"></div>
      <div className="weather text-7xl my-6 font-medium">
        {`${props.weather} \u00B0C`}
      </div>
      <div className="description text-2xl font-medium">
        {props.description}
      </div>
      <div className={`${styles.details} rounded mt-12 md:mt-auto`}>
        {dets.map((det) => {
          return (
            <div
              className={`${styles.detail} flex w-1/2 gap-4 py-4 p-2 md:p-6`}
              key={det.title}>
              <img src={det.icon} alt="" className="w-[2rem] h-[2rem]"/>
              <div className="text">
                <p className="text-sm md:text-lg">
                  {det.prop}
                  {det.sign}
                </p>
                <p className="text-sm md:text-xl">{det.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
