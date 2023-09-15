import React from "react";

const HeadingText2 = (props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${props.className} relative mb-5 px-1`}>
      <div className="w-full  py-1 bg-[#042C51] relative flex justify-center items-center">
        <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0"></div>
        <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0 animate-pulse"></div>
        <h1 className="font-turretRoad font-medium text-[1.9rem] text-white">
          {props.innerText}
        </h1>
      </div>
    </div>
  );
};

export default HeadingText2;
