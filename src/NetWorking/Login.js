import React from "react";
import HomePage from "./HomePage";

function Login() {
  const onSubmit = () => {
    const acc = {
      username: "tungnt",
      password: "123456789",
    };

    const url = "https://training.softech.cloud/api/training/users/login";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(acc),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        if (json.login) {
          return <HomePage />;
        }
      });
  };
  return (
    <div>
      <h1>Vui lòng Login</h1>
      <button onClick={onSubmit}>Login</button>
    </div>
  );
}

export default Login;
