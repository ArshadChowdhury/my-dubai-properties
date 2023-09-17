import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
// import { getApiData } from "../services/apiFunctions";
import { useStateValue } from "../states/StateProvider";
import CountrySelect from "../pages/ContactUs/partials/selectCountry";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const RegisterForm = (props) => {
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
  // const getAllProperty = () => {
  //   return getApiData(lang, "properties/1");
  // };

  // const { isLoading, data, isError, error } = useQuery(
  //   ["all-property"],
  //   getAllProperty
  // );

  // if (isLoading) {
  //   return "Loading data, please wait";
  // }

  // if (isError) {
  //   return error.message;
  // }

  const langList = data.data.langList;
  return (
    <div className="w-full md:w-3/4 bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] p-5 border border-[#373F48] rounded-md xl:basis-1/3 text-center flex items-center">
      <div className="w-full">
        <h1 className="font-montserrat text-lg leading-6 text-white text-left">
          Register Your Interest
        </h1>
        <p
          className="text-white text-left font-montserrat mt-2"
          style={{ fontWeight: "300", fontSize: "14px" }}
        >
          *All fields are required
        </p>
        <form action="" className="mt-8" onSubmit={handleSubmit((data) => {})}>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              {...register("name", { required: true })}
              id="fname"
              placeholder="First Name"
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none"
            />
            <input
              type="text"
              {...register("name", { required: true })}
              id="lname"
              placeholder="Last Name"
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none"
            />
          </div>
          <div className="flex items-center">
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none"
            />
          </div>
          <div className="flex items-center mb-3">
            <div className="w-full h-full">
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                defaultCountry="FR"
                inputClassName="my-phone-input" // Apply the custom CSS class here
                className="bg-blue w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center">
            <textarea
              placeholder="Message"
              name="description"
              id="description"
              cols="30"
              rows="3"
              className="w-full px-5 py-3 rounded-sm mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none"
            />
          </div>
          <div
            className="flex flex-col justify-start items-start mb-2 text-white font-montserrat"
            style={{ fontWeight: "300", fontSize: "14px" }}
          >
            <label>
              <input
                type="checkbox"
                checked={isChecked1}
                onChange={handleCheckbox1Change}
              />
              <span className="pl-2">
                I’d like to hear about news and offers
              </span>
            </label>

            <label>
              <input
                type="checkbox"
                checked={isChecked2}
                onChange={handleCheckbox2Change}
              />
              <span className="pl-2">
                I’ve read and agree to the Privacy Policy
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full text-white rounded-sm py-2 font-montserrat uppercase bg-gradient-to-r from-[#A7893A] via-[#BFA04B] to-[#A7893A]"
          >
            ENQUIRE NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
