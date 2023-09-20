import React from "react";

const BtnHexagon = (props) => {
  return (
    <button
      type="submit"
      className="hex-btn before:bg-[#F1BF3F] after:bg-[#F1BF3F] relative p-1 group text-[16px] font-bold text-[644126]"
    >
      <div className="hex-btn !w-full !h-full before:!border-y-0 after:!border-y-0 text-white absolute inset-0 group-hover:scale-110  transition duration-500"></div>
      <div className="hex-btn !w-full !h-full before:!border-y-0 after:!border-y-0 text-white absolute inset-0 group-hover:scale-105  transition duration-300"></div>
      <div className="!w-full !h-full relative hex-btn px-8 py-2 before:!border-2 after:!border-2 before:!border-white after:!border-white z-20">
        <span className="z-10">{props.btnText}</span>
      </div>
    </button>
  );
};

export default BtnHexagon;
