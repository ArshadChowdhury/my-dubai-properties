import React, { useState, useRef } from "react";
import dayjs from "dayjs";
import { generator, months } from "../../../services/calender";
import cn from "../../../services/ch";
import rightArrow from "../../../assets/images/arrang-meeting/Vector.png";
import leftArrow from "../../../assets/images/arrang-meeting/chevron-forward.png";
import world from "../../../assets/images/arrang-meeting/globe-outline.png";
import ForwordIcon from "../../../assets/images/global/chevron-forward.png";
import BtnTime from "@/components/prev/BtnTime";
import BtnNextStep from "@/components/prev/BtnNextStep";
import Image from "next/image";

const NextStep = (props) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(today);
  const [active, setActive] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [mobileDataButtonPosition, setMobileDateButtonPosition] =
    useState(false);

  const ref = useRef(null);

  const isCurrentMonth =
    today.isSame(currentDate, "month") && today.isSame(currentDate, "year");

  const handleSelectTimeClick = (btnText) => {
    setActiveButton(btnText);
  };
  const btnTimeData = [
    { btnText: "9.00 AM" },
    { btnText: "9.30 AM" },
    { btnText: "10.00 AM" },
    { btnText: "10.30 AM" },
    { btnText: "11.00 AM" },
    { btnText: "11.30 AM" },
    { btnText: "12.00 PM" },
    { btnText: "12.30 PM" },
    { btnText: "01.00 PM" },
    { btnText: "01.30 PM" },
    { btnText: "02.00 PM" },
    { btnText: "02.30 PM" },
    { btnText: "03.00 PM" },
    { btnText: "03.30 PM" },
    { btnText: "04.00 PM" },
    { btnText: "04.30 PM" },
    { btnText: "05.00 PM" },
    { btnText: "05.30 PM" },
    { btnText: "06.00 PM" },
    { btnText: "06.30 PM" },
    { btnText: "07.00 PM" },
    { btnText: "07.30 PM" },
    { btnText: "08.00 PM" },
    { btnText: "08.30 PM" },
    { btnText: "09.00 PM" },
  ];

  const handleSelectDate = (date) => {
    setSelectDate(date);
    setActive(true);
  };

  const handleTime = (timezone) => {
    props.setTimezone(timezone);
    props.setIsTimezonePopupOpen(false);
  };

  const handleDateNextButton = () => {
    setMobileDateButtonPosition(true);
  };

  return (
    <div className="h-full border-0 rounded-lg shadow-lg relative w-full bg-gradient-to-r from-[#000F1D]  via-[#00182E] to-[#000F1D] outline-none focus:outline-none">
      <div className="flex w-full vector_background h-full">
        <div className="h-full w-full md:grid grid-cols-2 py-[3rem] px-[3rem]">
          <div
            className={`relative pl-5`}
            // ${
            //   mobileDataButtonPosition ? "hidden" : ""
            // }
          >
            <h3 className="text-white pb-5 text-lg">Select a Date</h3>
            <div className="pr-[2rem]">
              <div className=" px-5 flex justify-between items-center bg-gradient-to-r from-[#0A223A]  via-[#214265] to-[#0A223A]">
                <span
                  className=" cursor-pointer"
                  onClick={() => setToday(today.month(today.month() - 1))}
                >
                  <Image src={leftArrow} alt="" />
                </span>

                <p className="text-white text-center py-1 border-0 rounded">
                  {months[today.month()]}
                </p>

                <span
                  className=" cursor-pointer"
                  onClick={() => setToday(today.month(today.month() + 1))}
                >
                  <Image src={rightArrow} alt="" />
                </span>
              </div>
              <div className=" grid grid-cols-7">
                {days.map((week, idx) => {
                  return (
                    <div key={idx}>
                      <p className="h-8 grid place-content-center text-white text-sm">
                        {week}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-7">
                {generator(today.month(), today.year()).map(
                  ({ currentMonth, date, today }, index) => {
                    return (
                      <div
                        key={index}
                        className="h-8 grid place-content-center text-[10px]"
                      >
                        <p
                          className={`${
                            dayjs(date).isBefore(dayjs(), "day") &&
                            dayjs(date).isBefore(dayjs(), "day")
                              ? "text-slate-500 hover:bg-red-500 hover:text-white cursor-not-allowed"
                              : today
                              ? `cursor-pointer  ${
                                  active
                                    ? ""
                                    : "border rounded-md bg-gradient-to-r from-[#DFBF68] via-[#BFA04B] to-[#DFBF68]"
                                } text-white`
                              : "text-white hover:bg-gradient-to-r  from-[#DFBF68] via-[#BFA04B] to-[#DFBF68] cursor-pointer"
                          } hover:border rounded-sm text-white text-lg md:text-sm`}
                          onClick={
                            dayjs(date).isBefore(dayjs(), "day")
                              ? null
                              : () => handleSelectDate(date)
                          }
                        >
                          <span
                            className={`${
                              cn(currentMonth) ? "" : "invisible"
                            } p-[.3rem]`}
                            onClick={() => handleSelectDate(date)}
                          >
                            {dayjs(date).date()}
                          </span>
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div
              className="md:hidden absolute  -bottom-[20%] left-[40%] w-full flex"
              // onClick={handleDateNextButton}
              onClick={activeButton !== null ? null : handleDateNextButton}
            >
              <BtnNextStep
                btnText="Next step"
                btnImage={ForwordIcon}
                className={
                  activeButton !== null ? "border-round" : "cursor-not-allowed"
                }
              />
            </div>
          </div>
          <div
            className={`md:ml-[5rem]`}
            // ${
            //   props.mobileView ? (mobileDataButtonPosition ? "" : "hidden") : ""
            // }
          >
            <h3 className="text-white pb-5 text-lg">Select a Time</h3>

            <div>
              <p className="text-white  border-0 rounded text-sm">
                {selectDate.date()} {months[selectDate.month()]},{" "}
                {selectDate.year()}
              </p>

              <div className="pt-5 pr-5 grid grid-cols-2 gap-[6px] h-[150px] overflow-y-scroll scrollbar-thin scrollbar-track-gray-500/10 scrollbar-thumb-[#3374FF]/30">
                {btnTimeData.map((item, index) => (
                  <BtnTime
                    key={index}
                    btnText={item.btnText}
                    className={
                      activeButton === item.btnText
                        ? "border border-round"
                        : "border-top-white"
                    }
                    handleSelectTimeClick={() =>
                      handleSelectTimeClick(item.btnText)
                    }
                  />
                ))}
              </div>
            </div>
            <div className="pt-2 pr-5">
              <h3 className="text-white  text-lg">Time Zone</h3>
              <div className="relative w-full px-5 flex justify-between items-center bg-gradient-to-r from-[#0A223A]  via-[#214265] to-[#0A223A]">
                <span className=" cursor-pointer">
                  <Image src={world} alt="" />
                </span>
                <p className="text-white text-center py-1 border-0 rounded text-sm">
                  {props.timeZone}
                </p>

                <span
                  className=" cursor-pointer"
                  onClick={props.handleTimezonePopup}
                >
                  <Image src={rightArrow} alt="" />
                </span>
                {props.isTimezonePopupOpen && (
                  <div className="absolute bottom-full left-0 h-[220px] overflow-y-scroll overflow-x-hidden w-full px-5 bg-[#0A223A] pt-5 text-sm text-white">
                    {props.timezones.map((timezone, index) => (
                      <p
                        className="px-5 cursor-pointer hover:text-[#dcb558] shadow-sm py-2"
                        onClick={(e) => handleTime(timezone)}
                        key={timezone}
                      >
                        {timezone}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute  top-[75%] md:top-[86%] left-[40%] w-full flex md:!block`}
          // ${ mobileDataButtonPosition ? "" : "hidden"}
          // onClick={props.handleNextButton}
          onClick={activeButton !== null ? props.handleNextButton : null}
        >
          <BtnNextStep
            btnText="Next step"
            btnImage={ForwordIcon}
            className={
              activeButton !== null ? "border-round" : "cursor-not-allowed"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NextStep;
