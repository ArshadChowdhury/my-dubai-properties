"use client";

import Navbar2 from "@/components/prev/Navbar2";
import LoadingState from "@/components/LoadingState";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import HomeHeading from "@/components/prev/HomeHeading";
import Footer from "@/components/prev/Footer";
import { useStateValue } from "@/components/prev/states/StateProvider";
import RouteLink from "@/components/prev/RouteLink";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { instance } from "@/components/prev/services/apiFunctions";
import { useEffect } from "react";

const PrivacyContent = () => {
  const [{ lang }] = useStateValue();
  const pathname = usePathname();

  const getAllHomeContent = async () => {
    const data = await instance
      .get(`/${lang}/get-home`, {
        timeout: 5000,
      })
      .then((data) => data?.data?.data);
    return data;
  };

  const {
    isLoading: isLoadingHomeContent,
    data: homeData,
    isError: isErrorHomeContent,
    refetch,
  } = useQuery({
    queryKey: ["get-home"],
    queryFn: getAllHomeContent,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [lang]);

  if (isLoadingHomeContent) {
    return <LoadingState />;
  }

  if (isErrorHomeContent) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }

  const privacyData = homeData?.lang?.privacypoicy;

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar2
        className={`sticky top-0 left-0 w-full py-5 bg-[#000F1D] z-50`}
        type="inline"
        homeData={homeData}
      />
      <div className="mt-4 -mx-2">
        <RouteLink
          homeData={homeData}
          locationName={pathname.slice(1)}
          buttonHide={"true"}
          marginBottom="mb-12 md:mb-0"
        />
      </div>

      <Skeleton className="px-5">
        <div className="mt-5 md:mt-10 w-full">
          <div className="w-full md:w-[25%]">
            <HomeHeading heading={privacyData?.title1} />
          </div>

          <div className="md:mt-5 font-montserrat text-white text-[13.5px] tracking-[2%] leading-[24px]">
            <p className="py-3 text-[13.5px] font-extralight">
              {privacyData?.p1}
            </p>
            <p className="pt-3">{privacyData?.q1}</p>
            <p className="pb-3 text-[10.5px] font-extralight">
              {privacyData?.a1}
            </p>
            <p className="pt-3">{privacyData?.q2}</p>
            <p className="pb-3 text-[10.5px] font-extralight">
              {privacyData?.a2}
            </p>
            <p className="pt-3">{privacyData?.q3}</p>
            <p className="pb-3 text-[10.5px] font-extralight">
              {privacyData?.a3p1}
              <br />
              {privacyData?.a3p2}
              <br /> {privacyData?.a3p3}
            </p>
          </div>
        </div>
        <div className="mt-10 w-full flex flex-col justify-center items-center">
          <div className="w-full md:w-[30%] mr-0 md:mr-56">
            <HomeHeading heading={privacyData?.title2} />
          </div>

          <div className="w-full md:mt-5 font-montserrat text-white pb-32">
            <p className="py-3 text-[13.5px] tracking-[2%] leading-[24px] font-extralight">
              {privacyData?.p2}
            </p>
            <div className="py-3">
              <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
                {privacyData?.subTitle1}
              </p>
              <p className="pb-3 text-[10.5px] font-extralight">
                {privacyData?.p3}
              </p>
            </div>
            <div className="py-3">
              <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
                {privacyData?.subTitle2}
              </p>
              <p className="pb-3 text-[13.5px] tracking-[2%] leading-[24px] font-extralight">
                {privacyData?.p4}
                <span className="text-[#FFD15F] font-medium break-words px-2">
                  {privacyData?.p5}
                </span>
                <br />
                {privacyData?.p6}
                <br />
                {privacyData?.p7}
              </p>
            </div>
            <div className="py-3">
              <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
                {privacyData?.subTitle3}
              </p>
              <div className="py-3 text-[10.5px] font-extralight">
                <ul>
                  <li>• {privacyData?.b1}</li>
                  <li>• {privacyData?.b2}</li>
                </ul>
                <p className="py-3">{privacyData?.p8}</p>
              </div>
            </div>
            <div className="py-3">
              <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
                {privacyData?.subTitle4}
              </p>
              <p className="pb-3 text-[13.5px] tracking-[2%] leading-[24px] font-extralight">
                {privacyData?.p9}
              </p>
            </div>
            <div className="py-3 font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
              <p>
                {privacyData?.p10} <br />
                <span className="text-[#FFD15F]">
                  info@my-dubai-property.com
                </span>{" "}
                <br />
              </p>
            </div>
            <div className="py-3">
              <p className="font-semibold text-[#FFD15F] text-[13.5px] tracking-[2%] leading-[24px]">
                {privacyData?.p11}
              </p>
              <div className="py-3 text-[10.5px] font-extralight">
                <ul>
                  <li>• {privacyData?.b3}</li>
                  <li>• {privacyData?.b4}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Skeleton>
      <Footer homeData={homeData} />
    </section>
  );
};

export default PrivacyContent;
