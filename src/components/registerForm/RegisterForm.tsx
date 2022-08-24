import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setPassword,
  setRegistered,
  setUsername,
} from "../../features/RegisterSlice";
import "./RegisterForm.css";

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    if (values.password === values.confirmed) {
      dispatch(setUsername(values.username));
      dispatch(setPassword(values.password));
      dispatch(setRegistered(true));
      navigate("../");
    } else {
      dispatch(setRegistered(false));
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
      id="registerForm"
      // style={{ width: "400px" }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" />
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
