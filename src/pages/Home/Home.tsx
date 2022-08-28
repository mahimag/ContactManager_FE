import { Typography, Button } from "antd";
import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/index";
import ContactBook from "../../components/contactBook/ContactBook";

const Home: React.FC = () => {
  const { Title } = Typography;
  const navigate = useNavigate();

  return (
    <div id="home">
      <NavBar />
      <Title className="home__title">Home</Title>
      <ContactBook />
      <Button className="newcontact" onClick={() => navigate("/contact/add")}>
        Add Contact
      </Button>
    </div>
  );
};
export default Home;
