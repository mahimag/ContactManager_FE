import { Typography } from "antd";
import React from "react";
import "./Contact.css";
import NavBar from "../../components/navBar/index";
import ContactForm from "../../components/contactForm/ContactForm";

const Contact: React.FC = () => {
  const { Title } = Typography;

  return (
    <>
      <NavBar />
      <div id="contact">
        <Title className="contact__title">Contact</Title>
        <ContactForm />
      </div>
    </>
  );
};
export default Contact;
