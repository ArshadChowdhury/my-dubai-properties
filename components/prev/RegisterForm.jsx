import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useStateValue } from "./states/StateProvider";
import CountrySelect from "./pages/ContactUs/partials/selectCountry";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const RegisterForm = (props) => {
  const contactData = props?.homeData?.lang?.contactUs?.enquire;
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const [value, setValue] = useState();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const onSubmit = (data) => {
    return console.log(data);
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

  console.log(errors);

  return (
    <div className="w-full md:w-3/4 bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] p-5 border border-[#373F48] rounded-md xl:basis-1/3 text-center flex items-center">
      <div className="w-full">
        <h1 className="font-montserrat text-lg leading-6 text-white text-left">
          {contactData?.register}
        </h1>
        <p className="text-white text-left font-montserrat mt-2 text-sm font-light">
          {contactData?.required}
        </p>
        <form action="" className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              id="fname"
              {...register("fname", {
                required: {
                  value: true,
                  message: "First name is required",
                },
              })}
              placeholder={contactData?.placeholderFirstName}
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
            />
            {/* <p className="text-red-300 text-xs text-left w-full py-1">
              {errors.fname?.message?.length > 0 ? errors.fname?.message : null}
            </p> */}
            <input
              type="text"
              id="lname"
              {...register("lname", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
              })}
              placeholder={contactData?.placeholderLastName}
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
            />
            {/* <p className="text-red-300 text-xs text-left w-full py-1">
              {errors.lname?.message?.length > 0 ? errors.lname?.message : null}
            </p> */}
          </div>
          <div className="flex items-center">
            <input
              type="email"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              placeholder={contactData?.placeholderEmail}
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
            />
            {/* <p className="text-red-300 text-xs text-left w-full py-1">
              {errors.email?.message?.length > 0 ? errors.email?.message : null}
            </p> */}
          </div>
          <div className="flex items-center mb-3">
            <div className="w-full h-full">
              <PhoneInput
                id="phone"
                placeholder={contactData?.placeholderPhoneNumber}
                value={value}
                onChange={setValue}
                defaultCountry="FR"
                className="my-phone-input bg-blue w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone is required",
                  },
                })}
              />
            </div>
          </div>

          <div className="flex items-center">
            <textarea
              placeholder={contactData?.placeholderMessage}
              name="description"
              id="description"
              cols="30"
              rows="3"
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-[#f1bf3f]"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
            />
            {/* <p className="text-red-300 text-xs text-left w-full py-1">
              {errors.description?.message?.length > 0
                ? errors.description?.message
                : null}
            </p> */}
          </div>
          <div className="flex flex-col justify-start items-start mb-2 text-white font-montserrat text-sm font-light">
            <label>
              <input
                type="checkbox"
                checked={isChecked1}
                onChange={handleCheckbox1Change}
              />
              <span className="pl-2">{contactData?.checkbox1}</span>
            </label>

            <label>
              <input
                type="checkbox"
                checked={isChecked2}
                onChange={handleCheckbox2Change}
              />
              <span className="pl-2">{contactData?.checkbox2}</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full text-white rounded-sm py-2 font-montserrat uppercase bg-gradient-to-r from-[#A7893A] via-[#BFA04B] to-[#A7893A]"
          >
            {contactData?.button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
