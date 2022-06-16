import React from "react";
import { Button, DatePicker, version, Rate } from "antd";
import { TiWeatherDownpour } from "react-icons/ti";
function AntDesigne() {
  return (
    <div>
      <Button type="primary" icon={<TiWeatherDownpour />}>
        Continute
      </Button>
      <Rate />
    </div>
  );
}

export default AntDesigne;
