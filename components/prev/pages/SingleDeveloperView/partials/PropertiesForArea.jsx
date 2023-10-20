import RouteLink from "@/components/prev/RouteLink";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import HeadingBox from "@/components/prev/HeadingBox";
import FilterSelect from "@/components/prev/FilterSelect";
import Image from "next/image";

const PropertiesForArea = (props) => {
  const description = props?.developerDetails?.propertyArea?.description;
  const heading = props?.developerDetails?.propertyArea?.areaName;

  return (
    <section className="z-10">
      <Skeleton className="mt-5 md:mt-10 px-5">
        <div className="w-full md:w-auto mt-14 md:mt-0">
          <HeadingBox heading={heading} />
        </div>

        <div className="py-4 flex gap-4">
          {/* <Image
            height={225}
            width={500}
            src={developerDetails?.logo}
            alt={developerDetails?.name}
            className="hidden md:block rgba-white-10 border border-[#bea04e] bg-white bg-opacity-20"
          /> */}

          <div className="text-[15px] font-montserrat text-white">
            <p className="font-extralight">
              {description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta optio natus quia libero   reprehenderit, mollitia similique aspernatur unde iure labore repellendus, blanditiis, perferendis officiis iusto magnam             laborum. Accusantium quis officia deserunt animi nihil illo             soluta, quam suscipit, unde eaque harum pariatur saepe voluptate              ipsa, impedit odit. Voluptate, nulla molestiae!"}
            </p>
            {/* <div className="mt-6 md:hidden pt-3 lg:p-8 rgba-white-10 w-2/4 m-auto border border-[#bea04e] flex justify-center items-center bg-white bg-opacity-20 ">
              <Image
                height={400}
                width={400}
                className="mb-2"
                src={developerDetails?.logo}
                alt={developerDetails?.name}
              />
            </div> */}
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default PropertiesForArea;
