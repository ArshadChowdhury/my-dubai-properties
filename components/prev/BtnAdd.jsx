import React from "react";

const BtnAdd = (props) => {
  return (
    <button
      className={`${props.className}`}
      onClick={props.handleAddGuestEmailsClick}
    >
      <div className="py-1 w-full h-full flex justify-around items-center bg-gradient-custom relative  text-white  text-[10px]  font-robotoCondensed  uppercase ">
        {props.btnText}
      </div>
    </button>
  );
};

export default BtnAdd;
