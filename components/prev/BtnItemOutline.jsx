import React from "react";
import Link from "next/link";

const BtnItemOutline = (props) => {
  return (
    <Link href={props.to || "#"} className={`${props.className}`}>
      <button
        className={` border border-[#283646] hover:border-transparent rounded w-full`}
      >
        <div className="flex justify-around items-center hover:bg-gradient-to-r btn-ourLine text-white rounded text-xs md:text-sm font-montserrat py-2 uppercase">
          {props.btnText}
        </div>
      </button>
    </Link>
  );
};

export default BtnItemOutline;
