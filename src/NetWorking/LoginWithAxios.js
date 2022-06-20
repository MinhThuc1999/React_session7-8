import React from "react";
import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";
import HomePage from "./HomePage";

function LoginWithAxios() {
  const [username, setUseName] = React.useState("");
  const [password, setPassWord] = React.useState("");
  const [status, setStatus] = React.useState(false);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onSubmit = () => {
    const acc = {
      username: `${username}`,
      password: `${password}`,
    };

    const url = "https://training.softech.cloud/api/training/users/login";
    axios
      .post(url, acc)
      .then((result) => {
        console.log(result.data);
        setStatus(result.data.login);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ width: "600px", paddingTop: 100 }}>
      {status && <HomePage />}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            value={username}
            onChange={(e) => {
              setUseName(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            value={password}
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginWithAxios;
