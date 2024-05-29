"use client";
import React, { useState } from "react";
import GoalPerWeek from "./GoalPerWeek";
import Avatar from "./Avatar";
import Image from "next/image";
import { avatars } from "@/avatars";
import close from "../../public/icons/close.png";
import { setAvatar, setGoal } from "@/redux/slice/select-avatar-goal-slice";
import { useDispatch, useSelector } from "react-redux";

const CreateAvatar = () => {
  const [hide, setHide] = useState(true);
  const dispatch = useDispatch();

  const { avatar, goal } = useSelector((state) => state.setAvatarGoal);

  const calculateXP = (goal) => {
    if (!goal) return 0;
    return Math.floor(100 / goal);
  };

  console.log(avatar,goal);

  return (
    <div
      className={`bg-[#EFEFEF] h-screen overflow-y-auto ${
        hide ? "flex" : "hidden"
      } z-20`}
    >
      <div className="max-w-xl mx-auto p-4 space-y-8 mb-24">
        <div className="flex justify-between">
          <h1 className="text-3xl font-black tracking-tight  text-[#333C4D]">
            Create a sport avatar
          </h1>
          <button
            className="p-3 flex items-center justify-center hover:bg-gray-300 duration-150 rounded-lg"
            onClick={() => setHide(false)}
          >
            <Image src={close} alt="close" className="w-4" />
          </button>
        </div>
        <form className="space-y-4">
          <div className="grid grid-rows-3 grid-flow-col gap-2 overflow-auto p-2 px-4 -mx-4 -m-2">
            {avatars.map((avatars, index) => (
              <Avatar
                key={index}
                icon={avatars}
                isSelected={avatar === avatars}
                onClick={() => dispatch(setAvatar(avatars))}
              />
            ))}
          </div>
          <div>
            <p className="font-semibold mb-1">Avatar name</p>
            <input
              type="text"
              className="w-full py-4 px-2 bg-white text-black rounded-xl shadow-md"
              placeholder="Nick Furry"
            />
          </div>
          <div className="w-full">
            <p className=" mb-1 font-black">Goal per week</p>
            <div className="flex gap-2 justify-center">
              {[...Array(7)].map((_, index) => (
                <GoalPerWeek
                  key={index}
                  text={`${index + 1}x`}
                  value={index + 1}
                  isSelected={goal === index + 1}
                  onClick={() => dispatch(setGoal(index + 1))}
                />
              ))}
            </div>
            <p className="text-xs mt-3 text-black">
              <span className="font-bold">{calculateXP(goal)}</span> XP per
              completion. Up to 100 XP a week
            </p>
          </div>
          <button className="text-center w-full text-sm bg-[#EA5234] mt-3 border-2 border-[#EA5234] rounded-lg py-3 text-white hover:bg-orange-700 duration-200 uppercase font-bold mb-4">
            Create Avatar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAvatar;
