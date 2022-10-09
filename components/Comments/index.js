import Image from "next/image"
import surf from "public/surf.jpg"

const Comments = () => (
    <div className=" bg-white flex rounded-md shadow-sm h-20 w- overflow-hidden mb-4 m-4" >
        <div className=" h-fit w-32">
            <Image className="h-full" src={surf} alt="surfing person with waxed surf board "/>
        </div>
        <div className=" m-1 text-left">
            <h1> Surfer </h1>
            <p> " YO wax is the best wax . "</p>
        </div>
    </div>
)

export default Comments