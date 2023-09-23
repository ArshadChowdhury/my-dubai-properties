import Image from "next/image";
import React from "react";

const BtnNextStep = (props) => {
  return (
    <button
      type="button"
      className={`border border-[#283646] hover:border-0 rounded ${props.className}`}
    >
      <div
        className={`flex text-[10px] justify-around items-center bg-gradient-to-r from-[#0F0A3A] via-[#214265] to-[#0A223A] text-white rounded  font-robotoCondensed py-1 uppercase px-3`}
      >
        {props.btnText}
        <Image src={props.btnImage} alt="btn image" />
      </div>
    </button>
  );
};

export default BtnNextStep;
