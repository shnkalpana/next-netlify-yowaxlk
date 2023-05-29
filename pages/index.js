import Image from "next/image";
import yowax_p1 from "public/yowax_p1.jpeg";
import yowax_p2 from "public/yowax_p2.jpeg";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Comments from "@components/Comments";
import TopNavBar from "@components/TopNavbar";
import PhotoCard from "@components/PhotoCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <title>Yowax.lk</title>
      <main className=" bg-[#537195]">
        <section className="min-h-screen md:py-0">
          <TopNavBar />

          <div className=" md:flex px-4">
            <div className=" mt-6 md:ml-14 md:max-w-4xl">
              <div className="md:flex items-center">
                <div className=" h-64 w-5/6 md:w-96 md:flex-shrink-0 md:h-96 ml-auto mr-auto relative ">
                  <PhotoCard />
                </div>
                <div className=" hidden md:block font-serif text-6xl font-bold text-center text-[#e9ecf0] relative ">
                  <p>
                    YOWAX <br />
                    BEST WAX <br />
                    FOR <br />
                    YOUR BOARD
                  </p>
                </div>
              </div>
              <div className=" py-2 mt-4 md:mt-0 md:ml-6 ">
                <p className=" text-gray-500 text-center text-xs md:text-lg md:text-left">
                  <span className=" text-lg font-bold text-[#e9ecf0] uppercase md:tracking-wide md:text-sm md:text-blue-900 md: drop-shadow-lg">
                    YOWAX BEST WAX FOR YOUR BOARD
                  </span>
                  <br />

                  <span className="text-sm text-center text-[#e9ecf0]">
                    Yo Wax is the perfect surf wax for surfers in Sri Lanka who
                    are looking to add more power and stickiness to their
                    surfing experience. Whether you're a beginner just starting
                    out or an intermediate rider looking to take your game up a
                    notch, Yo Wax will help you achieve that sweet spot on the
                    wave. The Yo wax has been expressly formulated for surfers
                    in Sri Lanka. Advantages are Hard wax ever, almost no
                    soluble, long last on board, Makes bumps, Best stickiness.
                  </span>
                </p>
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
        </section>
      </main>
    </div>
  );
}
