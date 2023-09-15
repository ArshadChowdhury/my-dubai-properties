// import ProptyOffPlan from "../../../assets/images/home/LatestPlane2.png";
// import HeadingBox from "../../../components/HeadingBox";
// import BtnElore2 from "../../../components/BtnElore2";
// import HomeHeading from "../../../components/HomeHeading";
// import GridItem from "../../GridView/partials/GridItem";

// import { useRef, useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { gsap } from "gsap";

// const LatestPropertyDown = (props) => {
//   const [animationState, setPlay] = useState("paused");
//   const [isHovered, setIsHovered] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // const properties = props.properties;
//   const repeats = 10;
//   const properties = Array(repeats)
//     .fill()
//     .flatMap(() => props.properties)
//     .slice(0, 10);

//   const cardBoxRef = useRef(null);

//   const [isMobileView, setIsMobileView] = useState(true);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth <= 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (cardBoxRef.current) {
//       setPlay("running");
//     }
//   }, []);

//   // useEffect(() => {
//   //   gsap.to(cardBoxRef.current, {
//   //     duration: 5,
//   //     ease: "none",
//   //     x: "+=500", //move each box 500px to right
//   //     modifiers: {
//   //       x: gsap.utils.unitize((x) => parseFloat(x) % 500), //force x value to be between 0 and 500 using modulus
//   //     },
//   //     repeat: -1,
//   //   });
//   // }, []);

//   //toggle overflow
//   // const overflow = document.querySelector("#overflow");
//   // overflow.addEventListener("change", applyOverflow);

//   // function applyOverflow() {
//   //   if (overflow.checked) {
//   //     gsap.set(".wrapper", { overflow: "visible" });
//   //   } else {
//   //     gsap.set(".wrapper", { overflow: "hidden" });
//   //   }
//   // }

//   return (
//     <div className="w-full flex flex-row-reverse relative z-20">
//       <div className="w-full md:basis-[75%]  md:mt-12">
//         <div
//           className=" px-5 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-32 2xl:pl-40 flex flex-col md:flex-row justify-between w-full  md:pr-[155px]"
//           style={{ marginLeft: isMobileView ? "" : "205px" }}>
//           <div className="mb-12 md:mb-0">
//             <HomeHeading heading="Latest Ready Properties" />
//           </div>
//           <div className="w-1/4 mx-auto md:mr-[13rem]">
//             <BtnElore2 title="Explore More" />
//           </div>
//         </div>

//         <div
//           className="block my-20 md:my-0 relative overflow-hidden "
//           style={{ left: isMobileView ? "" : "260px" }}>
//           <div
//             className="l-flex my-5 px-1 scrollbar-hide py-8 transition-all duration-500 gap-2"
//             ref={cardBoxRef}
//             style={{
//               animationPlayState: isHovered ? "paused" : animationState,
//             }}>
//             {properties.map((property, idx) => (
//               <GridItem
//                 id={idx + 1}
//                 key={idx + 2}
//                 coverImage={property.images.filter((image) => {
//                   if (image.type === "cover") {
//                     return image.path;
//                   }
//                 })}
//                 propertyName={property.propertyName}
//                 areaName={property.propertyArea.areaName}
//                 developerName={property.developerType.name}
//                 propertyType={property.propertyType.name}
//                 unitSize={property.unitType.size}
//                 type="home"
//                 setIsHoveredCard={() => setHoveredCard(idx)}
//                 isHoveredCard={hoveredCard === idx}
//                 isHovered={isHovered}
//                 setIsHovered={setIsHovered}
//               />
//             ))}
//           </div>
//           <div
//             className="hidden md:block w-16 h-[90%] absolute bottom-0 left-0  overlay-property-color-left-2"
//             style={{
//               marginLeft: isMobileView ? "" : "-100px",
//               marginBottom: isMobileView ? "" : "10px",
//               width: "200px",
//             }}></div>
//           <div
//             className="hidden md:block w-16 h-[90%] absolute bottom-0 left-0  overlay-property-color-left-2"
//             style={{
//               marginLeft: isMobileView ? "" : "-4px",
//               marginBottom: isMobileView ? "" : "50px",
//               width: "200px",
//             }}></div>
//         </div>
//       </div>
//       <div className="absolute  left-0 top-[20%] md:top-[0%] w-[450px] h-[300px] md:w-[700px] md:h-[500px] opacity-70 flex items-center -z-10">
//         <div>
//           <img
//             src={ProptyOffPlan}
//             alt=""
//             style={{ marginTop: isMobileView ? "" : "155px" }}
//           />
//         </div>
//       </div>
//       <div
//         className="hidden md:block w-16 h-[90%] absolute bottom-0 left-0  overlay-property-color-left"
//         style={{
//           marginLeft: isMobileView ? "" : "200px",
//           marginBottom: isMobileView ? "" : "15px",
//           width: "100px",
//           height: "500px",
//         }}></div>
//     </div>
//   );
// };

// export default LatestPropertyDown;
