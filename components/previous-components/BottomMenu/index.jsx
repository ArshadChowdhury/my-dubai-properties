import React from "react";
import call from "../../assets/images/global/call (1).png";
import email from "../../assets/images/global/mail-outline.png";
import whatsapp from "../../assets/images/global/logo-whatsapp.png";
import contanct from "../../assets/images/global/reader-outline.png";
import Skeleton from "../Skeleton/Skeleton";

const BottomMenu = () => {
  return (
    <div className="h-[75px] w-full bg-[#00182E]  fixed left-0 bottom-0 z-50">
      <Skeleton className="h-full px-5">
        <ul className="flex justify-between items-center w-full h-full">
          <li className="flex flex-col justify-center items-center text-[8px] text-[#FFD15F]">
            <img src={email} alt="email icon" />
            <p className="uppercase">Enquire</p>
          </li>
          <li className="flex flex-col justify-center items-center text-[8px] text-[#FFD15F]">
            <img src={call} alt="email icon" />
            <p className="uppercase">Enquire</p>
          </li>
          <li className="flex flex-col justify-center items-center text-[8px] text-[#FFD15F]">
            <img src={whatsapp} alt="email icon" />
            <p className="uppercase">Enquire</p>
          </li>
          <li className="flex flex-col justify-center items-center text-[8px] text-[#FFD15F]">
            <img src={contanct} alt="email icon" />
            <p className="uppercase">Contact</p>
          </li>
        </ul>
      </Skeleton>
    </div>
  );
};

export default BottomMenu;
