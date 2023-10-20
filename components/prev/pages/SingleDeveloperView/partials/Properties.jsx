import RouteLink from "@/components/prev/RouteLink";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import HeadingBox from "@/components/prev/HeadingBox";
import FilterSelect from "@/components/prev/FilterSelect";
import Image from "next/image";

const EmmarProperties = (props) => {
  const developerDetails = props?.developerDetails?.developer;
  const heading = props?.developerDetails?.developer?.name;

  return (
    <section className="z-10">
      <Skeleton className="mt-5 md:mt-10 px-5">
        <div className="w-full md:w-auto mt-14 md:mt-0">
          <HeadingBox heading={heading} />
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
            <p className="font-extralight">
              {developerDetails?.description ||
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime in quas expedita natus consequuntur! Amet accusantium veniam unde veritatis officia, magnam in suscipit repellat repellendus iure et vel molestias aperiam nostrum assumenda odio deleniti consectetur labore mollitia optio, sed dolor quod sit? Hic similique iure ea impedit iusto iste nam."}{" "}
            </p>
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
