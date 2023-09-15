import React from "react";
import propertyImage from "../../../assets/images/home/property-image.png";
import Forest from "../../../assets/images/global/Forest.png";
import businessOutline from "../../../assets/images/global/business-outline.png";
import villas from "../../../assets/images/global/Villas.png";
import bed from "../../../assets/images/global/icon-bed.png";

const LatestPropertyCard = (props) => {
  return (
    <div className=" border border-[#F1BF3F] rounded-md z-10">
      <div>
        <img src={propertyImage} alt="" />
      </div>
      <div className="text-white p-5">
        <p className="text-md font-medium">Shova Estate</p>
        <div className="grid grid-cols-2">
          <p className="flex items-center py-2">
            <span>
              <img src={Forest} alt="forest villas" />
            </span>
            <span className="mx-2">Forest Villas</span>
          </p>
          <p className="flex items-center py-2">
            <span>
              <img src={businessOutline} alt="forest villas" />
            </span>
            <span className="mx-2">Shoba Group</span>
          </p>
          <p className="flex items-center py-2">
            <span>
              <img src={villas} alt="forest villas" />
            </span>
            <span className="mx-2">Villas</span>
          </p>
          <p className="flex items-center py-2">
            <span>
              <img src={bed} alt="forest villas" />
            </span>
            <span className="mx-2">1, 2, 3</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestPropertyCard;
