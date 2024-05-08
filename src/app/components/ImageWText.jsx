import React from "react";
import Image from "next/image";

const ImageWText = ({ src, orangeText, headingText, infoText1, infoText2 }) => {
  return (
    <div className="md:w-7/12 flex mt-24 gap-8 pb-6">
      <div className="w-1/2">
        <Image
          src={src}
          alt="feature"
          className="rounded-3xl aspect-square w-full  border-2"
          
        />
      </div>
      <div className="flex flex-col gap-4 pr-12">
        <h1 className="text-[#EA5234] font-semibold">{orangeText}</h1>
        <h2 className="text-[#333C4D] text-4xl font-extrabold">
          {headingText}
        </h2>
        <p className="text-[#333C4D]">{infoText1}</p>
        <p className="text-[#333C4D]">{infoText2}</p>
      </div>
    </div>
  );
};

export default ImageWText;
