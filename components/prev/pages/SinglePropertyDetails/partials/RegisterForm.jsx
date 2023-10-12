import React from "react";
import { useForm, Controller } from "react-hook-form";
import { getApiData } from "../../../services/apiFunctions";
import { useStateValue } from "../../../states/StateProvider";
import { useState, useRef, useEffect } from "react";
import { instance } from "../../../services/apiFunctions";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const RegisterForm = (props) => {
  const modalRef = useRef(null);
  const registerData = props?.homeData?.lang?.enquiryForm;
  const [subsPopUp, setSubsPopUp] = useState(false);
  const [value, setValue] = useState("");
  const { register, handleSubmit, formState, reset, control } = useForm();
  const [{ lang }, dispatch] = useStateValue();
  const langList = props?.homeData?.langList;
  const { errors } = formState;

  const onSubmit = (data) => {
    instance
      .post(`submit-customer-interest/${props?.propertyId}`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
    setSubsPopUp(true);
    reset();
  };

  useEffect(() => {
    let handle = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSubsPopUp(false);
      }
    };
    window.addEventListener("scroll", handle);
    window.addEventListener("mousedown", handle);

    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("mousedown", handle);
    };
  }, []);

  return (
    <div className="border-top-white bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] px-10 md:px-5 border border-[#373F48] rounded-md  text-center flex justify-center py-3 z-[20]">
      <div className="w-full h-auto">
        <h1 className="font-montserrat text-[13px] leading-[150%] text-white">
          {props.propertyName} <br /> {registerData?.register}
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
              {errors.name?.message?.length > 0 ? errors.name?.message : null}
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
              {errors.email?.message?.length > 0 ? errors.email?.message : null}
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
                  message: "Phone number cannot be over 30 characters",
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
          </div>

          <p className="text-red-300 text-xs text-left w-full py-1">
            {errors.phone?.message?.length > 0 ? errors.phone?.message : null}
          </p>

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

          <AnimatePresence>
            {subsPopUp && (
              <div
                className={`w-screen h-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-0 left-0 md:-bottom-18 md:left-0 transition-all md:inset-0 z-50 outline-none focus:outline-none rounded-t-[2.5rem] md:rounded-none`}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                }}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -200,
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
                    x: -200,
                  }}
                  ref={modalRef}
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
              </div>
            )}
          </AnimatePresence>

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
                  message: "Description cannot be over 500 characters",
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
  );
};

export default RegisterForm;
