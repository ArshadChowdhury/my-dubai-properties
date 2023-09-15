import React from "react";

const BtnExplore = (props) => {
  return (
    <div className="relative h-auto">
      <button className="btn-explore text-white">
        <span>{props.heading}</span>
      </button>

      <span className="absolute left-0 -top-[5px] border rounded w-[6px] h-[50px] bg-[#ffd15f]"></span>
    </div>
  );
};

export default BtnExplore;
