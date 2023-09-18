import React from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import HeadingBox from "@/components/prev/HeadingBox";
import call from "../../../assets/images/global/call.png";
import HomeHeading from "@/components/prev/HomeHeading";
import Image from "next/image";

const infos = [
  {
    title: "GENERAL CONTACT",
    address: "Community Center - DEMO Address Dubai, UAE",
    phone: "+00 11 22 33 44 55",
  },
  {
    title: "GENERAL CONTACT",
    address: "Community Center - DEMO Address Dubai, UAE",
    phone: "+00 11 22 33 44 55",
  },
  {
    title: "GENERAL CONTACT",
    address: "Community Center - DEMO Address Dubai, UAE",
    phone: "+00 11 22 33 44 55",
  },
];
const AddresInfo = () => {
  return (
    <section>
      <div className="w-full mt-5 md:mt-0 px-5 md:-ml-7">
        <div className="w-full md:w-[49.5%] ml-2 md:ml-0">
          <HomeHeading heading="Office Address" />
        </div>

        <div>
          {infos.map((info, idx) => {
            return (
              <div
                key={idx}
                className="font-montserrat my-8 text-white flex flex-col justify-center items-center md:items-start md:justify-start px-5 md:px-0"
              >
                <p className="text-lg font-semibold text-white pb-2">
                  {info.title}
                </p>
                <p className="font-medium text-base text-center pb-2">
                  {info.address}
                </p>
                <p className="flex">
                  <span className="mr-3">
                    <Image src={call} alt="" />
                  </span>
                  <span className="text-gradient md:!text-white font-bold">
                    {info.phone}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddresInfo;
