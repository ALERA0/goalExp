import Image from "next/image";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Exercising from "./components/Exercising";
import Gamification from "./components/Gamification";
import ImageWText from "./components/ImageWText";
import ImageTextGroup from "./components/ImageTextGroup";

export default function Home() {
  return (
    <main className=" w-full xl:px-36 lg:px-24 md:px-12 sm:px-8 px-4 flex flex-col justify-center items-center bg-[#EFEFEF] ">
      <Header />
      <Intro />
      <Exercising/>
      <Gamification/>
      <ImageTextGroup />
    </main>
  );
}
