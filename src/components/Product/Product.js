import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <img src={product.img} alt="" className="p-img" />
    </div>
  );
};

export default Product;
