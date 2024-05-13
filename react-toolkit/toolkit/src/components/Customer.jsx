import { Button, Table } from "antd";
import {
  useGetAllCustomersQuery,
  useDeleteCategoryByIDMutation,
} from "../services/categoryApi";
import { MdDeleteOutline } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Customers = () => {
  const { data, refetch } = useGetAllCustomersQuery();
  const [deleteCategoryByID] = useDeleteCategoryByIDMutation();
 
  const columns = [
    {
      title: "companyName",
      dataIndex: "companyName",
    },
    {
      title: "contactName",
      dataIndex: "contactName",
    },
    {
      title: "contactTitle",
      dataIndex: "contactTitle",
    },
    {
      title: "Delete",
      render: (data, record) => {
        return (
          <Button
            type="submit"
            onClick={async () => {
              if (window.confirm("delete?")) {
                await deleteCategoryByID(record.id);
                refetch();
              }
            }}
          >
            <MdDeleteOutline />
          </Button>
        );
      },
    },
    // {
    //   title: "favs",
    //   render: (record) => {
    //     return (
    //       <Button onClick={()=>dispatch(toggle(record))}>
    //         <CiHeart />
    //       </Button>
    //     );
    //   },
    // },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      showSorterTooltip={{
        target: "sorter-icon",
      }}
      rowKey="id"
    />
  );
};

export default Customers;
