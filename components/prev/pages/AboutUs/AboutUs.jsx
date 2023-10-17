"use client";

import RouteLink from "../../RouteLink";
import AboutUsContent from "./partials/AboutContent";
import ContactForm from "./partials/ContactForm";

import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";
import paymentBottom from "../../assets/images/global/payment-bottom.png";
import Image from "next/image";
import { useStateValue } from "../../states/StateProvider";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../services/apiFunctions";
import { useEffect } from "react";
import LoadingState from "@/components/LoadingState";

const AboutUs = () => {
  const [{ lang }] = useStateValue();

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

  const breadCrumb = homeData?.lang?.menu?.aboutUs;

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar2
        homeData={homeData}
        className={`fixed top-0 left-0 w-full py-5 bg-[#000F1D] z-50`}
        type="inline"
      />
      <section className="w-full relative md:-mt-4 md:ml-5">
        <div className="bg-about h-full w-full bg-repeat bg-center relative pt-20  md:pt-28">
          <div className="about-overlay"></div>
          <div className="-mx-2">
            <RouteLink
              homeData={homeData}
              locationName={breadCrumb}
              buttonHide={"true"}
              marginBottom="mb-12 md:mb-0"
            />
          </div>
          <AboutUsContent homeData={homeData} />
        </div>
      </section>
      <div className="relative -mb-[70px] md:mb-[120px]">
        <ContactForm homeData={homeData} type="top" />
      </div>
      <div className="md:hidden absolute w-full h-[2px] flex justify-center items-center">
        <p className="w-1/2 h-full bg-[#FFD15F]"></p>
        <p className="mx-3">
          <Image src={paymentBottom} alt="ling Symbol" className="w-[15px]" />
        </p>
        <p className="w-1/2 h-full bg-[#FFD15F]"></p>
      </div>
      <div className="mt-28">
        <Footer homeData={homeData} footerBg={"footer_background"} />
      </div>
    </section>
  );
};

export default AboutUs;
