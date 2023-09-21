import React from "react";
import BtnHexagon from "@/components/prev/BtnHexagon";
import SignUpForm from "../../HomePage/partials/SignUpForm";
import { useEffect } from "react";
import { useState } from "react";
import SignUpForm2 from "../../HomePage/partials/SignUpForm2";
const ContactForm = (props) => {
  const tocData = props.homeData.lang.termsAndConditions;
  return (
    <section className="">
      <div className="w-full md:py-[3rem] md:bg-gradient-to-r from-[#A4A73A] via-[#BFA04B] to-[#A7893A] my-3 md:my-10 md:flex justify-center items-center">
        <div className="w-full md:w-[75%] grid gap-2 md:gap-5 text-white px-3">
          <p className="hidden md:block text-[15px] font-medium font-montserrat tracking-[2%] leading-[24px]">
            {tocData?.newsletter?.textTop?.slice(
              0,
              tocData?.newsletter?.textTop.indexOf("+")
            )}
            <strong className="text-black underline pl-1">
              +971 (4) 000-0000
            </strong>
          </p>
          <div className="w-full border"></div>

          <div className="md:hidden">
            <SignUpForm2 tocData={tocData} />
          </div>
          <div className="hidden md:block">
            <div className="md:flex w-full pt-3">
              <p className=" md:max-w-[309px] text-[12px] font-semibold font-montserrat pb-3 text-center">
                {tocData?.newsletter?.textBottom}
              </p>
              <div className="flex-1 flex flex-col md:flex-row justify-center items-center">
                <form
                  action=""
                  className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-3"
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={tocData?.newsletter?.email}
                    className="md:mr-3 border-[0.5px] border-[#BFA04B] px-5 py-2 bg-black bg-opacity-30  placeholder:font-montserrat placeholder:text-white"
                    required
                  />
                  <div className="bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] ">
                    <button className="px-8 py-2 text-white text-[16.5px] font-montserrat">
                      {tocData?.newsletter?.button}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
