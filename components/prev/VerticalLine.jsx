import React from "react";
import Skeleton from "./Skeleton/Skeleton";

const VerticalLine = () => {
  return (
    <section className="z-[1]">
      <Skeleton>
        <div className="flex justify-between md:justify-around h-screen w-full fixed top-0 -left-0 opacity-20">
          <div className="w-[1px] h-screen bg-[#3C3C4E]"></div>
          <div className="w-[1px] h-screen bg-[#3C3C4E]"></div>
          <div className="w-[1px] h-screen bg-[#3C3C4E]"></div>
          <div className="w-[1px] h-screen bg-[#3C3C4E] hidden md:block"></div>
          <div className="w-[1px] h-screen bg-[#3C3C4E] hidden md:block"></div>
        </div>
      </Skeleton>
    </section>
  );
};

export default VerticalLine;
