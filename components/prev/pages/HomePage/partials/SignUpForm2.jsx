import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import BtnHexagon from "@/components/prev/BtnHexagon";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const SignUpForm2 = (props) => {
  const tocData = props?.tocData.newsletter;
  const [email, setEmail] = useState("");
  const [subsPopUp, setSubsPopUp] = useState(false);
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

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section>
      <Skeleton>
        <div className="w-full h-full flex flex-col justify-center text-center items-center mt-3 px-3 mb-[100px] md:mb-[250px]">
          <h1 className="text-white font-montserrat text-[16px] md:text-[1.375rem] font-light">
            {tocData?.textTop}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="px-3 flex md:flex-row flex-col gap-5 justify-between items-center pt-5"
          >
            <div className="bg-[#333F4A] p-[9px] hover:text-[#F1BF3F] text-white border-t-2 border-b-2 relative !w-full">
              <div className="z-0 absolute w-8 h-8 bg-[#333F4A] border-2 border-white rotate-45 top-[5px] left-[-16px] border-r-0 border-t-0"></div>
              <input
                type="email"
                name="email"
                placeholder={tocData?.email}
                className="z-10 px-4 bg-transparent focus:outline-none hover:placeholder-[#F1BF3F] focus:placeholder-[#F1BF3F]"
                value={email}
                onChange={handleChange}
                required
              />
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
                          We&apos;d like to show you notifictions for the latest
                          news and updates
                        </p>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              }

              <div className="z-0 absolute w-8 h-8 bg-[#333F4A] border-2 border-white rotate-45 top-[5px] right-[-16px] border-l-0 border-b-0"></div>
            </div>
            <div>
              <BtnHexagon btnText={tocData?.button} type="submit" />
            </div>
          </form>
        </div>
      </Skeleton>
    </section>
  );
};

export default SignUpForm2;
