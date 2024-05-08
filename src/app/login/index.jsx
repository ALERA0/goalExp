import React from "react";
import google from "../../../public/icons/search.png";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="overflow-y-auto bg-[#EFEFEF] h-screen ">
      <div className="max-w-xl mx-auto p-4 space-y-8 mb-24">
        <div className="flex justify-center">
          <div className="p-4 bg-white rounded-xl">
            <div className="text-5xl">🚴</div>
          </div>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-center text-[#333C4D]">
          Welcome back!
        </h1>
        <button className="uppercase gap-2 py-4 border-2 text-black text-sm font-bold bg-white rounded-xl w-full flex justify-center items-center shadow-md">
          <Image src={google} alt="google" className="flex w-5" />
          log in with google
        </button>
        <div >
            <p className="font-semibold mb-1">Email</p>
            <input type="email" className="w-full py-4 px-2 bg-white text-black rounded-xl shadow-md" placeholder="micheal@jackson.com" />
        </div>
        <div >
            <p className="font-semibold mb-1">Password</p>
            <input type="password" className="w-full py-3 px-2 !bg-white text-black rounded-xl shadow-md"  />
            <button className="text-center w-full text-sm bg-[#EA5234] mt-3 border-2 border-[#EA5234] rounded-lg py-3 text-white hover:bg-orange-700 duration-200 uppercase font-bold mb-4 ">Log in</button>
        </div>
        <a href="/signup" className="link flex justify-center items-center  text-slate-700">Signup instead?</a>
        <div className="w-full bg-slate-300 h-0.5"/>
        <p className="flex justify-center items-center gap-1 text-black">Having issues?<a href="/" className="link ">Email us</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
