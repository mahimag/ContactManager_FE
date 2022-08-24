import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import "./ContactBook.css";
import { Contact } from "../../interfaces/Contact";

interface DataType {
  key: React.Key;
  name: string;
  number: string;
}

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
      />
    ),
  },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Number", dataIndex: "number", key: "number" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => (
      <div className="actions">
        <HeartOutlined />
        <a href="/newcontact">Update</a>
        <a>Delete</a>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: "John Brown",
    number: "4256159080",
  },
  {
    key: 2,
    name: "Jim Green",
    number: "4251234567",
  },
];

const ContactBook: React.FC = () => (
  <Table className="contactbook" columns={columns} dataSource={data} />
);

export default ContactBook;
