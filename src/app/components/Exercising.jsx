import React from "react";

const Exercising = () => {
  return (
    <div className="md:w-2/3 w-full mt-20 flex flex-col justify-center pb-3">
      <h1 className="text-center  text-5xl text-[#333C4D]  font-extrabold">
        Exercising consistently is hard
      </h1>
      <p className="text-center font-semibold pt-4  text-[#333C4D]">
        80% of New Year's resolutions fail in 2 months...
      </p>
      <div className="w-full flex md:flex-row flex-col gap-4 pt-12">
        <div className="flex-1 w-full p-4 md:p-8 rounded-3xl bg-white text-black text-left">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-8">
            <span className="text-5xl md:text-6xl">🎯</span>
            <div>
              <div className="card-title pb-2 ">Set a goal</div>
              <div className="opacity-80">
                <div>"I want to lose weight"</div>
                <div>"I want to go gym 3x a week"</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full p-4 md:p-8 rounded-3xl bg-white text-black text-left ">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-8">
            <span className="text-5xl md:text-6xl">🏃</span>
            <div>
              <div className="card-title pb-2 ">Try your best</div>
              <div className="opacity-80">
                <div>"Buy new shoes"</div>
                <div>"Get gym membership"</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full p-4 md:p-8 rounded-3xl bg-white text-black text-left">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-8">
            <span className="text-5xl md:text-6xl">🤦</span>
            <div>
              <div className="card-title pb-2 ">But life doesn't change...</div>
              <div className="opacity-80">
                <div>“I'm not motivated”</div>
                <div>“I forget my new habit”</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercising;
