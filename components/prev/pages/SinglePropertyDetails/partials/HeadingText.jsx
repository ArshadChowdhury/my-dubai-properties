import { useStateValue } from "@/components/prev/states/StateProvider";
import React from "react";

const HeadingText = (props) => {
  const [{ lang }] = useStateValue();
  return (
    <div
      className={`w-full flex flex-col ${props.className} relative mb-5 z-0`}
    >
      <div className="px-8 py-1 bg-[#042C51] relative w-full md:w-auto">
        {/* <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0"></div> */}
        {lang === "en" ? (
          <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0 animate-pulse"></div>
        ) : (
          <div className="h-full w-1 bg-[#F1BF3F] absolute right-0 top-0 animate-pulse"></div>
        )}

        <h1
          className={`font-turretRoad font-medium text-[1.9rem] text-white ${props.size}`}
        >
          {props.innerText}
        </h1>
      </div>
    </div>
  );
};

export default HeadingText;
