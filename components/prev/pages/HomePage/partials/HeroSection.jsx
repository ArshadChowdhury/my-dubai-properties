import { useState, useEffect, useRef } from "react";
import SinglePropertyHeader from "../../SinglePropertyDetails/partials/SinglePropertyHeader";
import Filter from "./Filter";
import rightArrow from "../../../assets/images/global/right.png";
// import Button from "../../../components/Button";
import filter from "../../../assets/images/global/filter.png";
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

const HeroSection = (props) => {
  const [{ filterValues, filterOpen, lang }, dispatch] = useStateValue();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const sliders = props?.sliders;
  const language = sessionStorage.getItem("language");
  const [isMounted, setIsMounted] = useState(false);

  // const swiper = new Swiper(".swiper", {
  //   // Install modules
  //   modules: [Navigation, Pagination, Scrollbar],
  //   speed: 500,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   // ...
  // });

  const swiperRef = useRef();
  const sliderRef = useRef();

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  // useEffect(() => {
  //   const lastIndex = sliders?.length - 1;
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, sliders]);

  const handleFilterbtn = () => {
    dispatch({ type: "setFilterOpen", item: true });
  };

  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   swiperRef.current.style.setProperty("--progress", 1 - progress);
  //   sliderRef.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

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
    if (language === "ar") {
      sliderRef.current.dir = "rtl";
    } else {
      sliderRef.current.dir = "ltr";
    }
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <section
      className={`relative w-[100vw] h-[90vh] lg:h-screen overflow-hidden flex`}
    >
      <Swiper
        ref={sliderRef}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: language === "ar",
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
        {sliders.map((image) => (
          <SwiperSlide
            key={`image-${image._id}`}
            className="rounded-xl autoplay-progress"
          >
            <article
              className={`relative top-0 left-0 article transition-all duration-500 h-screen w-screen bg-cover bg-no-repeat flex justify-center items-center flex-shrink-0`}
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
        ))}
      </Swiper>
      {language === "ar" ? (
        <div
          className="hidden md:flex group absolute z-50 border hover:border-[#F1BF3F] cursor-pointer left-16 top-[45%] w-[38px] h-[38px] bg-[#0E0E1A] opacity-50 rotate-45 justify-center items-center transition-all duration-500"
          onClick={handlePrev}
        >
          <div className="rotate-45">
            <Image
              src={rightArrow}
              alt=""
              className="group-hover:mt-2 group-hover:scale-105 transition-all duration-500 rotate-90"
            />
          </div>
        </div>
      ) : (
        <div
          className="hidden md:flex group absolute z-50 border hover:border-[#F1BF3F] cursor-pointer right-16 top-[45%] w-[38px] h-[38px] bg-[#0E0E1A] opacity-50 rotate-45 justify-center items-center transition-all duration-500"
          onClick={handleNext}
        >
          <div className="-rotate-45">
            <Image
              src={rightArrow}
              alt=""
              className="group-hover:ml-2 group-hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      )}
    </section>
  );
  //  : (
  //   <section
  //     className={`relative w-[100vw] h-[90vh] lg:h-screen overflow-hidden flex`}
  //   >
  //     <Swiper
  //       ref={sliderRef}
  //       loop={true}
  //       autoplay={{
  //         delay: 2500,
  //         disableOnInteraction: false,
  //         reverseDirection: false,
  //       }}
  //       init={false}
  //       fadeEffect={{
  //         crossFade: true,
  //       }}
  //       onSlideChange={(swiperCore) => {
  //         const { activeIndex, snapIndex, previousIndex, realIndex } =
  //           swiperCore;
  //         console.log({ activeIndex, snapIndex, previousIndex, realIndex });
  //       }}
  //       observer={true}
  //       centeredSlides={false}
  //       slidesPerView={1}
  //       touchStartPreventDefault={false}
  //       speed={2000}
  //       modules={[Autoplay, Pagination, Scrollbar, A11y, Controller]}
  //       className="mySwiper swiper"
  //     >
  //       {sliders.map((image) => (
  //         <SwiperSlide
  //           key={`image-${image._id}`}
  //           className="rounded-xl autoplay-progress"
  //         >
  //           <article
  //             className={`relative top-0 left-0 article transition-all duration-500 h-screen w-screen flex justify-center items-center flex-shrink-0`}
  //             style={{
  //               backgroundImage: `url(${image.image})`,
  //               backgroundRepeat: "no-repeat",
  //               backgroundSize: "100% 100%",
  //               backgroundPosition: "center",
  //             }}
  //           >
  //             <div
  //               className="absolute top-0 left-0 w-full h-full"
  //               style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
  //             ></div>
  //             <div className="w-[605px] flex flex-col justify-center items-center text-center px-5 md:px-0 z-50">
  //               <h2
  //                 className={
  //                   "font-fuemen text-[#f1bf3f] text-[24px] lg:text-[38px]"
  //                 }
  //               >
  //                 {image.description1}
  //               </h2>
  //               <h1
  //                 className={`font-expleteusSans text-[28px] lg:text-[44px] font-semibold text-white text-center`}
  //               >
  //                 {image.description2}
  //               </h1>
  //               <p className={`text-white font-saira text-[16px] pt-1`}>
  //                 {image.description3}
  //               </p>
  //               <div className="w-full md:hidden mt-10">
  //                 <button
  //                   onClick={handleFilterbtn}
  //                   className="border rounded-md px-6 py-2 font-semibold text-[12px] gap-2 flex m-auto bg-gradient-to-r from-[#A7893A] via-[#BFA04B] to-[#A7893A]"
  //                 >
  //                   <Image src={filter} alt="filter logo" />
  //                   <span>Filter</span>
  //                 </button>
  //               </div>
  //               <div
  //                 className="inner-shadow absolute bottom-0 left-0 w-full h-[5px]"
  //                 style={{
  //                   background:
  //                     "linear-gradient(to top, rgba(0, 15, 29, 0.9), rgba(0, 15, 29, 0))",
  //                 }}
  //               />
  //               <div
  //                 className="inner-shadow absolute bottom-0 left-0 w-full h-[15px]"
  //                 style={{
  //                   background:
  //                     "linear-gradient(to top, rgba(0, 15, 29, 0.9), rgba(0, 15, 29, 0))",
  //                 }}
  //               />
  //               <div
  //                 className="inner-shadow absolute bottom-0 left-0 w-full h-[30px]"
  //                 style={{
  //                   background:
  //                     "linear-gradient(to top, rgba(0, 15, 29, 0.9), rgba(0, 15, 29, 0))",
  //                 }}
  //               />
  //               <div
  //                 className="inner-shadow absolute bottom-0 left-0 w-full h-[50px]"
  //                 style={{
  //                   background:
  //                     "linear-gradient(to top, rgba(0, 15, 29, 0.9), rgba(0, 15, 29, 0))",
  //                 }}
  //               />
  //               <div
  //                 className="inner-shadow absolute bottom-0 left-0 w-full h-[70px]"
  //                 style={{
  //                   background:
  //                     "linear-gradient(to top, rgba(0, 15, 29, 0.9), rgba(0, 15, 29, 0))",
  //                 }}
  //               />
  //             </div>
  //           </article>
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>

  //   </section>
  // );
};

export default HeroSection;
