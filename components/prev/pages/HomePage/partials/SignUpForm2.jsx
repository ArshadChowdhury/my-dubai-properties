import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import BtnHexagon from "@/components/prev/BtnHexagon";
import { useEffect } from "react";

const SignUpForm2 = () => {
  const [email, setEmail] = useState("");

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
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section>
      <Skeleton>
        <div
          className="w-full h-full flex flex-col justify-center text-center items-center mt-3 px-3"
          style={{ marginBottom: isMobileView ? "100px" : "250px" }}
        >
          <h1 className="text-white font-montserrat text-[16px] md:text-[1.375rem] font-light">
            Sign up for our exclusive updates and information about the newest
            projects in Dubai
          </h1>

          <form
            onSubmit={handleSubmit}
            className="px-3 flex md:flex-row flex-col gap-5 justify-between items-center pt-5"
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
                placeholder={`EMAIL*`}
                className="z-10 pl-5  md:pr-16 bg-transparent focus:outline-none hover:placeholder-[#F1BF3F] focus:placeholder-[#F1BF3F]"
                value={email}
                onChange={handleChange}
                required
              />

              <div className="z-0 absolute w-8 h-8 bg-[#333F4A] border-2 border-white rotate-45 top-[5px] right-[-16px] border-l-0 border-b-0"></div>
            </div>
            <div className="md:ml-10 ">
              <BtnHexagon btnText="Subscribe" type="submit" />
            </div>
          </form>
        </div>
      </Skeleton>
    </section>
  );
};

export default SignUpForm2;
