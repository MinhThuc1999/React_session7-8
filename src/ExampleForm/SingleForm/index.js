import React from "react";

function SingelFrorm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nhập username</label>
        <input
          type={"text"}
          id="username"
          name="username"
          value={username}
          placeholder="nhập username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password">Nhập Password</label>
        <input
          type={"password"}
          id="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type={"submit"} value="submit" />
      </form>
    </div>
  );
}

export default SingelFrorm;
