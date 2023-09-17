import Image from "next/image";
import React from "react";

const ButtonOutline2 = (props) => {
  return (
    <button
      onClick={props.link}
      className="border border-[#283646] hover:border-transparent rounded-[5px] w-full md:w-[15rem]"
    >
      <div
        className={`w-full h-full flex justify-around items-center bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A]   text-white rounded text-xs md:text-sm font-montserrat py-2 uppercase ${props.className}`}
      >
        {props.btnText}
        {props.btnImage && (
          <div className="w-[25px]">
            <Image src={props.btnImage} alt="btn image" />
          </div>
        )}
      </div>
    </button>
  );
};

export default ButtonOutline2;
