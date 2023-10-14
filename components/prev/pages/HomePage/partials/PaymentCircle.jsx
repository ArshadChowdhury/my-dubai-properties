import React, { useState, useRef, useEffect } from "react";

import { gsap } from "gsap";

import mobilePhone from "@/components/prev/assets/images/home/Group 334.png";
import coin from "@/components/prev/assets/images/home/Group 336.png";
import home from "@/components/prev/assets/images/home/Group 335.png";
import bitCoin from "@/components/prev/assets/images/home/Cam1.png";
import Image from "next/image";

const PaymentCircle = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const elementRef = useRef(null);
  const sectionRef = useRef(null);

  const element = elementRef.current;

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const element = elementRef.current;

    const sectionRect = sectionElement.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const elementX = elementRect.left - sectionRect.left;
    const elementY = elementRect.top - sectionRect.top;

    setX(elementX);
    setY(elementY);
  }, []);

  const center = {
    x: x,
    y: y,
  }; // Center position (a, b)
  const radius = 150; // Radius of circular path

  const timeline = gsap.timeline(); // Store the timeline in a variable

  //   tl.to(element, {
  //     duration: 2,
  //     motionPath: {
  //       path: "circle(100px at 50% 50%)",
  //     },
  //   });

  //   // Play the animation
  //   tl.play();

  // const path = `M${x} ${y} L${x + 100} ${y} L${x + 100} ${y + 100} L${x} ${
  //   y + 100
  // } Z`;

  // gsap.to(element, {
  //   duration: 2,
  //   ease: "power1.inOut",
  //   motionPath: {
  //     path: path,
  //     align: path,
  //     autoRotate: true,
  //   },
  // });

  return (
    <div
      className="relative md:mx-10 py-20 md:py-0 flex justify-center items-center z-10"
      ref={sectionRef}
    >
      <div className="relative h-[300px] w-[300px] md:h-[375px] md:w-[375px] p-5 border border-dashed rounded-full flex justify-center items-center bg-[#000F1D] bg-payment">
        <Image src={mobilePhone} alt="" className="" />
        <div
          className="circle h-[80px] w-[80px] md:h-auto md:w-auto"
          ref={elementRef}
        >
          <Image src={coin} alt="" />
        </div>
        <div className="circle circle2 h-[80px] w-[80px] md:h-auto md:w-auto">
          <Image src={bitCoin} alt="" />
        </div>
        <div className="circle circle3 h-[80px] w-[80px] md:h-auto md:w-auto">
          <Image src={home} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PaymentCircle;
