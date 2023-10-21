import React from "react";
import Button from "@/components/prev/Button";
import ButtonOutline from "@/components/prev/ButtonOutline";
import Link from "next/link";
import BtnItem from "@/components/prev/BtnItem";
import Image from "next/image";
import BtnItemOutline from "@/components/prev/BtnItemOutline";

const DeveloperListItem = (props) => {
  return (
    <div className="w-full md:basis-1/4 ">
      <div className="w-full aspect-square flex flex-col justify-center items-center md:flex-row bg-white bg-opacity-20 relative  after:border-x after:border-[#DBA318] after:absolute after:h-full after:w-full hover:after:h-0 after:transition-all after:duration-500 before:border-y before:border-[#DBA318] before:absolute before:h-full before:w-full hover:before:w-0 before:transition-all before:duration-500 group">
        <Image
          height={400}
          width={400}
          src={props.developerLogo}
          alt={props.developerName}
          className="group-hover:scale-105 transition-all ease-in-out duration-500 w-full"
        />
      </div>
      <div className="flex gap-4 mt-5">
        <Link
          className="basis-1/2 rounded-md w-fullfont-montserrat flex justify-around items-center btnItem relative after:absolute after:inset-0 after:h-full after:w-full text-white  text-xs md:text-sm py-2 uppercase border border-[#a7893a] hover:border-[#283646]"
          href={`/developers/${props.id}`}
        >
          Project List
        </Link>
        <Link
          className="hover:bg-gradient-to-r btn-ourLine basis-1/2 rounded-md w-full font-montserrat flex justify-around items-center btnItem relative after:absolute after:inset-0 after:h-full after:w-full text-white  text-xs md:text-sm py-2 uppercase border border-[#283646] hover:border-[#283646]"
          href={`/developers/${props.id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default DeveloperListItem;
