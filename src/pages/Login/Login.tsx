import { Typography } from "antd";
import React from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import { isUserLoggedIn } from "../../utils/localStorage";
import "./Login.css";

const Login: React.FC = () => {
  const { Title } = Typography;
  return isUserLoggedIn() ? (
    <Navigate to="/contact" />
  ) : (
    <div className="login">
      <div className="login__container">
        <Title className="login__title">Contact Manager</Title>
        <Title className="login__subtitle" level={2}>
          Login
        </Title>
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
