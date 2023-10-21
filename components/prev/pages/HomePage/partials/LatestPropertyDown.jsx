import ProptyOffPlan from "../../../assets/images/home/LatestPlane2.png";
// import HeadingBox from "../../../components/HeadingBox";
import HomeHeading from "@/components/prev/HomeHeading";
import GridItemForSlider from "../../GridView/partials/GridItemForSlider";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

import { gsap } from "gsap";
import BtnElore2 from "@/components/prev/BtnElore2";
import Image from "next/image";
import { useStateValue } from "@/components/prev/states/StateProvider";

const LatestPropertyDown = (props) => {
  const [animationState, setPlay] = useState("running");
  const [{ lang }] = useStateValue();
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // const properties = props.properties;
  const repeats = 10;
  const properties = Array(repeats)
    .fill()
    .flatMap(() => props.properties)
    .slice(0, 10);

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

  // useEffect(() => {
  //   if (cardBoxRef.current) {
  //     setPlay("running");
  //   }
  // }, []);

  // useEffect(() => {
  //   gsap.to(cardBoxRef.current, {
  //     duration: 5,
  //     ease: "none",
  //     x: "+=500", //move each box 500px to right
  //     modifiers: {
  //       x: gsap.utils.unitize((x) => parseFloat(x) % 500), //force x value to be between 0 and 500 using modulus
  //     },
  //     repeat: -1,
  //   });
  // }, []);

  //toggle overflow
  // const overflow = document.querySelector("#overflow");
  // overflow.addEventListener("change", applyOverflow);

  // function applyOverflow() {
  //   if (overflow.checked) {
  //     gsap.set(".wrapper", { overflow: "visible" });
  //   } else {
  //     gsap.set(".wrapper", { overflow: "hidden" });
  //   }
  // }

  return properties.length > 0 ? (
    <div className="w-full flex flex-row-reverse relative z-20">
      <div className="w-full md:basis-[95%] md:mt-12">
        <div className="md:ml-[205px] px-5 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-32 2xl:pl-42 flex flex-col md:flex-row justify-between w-full md:pr-[155px]">
          <div className="mb-12 md:mb-0">
            <HomeHeading heading={props?.homeData?.lang?.slider?.titleReady} />
          </div>
          <div
            className={`w-1/4 ${
              lang === "ar" ? "mr-auto ml-24" : "ml-auto mr-24"
            } md:mr-[13rem]`}
          >
            <BtnElore2
              route={
                "properties/ready?developmentTypes=6519855e79fcdc27efbf85cd"
              }
              title={props?.homeData?.lang?.slider?.buttonExplore}
            />
          </div>
        </div>

        <div className="block my-20 md:my-0 relative overflow-hidden md:left-[260px]">
          <div
            className={`${
              isMobileView ? "lmb-flex" : "l-flex"
            } my-5 px-1 scrollbar-hide py-8 transition-all duration-500 gap-2`}
            ref={cardBoxRef}
            style={{
              animationPlayState: isHovered ? "paused" : animationState,
            }}
          >
            {properties.map((property, idx) => (
              <GridItemForSlider
                id={idx + 1}
                key={idx + 1}
                coverImage={property.images.filter((image) => {
                  if (image.type === "cover") {
                    return image.path;
                  }
                })}
                propertyName={property.propertyName}
                areaName={property.propertyArea.areaName}
                propertyAreaId={property.propertyArea.id}
                developerName={property.developerType.name}
                developerId={property.developerType.id}
                propertyType={property.propertyType.name}
                propertyTypeId={property.propertyType.id}
                unitSize={property.unitType.size}
                type="home"
                // setIsHoveredCard={() => setHoveredCard(idx)}
                isHoveredCard={hoveredCard === idx}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
            ))}
          </div>
          <div
            className="hidden md:block w-16 h-[90%] absolute bottom-0 left-0 md:-ml-[100px] md:mb-[10px] overlay-property-color-left-2"
            // style={{
            //   marginLeft: isMobileView ? "" : "-100px",
            //   marginBottom: isMobileView ? "" : "10px",
            //   width: "200px",
            // }}
          ></div>
          <div
            className="hidden md:block w-16 h-[90%] absolute bottom-0 left-0 md:-ml-1 md:mb-[50px] overlay-property-color-left-2"
            // style={{
            //   marginLeft: isMobileView ? "" : "-4px",
            //   marginBottom: isMobileView ? "" : "50px",
            //   width: "200px",
            // }}
          ></div>
        </div>
      </div>
      <div className="absolute left-0 top-[20%] md:top-[0%] w-[450px] h-[300px] md:w-[700px] md:h-[500px] opacity-70 flex items-center -z-10">
        <div>
          <Image
            className="md:mt-[155px]"
            src={ProptyOffPlan || "/placeholder-image.png"}
            alt=""
          />
        </div>
      </div>
      <div
        className="hidden md:block w-16 h-[90%] absolute bottom-0 left-0 md:ml-[200px] md:mb-[15px] overlay-property-color-left"
        // style={{
        //   marginLeft: isMobileView ? "" : "200px",
        //   marginBottom: isMobileView ? "" : "15px",
        //   width: "100px",
        //   height: "500px",
        // }}
      ></div>
    </div>
  ) : null;
};

export default LatestPropertyDown;
