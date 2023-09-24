import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useForm } from "react-hook-form";
import { useStateValue } from "@/components/prev/states/StateProvider";
import close from "@/components/prev/assets/images/global/close-outline.png";
import { AnimatePresence, color, motion } from "framer-motion";
import Image from "next/image";
import { instance } from "@/components/prev/services/apiFunctions";

const ArrangeMeeting = ({ mobileView, homeData }) => {
  const [{ showContactModal, contactModalInfo }, dispatch] = useStateValue();
  const [subsPopUp, setSubsPopUp] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);

  const arrangeRef = useRef();
  const currentArrangeRef = useRef();

  const { register, handleSubmit, formState, reset } = useForm();

  const registerData = homeData?.lang?.enquiryForm;
  const langList = homeData?.langList;
  const { errors } = formState;

  //   const closePopUp = () => {
  //     setSubsPopUp(true);
  //     setCloseBtn(false);
  //   };

  const onSubmit = (data) => {
    // instance
    //   .post(`submit-customer-interest/${contactModalInfo.id}`, data, {
    //     headers: { "Content-Type": "application/json" },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.data);
    //   });
    dispatch({ type: "setShowContactModal", item: false });
    setSubsPopUp(true);
    reset();
  };

  const closeModal = (e) => {
    setSubsPopUp(false);
    dispatch({ type: "setShowContactModal", item: false });
    reset();
    setCloseBtn(true);
  };
  console.log(showContactModal);
  console.log(subsPopUp);

  //   const handleSubmitButton = (e) => {
  //     e.preventDefault();
  //     if (isMeetSelected || isZoomSelected || openMeetLink === "phone") {
  //       setOpenNextStep(true);
  //       setCloseFirststep(false);
  //     }
  //   };

  //   useLayoutEffect(() => {
  //     if (showModal) {
  //       if (mobileView) {
  //         gsap.to(arrangeRef.current, {
  //           bottom: "60px",
  //           duration: 1,
  //           ease: "linear",
  //         });
  //       }
  //     }
  //   }, [showModal]);

  useLayoutEffect(() => {
    let handle = (e) => {
      const distanceFromTop = window.scrollY;
      if (currentArrangeRef.current) {
        const menuHeight = arrangeRef.current?.offsetHeight;
        const menuOffsetTop = arrangeRef.current?.offsetTop;
        if (distanceFromTop > menuHeight + menuOffsetTop) {
          setSubsPopUp(false);
          dispatch({ type: "setShowContactModal", item: false });
        }
      }
      if (!currentArrangeRef.current?.contains(e.target)) {
        setSubsPopUp(false);
        dispatch({ type: "setShowContactModal", item: false });
      }
    };

    document.addEventListener("mousedown", handle);
    window.addEventListener("scroll", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
      window.removeEventListener("scroll", handle);
    };
  }, [showContactModal, currentArrangeRef]);

  return (
    <>
      <AnimatePresence>
        {showContactModal ? (
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
                className={`w-full h-[60vh] md:h-[390px] md:w-[800px] mx-auto max-w-3xl z-[100]`}
              >
                <div className="flex justify-center items-center">
                  <div className="border-top-white relative bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] px-10 md:px-5 border border-[#373F48] rounded-md text-center flex justify-center py-3 z-[20]">
                    <div className="w-full h-auto">
                      <div>
                        <button
                          onClick={closeModal}
                          className={`hidden md:${
                            closeBtn ? "block" : "hidden"
                          } absolute top-2.5 right-2 cursor-pointer z-10`}
                        >
                          <Image src={close} alt="close btn" />
                        </button>
                      </div>
                      <h1 className="font-montserrat text-[14px] leading-[150%] text-white">
                        {contactModalInfo.propertyName} <br />
                        {registerData?.register}
                      </h1>
                      <form
                        action=""
                        className="mt-3"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                      >
                        <div className="flex flex-col items-center">
                          <input
                            type="text"
                            id="name"
                            placeholder={registerData?.placeholderName}
                            className="w-full px-5 py-2 rounded-md placeholder:font-montserrat placeholder:text-[9.5px] custom-shadow bg-white bg-opacity-10  focus:outline-none text-[#f1bf3f]"
                            {...register("name", {
                              required: {
                                value: true,
                                message: "Name is required",
                              },
                              maxLength: {
                                value: 30,
                                message: "Name cannot be over 30 characters",
                              },
                            })}
                          />
                          <p className="text-red-300 text-xs text-left w-full py-1">
                            {errors.name?.message?.length > 0
                              ? errors.name?.message
                              : null}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <input
                            type="email"
                            id="email"
                            placeholder={registerData?.placeholderEmail}
                            className="w-full px-5 py-2 rounded-md placeholder:font-montserrat placeholder:text-[9.5px] custom-shadow bg-white bg-opacity-10  focus:outline-none text-[#f1bf3f]"
                            {...register("email", {
                              required: {
                                value: true,
                                message: "Email is required",
                              },
                              pattern: {
                                value:
                                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Invalid email",
                              },
                              maxLength: {
                                value: 40,
                                message: "Email cannot be over 40 characters",
                              },
                            })}
                          />
                          <p className="text-red-300 text-xs text-left w-full py-1">
                            {errors.email?.message?.length > 0
                              ? errors.email?.message
                              : null}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder={registerData?.placeholderPhone}
                            className="w-full px-5 py-2 rounded-md placeholder:font-montserrat placeholder:text-[9.5px] custom-shadow bg-white bg-opacity-10  focus:outline-none text-[#f1bf3f]"
                            {...register("phone", {
                              required: {
                                value: true,
                                message: "Phone number is required",
                              },
                              maxLength: {
                                value: 30,
                                message:
                                  "Phone number cannot be over 30 characters",
                              },
                            })}
                          />
                          <p className="text-red-300 text-xs text-left w-full py-1">
                            {errors.phone?.message?.length > 0
                              ? errors.phone?.message
                              : null}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <select
                            name="preferedLang"
                            id="preferedLang"
                            className="w-full px-5 py-3 rounded-md font-montserrat text-[11.5px] custom-shadow bg-white bg-opacity-10  focus:outline-none text-gray-400 focus:text-[#f1bf3f]"
                            {...register("preferedLang", {
                              required: "Language is required",
                            })}
                          >
                            <option className="rounded-2xl font-montserrat text-[10.5px] text-[#f1bf3f]">
                              {registerData?.placeholderLanguage}
                            </option>
                            {langList?.map((lang) => (
                              <option
                                value={lang.value}
                                key={lang.value}
                                className="rounded-2xl font-montserrat text-[10.5px] text-[#f1bf3f]"
                              >
                                {lang.title}
                              </option>
                            ))}
                          </select>
                          <p className="text-red-300 text-xs text-left w-full py-1">
                            {errors.language?.message?.length > 0
                              ? errors.language?.message
                              : null}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <textarea
                            placeholder={registerData?.placeholderDescription}
                            name="description"
                            id="description"
                            cols="30"
                            rows="3"
                            className="w-full px-5 py-2 rounded-md placeholder:font-montserrat placeholder:text-[9.5px] custom-shadow bg-white bg-opacity-10  focus:outline-none text-[#f1bf3f]"
                            {...register("description", {
                              required: {
                                value: true,
                                message: "Description is required",
                              },
                              maxLength: {
                                value: 500,
                                message:
                                  "Description cannot be over 500 characters",
                              },
                            })}
                          />
                          <p className="text-red-300 text-xs text-left w-full py-1">
                            {errors.description?.message?.length > 0
                              ? errors.description?.message
                              : null}
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="w-full rounded-md my-2 text-white py-2 font-montserrat uppercase bg-gradient-to-r from-[#A7893A] via-[#BFA04B] to-[#A7893A]"
                        >
                          {registerData?.register}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ArrangeMeeting;
