import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useForm, Controller } from "react-hook-form";
import { useStateValue } from "@/components/prev/states/StateProvider";
import close from "@/components/prev/assets/images/global/close-outline.png";
import { AnimatePresence, color, motion } from "framer-motion";
import Image from "next/image";
import { instance } from "@/components/prev/services/apiFunctions";
import { useEffect } from "react";
import PhoneInput from "react-phone-number-input";

const ContactUsModal = ({ homeData }) => {
  const [{ showContactModal, contactModalInfo }, dispatch] = useStateValue();
  const [subsPopUpContact, setSubsPopUpContact] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  const arrangeRef = useRef();
  const currentArrangeRef = useRef();

  const { register, handleSubmit, formState, reset, control } = useForm();

  const registerData = homeData?.lang?.enquiryForm;
  const langList = homeData?.langList;
  const { errors } = formState;

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   const closePopUp = () => {
  //     setSubsPopUp(true);
  //     setCloseBtn(false);
  //   };

  const onSubmit = (data) => {
    instance
      .post(`submit-customer-interest/${contactModalInfo.id}`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
    setSubsPopUpContact(true);
    // dispatch({ type: "setShowContactModal", item: false });
    reset();
  };

  const closeModal = (e) => {
    setSubsPopUpContact(false);
    dispatch({ type: "setShowContactModal", item: false });
    reset();
    setCloseBtn(true);
  };

  useLayoutEffect(() => {
    let handle = (e) => {
      if (!currentArrangeRef.current?.contains(e.target)) {
        setSubsPopUpContact(false);
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
            <div
              onClick={(e) => e.stopPropagation()}
              ref={arrangeRef}
              className={`w-full ${
                subsPopUpContact ? "h-screen" : ""
              } z-[100] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed md:-bottom-10 left-0 transition-all inset-0 outline-none focus:outline-none rounded-t-[2.5rem] md:rounded-none`}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              }}
            >
              {subsPopUpContact && (
                <motion.div
                  initial={
                    !isMobileView
                      ? {
                          opacity: 0,
                          x: -500,
                        }
                      : {
                          opacity: 0,
                          x: -200,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={
                    !isMobileView
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
                    height={100}
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
                className={`w-full ${
                  subsPopUpContact ? "hidden" : null
                } h-screen md:mt-0 md:h-[510px] md:w-[400px] mx-auto max-w-3xl z-[100]`}
              >
                <div
                  ref={currentArrangeRef}
                  className="border-top-white mt-40 md:mt-0 mx-4 md:mx-0 relative bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] px-10 md:px-5 border border-[#373F48] rounded-md text-center flex justify-center py-3 z-[100]"
                >
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
                    <h1 className="font-montserrat text-white text-[14px] leading-[150%] break-words px-4">
                      <span className="text-[16px] text-[#ffd15f]">
                        {contactModalInfo.propertyName}
                      </span>
                      <br />
                      {registerData?.register}
                    </h1>
                    <form
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
                        <Controller
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
                          name="phone"
                          id="phone"
                          control={control}
                          render={({ field: { onChange, value } }) => (
                            <PhoneInput
                              value={value}
                              onChange={onChange}
                              defaultCountry="TH"
                              placeholder={registerData?.placeholderPhone}
                              className="my-phone-input bg-blue w-full px-5 py-3 rounded-sm placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
                            />
                          )}
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
                            maxLength: {
                              value: 2,
                              message: "Please select a language",
                            },
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
                          {errors.preferedLang?.message?.length > 0
                            ? errors.preferedLang?.message
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ContactUsModal;
