import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className=" w-full xl:px-36 lg:px-24 md:px-12 sm:px-8 px-4 flex justify-center items-center bg-[#EFEFEF] ">
      <Header />
    </main>
  );
}
