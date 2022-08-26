import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./ContactBook.css";
import { Contact } from "../../interfaces/Contact";
import axios from "axios";

const onDeleteHandler = async (id: number) => {
  console.log(id);
  await axios.delete(`/contacts/${id}`);
  window.location.reload();
};

const columns: ColumnsType<Contact> = [
  {
    title: "Photo",
    dataIndex: "photo",
    key: "photo",
    render: (url) => (
      <img
        style={{
          width: "80px",
          height: "80px",
        }}
        src={url}
        alt={url}
      />
    ),
  },
  { title: "Name", dataIndex: "firstname", key: "firstname" },
  { title: "Number", dataIndex: "number", key: "number" },
  {
    title: "Favorite",
    dataIndex: "isFav",
    key: "isFav",
    render: (_, record) => {
      console.log(record);
      return record.isFav ? <HeartFilled /> : <HeartOutlined />;
    },
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (_, record) => (
      <div className="actions">
        <Button
          onClick={() => {
            onDeleteHandler(+record.id);
          }}
        >
          Delete
        </Button>
        <Button>
          <a href={`/update/${record.id}`}>Update</a>
        </Button>
      </div>
    ),
  },
];

const ContactBook: React.FC = () => {
  useEffect(() => {
    getData(1);
  }, []);

  const getData = (id: number) => {
    axios
      .get("http://localhost:3001/contacts")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [data, setData] = useState<Contact[]>([]);
  return <Table className="contactbook" columns={columns} dataSource={data} />;
};

export default ContactBook;
