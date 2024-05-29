"use client";
import React, { useState } from "react";
import playStore from "../../public/images/badge-app-store.webp";
import appStore from "../../public/images/badge-play-store.webp";
import webApp from "../../public/images/badge-web-app.webp";
import fire from "../../public/images/campfire.png";
import Image from "next/image";

const xpLevels = [10, 30, 30, 40, 55, 65, 80, 110, 210, 300, 600];

const Intro = () => {
  const [level, setLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [fireCount, setFireCount] = useState(0);
  const [imgWidth, setImgWidth] = useState(34);

console.log(imgWidth);

  const handleIconClick = () => {
    let newXP = currentXP + 15;
    let newTotalXP = totalXP + 15;

    if (newXP >= xpLevels[level - 1]) {
      newXP = newXP - xpLevels[level - 1];
      setLevel((prevLevel) => Math.min(prevLevel + 1, xpLevels.length));
      setImgWidth(imgWidth+10)
    }
    setFireCount(fireCount + 1);
    setCurrentXP(newXP);
    setTotalXP(newTotalXP);
  };

  return (
    <div className="pt-16 grid grid-cols-2 justify-center md:w-2/3 w-full px-2">
      <div className="col-span-1 flex flex-col">
        <h1 className="text-6xl font-bold text-[#333C4D]">
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
      <div className="col-span-1">
        <div className="bg-white rounded-xl py-6 px-4 flex gap-2">
          <p
            className={`cursor-pointer animate-button-pop active:scale-[0.95] duration-200 p-4 hover:drop-shadow text-[${imgWidth}px] saturate-[0.3]  `}
            onClick={handleIconClick}
          >
            🏋️
          </p>
          <div className="flex flex-col w-full">
            <div className="flex gap-2 items-center text-sm">
              <p>Level {level}</p>
              <div className="py-1 px-2 flex bg-red-100 rounded-lg text-black">
                <Image src={fire} alt="fire" width={15} />
                <span>{fireCount}</span>
              </div>
            </div>
            <p className="text-blue-950 font-semibold mt-1">Metal Filter</p>
            <div className="relative h-5">
              <progress
                className="progress progress-accent h-full"
                value={(currentXP / xpLevels[level - 1]) * 100}
                max="100"
              ></progress>
              <p className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-black">
                XP {currentXP} / {xpLevels[level - 1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
