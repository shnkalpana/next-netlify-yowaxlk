import Image from "next/image"
import wax1 from "public/wax1.webp"

const Product = () => (
    <div className=" bg-white rounded-md overflow-hidden shadow-sm w-fit p-5" >
        <Image src={wax1} alt="product wax" width={300} height={300}/>
        <h3 className=" ">Product name</h3>
        <h3>price</h3>
    </div>
)

export default Product