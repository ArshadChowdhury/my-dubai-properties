import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import BtnHexagon from "@/components/prev/BtnHexagon";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const SignUpForm = (props) => {
  const homeData = props?.homeData?.lang?.newsletter;
  const [email, setEmail] = useState("");
  const [subsPopUp, setSubsPopUp] = useState(false);
  const [isMobileView, setIsMobileView] = useState(true);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => setSubsPopUp(false));
    document.addEventListener("mousedown", (e) => setSubsPopUp(false));

    return () => {
      window.removeEventListener("scroll", (e) => setSubsPopUp(false));
      document.removeEventListener("mousedown", (e) => setSubsPopUp(false));
    };
  }, []);

  return (
    <div className="relative">
      <section>
        <Skeleton>
          <div className="w-full h-full flex flex-col justify-center text-center items-center mt-3 mb-[180px] md:mb-[250px] px-3">
            <h1 className="text-white font-montserrat text-[16px] md:text-[1.375rem] font-light">
              {homeData?.title}
            </h1>

            <form
              onSubmit={handleSubmit}
              className="px-3 flex md:flex-row flex-col gap-5 justify-between items-center pt-5 z-10"
            >
              {/* <div className="before:bg-[#F1BF3F] after:bg-[#F1BF3F] text-white relative p-1 group-hover">
              <div className="flex justify-around hover:text-[#F1BF3F] items-center !w-full !h-full relative btn-signUp px-20 py-2 before:!border-2 after:!border-2 before:!border-white after:!border-white">
                <input
                  type="email"
                  name="email"
                  placeholder={`EMAIL*`}
                  className="z-10 bg-transparent focus:outline-none hover:placeholder-[#F1BF3F] focus:placeholder-[#F1BF3F]"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div> */}
              <div className="bg-[#333F4A] p-[9px] hover:text-[#F1BF3F] text-white border-t-2 border-b-2 relative !w-full">
                <div className="z-0 absolute w-8 h-8 bg-[#333F4A] border-2 border-white rotate-45 top-[5px] left-[-16px] border-r-0 border-t-0"></div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder={homeData?.email}
                  className="z-10 pl-5  md:pr-16 bg-transparent focus:outline-none hover:placeholder-[#F1BF3F] focus:placeholder-[#F1BF3F]"
                  onChange={handleChange}
                  required
                />

                <div className="z-0 absolute w-8 h-8 bg-[#333F4A] border-2 border-white rotate-45 top-[5px] right-[-16px] border-l-0 border-b-0"></div>
              </div>
              <div
                className="md:ml-10"
                onClick={() => {
                  email.length > 0 && setSubsPopUp(props.popup) && setEmail("");
                }}
              >
                <BtnHexagon btnText={homeData?.button} type="submit" />
              </div>
            </form>
          </div>
        </Skeleton>
      </section>
      <AnimatePresence>
        {subsPopUp && (
          <motion.div
            initial={{
              opacity: 0,
              x: -500,
            }}
            transition={{
              duration: 0.5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -500,
            }}
            viewport={{ once: true }}
            className={`cursor-pointer absolute flex flex-col items-center justify-center py-4 px-10 rounded-lg font-montserrat text-white border p-3 z-50 bg-[#000f1d]`}
            style={{ top: "0px", left: "28%" }}
          >
            <Image
              height={150}
              width={150}
              src="/images/global/footer-logo.png"
              alt=""
              className="h-[100px] my-2 pb-2 "
            />
            <h1 className="text-xl">{homeData?.submitTextTitle}</h1>
            <p>{homeData?.submitTextSubTitle}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SignUpForm;
