import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, Checkbox } from "antd";
import { Contact, ContactToUpdate } from "../../interfaces/Contact";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateContactForm.css";
import { response } from "express";

interface UpdateContactFormInterface {
  oldData?: Contact;
}

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const UpdateContactForm = (props: UpdateContactFormInterface) => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState<ContactToUpdate>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    console.log("this is id", id);
    axios
      .get(`/contacts/${id}`)
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        setData({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          number: data.number,
          address: data.address,
          isFav: [data.isFav],
          photo: [],
        });
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const [fav, setFav] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    const formData = new FormData();
    console.log(values);
    // const { userId } = getCredentialsFromLocalStorage;
    formData.append("firstname", values.firstname);
    formData.append("lastname", values.lastname);
    formData.append("email", values.email);
    formData.append("number", values.number);
    formData.append("address", values.address);
    console.log(values.upload[0].originFileObj);
    formData.append("photo", values.upload[0].originFileObj);
    formData.append("is_fav", `${fav}`);
    formData.append("user_id", "1");
    formData.append("id", "1");

    try {
      const res = await axios(`/contacts/${id}`, {
        method: "PUT",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.data) {
        console.log("Contact updated successfully");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // dispatch(setFirstName(values.firstname));
  // dispatch(setLastName(values.lastname));
  // dispatch(setNumber(values.number));

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Form
      name="basic"
      // labelCol={{ span: 9 }}
      // wrapperCol={{ span: 15 }}
      initialValues={data}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
      id="UpdateContactForm"
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
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input your address!" }]}
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
        <Upload name="photo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item name="isFav" label="Fav">
        <Checkbox.Group>
          <Checkbox value={true} onChange={(e) => setFav(e.target.checked)} />
        </Checkbox.Group>
      </Form.Item>

      <Form.Item
        className="UpdateContactForm__btn"
        wrapperCol={{ offset: 11, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateContactForm;
