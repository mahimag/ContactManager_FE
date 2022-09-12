import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./ContactBook.css";
import { Contact } from "../../interfaces/Contact";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ContactBook = () => {
  const navigate = useNavigate();

  const onDeleteHandler = async (id: number) => {
    await axios.delete(`/contacts/${id}`);
    navigate("/");
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
        return record.isFav ? <HeartFilled /> : <HeartOutlined />;
      },
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div id="actions">
          <Button
            onClick={() => {
              onDeleteHandler(+record.id);
            }}
          >
            Delete
          </Button>
          <Button>
            <Link to={`/contact/update/${record.id}`}>Update</Link>
          </Button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    getData(1);
  }, []);

  const getData = (id: number) => {
    axios("/contacts", {
      method: "POST",
      data: {
        id: localStorage.getItem("id"),
      },
    })
      .then((res) => {
        const newData = res.data.data.map((item: Contact, idx: number) => {
          return {
            ...item,
            key: idx,
          };
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [data, setData] = useState<Contact[]>([]);

  return <Table className="contactbook" columns={columns} dataSource={data} />;
};

export default ContactBook;
