import React from "react";
import BtnHexagon from "@/components/prev/BtnHexagon";
import SignUpForm from "../../HomePage/partials/SignUpForm";
import { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import SignUpForm2 from "../../HomePage/partials/SignUpForm2";

const ContactForm = (props) => {
  const [subsPopUp, setSubsPopUp] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setEmail("");
    setSubsPopUp(true);
  }

  function handleClose() {
    setSubsPopUp(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleClose);
    window.addEventListener("mousedown", handleClose);
    return () => {
      window.removeEventListener("scroll", handleClose);
      window.removeEventListener("mousedown", handleClose);
    };
  }, []);

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
            <SignUpForm2 homeData={props?.homeData} tocData={tocData} />
          </div>
          <div className="hidden md:block">
            <div className="md:flex w-full pt-3">
              <p className=" md:max-w-[309px] text-[12px] font-semibold font-montserrat pb-3 text-center">
                {tocData?.newsletter?.textBottom}
              </p>
              <div className="flex-1 flex flex-col md:flex-row justify-center items-center">
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-3"
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
      {
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
      }
    </section>
  );
};

export default ContactForm;
