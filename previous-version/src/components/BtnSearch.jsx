import React, { useEffect, useState } from "react";

const BtnSearch = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowSizeChange = () => {
    const mobileScreenSize = 768;
    const currentWindowSize = window.innerWidth;

    if (currentWindowSize <= mobileScreenSize) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const onButtonClick = (e) => {};
  return (
    <button
      className="basis-1/3 px-5 text-white text-[10px] relative btn-search my-1 ml-2"
      onClick={onButtonClick}
      style={{
        width: `${isMobile ? "320px" : "180px"}`,
        // "margin-top": "10px",
      }}>
      <div
        className="w-full flex justify-between px-2 items-center font-bold text-[12px] leading-[150%] tracking-[4%]"
        style={{
          "padding-top": "4px",
          "padding-bottom": "4px",
        }}>
        <span className="z-50 text-shadow ">{props.btnText}</span>
        <div className="w-[22px] ">
          <img src={props.btnImage} alt="btn image" className="" />
        </div>
      </div>
    </button>
  );
};

export default BtnSearch;
