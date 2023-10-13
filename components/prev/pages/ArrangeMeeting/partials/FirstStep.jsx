import React, { useEffect, useState } from "react";
import calender from "../../../assets/images/global/calendar-outline.png";
import calenderMobile from "../../../assets/images/global/calendar-outline-mobile.png";

import talephone from "../../../assets/images/global/Vector.png";
import clock from "../../../assets/images/global/time-outline.png";
import videoIcon from "../../../assets/images/global/video.png";

import ForwordIcon from "../../../assets/images/global/chevron-forward.png";
import Zoom from "../../../assets/images/global/Zoom.png";
import GoogleMeet from "../../../assets/images/global/Google Meet.png";
import BtnNextStep from "@/components/prev/BtnNextStep";
import Image from "next/image";
// import BtnNextStep from "../../../components/BtnNextStep";

const ArrangeMeetingStep1 = ({
  openMeetLink,
  showMeetLink,
  handleSubmitButton,
  meetingData,
  setZoomGoogleMeet,
}) => {
  const [activeBtn, setActiveBtn] = useState("");
  const [mobileView, setMobileView] = useState(null);

  useEffect(() => {
    const isMobileView = window.matchMedia("(max-width: 767px)").matches;
    setMobileView(isMobileView);
  }, []);

  return (
    <div
      className={`py-12 md:py-0 h-full border-0 rounded-lg shadow-lg relative flex md:flex-row flex-col w-full bg-gradient-to-r from-[#000F1D]  via-[#00182E] to-[#000F1D]`}
    >
      <div
        className={`py-8 md:py-0 px-10 md:px-0 md:basis-[35%] md:bg-[#FFF4EA] ${
          mobileView ? "" : "white_background"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full px-3">
          <div className="">
            <Image
              src={mobileView ? calenderMobile : calender}
              alt="calender"
              className="mr-3 bg-center bg-cover"
            />
          </div>
          <h4 className="text-lg leading-[23px] font-[500] uppercase">
            <span className="bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] text-white md:text-transparent bg-clip-text">
              {meetingData?.title}
            </span>
          </h4>
          <p className="text-[12px] text-center hidden md:block">
            {meetingData?.subTitle}
          </p>
        </div>
      </div>
      <div
        className={`px-10 md:px-0  relative flex-1   ${
          mobileView ? "" : "vector_background"
        } `}
      >
        <div className="relative flex flex-col w-full h-auto md:h-full">
          <h3 className="text-lg text-white font-[500] py-[30px] px-[25px] hidden md:block">
            Select an option
          </h3>
          <div className="md:absolute top-[25%] left-[20%] w-full h-full">
            <div className="relative my-5 w-[320px]  bg-gradient-to-r from-[#0A223A]  via-[#00182E] to-[#0A223A]   flex items-center rounded-md">
              <span
                className={`absolute   h-full w-1 bg-yellow-500 border-0 rounded-md ${
                  openMeetLink === "phone"
                    ? "flex left-0"
                    : "-left-[20px] hidden"
                }`}
              ></span>
              <button
                className={`rounded-l-md flex-1 flex gap-4 px-5 py-2 bg-white items-center transition-all duration-300 `}
                onClick={() => showMeetLink("phone")}
              >
                <Image
                  src={talephone}
                  alt="phone icon"
                  className={`${
                    openMeetLink === "phone" && "ml-[.25rem]"
                  } transition-all duration-300`}
                />
                <p className="text-[10px] font-[500]">
                  {meetingData?.phone?.text}
                </p>
              </button>
              <div className="w-[30%] h-full rounded-l-md flex px-5 py-2 justify-between items-center bg-gradient-to-r from-[#0A223A]  via-[#00182E] to-[#0A223A]">
                <span>
                  <Image src={clock} alt="Clock" />
                </span>
                <span className="text-white uppercase text-[10px]">
                  {meetingData?.phone?.timeCount}{" "}
                  {meetingData?.phone?.timeFormat}
                </span>
              </div>
            </div>
            <div className="relative my-5 w-[320px]  bg-gradient-to-r from-[#0A223A]  via-[#00182E] to-[#0A223A] flex items-center rounded-md ">
              <span
                className={`absolute   h-full w-1 bg-yellow-500 border-0 rounded-md ${
                  openMeetLink === "video"
                    ? "flex left-0"
                    : "-left-[20px] hidden"
                }`}
              ></span>
              <button
                className={`rounded-l-md bg-white flex-1 flex px-5 py-2 items-center  `}
                onClick={() => showMeetLink("video")}
              >
                <Image
                  src={videoIcon}
                  alt="phone icon"
                  className={`${
                    openMeetLink === "video" && "ml-[.25rem]"
                  } transition-all duration-300`}
                />
                <p className="text-[10px] font-[500] uppercase w-full text-start pl-5">
                  {meetingData?.video?.text}
                </p>
              </button>
              <div className="w-[30%] h-full rounded-r-md flex px-5 py-2 justify-between items-center bg-gradient-to-r from-[#0A223A]  via-[#00182E] to-[#0A223A]">
                <span>
                  <Image src={clock} alt="Clock" />
                </span>
                <span className="text-white uppercase text-[10px]">
                  {meetingData?.video?.timeCount}{" "}
                  {meetingData?.video?.timeFormat}
                </span>
              </div>
            </div>
          </div>
          {openMeetLink === "video" && (
            <div className="md:absolute top-[60%] left-[35%] flex justify-center gap-2 items-center">
              <div
                onClick={() => {
                  setActiveBtn("zoom");
                  setZoomGoogleMeet("zoom");
                }}
                className={`px-1 cursor-pointer border-0 rounded-[.25rem] ${
                  activeBtn === "zoom" ? "border-x border-x-[#dcb558]" : ""
                }`}
              >
                {/* md:w-[60px] mx-[10px] */}
                <Image src={Zoom} alt="" />
              </div>
              {/* w-[40px] md:w-[45px] */}
              <div
                onClick={() => {
                  setActiveBtn("meet");
                  setZoomGoogleMeet("meet");
                }}
                className={`py-[5px] px-2 cursor-pointer border-0 rounded-[.25rem] ${
                  activeBtn === "meet" ? "border-x border-x-[#dcb558]" : ""
                }`}
              >
                <Image src={GoogleMeet} alt="" />
              </div>
            </div>
          )}
        </div>
        <div
          disabled={true}
          className="absolute top-[70%] md:top-[80%] left-[40%] w-full flex"
          // onClick={handleSubmitButton}
          onClick={
            (openMeetLink === "video" &&
              (activeBtn === "meet" || activeBtn === "zoom")) ||
            openMeetLink === "phone"
              ? handleSubmitButton
              : null
          }
        >
          <BtnNextStep
            btnText={meetingData?.next}
            btnImage={ForwordIcon}
            className={
              (openMeetLink === "video" &&
                (activeBtn === "meet" || activeBtn === "zoom")) ||
              openMeetLink === "phone"
                ? "border-round"
                : "cursor-not-allowed"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ArrangeMeetingStep1;
