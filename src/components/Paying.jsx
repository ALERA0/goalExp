import React from "react";
import check from "../../public/icons/check.png";
import Image from "next/image";

const Paying = () => {
  return (
    <div className="flex flex-col md:w-7/12 mt-20 pb-16">
      <h1 className="text-[#333C4D] text-center mb-16 text-5xl font-extrabold ">Level up workout avatars!</h1>
      <div className="flex w-full gap-20">
        <div className="bg-white rounded-xl  px-8 pb-12 pt-6 flex flex-col gap-3 w-full shadow-lg">
          <h1 className="text-[#333C4D] text-lg font-bold">Discover</h1>
          <p className="font-semibold">Start free and see how it works for you</p>
          <h2 className="text-4xl font-extrabold text-[#333C4D]">Free</h2>
          <button className="text-center w-full bg-transparent border-2 border-[#EA5234] rounded-lg py-4 text-[#EA5234] uppercase font-bold mb-4 hover:bg-[#EA5234] hover:text-white duration-200 ">Get started</button>
          <p className="flex gap-2">
            <Image src={check} alt="check" />1 workout avatar
          </p>
          <p className="flex gap-2">
            <Image src={check} alt="check" />Compete on 1 leaderboard
          </p>
          <p className="flex gap-2">
            <Image src={check} alt="check" />Sync on iOS, Android & Web
          </p>
        </div>
        <div className="bg-white rounded-xl border-2 border-[#EA5234]  px-8 pb-12 pt-6  flex flex-col gap-3 w-full shadow-lg">
        <h1 className="text-[#EA5234] text-lg font-bold">Premium</h1>
        <p className="font-semibold">Take your workouts to the next level</p>
        <h2 className="text-4xl font-extrabold text-[#333C4D] gap-1 flex">$19<span className="text-xs justify-end items-end flex text-[#333C4D] ">Pay once, unlock forever</span></h2>
        <button className="text-center w-full bg-[#EA5234]  border-2 border-[#EA5234] rounded-lg py-4 text-white hover:bg-orange-700 duration-200 uppercase font-bold mb-4 ">Get started</button>
        <p className="flex gap-2 font-semibold">
        Everything on discover, plus...
        </p>
        <p className="flex gap-2">
          <Image src={check} alt="check" />Compete on 1 leaderboard
        </p>
        <p className="flex gap-2">
          <Image src={check} alt="check" />Sync on iOS, Android & Web
        </p>
      </div>
      </div>
    </div>
  );
};

export default Paying;
