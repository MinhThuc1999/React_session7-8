import React from "react";
import WrapperWrather from "./components";
import WeatherToday from "./components";
import styles from "./weather.module.css";
function Weather() {
  return (
    <div
      style={{
        backgroundColor: "pink",
        height: "1000px",
        display: "flex",
        justifyContent: "space-around",
        padding: "30px 0",
      }}
    >
      <WrapperWrather />
      <WrapperWrather temp={10} urlBack={2} />
      <WrapperWrather temp={30} urlBack={3} />
    </div>
  );
}

export default Weather;
