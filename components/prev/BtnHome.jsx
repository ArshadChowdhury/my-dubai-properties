import Link from "next/link";
import React from "react";

const BtnHome = (props) => {
  return (
    <Link href={"/contact-us"}>
      <button className="w-full relative z-20">
        <div
          className={`w-full h-full flex justify-around items-center bg-gradient-to-r from-[#DFBF68] via-[#BFA04B] to-[#DFBF68] border border-[#DFBF68] hover:bg-transparent hover:from-transparent hover:via-transparent hover:to-transparent text-white rounded text-xs font-montserrat py-2 uppercase ${props.className}`}
        >
          {props.btnText}
        </div>
      </button>
    </Link>
  );
};

export default BtnHome;
