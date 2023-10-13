import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import moment from "moment-timezone";
import { useStateValue } from "../../states/StateProvider";
import FirstStep from "./partials/FirstStep";
import NextStep from "./partials/NextStep";
import ThirdStep from "./partials/ThirdStep";
import close from "../../assets/images/global/close-outline.png";
import { AnimatePresence, color, motion } from "framer-motion";
import Image from "next/image";
import FinalStep from "./partials/FinalStep";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";
import { instance } from "../../services/apiFunctions";

const ArrangeMeeting = ({ mobileView, homeData }) => {
  const [
    { showModal, openMeetLink, isMeetSelected, isZoomSelected },
    dispatch,
  ] = useStateValue();
  const [openNextStep, setOpenNextStep] = useState(false);
  const [closeFirststep, setCloseFirststep] = useState(true);
  const [openThirdStep, setOpenThirdStep] = useState(false);
  const [openFinalStep, setOpenFinalStep] = useState(false);
  const [emails, setEmails] = useState([]);
  const [isTimezonePopupOpen, setIsTimezonePopupOpen] = useState(false);
  const [subsPopUp, setSubsPopUp] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);
  const currentDate = dayjs();
  const [selectDate, setSelectDate] = useState(currentDate);
  const [phoneVideo, setPhoneVideo] = useState("");
  const [zoomGoogleMeet, setZoomGoogleMeet] = useState("");
  const [time, setTime] = useState("");

  const arrangeRef = useRef();
  const currentArrangeRef = useRef();

  const onSubmit = (data) => {
    const selectedFormattedDate = `${selectDate.year()}-${selectDate.month()}-${selectDate.date()}`;
    const payload = {
      phoneCall: phoneVideo === "phone",
      videoCall: phoneVideo === "video",
      zoom: zoomGoogleMeet === "zoom",
      googleMeet: zoomGoogleMeet === "meet",
      meetingDate: selectedFormattedDate,
      meetingTime: time,
      timeZone: timeZone[0],
      organizer: {
        name: data.name,
        phoneNumber: data.phone,
        email: data.email,
      },
      guestEmails: emails,
    };
    instance
      .post(`submit-arrange-meeting`, payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
    setSubsPopUp(true);
    setOpenFinalStep(false);
    setCloseBtn(false);
    // setSubsPopUpContact(true);
    // dispatch({ type: "setShowContactModal", item: false });
    // reset();
  };

  const meetingData = homeData?.lang?.meetings;

  const [timeZone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")
  );

  const timezones = moment.tz.names();

  const closeMeeting = (e) => {
    setSubsPopUp(false);
    dispatch({ type: "setShowModal", item: false });
    setCloseFirststep(true);
    setOpenNextStep(false);
    setOpenFinalStep(false);
    dispatch({ type: "selectVideoMeeting", item: false });
    setCloseBtn(true);
  };

  const showMeetLink = (name) => {
    setPhoneVideo(name);
    dispatch({ type: "selectVideoMeeting", item: name });
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (isMeetSelected || isZoomSelected || openMeetLink === "phone") {
      setOpenNextStep(true);
      setCloseFirststep(false);
    }
  };

  const handleNextButton = (e) => {
    e.preventDefault();
    setOpenThirdStep(true);
    setOpenNextStep(false);
  };

  const handleFinalButton = (e) => {
    e.preventDefault();
    setOpenFinalStep(true);
    setOpenNextStep(false);
    setOpenThirdStep(false);
    setSelectDate(currentDate);
  };

  const handleTimezonePopup = (e) => {
    e.preventDefault();
    setIsTimezonePopupOpen(!isTimezonePopupOpen);
  };

  const handleSelectTimeClick = (btnText) => {
    setActiveButton(btnText);
  };

  useLayoutEffect(() => {
    if (showModal) {
      if (mobileView) {
        gsap.to(arrangeRef.current, {
          bottom: "60px",
          duration: 1,
          ease: "linear",
        });
      }
    }
  }, [showModal]);

  useLayoutEffect(() => {
    let handle = (e) => {
      if (!currentArrangeRef.current?.contains(e.target)) {
        closeMeeting();
        setSelectDate(currentDate);
      }
    };

    document.addEventListener("mousedown", handle);
    if (!mobileView) {
      document.addEventListener("scroll", handle);
    }

    return () => {
      document.removeEventListener("mousedown", handle);
      if (!mobileView) {
        document.removeEventListener("scroll", handle);
      }
    };
  }, [showModal, currentArrangeRef]);

  // console.log(phoneVideo);
  // console.log(zoomGoogleMeet);
  // console.log(selectDate.year());
  // console.log(selectDate.month());
  // console.log(selectDate.date());
  // console.log(time);
  // console.log(timeZone);

  return (
    <>
      <AnimatePresence>
        {showModal ? (
          <motion.div>
            {/* <div className="absolute top-0 pointer-events-none w-full h-[100vh]">
              <div
                className="absolute inset-0  bg-opacity-70 z-50"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              ></div>
            </div> */}
            <div
              ref={arrangeRef}
              className={`w-full ${
                subsPopUp ? "h-screen" : ""
              } justify-center items-center flex overflow-x-hidden overflow-y-auto fixed -bottom-full md:-bottom-10 md:left-0 transition-all md:inset-0 z-50 outline-none focus:outline-none rounded-t-[2.5rem] md:rounded-none`}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              }}
            >
              {subsPopUp && (
                <motion.div
                  initial={
                    !mobileView
                      ? {
                          opacity: 0,
                          x: -500,
                        }
                      : {
                          opacity: 0,
                          x: -200,
                        }
                  }
                  transition={{
                    duration: 0.3,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={
                    !mobileView
                      ? {
                          opacity: 0,
                          x: -500,
                        }
                      : {
                          opacity: 0,
                          x: -200,
                        }
                  }
                  viewport={{ once: true }}
                  className={`cursor-pointer fixed flex flex-col items-center justify-center mx-2 md:mx-0 md:py-4 md:px-10 rounded-lg font-montserrat text-white border p-3 z-50 vector_background_modal`}
                >
                  <Image
                    height={150}
                    width={150}
                    src="/images/global/footer-logo.png"
                    alt=""
                    className="my-2 pb-2"
                  />
                  <h1 className="text-xl">Form Submitted!</h1>
                  <p>
                    We&apos;d like to show you notifictions for the latest news
                    and updates
                  </p>
                </motion.div>
              )}

              <div
                ref={currentArrangeRef}
                className={`relative w-full ${
                  subsPopUp ? "h-fit" : "h-[60vh]"
                } md:h-[390px] md:w-[800px] mx-auto max-w-3xl z-[100]`}
              >
                <div>
                  <button
                    onClick={closeMeeting}
                    className={`hidden md:${
                      closeBtn ? "block" : "hidden"
                    } absolute top-[24px] right-[30px] cursor-pointer z-10`}
                  >
                    <Image src={close} alt="close btn" />
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <span
                    onClick={closeMeeting}
                    className={`${
                      subsPopUp ? "hidden" : "absolute"
                    } md:hidden w-16 h-2 rounded-full bg-white top-3 z-50 opacity-30`}
                  ></span>
                </div>
                {closeFirststep && (
                  <FirstStep
                    setZoomGoogleMeet={setZoomGoogleMeet}
                    meetingData={meetingData}
                    openMeetLink={openMeetLink}
                    showMeetLink={showMeetLink}
                    handleSubmitButton={handleSubmitButton}
                    isMeetSelected={isMeetSelected}
                    isZoomSelected={isZoomSelected}
                  />
                )}
                {openNextStep && (
                  <NextStep
                    setTime={setTime}
                    selectDate={selectDate}
                    setSelectDate={setSelectDate}
                    meetingData={meetingData}
                    handleTimezonePopup={handleTimezonePopup}
                    isTimezonePopupOpen={isTimezonePopupOpen}
                    handleNextButton={handleNextButton}
                    timezones={timezones}
                    timeZone={timeZone}
                    setTimezone={setTimezone}
                    handleFinalButton={handleFinalButton}
                    setIsTimezonePopupOpen={setIsTimezonePopupOpen}
                    mobileView={mobileView}
                  />
                )}
                {openThirdStep && (
                  <ThirdStep
                    setTime={setTime}
                    selectDate={selectDate}
                    meetingData={meetingData}
                    handleTimezonePopup={handleTimezonePopup}
                    isTimezonePopupOpen={isTimezonePopupOpen}
                    handleNextButton={handleNextButton}
                    timezones={timezones}
                    timeZone={timeZone}
                    setTimezone={setTimezone}
                    setIsTimezonePopupOpen={setIsTimezonePopupOpen}
                    handleFinalButton={handleFinalButton}
                    mobileView={mobileView}
                  />
                )}
                {openFinalStep && (
                  <FinalStep
                    emails={emails}
                    setEmails={setEmails}
                    PhoneInput={PhoneInput}
                    Controller={Controller}
                    useForm={useForm}
                    onSubmit={onSubmit}
                    meetingData={meetingData}
                  />
                )}
              </div>
            </div>
            {/* <style jsx>{`
            body {
              overflow: hidden;
            }
          `}</style> */}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ArrangeMeeting;
