import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "./HeadingText";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
  A11y,
  Controller,
} from "swiper/modules";
import { useCallback } from "react";

import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import Image from "next/image";

const PhotoGallery = (props) => {
  const heading = props?.singleProperty?.lang?.propertyDetails?.titleGallery;
  const swiperRef = useRef();
  const sliderRef = useRef();
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [strokeLeft, setStrokeLeft] = useState("#B4B4B4");
  const [strokeRight, setStrokeRight] = useState("#B4B4B4");
  const gallery = props?.singleProperty?.property?.images;
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgPath, setImgPath] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
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
    // window.addEventListener("mousedown", handleCloseModalOnScroll);
    return () => {
      window.removeEventListener("scroll", handleCloseModalOnScroll);
      // window.removeEventListener("mousedown", handleCloseModalOnScroll);
    };
  }, []);

  const onMouseEnterLeftHandler = () => {
    setStrokeLeft("#FFD15F");
  };

  const onMouseLeaveLeftHandler = () => {
    setStrokeLeft("#B4B4B4");
  };

  const onMouseEnterRightHandler = () => {
    setStrokeRight("#FFD15F");
  };

  const onMouseLeaveRightHandler = () => {
    setStrokeRight("#B4B4B4");
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const showModal = (index) => {
    setIsModalOpen(true);
    setSelectedImageIndex(index);
  };

  return (
    <section id="photogallery" className="!mt-20 md:mt-0 mb-5">
      {isModalOpen && (
        <div
          onClick={handleCloseModalOnScroll}
          className={`w-full h-screen md:px-24 md:pb-20 px-10 md:pl-72 flex justify-center items-center fixed bottom-5 left-0 z-50 bg-black bg-opacity-75`}
        >
          <Swiper
            ref={sliderRef}
            controller={{ control: controlledSwiper }}
            grabCursor={true}
            centeredSlides={false}
            navigation
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Virtual,
              Controller,
            ]}
            initialSlide={selectedImageIndex}
            className="mySwiper swiper"
          >
            {gallery.map((image, index) => (
              <SwiperSlide
                onSwiper={setControlledSwiper}
                key={`image-${index}`}
                className="rounded-xl"
              >
                <Image
                  height={500}
                  width={1000}
                  src={image.path}
                  alt={image.metaDescription}
                  className={`rounded-md relative cursor-pointer md:h-5/6 md:w-10/12 md:ml-30 ${
                    isMobile ? "h-[350px] w-[450px]" : ""
                  }  `}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            onMouseEnter={onMouseEnterLeftHandler}
            onMouseLeave={onMouseLeaveLeftHandler}
            className="absolute left-5 md:left-10 z-[200]"
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
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            onMouseEnter={onMouseEnterRightHandler}
            onMouseLeave={onMouseLeaveRightHandler}
            className="absolute right-5 md:right-10 z-[200]"
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
      )}
      <SkeletonSingleProperty className="px-5">
        <div className="items-start w-full md:w-1/4 ml-2 pr-2">
          <HeadingText innerText={heading} className="text-center" size="" />
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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onInit={(swiper) => (swiperRef.current = swiper)}
      >
        {gallery?.map((image, index) => (
          <SwiperSlide key={`image-${index}`} className="rounded-xl">
            <Image
              height={500}
              width={1000}
              src={image.path}
              alt={image.metaDescription}
              className={`rounded-md cursor-pointer -z-50${
                isMobile ? "h-[150px]" : ""
              }  `}
              onClick={() => showModal(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 w-full flex justify-center items-center translate-y-1/2">
        <div className="w-1/4 flex justify-between relative">
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
            onMouseEnter={onMouseEnterLeftHandler}
            onMouseLeave={onMouseLeaveLeftHandler}
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
            }}
            onMouseEnter={onMouseEnterRightHandler}
            onMouseLeave={onMouseLeaveRightHandler}
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
