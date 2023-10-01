import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import BtnHexagon from "@/components/prev/BtnHexagon";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useStateValue } from "@/components/prev/states/StateProvider";
const SignUpForm = (props) => {
  const homeData = props?.homeData?.lang?.newsletter;
  const [{ lang }] = useStateValue();
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
    setSubsPopUp(true);
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
          <div className="w-full h-full flex flex-col justify-center text-center items-center mt-3 mb-[110px] md:mb-[150px] px-3">
            <h1 className="text-white font-montserrat text-[16px] md:text-[1.375rem] font-light">
              {homeData?.title}
            </h1>

            <form
              onSubmit={handleSubmit}
              className="px-3 flex md:flex-row flex-col gap-12 justify-between items-center pt-5 z-10"
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
                  className="z-10 pl-5 w-full md:w-[540px] md:pr-16 bg-transparent focus:outline-none hover:placeholder-[#F1BF3F] focus:placeholder-[#F1BF3F]"
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
                <h1
                  className={`text-xl ${
                    lang === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  Form Submitted !
                </h1>
                <p className={`text-center`}>
                  We&apos;d like to show you notifictions for the latest news
                  and updates
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      }
    </div>
  );
};

export default SignUpForm;
