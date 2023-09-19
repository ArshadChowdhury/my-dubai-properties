import ProptyOffPlan from "../../../assets/images/global/bg-hero.png";
// import HeadingBox from "../../../components/HeadingBox";
// import BtnExplore from "../../../components/BtnExplore";
import HomeHeading from "@/components/prev/HomeHeading";
import GridItem from "../../GridView/partials/GridItem";

import { useRef, useEffect, useState } from "react";
import BtnElore2 from "@/components/prev/BtnElore2";
import Link from "next/link";
import Image from "next/image";

const LatestPropertyTop = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  // const properties = props.properties;
  const repeats = 10;
  const properties = Array(repeats)
    .fill()
    .flatMap(() => props.properties)
    .slice(0, 10);

  const [animationState, setPlay] = useState("paused");
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardBoxRef = useRef(null);

  const [isMobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (cardBoxRef.current) {
      setPlay("running");
    }
  }, []);
  const handleHover = (index) => {
    setHoveredItemIndex(index);
  };
  const handleHoverOut = (index) => {
    setHoveredItemIndex(index);
  };

  return (
    <div className="w-full flex pt-[3rem] md:pt-0">
      <div className="w-full basis-[75%] z-10">
        <div className="px-5 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-32 2xl:pl-40 flex flex-col md:flex-row justify-between w-full  md:pr-[155px]">
          <div className="mb-12 md:mb-0">
            <HomeHeading heading="Latest Off Plan Properties" />
          </div>

          <div className="w-1/4 md:mr-[260px]">
            <BtnElore2 title="Explore More" />
          </div>
        </div>

        <div className="block md:right-[290px] mt-20 md:mt-0 w-full relative overflow-hidden scrollbar-hide">
          <div
            className="d-flex my-5 px-1 scrollbar-hide py-8 transition-all duration-500 gap-2"
            style={{
              animationPlayState: isHovered ? "paused" : animationState,
            }}
            ref={cardBoxRef}
          >
            {properties.map((property, idx) => (
              <GridItem
                id={idx + 1}
                key={idx + 2}
                coverImage={property.images.filter((image) => {
                  if (image.type === "cover") {
                    return image.path;
                  }
                })}
                propertyName={property.propertyName}
                areaName={property.propertyArea.areaName}
                developerName={property.developerType.name}
                propertyType={property.propertyType.name}
                unitSize={property.unitType.size}
                type="home"
                setIsHoveredCard={() => setHoveredCard(idx)}
                isHoveredCard={hoveredCard === idx}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
            ))}
          </div>

          <div
            className="hidden md:block w-16 h-full absolute top-0 right-0 overlay-property-color md:-mr-[5px]"
            // style={{
            //   width: "100px",
            // }}
          ></div>
          <div
            className="hidden md:block w-16 h-full absolute top-0 right-0 overlay-property-color md:-mr-[5px]"
            // style={{
            //   width: "100px",
            // }}
          ></div>
        </div>
      </div>
      <div className="absolute z-0 -right-16 md:right-0 top-[20%] md:top-[12%] w-[450px] h-[300px] md:w-[735px] md:h-[500px] opacity-70 flex justify-end items-center">
        <div className="overlay"></div>
        <div className="">
          <Image
            src={ProptyOffPlan}
            alt=""
            className="opacity-70 md:ml-[100px] md:mt-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestPropertyTop;
