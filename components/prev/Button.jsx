import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  return (
    <Link to={props.to} onClick={() => navigate(props.navigate)}>
      <button
        className={`${
          props.btnClass && "!border-[#283646]"
        } border border-transparent hover:border hover:border-[#283646] rounded-[5px] w-full md:w-[15rem]`}
      >
        <div
          className={`w-full h-full flex justify-around items-center button-bg   text-white  text-xs md:text-sm font-robotoCondensed py-2 uppercase ${
            props.btnClass && "!bg-none"
          }`}
        >
          {props.btnText}
          {props.btnImage && (
            <img src={props.btnImage} alt="btn image" className="w-[25px]" />
          )}
        </div>
      </button>
    </Link>
  );
};

export default Button;
