import React from "react";

const Gamification = () => {
  return (
    <div className="md:w-7/12 flex mt-24 gap-8 pb-6">
      <div>
        <video className="rounded-xl aspect-square w-full  border-2 " autoPlay muted loop playsInline controls width="500">
          <source src="https://d279kcxbcggtq3.cloudfront.net/herofit/feature1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col gap-4 pr-12">
        <h1 className="text-[#EA5234]  font-semibold ">GAMIFICATION</h1>
        <h2 className="text-[#333C4D] text-4xl font-extrabold ">Make workouts fun</h2>
        <p className="text-[#333C4D]">
          Choose your workout avatars amongst 37 characters. Track your progress
          to gain XP and level them up!
        </p>
      </div>
    </div>
  );
};

export default Gamification;
