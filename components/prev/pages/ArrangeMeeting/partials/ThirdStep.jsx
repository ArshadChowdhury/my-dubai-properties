import React, { useState } from "react";
import dayjs from "dayjs";
import { generator, months } from "../../../services/calender";
import cn from "../../../services/ch";
import rightArrow from "../../../assets/images/arrang-meeting/Vector.png";
import leftArrow from "../../../assets/images/arrang-meeting/chevron-forward.png";
// import BtnTime from "../../../components/BtnTime";
import world from "../../../assets/images/arrang-meeting/globe-outline.png";
import ForwordIcon from "../../../assets/images/global/chevron-forward.png";
import close from "../../../assets/images/global/close-outline.png";
import { useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion, AnimatePresence } from "framer-motion";
import BtnTime from "@/components/prev/BtnTime";
import BtnAdd from "@/components/prev/BtnAdd";
import Image from "next/image";
import BtnNextStep from "@/components/prev/BtnNextStep";

const ThirdStep = (props) => {
  const { selectDate, setTime } = props;
  const meetingData = props?.meetingData;
  const [showGuestEmails, setShowGuestEmails] = useState(false);
  const [emails, setEmails] = useState([]);
  const [emailLength, setEmailLength] = useState(false);
  const [input, setInput] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleInVisible = () => {
    phoneValue.length > 0 &&
      emailValue.length > 0 &&
      nameValue.length > 0 &&
      emails.length > 0 &&
      setIsVisible(false); // Hide the div smoothly before unmounting
  };

  // const handleInputKeyDown = (e) => {
  //   if (e.key === "Enter" && input.trim() !== "") {
  //     const trimmedEmail = input.trim();
  //     setEmails((prevEmails) => {
  //       const updatedEmails = [...prevEmails, trimmedEmail];
  //       return updatedEmails.slice(0, 10);
  //     });
  //     setInput("");
  //   }
  // };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.endsWith("@gmail.com");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const trimmedEmail = input.trim();
      if (isValidEmail(trimmedEmail)) {
        setEmails((prevEmails) => {
          const updatedEmails = [...prevEmails, trimmedEmail];
          return updatedEmails.slice(0, 10);
        });
      }
      setInput("");
    }
  };

  const handleRemoveEmail = (emailToRemove) => {
    setEmails((prevEmails) =>
      prevEmails.filter((email) => email !== emailToRemove)
    );
  };

  const handleSelectTimeClick = (btnText) => {
    setTime(btnText);
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

  const handleTime = (timezone) => {
    props.setTimezone(timezone);
    props.setIsTimezonePopupOpen(false);
  };

  useEffect(() => {
    if (emails.length > 9) {
      setEmailLength(true);

      const timer = setTimeout(() => {
        setEmailLength(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [emails]);

  const handleAddGuestEmailsClick = () => {
    setShowGuestEmails(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      // style={{
      //   opacity: isVisible ? 0 : 1,
      //   transition: "opacity 0.5s ease-in-out", // Smooth fade-out transition
      // }}
      key="modal"
      className="h-full md:h-auto border-0 rounded-lg shadow-lg relative flex justify-center items-center w-full bg-gradient-to-r from-[#000F1D]  via-[#00182E] to-[#000F1D] outline-none focus:outline-none"
    >
      <div className={`md:hidden md:ml-[5rem] w-10/12`}>
        <h3 className="text-white pb-5 text-lg">{meetingData?.selectTime}</h3>

        <div>
          <p className="text-white  border-0 rounded text-sm">
            {selectDate.date()} {months[selectDate.month()]},{" "}
            {selectDate.year()}
          </p>

          <div className="pt-5 pr-5 grid grid-cols-2 gap-[6px] h-[235px] overflow-y-scroll scrollbar-thin scrollbar-track-gray-500/10 scrollbar-thumb-[#3374FF]/30">
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

        {/* disabled */}
        <div
          className="md:hidden absolute bottom-[7%] left-[65%] w-full flex"
          onClick={activeButton !== null ? props.handleFinalButton : null}
        >
          <BtnNextStep
            btnText={meetingData?.next}
            btnImage={ForwordIcon}
            className={
              activeButton !== null ? "border-round" : "cursor-not-allowed"
            }
          />
        </div>
        <div className="pt-2 pr-5">
          <h3 className="text-white  text-lg">Time Zone</h3>
          <div className="relative w-full px-5 flex justify-between items-center bg-gradient-to-r from-[#0A223A]  via-[#214265] to-[#0A223A]">
            <span className=" cursor-pointer">
              <Image src={world} alt="" />
            </span>
            <p className="text-white text-center py-1 border-0 rounded text-sm">
              {props.timeZone[0]} / {props.timeZone[1]}
            </p>
            <span
              className=" cursor-pointer"
              onClick={props.handleTimezonePopup}
            >
              <Image src={rightArrow} alt="" />
            </span>
            {props.isTimezonePopupOpen && (
              <div className="absolute bottom-full left-0 h-[220px] overflow-y-scroll overflow-x-hidden w-full px-5 bg-[#0A223A] pt-5 text-sm text-white">
                {props.timezones.map((timezone) => (
                  <p
                    key={timezone}
                    className="px-5 cursor-pointer hover:text-[#dcb558] shadow-sm py-2"
                    onClick={(e) => handleTime(timezone)}
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
  );
};

export default ThirdStep;
