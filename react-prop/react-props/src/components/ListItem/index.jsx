import React from "react";

const ListItem = ({ product }) => {
  return (
      <li>{product.name}, {product.price}</li>
  );
};

export default ListItem;
