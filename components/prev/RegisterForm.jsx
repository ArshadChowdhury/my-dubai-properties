import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useStateValue } from "./states/StateProvider";
import CountrySelect from "./pages/ContactUs/partials/selectCountry";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const RegisterForm = (props) => {
  const contactData = props?.homeData?.lang?.contactUs?.enquire;
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckbox1Change = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckbox2Change = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div className="w-full md:w-3/4 bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] p-5 border border-[#373F48] rounded-md xl:basis-1/3 text-center flex items-center">
      <div className="w-full">
        <h1 className="font-montserrat text-lg leading-6 text-white text-left">
          {contactData?.register}
        </h1>
        <p className="text-white text-left font-montserrat mt-2 text-sm font-light">
          {contactData?.required}
        </p>
        <form action="" className="mt-8" onSubmit={handleSubmit((data) => {})}>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              {...register("name", { required: true })}
              id="fname"
              placeholder={contactData?.placeholderFirstName}
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none"
            />
            <input
              type="text"
              {...register("name", { required: true })}
              id="lname"
              placeholder={contactData?.placeholderLastName}
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none"
            />
          </div>
          <div className="flex items-center">
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
              placeholder={contactData?.placeholderEmail}
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none"
            />
          </div>
          <div className="flex items-center mb-3">
            <div className="w-full h-full">
              <PhoneInput
                placeholder={contactData?.placeholderPhoneNumber}
                value={value}
                onChange={setValue}
                defaultCountry="FR"
                className="my-phone-input bg-blue w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none"
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
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none"
            />
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
