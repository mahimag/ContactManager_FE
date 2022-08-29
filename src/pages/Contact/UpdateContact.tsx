import { Typography } from "antd";
import React from "react";
import NavBar from "../../components/navBar/index";
import UpdateContactForm from "../../components/updateContactForm/UpdateContactForm";
import "./UpdateContact.css";

const UpdateContact: React.FC = () => {
  const { Title } = Typography;

  return (
    <>
      <NavBar />
      <div id="updateContact">
        <Title className="updateContact__title">UpdateContact</Title>
        <UpdateContactForm />
      </div>
    </>
  );
};
export default UpdateContact;
