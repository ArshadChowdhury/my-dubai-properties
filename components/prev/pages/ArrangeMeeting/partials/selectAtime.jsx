import Image from "next/image";
import React from "react";
import BtnTime from "@/components/prev/BtnTime";

const SelectTime = ({
  activeButton,
  selectDate,
  timeZone,
  handleTimezonePopup,
  isTimezonePopupOpen,
  timezones,
  setActiveButton,
}) => {
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

  const handleSelectTimeClick = (btnText) => {
    setActiveButton(btnText);
  };

  return (
    <div className="ml-[5rem]">
      <h3 className="text-white pb-5 text-lg">Select a Time</h3>
      <div>
        <p className="text-white  border-0 rounded text-sm">
          {selectDate.date()} {months[selectDate.month()]}, {selectDate.year()}
        </p>

        <div className="pt-5 grid grid-cols-2 gap-[6px] h-[150px] overflow-y-scroll ">
          {btnTimeData.map((item, index) => (
            <BtnTime
              key={index}
              btnText={item.btnText}
              className={
                activeButton === item.btnText
                  ? "border border-round"
                  : " border-top-white"
              }
              handleSelectTimeClick={() => handleSelectTimeClick(item.btnText)}
            />
          ))}
        </div>
      </div>
      <div className="pt-2">
        <h3 className="text-white  text-lg">Time Zone</h3>
        <div className="relative w-full px-5 flex justify-between items-center bg-gradient-to-r from-[#0A223A]  via-[#214265] to-[#0A223A]">
          <span className=" cursor-pointer">
            <Image src={world} alt="" />
          </span>
          <p className="text-white text-center py-1 border-0 rounded text-sm">
            {timeZone}
          </p>

          <span className=" cursor-pointer" onClick={handleTimezonePopup}>
            <Image src={rightArrow} alt="" />
          </span>
          {isTimezonePopupOpen && (
            <div className="absolute bottom-full left-0 h-[220px] overflow-y-scroll overflow-x-hidden w-full px-5 bg-[#0A223A] pt-5 text-sm text-white">
              {timezones.map((timezone) => (
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
  );
};

export default SelectTime;
