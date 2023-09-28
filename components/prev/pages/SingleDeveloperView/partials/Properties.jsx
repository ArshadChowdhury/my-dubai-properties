import RouteLink from "@/components/prev/RouteLink";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import HeadingBox from "@/components/prev/HeadingBox";
import FilterSelect from "@/components/prev/FilterSelect";
import Image from "next/image";

const EmmarProperties = (props) => {
  const developerDetails = props?.developerDetails?.developer;
  return (
    <section className="z-10">
      <Skeleton className="mt-5 md:mt-10 px-5">
        <div className="w-full md:w-[25%] mt-10 md:mt-0">
          <HeadingBox
            heading={developerDetails?.name}
            className="!px-0"
            textPosition="text-center"
          />
        </div>

        <div className="py-4 flex gap-4">
          <Image
            height={225}
            width={500}
            src={developerDetails?.logo}
            alt={developerDetails?.name}
            className="hidden md:block rgba-white-10 border border-[#bea04e] bg-white bg-opacity-20"
          />

          <div className="text-[15px] font-montserrat text-white">
            <p className="font-extralight">{developerDetails?.description}</p>
            <div className="mt-6 md:hidden pt-3 lg:p-8 rgba-white-10 w-2/4 m-auto border border-[#bea04e] flex justify-center items-center bg-white bg-opacity-20 ">
              <Image
                height={400}
                width={400}
                className="mb-2"
                src={developerDetails?.logo}
                alt={developerDetails?.name}
              />
            </div>
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default EmmarProperties;
