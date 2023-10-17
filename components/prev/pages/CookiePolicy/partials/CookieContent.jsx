"use client";

import Skeleton from "@/components/prev/Skeleton/Skeleton";
import Navbar2 from "@/components/prev/Navbar2";
import Footer from "@/components/prev/Footer";
import { useStateValue } from "@/components/prev/states/StateProvider";
import RouteLink from "@/components/prev/RouteLink";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { instance } from "@/components/prev/services/apiFunctions";
import { useEffect } from "react";
import Link from "next/link";
import LoadingState from "@/components/LoadingState";

const CookieContent = () => {
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

  const cookieData = homeData?.lang?.cookie;
  const heading = homeData?.lang?.cookie?.breadcrumb;

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar2
        homeData={homeData}
        className={`sticky top-0 left-0 w-full py-5 bg-[#000F1D] z-50`}
        type="inline"
      />
      <div className="my-4 -mx-2">
        <RouteLink
          homeData={homeData}
          locationName={pathname.slice(1)}
          buttonHide={"true"}
          marginBottom="mb-12 md:mb-0"
        />
      </div>
      <Skeleton className="md:mt-5 px-5">
        <div className="pt-3 text-white font-montserrat">
          <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
            {cookieData?.q1}
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[24px] font-extralight">
            {cookieData?.p1}
            {/* <span className="text-[#FFD15F] tracking-[2%] leading-[24px] font-[600]">
              MY DUBAI PROPERTY
            </span>{" "}
            are harmless. */}
          </p>
        </div>
        <div className="pt-3 text-white font-montserrat">
          <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
            {cookieData?.q2}
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[24px] font-extralight">
            {cookieData?.p2}
          </p>
        </div>
        <div className="pt-3 text-white font-montserrat font-extralight">
          <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
            {cookieData?.q3}
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[27px]">
            {cookieData?.p3}
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[24px]">
            {cookieData?.p4}
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[24px]">
            {cookieData?.p5}
            {/* <span className="text-[#FFD15F] tracking-[2%] leading-[24px] font-[600]">
              http://www.doubleclick.com/privacy/dart_adserving.aspx
            </span> */}
            .
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[27px]">
            {cookieData?.p6}
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[27px]">
            {cookieData?.p7}
          </p>
        </div>
        <div className="pt-3 text-[#FFD15F] font-montserrat text-[12.5px] pb-32">
          <div className="list-disc grid ml-4 grid-cols-2 gap-5 w-full">
            <ul className="list-disc w-full">
              <li>
                <Link href="#" className="underline">
                  {cookieData?.b1}
                </Link>
              </li>
              <li>
                {" "}
                <Link href="#" className="underline">
                  {cookieData?.b2}
                </Link>
              </li>
              <li>
                {" "}
                <Link href="#" className="underline">
                  {cookieData?.b3}
                </Link>
              </li>
            </ul>
            <ul className="list-disc w-full">
              <li>
                {" "}
                <Link href="#" className="underline">
                  {cookieData?.b4}
                </Link>
              </li>
              <li>
                <Link href="#" className="underline">
                  {cookieData?.b5}
                </Link>
              </li>
              <li>
                <Link href="#" className="underline">
                  {cookieData?.b6}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Skeleton>
      <Footer homeData={homeData} />
    </section>
  );
};

export default CookieContent;
