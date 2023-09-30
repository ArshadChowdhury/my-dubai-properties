import Image from "next/image";
import React from "react";

const FeatureItem = (props) => {
  return (
    <div className="w-full md:w-[390px] px-5 h-full flex justify-between items-center bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A]   text-white rounded text-xs md:text-sm font-robotoCondensed py-1 uppercase">
      <div className="flex gap-5 items-center">
        <Image
          src={props.featureImage}
          alt="feature"
          className="w-[2.2rem] h-[2.2rem]"
        />
        <h1 className="font-oswald text-[0.846875rem]  text-white uppercase">
          {props.featureText}
        </h1>
      </div>
      <div className="flex items-center">
        <h1 className="font-oswald text-[0.846875rem] s text-white uppercase">
          {props.featureDetails}
        </h1>
      </div>
    </div>
  );
};

export default FeatureItem;
