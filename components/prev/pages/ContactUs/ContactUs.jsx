"use client";

import RouteLink from "../../RouteLink";
import ContactForms from "./partials/ContactForm";
import RegisterForm from "../../RegisterForm";
import ContactForm from "../AboutUs/partials/ContactForm";
import Navbar2 from "../../Navbar2";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Footer from "../../Footer";
import paymentBottom from "../../assets/images/global/payment-bottom.png";
import Image from "next/image";
import { useStateValue } from "../../states/StateProvider";
import { instance } from "../../services/apiFunctions";
import { useQuery } from "@tanstack/react-query";

const ContactUs = () => {
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
  });

  useEffect(() => {
    refetch();
  }, [lang]);

  if (isLoadingHomeContent) {
    return (
      <p className="h-screen text-xl md:text-4xl flex justify-center items-center text-white">
        Loading...Please wait...
      </p>
    );
  }

  if (isErrorHomeContent) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }
  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="md:hidden">
        <Navbar2
          className={`absolute top-0 left-0 w-full py-5 bg-[#000F1D] z-50 `}
          type="inline"
          homeData={homeData}
        />
      </div>
      <div className="hidden md:block">
        <Navbar2
          className={`sticky top-0 left-0 w-full py-5 bg-[#000F1D] z-50 `}
          type="inline"
          homeData={homeData}
        />
      </div>
      <section className="w-full relative md:-mt-24 md:ml-5">
        <div className="bg-about h-full w-full bg-repeat bg-center relative pt-20  md:pt-28">
          <div className="about-overlay"></div>

          <RouteLink
            locationName={pathname}
            buttonHide={"true"}
            marginBottom="mb-12 md:mb-0"
          />
          <ContactForms homeData={homeData} />
        </div>
      </section>
      <div className="relative -mb-[70px] md:mb-[120px]">
        <ContactForm homeData={homeData} type="top" />
      </div>
      <div className="md:hidden">
        <div className="absolute w-full h-[2px] flex justify-center items-center">
          <p className="w-1/2 h-full bg-[#FFD15F]"></p>
          <p className="mx-3">
            <Image src={paymentBottom} alt="ling Symbol" className="w-[15px]" />
          </p>
          <p className="w-1/2 h-full bg-[#FFD15F]"></p>
        </div>
      </div>
      <div className="mt-28">
        <Footer homeData={homeData} footerBg={"footer_background"} />
      </div>
    </section>
  );
};

export default ContactUs;
