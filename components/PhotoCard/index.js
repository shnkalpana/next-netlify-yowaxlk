import Image from "next/image";
import yowax_6x from "public/yowax_6x.jpg";

const PhotoCard = () => (
  <>
    <div className=" flex justify-center ">
      <Image src={yowax_6x} width={300} height={300} />
    </div>
  </>
);
export default PhotoCard;
