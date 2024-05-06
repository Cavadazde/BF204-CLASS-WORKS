import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getAll } from "../../../services";
import { endpoints } from "../../../services/constant";
import EmployeeCard from "./EmployeeCard";

const UserEmployees = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAll(endpoints.employees)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="row">
        {data &&
          data.map((item) => {
            return (
              <div className="col-4">
                <EmployeeCard key={item.id} item={item} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UserEmployees;
