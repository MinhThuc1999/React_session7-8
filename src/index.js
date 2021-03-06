import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ExampleForm from "./ExampleForm";
import AntDesigne from "./UsingAntDesigne";
import ExersizeForm from "./ExersizeForm";
import Weather from "./WeatherUI";
import Login from "./NetWorking/Login";
import TodoList from "./TodoList";
import CallAPI from "./NetWorking";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CallAPI />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
