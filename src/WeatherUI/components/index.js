import React from "react";
import styles from "./blockweather.module.css";
import WeatherToday from "./WeatherToday";
import { Col, Row } from "antd";
import { GoLocation } from "react-icons/go";
import { HiMenuAlt4 } from "react-icons/hi";

function WrapperWrather({ temp = 23, urlBack = 1 }) {
  return (
    <div
      style={{ backgroundImage: `url('/images/natural${urlBack}.jpg')` }}
      className={styles.WrapperWrather_container}
    >
      <div className={styles.WrapperWrather_title}>
        <div style={{ fontSize: 18, marginTop: 10 }}>
          <Row>
            <Col span={3}>
              <GoLocation />
            </Col>
            <Col span={4}>Tuscany</Col>
            <Col span={3} offset={14}>
              <HiMenuAlt4 />
            </Col>
          </Row>
        </div>
        <div className={styles.weatherNow}>
          <div style={{ fontSize: "6rem" }}>{temp}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
              transform: "rotate(-90deg)",
            }}
          >
            It's Sunny
          </div>
        </div>
      </div>
      <div>
        <WeatherToday />
      </div>
    </div>
  );
}

export default WrapperWrather;
