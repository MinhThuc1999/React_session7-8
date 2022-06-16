import React from "react";
import styles from "./blockweather.module.css";
import { BsFillSunFill, BsFillCloudLightningRainFill } from "react-icons/bs";
import { WiDayCloudy } from "react-icons/wi";
import { RiDivideFill } from "react-icons/ri";

import { Button, Radio, Space } from "antd";

const weatherObject = [
  { icon: <BsFillSunFill />, times: "05:00 AM", temperature: 20 },
  {
    icon: <BsFillCloudLightningRainFill />,
    times: "10:00 AM",
    temperature: 20,
  },
  {
    icon: <WiDayCloudy />,
    times: "01:00 PM",
    temperature: 20,
  },
  {
    icon: <BsFillSunFill />,
    times: "05:00 PM",
    temperature: 20,
  },
];
function WeatherToday({ weather = weatherObject }) {
  return (
    <div className={styles.weatherToday}>
      <div style={{ marginTop: 5 }}>
        <p style={{ margin: 0 }}>
          <RiDivideFill />
        </p>
        <p style={{ fontWeight: "700", fontSize: "17px" }}>Weather Today</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Space size="middle">
          {weather.map((item, index) => {
            return (
              <div key={index}>
                <p className={styles.weatherToday_icon}>{item.icon}</p>
                <p className={styles.weatherToday_times}>{item.times}</p>
                <p className={styles.weatherToday_temp}>{item.temperature}</p>
              </div>
            );
          })}
        </Space>
      </div>
    </div>
  );
}

export default WeatherToday;
