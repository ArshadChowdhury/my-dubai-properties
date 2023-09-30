import { useEffect, useState } from "react";
import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import tick from "../../../assets/images/property details page/icon-tick.svg";
import HeadingText2 from "./HeadingText2";
import Image from "next/image";
import { useStateValue } from "@/components/prev/states/StateProvider";

const Highlights = (props) => {
  const [{ lang }] = useStateValue();
  const highlights = props?.singleProperty?.property?.highlights?.split("#");
  const heading =
    props?.singleProperty?.lang?.propertyDetails?.titleIHighlights;

  const [margin, setMargin] = useState("25px");

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMargin("0px");
    } else {
      setMargin("25px");
    }
  }, [window.innerWidth]);

  return (
    <section className="mb-5 relative mt-16 md:mt-0">
      <SkeletonSingleProperty className="px-5">
        <div className="w-full md:w-3/4 flex flex-col  ml-auto">
          <div className="w-full ml-0">
            <HeadingText2
              innerText={heading}
              className="items-start w-full md:w-1/3"
            />
          </div>

          <div
            className={`${
              lang === "ar" ? "border-left" : "border-right"
            }  flex justify-center items-center my-5`}
            style={{ marginRight: `${margin}` }}
          >
            <ul className="pl-5 md:pl-12 pt-10 w-full single-key-background pr-2">
              {highlights?.map((highlight, index) => (
                <li className="flex gap-4 mb-6" key={`highlight-${index}`}>
                  <Image
                    src={tick}
                    alt="tick"
                    className={`mr-5 w-[20px] h-[11.43px] ${
                      lang === "en" ? "" : "rotate-180 transform scale-y-[-1]"
                    }`}
                  />
                  <span className="font-montserrat text-lg leading-2 text-white -mt-3">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SkeletonSingleProperty>
      <div className="-rotate-90 absolute -left-[140px] top-[13rem] opacity-0 md:opacity-50 text-white font-turretRoad mix-blend-overlay">
        <h1 className="text-[80px]">Highlights</h1>
      </div>
    </section>
  );
};

export default Highlights;
