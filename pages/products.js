import ProductCard from "/components/Product/productCard";
import TopNavBar from "@components/TopNavbar";
import React from "react";
import yowax_6x from "/public/yowax_6x.jpg";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function products() {
  const products = [
    {
      productId: 1,
      productname: "Yo wax 6x",
      productimage: "/6x.jpeg",
      description:
        "Yo Wax is the perfect wax for surfing enthusiasts. Our well tested formula provides long-lasting results.  Made in Sri Lanka, Yo Wax is the perfect solution for beginner and intermediate surfers.",
    },

    {
      productId: 2,
      productname: "Yo wax 10x",
      productimage: "/10x.png",
      description:
        "Product to use in surf schools and surf camps.Advantages are Hard wax ever, almost no soluble, long last on board, Makes bumps, Best stickiness. Wax is the perfect wax for surfing enthusiasts. Our well tested formula provides long-lasting results.  Made in Sri Lanka, Yo Wax is the perfect solution for beginner and intermediate surfers.",
    },
  ];

  return (
    <div className="bg-[#537195] h-screen">
      <TopNavBar />
      <div className="px-4 text-[#e9ecf0] font-serif text-xl pt-2">
        {" "}
        Our Products{" "}
      </div>
      <div className=" flex justify px-4 py-8 gap-2">
        {products.map((product, index) => (
          <ProductCard
            key={product.productId}
            productName={product.productname}
            productImage={product.productimage}
            description={product.description}
          />
        ))}
      </div>
      <div className="md:hidden w-full h-12 bg-white fixed justify-center bottom-0 flex  text-2xl gap-4 pt-3 shadow-md">
        <Link
          href={"https://instagram.com/yohan_surf_shop?igshid=NTc4MTIwNjQ2YQ=="}
        >
          <BsInstagram />
        </Link>
        <Link
          href={
            "https://www.facebook.com/profile.php?id=100066829083540&mibextid=LQQJ4d"
          }
        >
          {" "}
          <BsFacebook />
        </Link>
        <div className=" flex gap-2">
          <BsWhatsapp /> <a className=" text-base"> +94 76 062 5116 </a>
        </div>
      </div>
    </div>
  );
}
