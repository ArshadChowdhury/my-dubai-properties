import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import returnDownForward from "../../../assets/images/property details page/icon-return-down-forward.png";
import HeadingText2 from "./HeadingText2";
import Image from "next/image";
import { useStateValue } from "@/components/prev/states/StateProvider";

const Amenities = (props) => {
  const [{ lang }] = useStateValue();
  const amenities = props?.singleProperty?.property?.amenities;
  const heading = props?.singleProperty?.lang?.propertyDetails?.titleAmenities;

  const features = amenities.features.split("#");
  const features1 = [];
  const features2 = [];

  features.map((item, index) =>
    index + 1 <= Math.ceil(features.length / 2)
      ? features1.push(item)
      : features2.push(item)
  );

  return (
    <section className="!mt-20 md:mt-10  mb-5 z-50">
      <SkeletonSingleProperty className="flex-col px-5">
        <div className="items-start w-full md:w-1/4">
          <HeadingText innerText={heading} className="text-center " />
        </div>

        <div className="md:flex md:justify-between">
          <div className="basis-1/2">
            <p
              className={`font-montserrat mx-3 text-white leading-7 text-justify py-2 ${
                lang === "en" ? "" : "text-right"
              }`}
            >
              {amenities.description}
            </p>
          </div>
          <div className="w-full flex flex-col ml-3 md:mx-10 md:flex-row basis-1/2 justify-between mt-5 md:mt-0">
            <ul className="text-left w-auto">
              {features1.map((item, index) =>
                lang === "en" ? (
                  <li
                    className={`flex ml-10 leading-8`}
                    key={`features1-${index}`}
                  >
                    <Image
                      src={returnDownForward}
                      alt="return-down-forward"
                      className="mr-5 w-[25px] h-[30px]"
                    />
                    <span className="font-montserrat text-white text-md break-words">
                      {item}
                    </span>
                  </li>
                ) : (
                  <li
                    className={`flex gap-5 mr-10 leading-8`}
                    key={`features1-${index}`}
                  >
                    <Image
                      src={returnDownForward}
                      alt="return-down-forward"
                      className="mr-5 w-[25px] h-[30px] rotate-180 transform scale-y-[-1]"
                    />
                    <span className="font-montserrat text-white text-md text-right break-words">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
            <ul className="text-left w-auto">
              {features2.map((item, index) =>
                lang === "en" ? (
                  <li
                    className="flex ml-10 leading-8"
                    key={`features2-${index}`}
                  >
                    <Image
                      src={returnDownForward}
                      alt="return-down-forward"
                      className="mr-5 w-[25px] h-[30px]"
                    />
                    <span className="font-montserrat text-white text-md break-words">
                      {item}
                    </span>
                  </li>
                ) : (
                  <li
                    className="flex gap-5 mr-10 leading-8"
                    key={`features2-${index}`}
                  >
                    <Image
                      src={returnDownForward}
                      alt="return-down-forward"
                      className="mr-5 w-[25px] h-[30px] rotate-180 transform scale-y-[-1]"
                    />
                    <span className="font-montserrat text-white text-md text-right break-words">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default Amenities;
