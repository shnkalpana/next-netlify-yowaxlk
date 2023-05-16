import Image from "next/image";
import comments_01 from "public/comments_01.jpg";

const Comments = () => (
  <div className=" bg-white flex rounded-lg shadow-lg h-20 overflow-hidden mb-4 m-4 md:block md:h-auto md:w-96">
    <div className=" relative h-20 w-32 md:h-32 md:my-2 md:mr-auto md:ml-auto ">
      <Image
        className="md:object-cover md:overflow-hidden md:rounded-full"
        layout="fill"
        src={comments_01}
        alt="surfing person with waxed surf board "
      />
    </div>
  </div>
);

export default Comments;
