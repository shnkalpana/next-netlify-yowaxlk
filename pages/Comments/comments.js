import comments_01 from "public/comments_01.jpg";
import TopNavBar from "@components/TopNavbar";
import Image from "next/image";

export default function Comments() {
  return (
    <div>
      <title> Comments </title>
      <main className="bg-[#537195] py-2">
        <TopNavBar />
        <div className=" flex justify-center py-2 mb-0">
          <Image
            src={comments_01}
            alt=" Annonymous comments"
            width={300}
            height={600}
          />
        </div>
      </main>
    </div>
  );
}
