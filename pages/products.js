import ProductCard from "/components/Product/productCard";
import TopNavBar from "@components/TopNavbar";
import React from "react";

export default function products() {
  const products = [
    {
      productId: 1,
      productname: "6x",
      productimage: "/public/yowax_6x.jpg",
      description:
        "Yo Wax is the perfect wax for surfing enthusiasts. Our well tested formula provides long-lasting results.  Made in Sri Lanka, Yo Wax is the perfect solution for beginner and intermediate surfers.",
    },

    {
      productId: 2,
      productname: "10x",
      productimage: "/public/yowax_6x.jpg",
      description:
        "Yo Wax is the perfect wax for surfing enthusiasts. Our well tested formula provides long-lasting results.  Made in Sri Lanka, Yo Wax is the perfect solution for beginner and intermediate surfers.",
    },
  ];

  return (
    <div className=" flex">
      {products.map((product, index) => (
        <ProductCard
          key={product.productId}
          productName={product.productname}
          productImage={product.productimage}
          description={product.description}
        />
      ))}
    </div>
  );
}
