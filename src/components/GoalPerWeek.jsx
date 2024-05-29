"use client";
import React from "react";
import { motion } from "framer-motion";

const GoalPerWeek = ({ text, value, isSelected, onClick }) => {
  return (
    <motion.span
      value={value}
      whileTap={{ scale: 1.1 }}
      onClick={onClick}
      className={`focus:border-2 focus:border-orange-500 rounded-full aspect-square flex-1 flex items-center justify-center font-medium cursor-pointer duration-100 bg-white animate-popup text-black ${
        isSelected ? "border-2 border-orange-500" : ""
      }`}
    >
      {text}
    </motion.span>
  );
};

export default GoalPerWeek;
