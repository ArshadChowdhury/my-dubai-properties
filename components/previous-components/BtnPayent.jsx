import React from "react";

const BtnPayent = (props) => {
  return (
    <div className="btn-payent w-full md:w-auto px-8 md:px-16 py-2 flex justify-center items-center text-2xl font-[600] font-montserrat text-white">
      {props.title}
    </div>
  );
};

export default BtnPayent;
