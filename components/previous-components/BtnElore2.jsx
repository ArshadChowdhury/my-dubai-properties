import React from "react";

const BtnElore2 = (props) => {
  return (
    <button className=" text-white relative md:pl-1 pr-1 py-1 group z-20">
      <span className="absolute w-[20px] h-[32px] -left-[10px] bg-[#000F1D] z-20"></span>
      <div className="flex justify-around text-[12px] font-semibold items-center  relative btn-explore px-4 md:px-8 py-2 before:!border-2 after:!border-2 before:!border-l-0 after:!border-l-0 before:!border-[#F1BF3F] after:!border-[#F1BF3F]">
        <div className="hex-btn !w-full !h-full before:!border-y-0 after:!border-y-0 after:!border-l-0 before:!border-l-0 text-white absolute inset-0 group-hover:scale-[1.2]  transition duration-500"></div>
        <div className="hex-btn !w-full !h-full before:!border-y-0 after:!border-y-0 after:!border-l-0 before:!border-l-0 text-white absolute inset-0 group-hover:scale-110  transition duration-300"></div>
        <span className="btn-explore-text"> {props.title}</span>
      </div>
      <span className="absolute pulse5 z-30 left-1 -top-[1px] border rounded w-[6px] h-[50px] bg-[#ffd15f]"></span>
    </button>
  );
};

export default BtnElore2;
