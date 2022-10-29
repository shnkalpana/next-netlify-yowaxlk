const TopNavBar = () => (
    <>
              <div className=" md:h-24 md:bg-white md:shadow-md md:flex justify-center md:pt-6 md:gap-96">
            <div className=" h-6 top-0 left-0">
              <h1 className=" text-2xl font-bold h-4 text-gray-700 hover:text-gray-900 text-center">
                Yowax.lk
              </h1>
            </div>

            <div className="hidden md:block">
              <nav className="flex">
                <ul className="flex items-center gap-8 ">
                  <li className="hover:underline">Home</li>
                  <li className="hover:underline"> Products</li>
                  <li className="hover:underline">Shipping info</li>
                  <li className="hover:underline">Contact us</li>
               </ul>
              </nav>
            </div>
          </div> 
    </>
)

export default TopNavBar