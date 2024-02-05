import React from "react";

const Details = ({ props }) => {
  const dets = [
    {
      icon: "",
      sign: "%",
      title: "Humidity",
      prop: props.humidity,
    },
    {
      icon: "",
      sign: "KM/H",
      title: "Wind Speed",
      prop: props.speed,
    },
    {
      icon: "",
      sign: "",
      title: "Longitude",
      prop: props.longitude,
    },
    {
      icon: "",
      sign: "",
      title: "Latitude",
      prop: props.latitude,
    },
  ];

  return (
    <div className="right w-1/2 border-2 flex flex-col items-center py-12 text-white">
      <div className="location text-4xl  font-bold">{props.location}</div>
      <div className="icon"></div>
      <div className="weather text-7xl my-6 font-medium">
        {props.weather === "" ? `${props.weather}` : `${props.weather} C`}
      </div>
      <div className="description text-2xl font-medium">
        {props.description}
      </div>
      <div className="details">
        <div className="detail">
          {dets.map((det) => {
            return (
              <div className="flex" key={det.title}>
                <div className="icon">{det.icon}</div>
                <div className="text">
                  {det.prop === "" ? null : (
                    <div>
                      <p>
                        {det.prop}
                        {det.sign}
                      </p>
                      <p>{det.title}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="detail">
          <div className="humidity flex">
            <div className="icon"></div>
            <div className="text">
              {props.humidity === "" ? null : (
                <div>
                  <p>{props.humidity}%</p>
                  <p>Humidity</p>
                </div>
              )}
            </div>
          </div>
          <div className="wind-speed">
            <div className="icon"></div>
            <div className="text">
              {props.speed === "" ? null : (
                <div>
                  <p>{props.speed}Km/h</p>
                  <p>Wind Speed</p>
                </div>
              )}
            </div>
          </div>
          <div className="longitude">
            <div className="icon"></div>
            <div className="text">
              {props.speed === "" ? null : (
                <div>
                  <p>{props.speed}Km/h</p>
                  <p>Longitude</p>
                </div>
              )}
            </div>
          </div>
          <div className="latitude">
            <div className="icon"></div>
            <div className="text">
              {props.speed === "" ? null : (
                <div>
                  <p>{props.speed}Km/h</p>
                  <p>Latitude</p>
                </div>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Details;
