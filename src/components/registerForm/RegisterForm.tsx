import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    if (values.password === values.confirmed) {
      axios("/signup", {
        method: "POST",
        data: {
          email: values.email,
          password: values.password,
        },
      })
        .then((data) => navigate("/login"))
        .catch((err) => console.log(err));
    } else {
      console.log("Password doesn't match");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
      id="registerForm"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="confirmed"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item
        className="registerForm__btn"
        wrapperCol={{ offset: 11, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <a href="/">Cancel.</a>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
