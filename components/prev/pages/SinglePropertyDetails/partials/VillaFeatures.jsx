import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import FeatureItem from "./FeatureItem";
import HeadingText from "./HeadingText";
import Image from "next/image";
import price from "../../../assets/images/property details page/1918-city-hall-outline.gif";
import type from "../../../assets/images/property details page/2030-frysztak-town-outline.gif";
import location from "../../../assets/images/property details page/18-location-pin-outline.gif";
import bedrooms from "../../../assets/images/property details page/651539690333Double_Bed (1).gif";
import mosqueGif from "../../../assets/images/property details page/153-bar-chart-growth-outline.gif";
import frys from "../../../assets/images/property details page/2030-frysztak-town-outline.gif";
import { useStateValue } from "@/components/prev/states/StateProvider";

const VillaFeatures = (props) => {
  const villa = props?.singleProperty?.property;
  const heading = props?.singleProperty?.lang?.propertyDetails?.titleInvestment;
  const [{ lang }] = useStateValue();

  return (
    <section className="relative mt-16">
      <div className="w-full md:w-[80%] h-auto flex justify-center text-center px-5">
        <HeadingText
          innerText={heading}
          className="md:items-center md:mr-3"
          size="mr-2"
        />
      </div>
      <SkeletonSingleProperty className={`px-5 !pt-0`}>
        <div
          className={`single-key-background absolute -left-2 md:top-[20%] -ml-5 skew-y-6 h-[132px] md:h-3/5 w-[85%] md:w-[40%]`}
        ></div>
        <div
          className={`border-right w-[65%] md:w-[45%] mt-[45px] md:mt-0 md:absolute ${
            lang === "ar"
              ? "mr-auto left-[1rem] top-[24%]"
              : "-left-[4rem] top-[20%]"
          } skew-y-6 -skew-x-6 h-[132px] md:h-3/5 md:flex md:justify-center md:items-center`}
        >
          {lang === "ar" ? (
            <>
              <div
                className={`absolute md:static ${
                  lang === "ar" ? "left-[-0.25rem] top-0" : "right-[15px]"
                } md:ml-[5.8rem] h-[132px] md:h-[300px] w-[132px] md:w-[300px] -skew-y-6 skew-x-6`}
              >
                <Image src={mosqueGif} alt="" />
              </div>
              <div
                className={`absolute ${
                  lang === "ar" ? "left-[150px]" : "right-[15px]"
                } md:right-0 top-[2.9rem] md:top-[5.8rem] h-[68px] md:h-[150px] w-[68px] md:w-[150px] -skew-y-6 skew-x-6`}
              >
                <Image src={frys} alt="" className="opacity-40" />
              </div>{" "}
            </>
          ) : (
            <>
              <div className="md:ml-[5.8rem] h-[132px] md:h-[300px] w-[132px] md:w-[300px] -skew-y-6 skew-x-6">
                <Image src={mosqueGif} alt="" />
              </div>
              <div className="absolute right-[15px] md:right-0 top-[2.9rem] md:top-[5.8rem] h-[68px] md:h-[150px] w-[68px] md:w-[150px] -skew-y-6 skew-x-6">
                <Image src={frys} alt="" className="opacity-40" />
              </div>{" "}
            </>
          )}
        </div>
        <div
          className={`w-full flex  ${
            lang === "en" ? "justify-end" : "justify-start"
          } pt-16 md:pt-0`}
        >
          <div className="w-full md:w-1/2 flex flex-col items-center md:pt-16">
            <div className="w-[90%] md:w-auto mb-4 md:mb-8 md:mr-8">
              <FeatureItem
                featureImage={price}
                featureText="Starting Price"
                featureDetails={villa?.startingPrice}
              />
            </div>
            <div className="w-[90%] md:w-auto mb-4 md:mb-8 md:ml-8">
              <FeatureItem
                featureImage={type}
                featureText="Type"
                featureDetails={villa?.propertyType?.name}
              />
            </div>
            <div className="w-[90%] md:w-auto mb-4 md:mb-8 md:mr-8">
              <FeatureItem
                featureImage={location}
                featureText="Location"
                featureDetails={villa?.propertyArea?.areaName}
              />
            </div>
            <div className="w-[90%] md:w-auto mb-4 md:mb-8 md:ml-8">
              <FeatureItem
                featureImage={bedrooms}
                featureText="Bedrooms"
                featureDetails={villa?.unitType?.size}
              />
            </div>
          </div>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default VillaFeatures;
