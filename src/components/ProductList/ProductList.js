import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";
import img1 from "../../image/54 inspirierende Landingpage-Designs - 99designs.png";
import img2 from "../../image/6 Trendy Layouts for Homepages_ You Must Try In 2022.png";
import img3 from "../../image/ApeTech - App Landing Page Template.jpeg";
import img4 from "../../image/Business Coach Website Design Layout.png";
import img5 from "../../image/ngejob_landing_page_png by Kemonn.png";
import img6 from "../../image/One page - Earnings from student work.png";

const products = [
  { no: 0, img: img1 },
  { no: 1, img: img2 },
  { no: 2, img: img3 },
  { no: 3, img: img4 },
  { no: 4, img: img5 },
  { no: 5, img: img6 },
];

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portfolio</h1>
        <p className="pl-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          facere! Quo totam autem illum? Libero rem incidunt hic nesciunt.
        </p>
      </div>
      <div className="pl-list">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
