import React from "react";
import List from "../List";
import ListItem from "../ListItem";
const Contact = ({ data }) => {
  return (
    <List>
      {data &&
        data.map((product) => {
          return <ListItem key={product.id} product={product} />;
        })}
    </List>
  );
};
export default Contact;
