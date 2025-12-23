import React from "react";
// import Skeleton from "../../../components/Skeleton/Skeleton";
import LatestPropertyTop from "./LatestPropertyTop";
import LatestPropertyDown from "./LatestPropertyDown";
import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";

export const homeData = {
  lang: {
    slider: {
      textCopy: "Discover the most exclusive off-plan and ready-to-move properties in Dubai's premium locations."
    }
  }
};

// export const allPlaces = [
//   {
//     id: "p1",
//     title: "Marina Shores",
//     location: "Dubai Marina",
//     price: "1,500,000 AED",
//     developmentType: { name: "Off-Plan" },
//     image: "/images/home/slider-1.jpeg",
//     beds: 2,
//     baths: 2,
//     sqft: "1,200"
//   },
//   {
//     id: "p2",
//     title: "Downtown Heights",
//     location: "Downtown Dubai",
//     price: "2,200,000 AED",
//     developmentType: { name: "Ready  " }, // Matches your specific string with spaces
//     image: "/images/home/slider-2.jpeg",
//     beds: 3,
//     baths: 3,
//     sqft: "1,850"
//   },
//   {
//     id: "p3",
//     title: "Palm Residences",
//     location: "Palm Jumeirah",
//     price: "5,400,000 AED",
//     developmentType: { name: "Ready  " },
//     image: "/images/home/slider-3.jpg",
//     beds: 4,
//     baths: 5,
//     sqft: "3,200"
//   },
//   {
//     id: "p4",
//     title: "Emaar Beachfront",
//     location: "Dubai Harbour",
//     price: "3,100,000 AED",
//     developmentType: { name: "Off-Plan" },
//     image: "/images/home/slider-4.jpg",
//     beds: 1,
//     baths: 2,
//     sqft: "900"
//   },
//   {
//     id: "p5",
//     title: "Sobha Hartland",
//     location: "MBR City",
//     price: "1,800,000 AED",
//     developmentType: { name: "Off-Plan" },
//     image: "/images/home/slider-5.jpg",
//     beds: 2,
//     baths: 2,
//     sqft: "1,150"
//   },
//   {
//     id: "p6",
//     title: "Burj Vista",
//     location: "Downtown Dubai",
//     price: "4,200,000 AED",
//     developmentType: { name: "Ready  " },
//     image: "/images/home/slider-6.jpg",
//     beds: 3,
//     baths: 3,
//     sqft: "2,100"
//   }
// ];

export const allPlaces = [
  {
    id: 1,
    propertyName: "Marina Shores",
    images: [
      { type: "cover", path: "/images/home/slider-1.jpeg" },
      { type: "gallery", path: "/images/prop1_alt.jpg" }
    ],
    propertyArea: { id: 101, areaName: "Dubai Marina" },
    developerType: { id: 201, name: "Emaar Properties" },
    propertyType: { id: 301, name: "Apartment" },
    unitType: { size: "1,200 sqft" },
    developmentType: { name: "Off-Plan" }
  },
  {
    id: 2,
    propertyName: "Downtown Heights",
    images: [
      { type: "cover", path: "/images/home/slider-2.jpeg" }
    ],
    propertyArea: { id: 102, areaName: "Downtown Dubai" },
    developerType: { id: 202, name: "DAMAC Properties" },
    propertyType: { id: 301, name: "Apartment" },
    unitType: { size: "1,850 sqft" },
    developmentType: { name: "Ready" }
  },
  {
    id: 3,
    propertyName: "Palm Residences",
    images: [
      { type: "cover", path: "/images/home/slider-3.jpg" }
    ],
    propertyArea: { id: 103, areaName: "Palm Jumeirah" },
    developerType: { id: 203, name: "Nakheel" },
    propertyType: { id: 302, name: "Villa" },
    unitType: { size: "3,200 sqft" },
    developmentType: { name: "Ready" }
  },
  {
    id: 4,
    propertyName: "Emaar Beachfront",
    images: [
      { type: "cover", path: "/images/home/slider-4.jpg" }
    ],
    propertyArea: { id: 104, areaName: "Dubai Harbour" },
    developerType: { id: 201, name: "Emaar Properties" },
    propertyType: { id: 301, name: "Apartment" },
    unitType: { size: "900 sqft" },
    developmentType: { name: "Off-Plan" }
  },
  {
    id: 5,
    propertyName: "Sobha Hartland",
    images: [
      { type: "cover", path: "/images/home/slider-5.jpg" }
    ],
    propertyArea: { id: 105, areaName: "MBR City" },
    developerType: { id: 204, name: "Sobha Realty" },
    propertyType: { id: 303, name: "Townhouse" },
    unitType: { size: "1,150 sqft" },
    developmentType: { name: "Off-Plan" }
  },
  {
    id: 6,
    propertyName: "Burj Vista",
    images: [
      { type: "cover", path: "/images/home/slider-6.jpg"}
    ],
    propertyArea: { id: 102, areaName: "Downtown Dubai" },
    developerType: { id: 201, name: "Emaar Properties" },
    propertyType: { id: 304, name: "Penthouse" },
    unitType: { size: "2,100 sqft" },
    developmentType: { name: "Ready" }
  }
];

const LatestProperty = () => {
  const offPlanProperties = [];
  const readyProperties = [];
  {
    allPlaces?.map((property) =>
      property.developmentType.name === "Ready"
        ? readyProperties.push(property)
        : offPlanProperties.push(property)
    );
  }

  return (
    <section className="relative overlay-property-color-3 py-6 my-8">
      <SkeletonSingleProperty>
        <p className="lg:text-[26px] px-4 py-0 md:py-[3rem] font-medium font-expleteusSans text-white text-center tracking-[2%]">
          {homeData?.lang?.slider?.textCopy}
        </p>
      </SkeletonSingleProperty>
      <LatestPropertyTop homeData={homeData} properties={offPlanProperties} />
      <LatestPropertyDown homeData={homeData} properties={readyProperties} />
    </section>
  );
};

export default LatestProperty;
