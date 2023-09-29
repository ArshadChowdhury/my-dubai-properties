import React from "react";
import Link from "next/link";
import Image from "next/image";

const Button = (props) => {
  return (
    <Link href={props.to || "#"}>
      <button
        className={`${
          props.btnClass && "!border-[#283646]"
        } border border-transparent hover:border hover:border-[#283646] rounded-[5px] w-full md:w-[15rem] z-[1]`}
      >
        <div
          className={`w-full h-full flex justify-around items-center button-bg   text-white  text-xs md:text-sm font-robotoCondensed py-2 uppercase ${
            props.btnClass && "!bg-none"
          }`}
        >
          {props.btnText}
          {props.btnImage && (
            <Image src={props.btnImage} alt="btn image" className="w-[25px]" />
          )}
        </div>
      </button>
    </Link>
  );
};

export default Button;
