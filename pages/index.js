import Image from "next/image"

export default function Home() {
  return (
      <div>
        <title>Yowax.lk</title>
        <main className=" bg-white px-10">
          <section className="min-h-screen py-5">
            <nav className="py-8 mb-12 flex justify-between">
            <h1> Yowax.lk</h1>
              <ul className="flex pr-2 items-center">
                <li>About</li>
                <li className="ml-8">Products</li>
              </ul>
            </nav>
            <div>
              <Image src="/surf.jpg" className=" h-40 w-auto"/>
            </div>
          </section>
          
        </main>
      </div>
      
  )
}
