import React, { useState } from "react";
import { Button, Space, Table, Tooltip, Popconfirm, message } from "antd";
import { deleteOne } from "../services";
import { endpoints } from "../services/constant";

const Tablee = ({ products, setProducts }) => {
  const cancel = (id) => {
   
    message.error("Click on No");
  };
  const confirm = (id) => {
    deleteOne(endpoints.products, id).then((response) => {
        if (response.status === 200) {
          const filtered = [...products].filter((q) => q.id !== id);
          console.log(filtered)
          setProducts(filtered);
        }
      });
    console.log(id);
    message.success("Click on Yes");
  };
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
    },

    {
      title: "image",
      dataIndex: "image",
      render: (element) => {
        return <img src={element} alt="" width={100} />;
      },
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.title - b.title,
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      render: (element, data, i) => (
        <Tooltip title={element}>
          <span>{element.slice(0, 50)}...</span>
        </Tooltip>
      ),
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Delete",
      dataIndex: "Delete",
      render: (element, data, index) => {
        return (
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(data.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        );
      },
    },

    {
        title: "Edit",
      dataIndex: "Edit",
      render: (element) => {
        return <button type="primary" >Edit</button>;
      }
    }
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={products}
        pagination={{ pageSize: 4 }}
        rowKey={"id"}
      />
    </>
  );
};
export default Tablee;
