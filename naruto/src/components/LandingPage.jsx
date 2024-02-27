import React from "react";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white pt-1">
      <div className="textstructure mt-40 px-20">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <h1 className="uppercase text-[5.5vw] leading-[4VW] tracking-tighter font-semibold font-['Founders_Grotesk']">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center px-20 py-5">
        {[
          "For public and private compamies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light treacking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start">
          <div className="px-5 py-2 border-[2px] border-zinc-600 rounded-full font-light text-sm capitalize">
            Start the Project
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
