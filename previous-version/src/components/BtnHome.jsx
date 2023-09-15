import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BtnHome = (props) => {
  const navigate = useNavigate();
  return (
    <Link to={"/contact-with-us"} onClick={() => navigate("/contact-with-us")}>
      <button className="w-full relative z-20">
        <div
          className={`w-full h-full flex justify-around items-center bg-gradient-to-r from-[#DFBF68] via-[#BFA04B] to-[#DFBF68] border border-[#DFBF68] hover:bg-transparent hover:from-transparent hover:via-transparent hover:to-transparent text-white rounded text-xs font-montserrat py-2 uppercase ${props.className}`}>
          {props.btnText}
        </div>
      </button>
    </Link>
  );
};

export default BtnHome;
