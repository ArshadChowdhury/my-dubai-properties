import React from "react";
import { useForm } from "react-hook-form";
import { getApiData } from "../../../services/apiFunctions";
import { useStateValue } from "../../../states/StateProvider";
import { useState } from "react";

const RegisterForm = (props) => {
  const registerData = props?.homeData?.lang?.enquiryForm;
  // const [name, setName]=useState("")
  // const [gmail, setGmail] = useState("");
  // const [phone, setPhone]=useState("")
  // const [language, setLanguage]=useState("")
  // const[des, setDes]
  const [{ lang }] = useStateValue();
  const { register, handleSubmit } = useForm();
  const langList = props?.homeData?.langList;

  return (
    <div className="border-top-white bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] px-10 md:px-5 border border-[#373F48] rounded-md  text-center flex justify-center py-3 z-[20]">
      <div className="w-full h-auto">
        <h1 className="font-montserrat text-[13px] leading-[150%] text-white">
          {props.propertyName} <br /> {registerData?.register}
        </h1>
        <form action="" className="mt-3" onSubmit={handleSubmit((data) => {})}>
          <div className="flex items-center">
            <input
              type="text"
              {...register("name", { required: true })}
              id="name"
              placeholder={registerData?.placeholderName}
              className="w-full px-5 py-2 rounded-md mb-2 placeholder:font-montserrat placeholder:text-[9.5px] custom-shadow bg-white bg-opacity-10  focus:outline-none text-[#f1bf3f]"
            />
          </div>
          <div className="flex items-center">
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
              placeholder={registerData?.placeholderEmail}
              className="w-full px-5 py-2 rounded-md mb-2 placeholder:font-montserrat placeholder:text-[9.5px] custom-shadow bg-white bg-opacity-10  focus:outline-none text-[#f1bf3f]"
            />
          </div>
          <div className="flex items-center">
            <input
              type="tel"
              {...register("phone")}
              name="phone"
              id="phone"
              placeholder={registerData?.placeholderPhone}
              className="w-full px-5 py-2 rounded-md mb-2 placeholder:font-montserrat placeholder:text-[9.5px] custom-shadow bg-white bg-opacity-10  focus:outline-none text-[#f1bf3f]"
            />
          </div>
          <div className="flex items-center">
            <select
              name="language"
              id="language"
              {...register("language")} // Register the field with the 'register' function
              className="w-full px-5 py-3 rounded-md mb-2 font-montserrat text-[9.5px] custom-shadow bg-white bg-opacity-10  focus:outline-none text-gray-400 focus:text-[#f1bf3f]"
            >
              <option className="rounded-2xl font-montserrat text-[9.5px] text-[#f1bf3f] ">
                {registerData?.placeholderLanguage}
              </option>
              {langList?.map((lang) => (
                <option
                  value={lang.value}
                  key={lang.value}
                  className="rounded-2xl font-montserrat text-[9.5px] text-[#f1bf3f]"
                >
                  {lang.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <textarea
              placeholder={registerData?.placeholderDescription}
              {...register("des")}
              name="description"
              id="description"
              cols="30"
              rows="3"
              className="w-full px-5 py-2 rounded-md mb-2 placeholder:font-montserrat placeholder:text-[9.5px] custom-shadow bg-white bg-opacity-10  focus:outline-none text-[#f1bf3f]"
            />
          </div>
          <button
            type="submit"
            style={{ borderRadius: "4px" }}
            className="w-full text-white py-2 font-montserrat uppercase bg-gradient-to-r from-[#A7893A] via-[#BFA04B] to-[#A7893A]"
          >
            {registerData?.register}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
