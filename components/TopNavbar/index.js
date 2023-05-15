import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";

const TopNavBar = () => (
  <>
    <div className="bg-[#537195]">
      <div className="bg-[#537195] px-4">
        <div className=" font-serif  md:h-24 flex justify-between md:pt-6 ">
          <div className=" h-6 top-0 left-0">
            <h1 className=" text-2xl font-bold h-4 text-[#e9ecf0] ">
              Yowax.lk
            </h1>
          </div>

          <nav className=" h-6 top-0 text-[#e9ecf0] ">
            <ul className="flex justify-between gap-8 ">
              <li className="hover:underline">
                <BsSearch />
              </li>
              <li className="hover:underline">
                <BsHeart />
              </li>
              <li className="hover:underline">
                <BsCart />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className=" px-4 py-2 text-[#e9ecf0]">
        <hr />
      </div>
    </div>
  </>
);

export default TopNavBar;
