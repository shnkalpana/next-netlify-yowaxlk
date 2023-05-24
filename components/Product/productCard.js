import React from "react";
import Image from "next/image";

const ProductCard = ({ productName, productImage, description }) => {
  return (
    <div className=" grid-cols-3 border rounded-xl w-80 h-96 px-1">
      <img
        className=" rounded-lg mt-3 flex mx-10"
        src={productImage}
        alt={productName}
        width={100}
        height={100}
      />
      <div className=" text-center mt-1 text-[#e9ecf0]">{productName}</div>
      <p className=" text-xs text-center text-[#e9ecf0]">{description}</p>
    </div>
  );
};

export default ProductCard;
