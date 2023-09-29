import React from "react";
import Link from "next/link";

const BtnItem = (props) => {
  return (
    <Link href={props.to || "#"} className={`${props.className}`}>
      <div className={`rounded-md  w-full`}>
        <div className="w-full h-full font-montserrat flex justify-around items-center btnItem relative after:absolute after:inset-0 after:h-full after:w-full text-white  text-xs md:text-sm py-2 uppercase rounded-md border border-[#a7893a] hover:border-[#283646]">
          {props.btnText}
        </div>
      </div>
    </Link>
  );
};

export default BtnItem;
