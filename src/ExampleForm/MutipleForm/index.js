import React from "react";

function MutipleForm() {
  const [inputs, setInputs] = React.useState({
    username: "thuc",
    password: "060599",
    children: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);
  };

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setInputs((values) => ({ ...values, [e.target.name]: e.target.checked }));
    } else {
      setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nhập username</label>
        <input
          type={"text"}
          id="username"
          name="username"
          value={inputs.username}
          placeholder="nhập username"
          onChange={handleChange}
        />
        <label htmlFor="password">Nhập Password</label>
        <input
          type={"password"}
          id="password"
          name="password"
          value={inputs.password}
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="children"
          value={inputs.children}
          onChange={handleChange}
        />
        <input type={"submit"} value="submit" />
      </form>
    </div>
  );
}

export default MutipleForm;
