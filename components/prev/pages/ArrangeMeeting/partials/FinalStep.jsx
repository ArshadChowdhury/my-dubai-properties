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

const FinalStep = (props) => {
  const meetingData = props?.meetingData;
  const [showGuestEmails, setShowGuestEmails] = useState(false);
  const [emails, setEmails] = useState([]);
  const [emailLength, setEmailLength] = useState(false);
  const [input, setInput] = useState("");

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
      className="h-full md:h-auto border-0 rounded-lg shadow-lg relative flex w-full bg-gradient-to-r from-[#000F1D]  via-[#00182E] to-[#000F1D] outline-none focus:outline-none"
    >
      <div className="h-full flex w-full vector_background">
        <div className="h-full w-full flex justify-center pt-[3rem] pb-[3rem] md:pt-[2rem]  md:px-[3rem]">
          <div className="w-[85%] md:w-[60%]">
            <h1 className="font-montserrat text-lg leading-6 text-white">
              {meetingData?.enterDetails}
            </h1>
            <form action="" className="mt-5" onSubmit={handleSubmit}>
              <div className="flex items-center w-full text-[#bfa04b]">
                <input
                  type="text"
                  id="name"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  placeholder={meetingData?.placeholderName}
                  className="border-[0.5px]  border-[#798A9C] w-full px-5 py-3 rounded-[2px] mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-white"
                  required
                />
              </div>
              <div className="flex items-center w-full text-[#bfa04b]">
                <input
                  type="email"
                  id="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder={meetingData?.placeholderEmail}
                  className=" border-[0.5px] border-[#798A9C] w-full px-5 py-3 rounded-[2px] mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-white phoneNumberInput"
                  required
                />
              </div>
              {/* <div className="flex items-center w-full text-[#bfa04b]">
                <input
                  type="text"
                  required
                  id="phone"
                  placeholder="Your Phone Number"
                  className="border-[0.5px]  border-[#798A9C] w-full px-5 py-3 rounded-[2px] mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-white"
                />
              </div> */}
              <div className="flex items-center mb-3">
                <div className="w-full h-full">
                  <PhoneInput
                    placeholder={meetingData?.placeholderPhoneNumber}
                    value={phoneValue}
                    onChange={setPhoneValue}
                    defaultCountry="BD"
                    className="border-[0.5px] border-[#798A9C] w-full px-5 py-3 rounded-[2px] mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-white"
                  />
                </div>
              </div>

              {showGuestEmails && (
                <div className="pb-20 border-[0.5px] border-[#798A9C] w-full px-5 py-3 rounded-[2px] mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-white">
                  <div className="flex flex-wrap items-center">
                    {emails.map((email, index) => (
                      <div
                        key={index}
                        className="flex items-center mb-1 mr-2 justify-center rounded-sm bg-[#DFBF68] px-3 font-semibold"
                      >
                        <div className="flex flex-wrap items-center justify-center font-montserrat text-[10px]">
                          {email}
                        </div>
                        <button
                          onClick={() => handleRemoveEmail(email)}
                          className="ml-2 pb-1 text-black flex items-center justify-center align-middle"
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center w-full text-[#bfa04b]">
                    <textarea
                      id="guestEmails"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleInputKeyDown}
                      placeholder={meetingData?.placeholderGuestEmails}
                      className="w-full outline-none bg-transparent"
                    />
                  </div>
                </div>
              )}
              <div
                className={`flex w-full justify-center py-3 ${
                  showGuestEmails ? "hidden" : ""
                }`}
              >
                <BtnAdd
                  type={meetingData?.button}
                  btnText={meetingData?.buttonAddGuests}
                  className="w-[105px] border-top-white z-10"
                  handleAddGuestEmailsClick={handleAddGuestEmailsClick}
                />
              </div>
            </form>
          </div>
          {/**
        <div className="col-span-2 ml-5">
            <h1 className="font-montserrat text-lg leading-6 text-white">
              Guests List
            </h1>
            <p className="text-white py-1 border-0 rounded text-sm"></p>
            <div className=" pt-3 grid grid-cols-2 gap-[10px]">
              <BtnTime btnText="Guests1" className="border-top-white" />
              <BtnTime btnText="Guests2" className="border-top-white" />
              <BtnTime btnText="Guests3" className="border-top-white" />
              <BtnTime btnText="Guests4" className="border-top-white" />
              <BtnTime btnText="Guests5" className="border-top-white" />
              <BtnTime btnText="Guests6" className="border-top-white" />
              <BtnTime btnText="Guests7" className="border-top-white" />
              <BtnTime btnText="Guests8" className="border-top-white" />
              <BtnTime btnText="Guests9" className="border-top-white" />
              <BtnTime btnText="Guests10" className="border-top-white" />
              <BtnTime btnText="Edit" className="border-top" />
              <BtnTime btnText="Done" className="border-top" />
            </div>
          </div>
         */}
        </div>
        <div
          className="absolute md:top-[90%] top-[75%] w-full flex left-[41%] md:left-[45%]"
          onClick={props.closePopUp}
        >
          <BtnTime
            type="submit"
            onClick={handleInVisible}
            btnText={meetingData?.button}
            className="border-round w-[80px] mt-8 md:mt-0"
          />
        </div>
        {emailLength && (
          <div className="fixed text-gray-600 text-md rounded-md top-[740px] left-[115px]  md:left-[620px] md:top-[640px] border px-10 py-[5px] bg-white">
            Max limit exceed
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalStep;
