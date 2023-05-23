import React from "react";

const ProductCard = ({ productName, productImage, description }) => {
  return (
    <div className="">
      <img src={productImage} alt={productName} className=" w-6 h-10" />
      <div>{productName}</div>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
