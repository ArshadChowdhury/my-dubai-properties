import React from "react";
import Button from "@/components/prev/Button";
import ButtonOutline from "@/components/prev/ButtonOutline";
import Link from "next/link";
import BtnItem from "@/components/prev/BtnItem";
import Image from "next/image";
import BtnItemOutline from "@/components/prev/BtnItemOutline";

const DeveloperListItem = (props) => {
  return (
    <Link href={`/developers/${props.id}`} className="w-full md:basis-1/4 ">
      <div className="w-full aspect-square flex flex-col justify-center items-center md:flex-row bg-white bg-opacity-20 relative  after:border-x after:border-[#DBA318] after:absolute after:h-full after:w-full hover:after:h-0 after:transition-all after:duration-500 before:border-y before:border-[#DBA318] before:absolute before:h-full before:w-full hover:before:w-0 before:transition-all before:duration-500 group">
        <Image
          height={400}
          width={400}
          src={props.developerLogo}
          alt={props.developerName}
          className="group-hover:scale-125 transition-all ease-in-out duration-500 w-full"
        />
      </div>
      <div className="flex mt-5">
        <BtnItem
          to={`/developers/${props.id}`}
          btnText="Project List"
          className="mr-2 basis-1/2 "
        />
        <BtnItemOutline
          to={`/developers/${props.id}`}
          btnText="Details"
          className="ml-2 basis-1/2"
        />
      </div>
    </Link>
  );
};

export default DeveloperListItem;
