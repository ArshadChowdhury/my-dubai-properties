import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

import iconBuilding from "../../../assets/images/property details page/icon-building.svg";
import iconLocation from "../../../assets/images/property details page/icon-locate.svg";
import iconVillas from "../../../assets/images/property details page/icon-villas.svg";
import iconBed from "../../../assets/images/property details page/icon-bed.svg";

import BtnItem from "@/components/prev/BtnItem";
import BtnItemOutline from "@/components/prev/BtnItemOutline";
import Image from "next/image";
import { useStateValue } from "@/components/prev/states/StateProvider";

const GridItem = (props) => {
  const router = useRouter();
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const [{ showContactModal }, dispatch] = useStateValue();
  const onMouseEnterHandler = () => {
    props.setIsHovered && props.setIsHovered(true);
    setIsHoveredCard(true);
  };

  const handleModalOpen = (id, propertyName) => {
    dispatch({ type: "setShowContactModal", item: true });
    dispatch({ type: "setContactModalInfo", item: { id, propertyName } });
  };

  const onMouseLeaveHandler = () => {
    props.setIsHovered && props.setIsHovered(false);
    setIsHoveredCard(false);
  };
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <div
      className={`link min-w-[90%] md:min-w-[50%] lg:min-w-[33%] md:basis-1/2 lg:basis-1/3 p-3 overflow-clip ${
        isHoveredCard ? "hovered group" : ""
      }`}
    >
      <div
        className={`border border-[#D9D9D9] rounded-lg overflow-clip`}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <Link href={`/properties/${props.id}`}>
          <Image
            priority
            width={700}
            height={700}
            className="cursor-pointer aspect-[16/9]"
            src={props?.coverImage[0]?.path || "/placeholder-image.png"}
            alt="cover"
          />
        </Link>
        <div className="p-5 group-hover:bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D]">
          <h1 className="font-roboto text-[16px] text-white cursor-pointer w-fit hover:text-[#F1BF3F]">
            <Link href={`/properties/${props.id}`}>
              {props.propertyName.length < 34
                ? props.propertyName
                : props.propertyName.slice(0, 30).concat("...")}
            </Link>
          </h1>
          <div className="grid grid-cols-2 w-full">
            <div>
              <p className="font-montserrat text-white text-xs flex items-center gap-1 my-2">
                <Image src={iconLocation} alt="building" />
                <Link href={`/property-area/${props.property.propertyArea.id}`}>
                  <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                    {props.areaName}
                  </span>
                </Link>
              </p>
            </div>
            <div>
              <p className="font-montserrat text-white text-xs flex items-center gap-1 my-2">
                <Image src={iconBuilding} alt="building" />
                <Link
                  href={`/developers/${props?.property?.developerType?.id}`}
                >
                  <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                    {props.developerName.length < 16
                      ? props.developerName
                      : props.developerName.slice(0, 16).concat("...")}
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full">
            <div className="w-32">
              <p className="font-montserrat text-white text-xs flex items-center gap-1 my-2">
                <Image src={iconVillas} alt="building" />
                <Link href={`/property-type/${props.property.propertyType.id}`}>
                  <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                    {props.propertyType}
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex gap-4 w-full">
              <p className="font-montserrat text-white text-xs flex items-center gap-1 my-2">
                <Image src={iconBed} alt="building" />
                {props.unitSize}
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            "flex px-5 py-2 border-t-0 md:border-t gap-4 bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A]"
          }
        >
          <Link
            className="basis-1/2 h-full font-montserrat flex justify-around items-center btnItem relative after:absolute after:inset-0 after:h-full after:w-full text-white  text-xs md:text-sm py-2 uppercase rounded-md border border-[#a7893a] hover:border-[#283646]"
            href={`/properties/${props.id}`}
          >
            Details
          </Link>
          {/* <BtnItem
            btnText="Details"
            className="basis-1/2"
            to={`/properties/${props.id}`}
          /> */}
          <button
            onClick={() => handleModalOpen(props.id, props.propertyName)}
            className={`border basis-1/2 border-[#283646] hover:border-transparent rounded-[5px] w-full md:w-[15rem]`}
          >
            <div className="w-full h-full flex justify-around items-center bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] text-white rounded text-xs md:text-sm font-montserrat py-2 uppercase">
              Enquiry
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
