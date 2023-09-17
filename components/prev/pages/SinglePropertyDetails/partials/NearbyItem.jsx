import Image from "next/image";
import React from "react";

const NearbyItem = (props) => {
  return (
    <div
      className={`flex md:flex-col md:justify-center items-center md:mb-10  ${
        props.index % 2 !== 0 && "flex-row-reverse"
      }`}
    >
      <div className="border rounded-full border-[#FFD15F] md:mx-auto mb-5 w-1/4 md:w-1/2 aspect-square flex justify-center items-center bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A]">
        <Image src={props.image} alt="airport" />
      </div>

      <h1
        className={` text-base lg:text-[1.25rem] xl:text-[1.375rem] text-white font-montserrat pl-5 md:pl-0 pr-5 md:pr-0`}
      >
        {props.title}
      </h1>
    </div>
  );
};

export default NearbyItem;
