import React from "react";

const BtnTime = (props) => {
  return (
    <button
      type="submit"
      className={`${props.className}`}
      onClick={props.handleSelectTimeClick}
    >
      <div className="py-1 w-full h-full flex justify-around items-center bg-gradient-custom relative text-white  text-[10px]  font-robotoCondensed  uppercase ">
        {props.btnText}
      </div>
    </button>
  );
};

export default BtnTime;
