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

const GridItemForSlider = (props) => {
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
      className={`link min-w-[90%] md:min-w-[50%] lg:min-w-[33%] md:basis-1/2 lg:basis-[75%] p-3 overflow-clip ${
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
            width={700}
            height={700}
            className="cursor-pointer w-full h-fit aspect-[16/9]"
            src={props.coverImage[0]?.path || "/placeholder-image.png"}
            alt="cover"
          />
        </Link>
        <div className="p-5 group-hover:bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D]">
          <h1 className="font-roboto text-[16px] text-white cursor-pointer w-fit hover:text-[#F1BF3F]">
            <Link href={`/properties/${props.id}`}>
              {props.propertyName.length < 38
                ? props.propertyName
                : props.propertyName.slice(0, 38).concat("...")}
            </Link>
          </h1>
          <div className="grid grid-cols-2 w-full">
            <div>
              <p className="font-montserrat text-white text-xs flex items-center gap-1 my-2">
                <Image src={iconLocation} alt="building" />
                <Link href={`/property-area/${props?.propertyAreaId}`}>
                  <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                    {props.areaName}
                  </span>
                </Link>
              </p>
            </div>
            <div>
              <p className="font-montserrat text-white text-xs flex items-center gap-1 my-2">
                <Image src={iconBuilding} alt="building" />
                <Link href={`/developers/${props?.developerId}`}>
                  <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                    {props.developerName}
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full">
            <div className="w-32">
              <p className="font-montserrat text-white text-xs flex items-center gap-1 my-2">
                <Image src={iconVillas} alt="building" />
                <Link href={`/property-type/${props?.propertyTypeId}`}>
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
      </div>
    </div>
  );
};

export default GridItemForSlider;
