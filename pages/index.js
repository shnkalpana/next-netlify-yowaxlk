import Image from "next/image"
import yowax_p1 from "public/yowax_p1.jpeg"
import yowax_p2 from "public/yowax_p2.jpeg"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import Comments from "@components/Comments"


export default function Home() {
  return (
      <div>
        <title>Yowax.lk</title>
        <main className=" bg-gray-100">
          <section className="min-h-screen py-5">
            <div className=" w-full fixed h-12 top-0 left-0 pt-2 ">
              <h1 className=" text-2xl font-bold h-4 text-gray-700 hover:text-gray-900 flex justify-center "> Yowax.lk</h1>
            </div>
          
            <div className="hidden sm:block">
            <nav className="mt-4 flex justify-center ">
              <ul className="flex items-center gap-5 ">
                <li>Home</li>
                <li>Products</li>
                <li>Shipping info</li>
                <li>Contact us</li>
              </ul>
            </nav>
            </div>
            
            <div className=" p-2 md:flex  ">
              <div className=" w-full h-auto pt-8">
                <Image className=" shadow-black" src={yowax_p1}/>
              </div>
             
              <p className=" text-gray-500 text-center text-xs md:text-lg    md:text-left">
              <span className=" text-lg font-semibold text-gray-800">YO wax</span><br/>
                  <span className=" text-gray-700">Warm/Tropical Water Surfboard Wax.</span><br/>

                    Unic formul Tropic water surfboard wax.Use as Base coat “Thick layer” Makes good bumps Use as Top coat “Thin layer” 70 gram bars White color Specialty of YO wax, Use as base coat by putting more pressure on wax and apply thicker layer Or very thin layer if you use as top coat by releasing the pressure on wax.
              </p>
            </div>

            <div className=" mb-12">
              <Comments/>
              <Comments/>
              <Comments/>
            </div>

            <div className="sm:hidden w-full h-12 bg-white fixed left-0 bottom-0 flex justify-center  text-2xl gap-4 pt-3 shadow-md">
              <BsInstagram/>
              <BsFacebook/>
              <BsWhatsapp/>
            </div>

          </section>
          
        </main>
      </div>
      
  )
}
