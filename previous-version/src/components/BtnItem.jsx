import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BtnItem = (props) => {
  const navigate = useNavigate();
  return (
    <Link
      to={props.to}
      onClick={() => navigate(props.navigate)}
      className={`${props.className}`}
    >
      <div className={`rounded-md  w-full`}>
        <div className="w-full h-full font-montserrat flex justify-around items-center btnItem relative after:absolute after:inset-0 after:h-full after:w-full text-white  text-xs md:text-sm py-2 uppercase rounded-md border border-[#a7893a] hover:border-[#283646]">
          {props.btnText}
        </div>
      </div>
    </Link>
  );
};

export default BtnItem;
