import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../features/LoginSlice";
import "./LoginForm.css";
import axios from "axios";
import { User } from "../../interfaces/User";
import { addAccessTokensToLocalStorage } from "../../utils/localStorage";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    const credentials = {
      email: values.email,
      password: values.password,
    };

    try {
      const res = await axios({
        method: "POST",
        url: "/signin",
        data: credentials,
      });

      if (res.data) {
        const data = res.data.data;
        addAccessTokensToLocalStorage(data.accessToken, "true");
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.accessToken}`;
        navigate("/contact");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      // labelCol={{ span: 9 }}
      // wrapperCol={{ span: 15 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
      id="loginForm"
      // style={{ width: "400px" }}
    >
      <Form.Item
        name="email"
        className="loginForm__item"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        className="loginForm__item"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        className="loginForm__btn"
        wrapperCol={{ offset: 11, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <p>
        Not a member? <a href="/register">Register!</a>
      </p>
    </Form>
  );
};

export default LoginForm;
