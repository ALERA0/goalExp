"use client";
import React from "react";
import { motion } from "framer-motion";

const Avatar = ({ icon, isSelected, onClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 1.2 }}
      onClick={onClick}
      className={`relative h-[4.5rem] w-[4.5rem] overflow-hidden rounded-xl bg-cover cursor-pointer ${
        isSelected ? "border-4 border-orange-500" : ""
      }`}
    >
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 transform animate-none justify-center text-4xl blur-xl">
        {icon}
      </p>
      <p className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 transform text-4xl">
        {icon}
      </p>
    </motion.div>
  );
};

export default Avatar;
