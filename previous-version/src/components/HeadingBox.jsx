import React from "react";

const HeadingBox = (props) => {
  return (
    <div className={`px-16 py-1 bg-[#042C51] relative ${props.className}`}>
      <div
        className={`h-full w-1 bg-[#F1BF3F] absolute left-0 top-0 animate-pulse ${props.hidden}`}
      ></div>
      <h1 className={`font-roboto text-3xl text-white ${props.textPosition}`}>
        {props.heading}
      </h1>
    </div>
  );
};

export default HeadingBox;
