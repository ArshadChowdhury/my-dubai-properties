import call from "@/components/prev/assets/images/global/call (1).png";
import email from "@/components/prev/assets/images/global/mail-outline.png";
import whatsapp from "@/components/prev/assets/images/global/logo-whatsapp.png";
import contanct from "@/components/prev/assets/images/global/reader-outline.png";
import Skeleton from "../Skeleton/Skeleton";
import Image from "next/image";

const BottomMenu = () => {
  return (
    <div className="h-[55px] w-full bg-[#00182E] fixed left-0 bottom-0 z-50">
      <Skeleton className="h-full px-5">
        <ul className="flex justify-between items-center w-full h-full">
          <li className="flex flex-col justify-center items-center text-[8px] text-[#FFD15F]">
            <Image src={email} alt="email icon" />
            <p className="uppercase">Enquire</p>
          </li>
          <li className="flex flex-col justify-center items-center text-[8px] text-[#FFD15F]">
            <Image src={call} alt="email icon" />
            <p className="uppercase">Enquire</p>
          </li>
          <li className="flex flex-col justify-center items-center text-[8px] text-[#FFD15F]">
            <Image src={whatsapp} alt="email icon" />
            <p className="uppercase">Enquire</p>
          </li>
          <li className="flex flex-col justify-center items-center text-[8px] text-[#FFD15F]">
            <Image src={contanct} alt="email icon" />
            <p className="uppercase">Contact</p>
          </li>
        </ul>
      </Skeleton>
    </div>
  );
};

export default BottomMenu;
