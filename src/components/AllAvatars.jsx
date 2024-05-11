"use client";
import { avatars } from "@/avatars";
import React, { useEffect, useState } from "react";

const AllAvatars = () => {
  const [avatarIndex, setAvatarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return <div className="text-5xl">{avatars[avatarIndex]}</div>;
};

export default AllAvatars;
