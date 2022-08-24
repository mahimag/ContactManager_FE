import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Contact } from "../../interfaces/Contact";
import { getCredentialsFromLocalStorage } from "../utils/localStorage";
import "./ContactForm.css";

interface ContactFormInterface {
  update: boolean;
  oldData?: Contact;
}

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ContactForm = (props: ContactFormInterface) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const METHOD = props.update ? "PUT" : "POST";

  const onFinish = (values: any) => {
    const formData = new FormData();
    // const { userId } = getCredentialsFromLocalStorage;
    formData.append("firstname", values.firstname);
    formData.append("lastname", values.lastname);
    formData.append("email", values.email);
    formData.append("number", values.number);
    formData.append("contact", values.contact.phone);
    formData.append("address", values.address);
    formData.append("photo", values.photo[0].originFileObj);
    formData.append("is_fav", `${!!values.is_fav}`);
    // formData.append("user_id", userId as string);
    if (props.update) {
      formData.append("id", props.oldData?.id as string);
    }
    // try {
    //   const res = await axios(URL, {
    //     method: METHOD,
    //     data: formData,
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   if (res.data.data) {
    //     console.log("Contact created successfully");
    //     navigate("/home");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  // dispatch(setFirstName(values.firstname));
  // dispatch(setLastName(values.lastname));
  // dispatch(setNumber(values.number));

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
      id="contactForm"
      // style={{ width: "400px" }}
    >
      <Form.Item
        label="First Name"
        name="firstname"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="number"
        rules={[{ required: true, message: "Please input your number!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        className="ContactForm__btn"
        wrapperCol={{ offset: 11, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
