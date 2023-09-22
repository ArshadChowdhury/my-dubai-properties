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

const ArrangeMeeting = ({ mobileView, homeData }) => {
  const [
    { showModal, openMeetLink, isMeetSelected, isZoomSelected },
    dispatch,
  ] = useStateValue();
  const [openNextStep, setOpenNextStep] = useState(false);
  const [closeFirststep, setCloseFirststep] = useState(true);
  const [openFinalStep, setOpenFinalStep] = useState(false);
  const [isTimezonePopupOpen, setIsTimezonePopupOpen] = useState(false);
  const [subsPopUp, setSubsPopUp] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);

  const arrangeRef = useRef();
  const currentArrangeRef = useRef();

  const closePopUp = () => {
    setSubsPopUp(true);
    setOpenFinalStep(false);
    setCloseBtn(false);
  };

  const meetingData = homeData?.lang?.meetings;

  const [timeZone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")
  );
  const timezones = moment.tz.names();

  const closeMeeting = (e) => {
    dispatch({ type: "setShowModal", item: false });
    setCloseFirststep(true);
    setOpenNextStep(false);
    setOpenFinalStep(false);
    dispatch({ type: "selectVideoMeeting", item: false });
    setSubsPopUp(false);
    setCloseBtn(true);
  };

  const showMeetLink = (name) => {
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
    setOpenFinalStep(true);
    setOpenNextStep(false);
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
          bottom: "100px",
          duration: 1,
          ease: "linear",
        });
      }
    }
  }, [showModal]);

  useLayoutEffect(() => {
    let handle = (e) => {
      const distanceFromTop = window.scrollY;

      if (currentArrangeRef.current) {
        const menuHeight = arrangeRef.current?.offsetHeight;
        const menuOffsetTop = arrangeRef.current?.offsetTop;
        if (distanceFromTop > menuHeight + menuOffsetTop) {
          closeMeeting();
        }
      }
      if (!currentArrangeRef.current?.contains(e.target)) {
        closeMeeting();
      }
    };

    document.addEventListener("mousedown", handle);
    window.addEventListener("scroll", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("scroll", handle);
    };
  }, [showModal, currentArrangeRef]);

  return (
    <>
      <AnimatePresence>
        {showModal ? (
          <motion.div>
            <div className="absolute top-0 pointer-events-none w-full h-[100vh]">
              <div
                className="absolute inset-0  bg-opacity-70 z-50"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              ></div>
            </div>
            <div
              ref={arrangeRef}
              className={`w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed -bottom-full md:-bottom-10 md:left-0 transition-all md:inset-0 z-50 outline-none focus:outline-none rounded-t-[2.5rem] md:rounded-none`}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              {subsPopUp && (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -500,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -500,
                  }}
                  viewport={{ once: true }}
                  className={`cursor-pointer fixed flex flex-col items-center justify-center py-4 px-10 rounded-lg font-montserrat text-white border p-3 z-50 bg-footer`}
                >
                  <Image
                    height={150}
                    width={150}
                    src="/images/global/footer-logo.png"
                    alt=""
                    className="h-[100px] my-2 pb-2"
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
                className={`relative w-full h-[60vh] md:h-[390px] md:w-[800px] mx-auto max-w-3xl`}
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
                    className="absolute md:hidden w-16 h-2 rounded-full bg-white top-3 z-50 opacity-30"
                  ></span>
                </div>
                {closeFirststep && (
                  <FirstStep
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
                    meetingData={meetingData}
                    handleTimezonePopup={handleTimezonePopup}
                    isTimezonePopupOpen={isTimezonePopupOpen}
                    handleNextButton={handleNextButton}
                    timezones={timezones}
                    timeZone={timeZone}
                    setTimezone={setTimezone}
                    setIsTimezonePopupOpen={setIsTimezonePopupOpen}
                    mobileView={mobileView}
                  />
                )}
                {openFinalStep && (
                  <ThirdStep
                    meetingData={meetingData}
                    closePopUp={closePopUp}
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
