import Image from "next/image";
import React, { useEffect, useState } from "react";

const BtnSearch2 = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowSizeChange = () => {
    const mobileScreenSize = 768;
    const currentWindowSize = window.innerWidth;

    if (currentWindowSize <= mobileScreenSize) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div
      className="flex justify-center items-center bg-[#bea04e] p-[9px] mb-2 hover:text-[#FFD15F] text-white border-t-2 border-b-2 relative "
      style={{
        height: "46px",
        width: isMobile ? "" : "170px",
      }}
    >
      <div className="z-0 absolute w-8 h-8 bg-[#bea04e] border-2 border-white rotate-45 top-[5px] left-[-16px] border-r-0 border-t-0"></div>

      <div
        className="w-full flex justify-between px-2 items-center font-bold text-[12px] leading-[150%] tracking-[4%]"
        style={{
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      >
        <span className="z-50 text-shadow">{props.btnText}</span>
        <div className="w-[22px] ">
          <Image src={props.btnImage} alt="btn image" className="" />
        </div>
      </div>
      <div className="z-0 absolute w-8 h-8 bg-[#bea04e] border-2 border-white rotate-45 top-[5px] right-[-16px] border-l-0 border-b-0"></div>
    </div>
  );
};

export default BtnSearch2;
