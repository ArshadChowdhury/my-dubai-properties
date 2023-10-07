import { useStateValue } from "@/components/prev/states/StateProvider";
import React from "react";

const HeadingText2 = (props) => {
  const [{ lang }] = useStateValue();
  return (
    <div
      className={`flex flex-col justify-center items-center ${props.className} relative mb-5 px-1`}
    >
      <div className="w-full py-1 bg-[#042C51] relative flex justify-center items-center">
        {/* <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0"></div> */}
        {lang === "en" ? (
          <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0 animate-pulse"></div>
        ) : (
          <div className="h-full w-1 bg-[#F1BF3F] absolute right-0 top-0 animate-pulse"></div>
        )}

        <h1
          className={`font-turretRoad px-2 font-medium text-[1.9rem] text-white ${
            lang === "en" ? "text-left" : "text-right"
          }`}
        >
          {props.innerText}
        </h1>
      </div>
    </div>
  );
};

export default HeadingText2;
