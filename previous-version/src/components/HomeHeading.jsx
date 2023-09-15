import React from "react";

const HomeHeading = (props) => {
  return (
    <div className="w-full md:px-5 py-1 bg-[#042C51] relative">
      <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0 pulse5"></div>
      <h1 className="font-roboto text-xl text-white text-center">
        {props.heading}
      </h1>
    </div>
  );
};

export default HomeHeading;
