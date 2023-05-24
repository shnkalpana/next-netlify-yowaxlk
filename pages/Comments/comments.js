import comments_01 from "public/comments_01.jpg";
import TopNavBar from "@components/TopNavbar";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import srf_img from "/public/surfing avatar.jpeg";

export default function Comments() {
  return (
    <div className="bg-[#537195] h-screen">
      <title> Comments </title>
      <main className="">
        <div className="">
          <TopNavBar />
        </div>

        <div className="px-4 text-[#e9ecf0] font-serif text-xl pt-2">
          Customers feedbacks
        </div>

        <div className=" flex justify-center ">
          <div className=" grid-cols-2">
            <div className=" flex py-2 font-serif text-[#e9ecf0]">
              <div>Annonymous comment</div>
            </div>
            <div>
              <Image
                src={comments_01}
                alt="Annonymous comments"
                className=" h-auto w-64 rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full h-12 bg-white fixed justify-center bottom-0 flex  text-2xl gap-4 pt-3 shadow-md">
          <Link
            href={
              "https://instagram.com/yohan_surf_shop?igshid=NTc4MTIwNjQ2YQ=="
            }
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
      </main>
    </div>
  );
}
