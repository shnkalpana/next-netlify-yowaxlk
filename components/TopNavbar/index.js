import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import Link from "next/link";

const TopNavBar = () => (
  <>
    <div className="bg-[#537195]">
      <div className="bg-[#537195] px-4">
        <div className=" font-serif  md:h-16 flex justify-between md:pt-6 ">
          <div className=" h-6 top-0 left-0">
            <h1 className=" text-2xl font-bold h-4 text-[#e9ecf0] ">
              <Link href="/">Yowax.lk</Link>
            </h1>
          </div>

          <nav className=" h-6 top-0 text-[#e9ecf0] mt-2">
            <ul className="flex justify-between gap-8 ">
              <li className="hover:underline">
                <Link href="/Comments/comments">
                  <div className="md:hidden ">
                    <BsHeart />
                  </div>
                  <div className="hidden md:block">Comments</div>
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/products">
                  <div className=" md:hidden">
                    <BsCart />
                  </div>
                  <div className=" hidden md:block">Products</div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className=" px-4 pb-2  text-[#e9ecf0]">
        <hr />
      </div>
    </div>
  </>
);

export default TopNavBar;
