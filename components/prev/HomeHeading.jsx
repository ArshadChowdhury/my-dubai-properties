import React from "react";
import { useStateValue } from "./states/StateProvider";

const HomeHeading = (props) => {
  const [{ lang }] = useStateValue();
  return lang === "ar" ? (
    <div className="w-full md:px-5 py-1 bg-[#042C51] relative">
      <h1 className="font-roboto text-2xl text-white pr-4 pl-[58px]">
        {props.heading}
      </h1>
      <div className="h-full w-1 bg-[#F1BF3F] absolute right-0 top-0 pulse5"></div>
    </div>
  ) : (
    <div className="w-full md:px-5 py-1 bg-[#042C51] relative">
      <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0 pulse5"></div>
      <h1 className="font-roboto text-2xl text-white pl-4 pr-[58px]">
        {props.heading}
      </h1>
    </div>
  );
};

export default HomeHeading;
