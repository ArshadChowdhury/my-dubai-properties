import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import { useStateValue } from "./states/StateProvider";
import CountrySelect from "./pages/ContactUs/partials/selectCountry";
import Image from "next/image";
import { AnimatePresence, color, motion } from "framer-motion";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const RegisterForm = (props) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [subsPopUp, setSubsPopUp] = useState(false);
  const [{ lang }] = useStateValue();
  const contactData = props?.homeData?.lang?.contactUs?.enquire;
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const [value, setValue] = useState();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const arrangeRef = useRef();
  const currentArrangeRef = useRef();

  const onSubmit = (data) => {
    // reset();
    setSubsPopUp(true);
    return;
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
    reset();
  };

  const handleCheckbox1Change = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckbox2Change = () => {
    setIsChecked2(!isChecked2);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();

    let handle = (e) => {
      const distanceFromTop = window.scrollY;
      if (currentArrangeRef.current) {
        const menuHeight = arrangeRef.current?.offsetHeight;
        const menuOffsetTop = arrangeRef.current?.offsetTop;
        if (distanceFromTop > menuHeight + menuOffsetTop) {
          setSubsPopUp(false);
        }
      }
      if (!currentArrangeRef.current?.contains(e.target)) {
        setSubsPopUp(false);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handle);
    document.addEventListener("mousedown", handle);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handle);
      document.removeEventListener("mousedown", handle);
    };
  }, []);

  return (
    <>
      {subsPopUp && (
        <AnimatePresence>
          <div
            ref={arrangeRef}
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
                We&apos;d like to show you notifictions for the latest news and
                updates
              </p>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
      <div
        ref={currentArrangeRef}
        className="w-full md:w-3/4 bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] p-5 border border-[#373F48] rounded-md xl:basis-1/3 text-center flex items-center"
      >
        <div className="w-full">
          <h1
            className={`font-montserrat text-lg leading-6 text-white ${
              lang === "en" ? "text-left" : "text-right"
            }`}
          >
            {contactData?.register}
          </h1>
          <p
            className={`text-white font-montserrat mt-2 text-sm font-light ${
              lang === "en" ? "text-left" : "text-right"
            }`}
          >
            {contactData?.required}
          </p>
          <form action="" className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center">
              <input
                type="text"
                id="fname"
                name="fname"
                {...register("fname", {
                  required: {
                    value: true,
                    message: "First name is required",
                  },
                })}
                placeholder={contactData?.placeholderFirstName}
                className="w-full px-5 py-3 rounded-sm placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
              />
              <p className="text-red-300 text-xs text-left w-full py-1">
                {errors.fname?.message?.length > 0
                  ? errors.fname?.message
                  : null}
              </p>
              <input
                type="text"
                id="lname"
                name="lname"
                {...register("lname", {
                  required: {
                    value: true,
                    message: "Last name is required",
                  },
                })}
                placeholder={contactData?.placeholderLastName}
                className="w-full px-5 py-3 rounded-sm placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
              />
              <p className="text-red-300 text-xs text-left w-full py-1">
                {errors.lname?.message?.length > 0
                  ? errors.lname?.message
                  : null}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                placeholder={contactData?.placeholderEmail}
                className="w-full px-5 py-3 rounded-sm placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
              />
              <p className="text-red-300 text-xs text-left w-full py-1">
                {errors.email?.message?.length > 0
                  ? errors.email?.message
                  : null}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-full">
                <PhoneInput
                  id="phone"
                  name="phone"
                  placeholder={contactData?.placeholderPhoneNumber}
                  value={value}
                  onChange={setValue}
                  defaultCountry="FR"
                  className="my-phone-input bg-blue w-full px-5 py-3 rounded-sm placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
                  // {...register("phone", {
                  //   required: {
                  //     value: true,
                  //     message: "Phone is required",
                  //   },
                  // })}
                />
              </div>
              <p className="text-red-300 text-xs text-left w-full py-1">
                {errors.phone?.message?.length > 0
                  ? errors.phone?.message
                  : null}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <textarea
                placeholder={contactData?.placeholderMessage}
                name="description"
                id="description"
                cols="30"
                rows="3"
                className="w-full px-5 py-3 rounded-sm placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                })}
              />
              <p className="text-red-300 text-xs text-left w-full py-1">
                {errors.description?.message?.length > 0
                  ? errors.description?.message
                  : null}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start my-2 text-white font-montserrat text-sm font-light">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={isChecked1}
                  onChange={handleCheckbox1Change}
                />
                <span>{contactData?.checkbox1}</span>
              </label>

              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={isChecked2}
                  onChange={handleCheckbox2Change}
                />
                <span>{contactData?.checkbox2}</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-white rounded-sm py-2 my-2 font-montserrat uppercase bg-gradient-to-r from-[#A7893A] via-[#BFA04B] to-[#A7893A]"
            >
              {contactData?.button}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
