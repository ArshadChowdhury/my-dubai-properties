import React from "react";
import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import rightArrow from "../../../assets/images/property details page/chevrons-right.png";
import ListItem from "../../ListView/partials/ListItem";
import Image from "next/image";

const SimilarProperties = (props) => {
  const heading =
    props?.singleProperty?.lang?.propertyDetails?.bradecumSimiliarProperties;
  return (
    <section className="mb-10 !mt-20 md:mt-5">
      <SkeletonSingleProperty className="flex-col px-5">
        <p className="text-white text-[18px] flex">
          <Image src={rightArrow} alt="" />
          <span>{heading}</span>
        </p>
        <div className="mb-5 md:pl-2 md:pr-5">
          {props?.listView &&
            props?.listView.map((property, idx) => {
              if (idx < 2) {
                return (
                  <ListItem
                    id={idx + 1}
                    key={property.propertyName}
                    coverImage={property.images.filter((image) => {
                      if (image.type === "cover") {
                        return image.path;
                      }
                    })}
                    property={property}
                    propertyName={property.propertyName}
                    areaName={property.propertyArea.areaName}
                    developerName={property.developerType.name}
                    propertyType={property.propertyType.name}
                    unitSize={property.unitType.size}
                    description={property.amenities.description}
                  />
                );
              }
            })}
        </div>
        <div className="w-2/5 h-1 bg-gradient-to-r from-[#DFBF68] via-[#C0A457] to-[#BFA04B] opacity-40 m-auto"></div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default SimilarProperties;
