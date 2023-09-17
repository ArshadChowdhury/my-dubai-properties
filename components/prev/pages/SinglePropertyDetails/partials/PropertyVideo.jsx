import React from "react";
import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import ReactPlayer from "react-player/youtube";
import HeadingText2 from "./HeadingText2";

const PropertyVideo = (props) => {
  return (
    <section className="!mt-20 md:mt-10  mb-5">
      <SkeletonSingleProperty className="flex-col px-5">
        <div className="w-full md:w-3/4 flex flex-col  ml-auto">
          <HeadingText2
            innerText="Video"
            className="items-start w-full md:w-1/3"
          />
        </div>
        <div className="w-full">
          <div className="w-full md:flex  mt-16 items-center">
            <div className="basis-1/2 aspect-video relative">
              <div className=" absolute border border-[#FFD15F] inset-0 transform rotate-3 z-0"></div>
              <ReactPlayer
                url={props.url}
                width="100%"
                height="100%"
                style={{
                  borderTop: "8px solid #C6B997",
                  borderBottom: "8px solid #C6B997",
                  borderRadius: "5px",
                  zIndex: 10,
                  position: "relative",
                }}
              />
            </div>
            <div className="basis-1/2 md:px-10 mt-10 md:mt-0">
              <h1 className="font-vidaloka text-[26px] md:text-4xl  text-white text-center">
                Experience <span className="text-[#FFD15F]">Luxurious</span>{" "}
                Living: <br /> Browse Our Exclusive <br /> Property Selection
              </h1>
              <p className="font-montserrat text-white text-center mt-5 leading-8 font-light">
                Discover stunning properties with breathtaking views and modern
                amenities. Your real estate journey starts here – with expert
                advice and guidance every step of the way.
              </p>
            </div>
          </div>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default PropertyVideo;
