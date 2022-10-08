import Image from "next/image"
import surf from "../public/surf.jpg"
import Product from "@components/Product"

export default function Home() {
  return (
      <div>
        <title>Yowax.lk</title>
        <main className=" bg-gray-100">
          <section className="min-h-screen py-5">
            <nav className="px-5 py-2 mb-12 flex justify-between">
            <h1 className=" text-xl "> Yowax.lk</h1>
              <ul className="flex pr-2 items-center gap-5">
                <li>Home</li>
                <li>Products</li>
                <li>Shipping info</li>
                <li>Contact us</li>
              </ul>
            </nav>
            <div>
              <Image src={surf} className=" h-4"/>
            </div>
            <h1 className=" text-2xl p-4"> Products </h1>
            <div className=" mt-2 flex gap-1">
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
          </section>
          
        </main>
      </div>
      
  )
}
