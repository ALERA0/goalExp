"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/icons/logo.webp";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="md:w-3/4 w-full flex justify-between py-3 ">
      <div className="flex justify-center items-center gap-2">
        <motion.div whileHover={{ scale: 1.1 }} >
          <Image
            src={logo}
            alt="logo"
            width={50}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <p className="text-lg text-blue-950 font-semibold">HeroFit</p>
      </div>
      <div className="flex justify-center items-center">
        <button class="btn btn-xs sm:btn-sm md:btn-md  text-blue-950 bg-transparent border-none hover:bg-slate-300 duration-300 ">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Header;
