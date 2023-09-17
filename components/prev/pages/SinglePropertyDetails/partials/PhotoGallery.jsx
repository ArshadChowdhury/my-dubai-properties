import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "./HeadingText";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import Image from "next/image";

const PhotoGallery = (props) => {
  const swiperRef = useRef();
  const [strokeLeft, setStrokeLeft] = useState("#B4B4B4");
  const [strokeRight, setStrokeRight] = useState("#B4B4B4");
  const gallery = props.images;
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgPath, setImgPath] = useState();

  // Function to measure the size of window
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

  // Function to close the modal when scrolling
  const handleCloseModalOnScroll = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleCloseModalOnScroll);
    return () => {
      window.removeEventListener("scroll", handleCloseModalOnScroll);
    };
  }, []);

  const showModal = (imgPath) => {
    setIsModalOpen(true);
    setImgPath(imgPath);
  };

  return (
    <section className="!mt-20 md:mt-0 mb-5">
      {isModalOpen && (
        <div
          className={`w-full flex justify-center items-center fixed -top-32 z-50 py-10 bg-black bg-opacity-70`}
        >
          <Image
            height={850}
            width={1420}
            src={imgPath}
            className={`w-11/12 mt-12 md:mt-10 rounded-md ${
              isMobile ? "mt-28" : ""
            }`}
            alt=""
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      )}
      <SkeletonSingleProperty className="px-5">
        <div className="items-start w-full md:w-1/4 ml-2 pr-2">
          <HeadingText
            innerText="Photo Gallery"
            className="text-center"
            size=""
          />
        </div>
      </SkeletonSingleProperty>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 150,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onInit={(swiper) => (swiperRef.current = swiper)}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={`image-${index}`} className="rounded-xl ">
            <Image
              height={500}
              width={1000}
              src={image.path}
              alt={image.metaDescription}
              className={`rounded-md cursor-pointer -z-50${
                isMobile ? "h-[150px]" : ""
              }  `}
              onClick={() => showModal(image.path)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 w-full flex justify-center items-center translate-y-1/2 ">
        <div className="w-1/4 flex justify-between relative">
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
              setStrokeLeft("#FFD15F");
              setStrokeRight("#B4B4B4");
            }}
            className="absolute -left-[65px]"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6121 19.6875L9.96094 15L14.6121 10.3125M10.6072 15H20.0391"
                stroke={strokeLeft}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.25 15C26.25 8.78906 21.2109 3.75 15 3.75C8.78906 3.75 3.75 8.78906 3.75 15C3.75 21.2109 8.78906 26.25 15 26.25C21.2109 26.25 26.25 21.2109 26.25 15Z"
                stroke={strokeLeft}
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideNext();
              setStrokeLeft("#B4B4B4");
              setStrokeRight("#FFD15F");
            }}
            className="absolute -right-[65px]"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-180"
            >
              <path
                d="M14.6121 19.6875L9.96094 15L14.6121 10.3125M10.6072 15H20.0391"
                stroke={strokeRight}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.25 15C26.25 8.78906 21.2109 3.75 15 3.75C8.78906 3.75 3.75 8.78906 3.75 15C3.75 21.2109 8.78906 26.25 15 26.25C21.2109 26.25 26.25 21.2109 26.25 15Z"
                stroke={strokeRight}
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
