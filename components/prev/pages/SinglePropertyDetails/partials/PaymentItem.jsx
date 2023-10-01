import React, { useRef, useLayoutEffect, useState } from "react";

import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import paymentCircle from "../../../assets/images/property details page/payment-circle.png";
import { IoIosArrowUp } from "react-icons/io";
import upArrow2 from "../../../assets/images/global/upArrow2.png";
import upArrow from "../../../assets/images/global/upArrow.png";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";
import { useStateValue } from "@/components/prev/states/StateProvider";

// gsap.registerPlugin(ScrollTrigger);

const PaymentCircle = (props) => {
  const [index, setIndex] = useState(0);
  const [{ lang }] = useStateValue();
  // useEffect(() => {
  //   let panels = gsap.utils.toArray(".panel");
  //   props.setPanelRef(panels);
  // }, []);

  // useEffect(() => {
  //   gsap.to(sliderRef.current, {
  //     scrollTrigger: {
  //       trigger: sliderRef.current,
  //       pin: true,
  //     },
  //   });
  // }, [sliderRef.current]);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let panels = gsap.utils.toArray(".panel");
  //     gsap.to(panels, {
  //       xPercent: 100,

  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: sliderRef.current,
  //         start: "top 20%",

  //         pin: true,
  //         scrub: 1,
  //         snap: 1 / (panels.length - 1),
  //         end: () => "+=" + sliderRef.current.offsetWidth,
  //         // end: "bottom bottom",
  //         markers: true,
  //       },
  //     });
  //   });
  //   return () => ctx.revert();
  // }, [sliderRef.current]);

  return (
    <div
      className={`w-full flex flex-col justify-center items-center relative`}
      ref={props.refer}
    >
      <div className="">
        <div className="absolute flex flex-col items-center justify-center -top-[100px]">
          <h1
            className={`text-center ${
              lang === "ar" ? "pl-4" : "pr-10"
            } font-oswald uppercase text-white text-[27px]
                `}
          >
            {props.title}
          </h1>
          <p
            className={`text-center ${
              lang === "ar" ? "pl-4" : "pr-10"
            } font-robotoCondensed text-[12px] text-white tracking-[0]`}
          >
            {props.description}
          </p>
        </div>
        <div
          className={`panel flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] rounded-full `}
        >
          <div className=" w-[2.5rem] h-[2.5rem] bg-white-0 rounded-full flex justify-center items-center z-20">
            <div className="w-[1rem] h-[1rem] bg-[#FFD15F] rounded-full z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCircle;
