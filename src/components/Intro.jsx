import React from "react";
import playStore from "../../public/images/badge-app-store.webp";
import appStore from "../../public/images/badge-play-store.webp";
import webApp from "../../public/images/badge-web-app.webp";
import fire from "../../public/images/campfire.png";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="pt-16 grid grid-cols-2 justify-center md:w-2/3 w-full px-2">
      <div className="col-span-1 flex flex-col">
        <h1 className="text-6xl font-bold text-[#333C4D] ">
          Gamify your fitness
        </h1>
        <p className="text-lg pt-10 text-[#333C4D]">
          Track your workouts to level up your avatars and climb leaderboards!
        </p>
        <div className="flex flex-wrap justify-start items-center gap-4 pt-10">
          <a src={playStore} alt="playStore" href="https://theherofit.app/">
            <Image src={playStore} alt="playStore" className="w-40" />
          </a>
          <a src={playStore} alt="playStore" href="https://theherofit.app/">
            <Image src={appStore} alt="appStore" className="w-40" />
          </a>
          <a src={playStore} alt="playStore" href="https://theherofit.app/">
            <Image src={webApp} alt="webApp" className="w-40" />
          </a>
        </div>
      </div>
      <div className="col-span-1 ">
        <div className="bg-white rounded-xl py-6  px-4 flex gap-2 ">
          <div className="cursor-pointer animate-button-pop active:scale-[0.95] duration-200 p-4 hover:drop-shadow text-[2.5rem] saturate-[0.3]">
            🏋️
          </div>
          <div className="flex flex-col w-full">
            <div className="flex gap-2 items-center text-sm">
              <p>Level 1</p>
              <div className="py-1 px-2 flex bg-red-100 rounded-lg text-black">
                <Image src={fire} alt="fire" width={15} />
                <span>0</span>
              </div>
            </div>
            <p className="text-blue-950 font-semibold mt-1">Metal Filter</p>
            <div className="relative h-5 ">
              <progress
                className="progress progress-accent h-full "
                value="35"
                max="100"
              ></progress>
              <p className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-black  ">
                XP 0 / 10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
