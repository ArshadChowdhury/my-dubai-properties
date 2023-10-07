import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
// import iconCruise from "../../../assets/images/property details page/icon-cruise.png";
import NearbyItem from "./NearbyItem";

import tower from "../../../assets/images/property details page/Vector 447.png";
import mall from "../../../assets/images/property details page/expo-2020-dubai-new-logo-ring 1.png";
import iconCruise from "../../../assets/images/property details page/Vector 449.png";
import airport from "../../../assets/images/property details page/Vector 450.png";
import HeadingText2 from "./HeadingText2";

const Nearby = (props) => {
  const nearby = props?.singleProperty?.property?.location;
  const heading =
    props?.singleProperty?.lang?.propertyDetails?.titleNearbyAttractions;

  return (
    <section id="nearby" className="mt-16 md:mt-5 mb-5">
      <SkeletonSingleProperty className="flex-col px-5">
        <div className="w-full md:w-3/4 flex flex-col ml-auto">
          <HeadingText2
            innerText={heading}
            className="items-center w-full md:w-1/3"
          />
        </div>

        <div className="flex flex-wrap w-full justify-center items-start mt-10 md:mt-28">
          {nearby.nearby.map((item, index) => (
            <div
              className={`w-full md:basis-1/4 xl:basis-1/5
                ${
                  (index === 0 || index === nearby.nearby.length - 1) &&
                  "md:-mt-20"
                }
              `}
              key={`nearbyPlaces-${index}`}
            >
              <NearbyItem
                image={
                  index === 0
                    ? tower
                    : index === 1
                    ? mall
                    : index === 2
                    ? iconCruise
                    : airport
                }
                index={index}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default Nearby;
