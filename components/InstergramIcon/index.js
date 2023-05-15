import { BsInstagram } from "react-icons/bs";
import React from "react";
import Link from "next/link";

const InstagramIcon = ({ instargramUrl }) => {
  return (
    <Link to={instargramUrl}>
      <BsInstagram />
    </Link>
  );
};

export default InstagramIcon;
