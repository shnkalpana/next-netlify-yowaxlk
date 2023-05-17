import comments_01 from "public/comments_01.jpg";
import TopNavBar from "@components/TopNavbar";
import Image from "next/image";

export default function Comments() {
  return (
    <div className="bg-[#537195] py-5">
      <title> Comments </title>
      <main>
        <TopNavBar />
        <div className=" flex justify-center py-24">
          <Image
            src={comments_01}
            alt="Annonymous comments"
            width={300}
            height={600}
          />
        </div>
      </main>
    </div>
  );
}
