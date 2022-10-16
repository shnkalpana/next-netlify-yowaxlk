import Image from "next/image";
import yowax_p1 from "public/yowax_p1.jpeg";
import yowax_p2 from "public/yowax_p2.jpeg";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Comments from "@components/Comments";

export default function Home() {
  return (
    <div>
      <title>Yowax.lk</title>
      <main className=" bg-gray-100">
        <section className="min-h-screen py-5">
          
          <div>
            <div className=" w-full h-6 top-0 left-0 ">
              <h1 className=" text-2xl font-bold h-4 text-gray-700 hover:text-gray-900 flex justify-center md:mb-4">
                Yowax.lk
              </h1>
            </div>

            <div className="hidden sm:block">
              <nav className="mt-4 flex justify-center ">
                <ul className="flex items-center gap-8 ">
                  <li className="hover:underline">Home</li>
                  <li className="hover:underline"> Products</li>
                  <li className="hover:underline">Shipping info</li>
                  <li className="hover:underline">Contact us</li>
                </ul>
              </nav>
            </div>
          </div>


          <div className=" md:flex">
          <div className=" mt-6 md:ml-14 md:max-w-4xl">
            <div className=" h-64 w-5/6 md:w-96 md:flex-shrink-0 md:h-96 ml-auto mr-auto relative ">
              <Image
                className=" rounded-2xl "
                src={yowax_p1}
                alt="YO wax tropic surf wax"
                layout="fill"
              />
            </div>
            <div className=" mt-4 md:mt-0 md:ml-6 ">
              <p className=" text-gray-500 text-center text-xs md:text-lg md:text-left">
                <span className=" text-lg font-bold text-blue-800 uppercase md:tracking-wide md:text-sm md:text-blue-900 md: drop-shadow-lg">
                  YO wax
                </span>
                <br />
                <span className="md:block md:mt-1 md:text-lg md:leading-tight font-semibold  text-gray-900">
                  Warm/Tropical Water Surfboard Wax.
                </span>
                <br />
                <span className=" text-gray-800">
                Unic formula Tropic water surfboard wax.Use as Base coat “Thick
                layer” Makes good bumps Use as Top coat “Thin layer” 70 gram
                bars White color Specialty of YO wax, Use as base coat by
                putting more pressure on wax and apply thicker layer Or very
                thin layer if you use as top coat by releasing the pressure on
                wax.
                </span>
              </p>
            </div>
          </div>

          <div className=" mb-12 md:mx-auto mt-4">
            <h1 className=" uppercase text-center text-base md:text-lg font-semibold">our cusomers feed backs</h1>
            <Comments />
            <Comments />
            <Comments />
          </div>
          </div>

          <div className="md:hidden w-full h-12 bg-white fixed left-0 bottom-0 flex justify-center  text-2xl gap-4 pt-3 shadow-md">
            <BsInstagram />
            <BsFacebook />
            <BsWhatsapp />
          </div>
        </section>
      </main>
    </div>
  );
}
