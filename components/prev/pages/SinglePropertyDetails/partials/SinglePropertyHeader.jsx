import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { useStateValue } from "@/components/prev/states/StateProvider";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback } from "react";
import {
  Virtual,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SinglePropertyHeader = (props) => {
  const [index, setIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const header = props.header;
  const sliderRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const language = sessionStorage.getItem("language");

  // useEffect(() => {
  //   const lastIndex = header.length - 1;
  //   const sliderInterval = setInterval(() => {
  //     setIndex((prevIndex) => {
  //       if (prevIndex === lastIndex) {
  //         return 0;
  //       } else {
  //         return prevIndex + 1;
  //       }
  //     });
  //   }, 6000);

  //   return () => {
  //     clearInterval(sliderInterval);
  //   };
  // }, [header]);

  // useEffect(() => {
  //   if (sliderRef.current) {
  //     gsap.fromTo(
  //       sliderRef.current,
  //       { right: "100%", opacity: 0 },
  //       { right: "50%", opacity: 1, duration: 0.5, ease: "linear" }
  //     );
  //   } else {
  //     gsap.to(sliderRef.current, {
  //       right: "50%",
  //       opacity: 0,
  //       duration: 0.3,
  //       ease: "linear",
  //     });
  //   }
  // }, [sliderRef.current]);

  useEffect(() => {
    if (language === "ar") {
      sliderRef.current.dir = "rtl";
    } else {
      sliderRef.current.dir = "ltr";
    }
  }, []);

  return (
    <section className="relative w-[100vw] h-[70vh] lg:h-screen overflow-hidden flex">
      <Swiper
        ref={sliderRef}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: language === "ar",
        }}
        onSlideChange={(swiperCore) => {
          const { activeIndex, snapIndex, previousIndex, realIndex } =
            swiperCore;
        }}
        centeredSlides={false}
        slidesPerView={1}
        touchStartPreventDefault={false}
        init={false}
        speed={2000}
        fadeEffect={{
          crossFade: true,
        }}
        observer={true}
        modules={[Autoplay, Pagination, Scrollbar, A11y, Controller]}
        initialSlide={selectedImageIndex}
        className="mySwiper swiper"
      >
        {header.map((img, idx) => (
          <SwiperSlide
            key={`image-${idx + 1}`}
            className="rounded-xl autoplay-progress"
          >
            <article
              // className={`relative top-0 left-0 article h-full w-full`}
              className={`relative top-0 left-0 article transition-all duration-500 h-screen w-screen flex justify-center items-center flex-shrink-0`}
              style={{
                backgroundImage: `url(${img.path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
              }}
            >
              {/* <Image src={img.path} height={300} width={300} alt="" /> */}
              <div
                className="inner-shadow absolute bottom-0 left-0 w-full h-[5px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 24, 46, 0.8), rgba(0, 24, 46, 0)",
                }}
              />
              <div
                className="inner-shadow absolute bottom-0 left-0 w-full h-[15px]"
                style={{
                  background:
                    "linear-gradient(to top,rgba(0, 24, 46, 0.8), rgba(0, 24, 46, 0)",
                }}
              />
              <div
                className="inner-shadow absolute bottom-0 left-0 w-full h-[30px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 24, 46, 0.8), rgba(0, 24, 46, 0)",
                }}
              />
              <div
                className="inner-shadow absolute bottom-0 left-0 w-full h-[50px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 24, 46, 0.8), rgba(0, 24, 46, 0)",
                }}
              />
              <div
                className="inner-shadow absolute bottom-0 left-0 w-full h-[70px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 24, 46, 0.8), rgba(0, 24, 46, 0)",
                }}
              />
            </article>
          </SwiperSlide>
        ))}
        {/* {sliders.map((image) => (
        
          <article
            className={`relative top-0 left-0 article transition-all duration-500 h-full w-full bg-cover bg-no-repeat flex justify-center items-center flex-shrink-0`}
            style={{
              backgroundImage: `url(${image.image})`,
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            ></div>
            <div className="w-[605px] flex flex-col justify-center items-center text-center px-5 md:px-0 z-50">
              <h2
                className={
                  "font-fuemen text-[#f1bf3f] text-[24px] lg:text-[38px]"
                }
              >
                {image.description1}
              </h2>
              <h1
                className={`font-expleteusSans text-[28px] lg:text-[44px] font-semibold text-white text-center`}
              >
                {image.description2}
              </h1>
              <p className={`text-white font-saira text-[16px] pt-1`}>
                {image.description3}
              </p>
              <div className="w-full md:hidden mt-10">
                <button
                  onClick={handleFilterbtn}
                  className="border rounded-md px-6 py-2 font-semibold text-[12px] gap-2 flex m-auto bg-gradient-to-r from-[#A7893A] via-[#BFA04B] to-[#A7893A]"
                >
                  <Image src={filter} alt="filter logo" />
                  <span>Filter</span>
                </button>
              </div>
              <div
                className="inner-shadow absolute bottom-0 left-0 w-full h-[5px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 15, 29, 0.9), rgba(0, 15, 29, 0))",
                }}
              />
              <div
                className="inner-shadow absolute bottom-0 left-0 w-full h-[15px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 15, 29, 0.9), rgba(0, 15, 29, 0))",
                }}
              />
              <div
                className="inner-shadow absolute bottom-0 left-0 w-full h-[30px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 15, 29, 0.9), rgba(0, 15, 29, 0))",
                }}
              />
              <div
                className="inner-shadow absolute bottom-0 left-0 w-full h-[50px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 15, 29, 0.9), rgba(0, 15, 29, 0))",
                }}
              />
              <div
                className="inner-shadow absolute bottom-0 left-0 w-full h-[70px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 15, 29, 0.9), rgba(0, 15, 29, 0))",
                }}
              />
            </div>
          </article>
        </SwiperSlide>
      ))} */}
      </Swiper>
    </section>
  );
};

export default SinglePropertyHeader;
