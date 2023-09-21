"use client";

import Navbar from "@/components/Navbar";
import RouteLink from "../../RouteLink";
import { usePathname } from "next/navigation";
import Terms from "./partials/Terms";
import ContactForm from "../AboutUs/partials/ContactForm";
import Navbar2 from "../../Navbar2";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../Footer";
import paymentBottom from "../../assets/images/global/payment-bottom.png";
import Image from "next/image";
import { useStateValue } from "../../states/StateProvider";

const TermsAndConditions = () => {
  const pathname = usePathname();
  const [{ lang }] = useStateValue();

  const [isMobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      {isMobileView ? (
        <Navbar2
          className={`absolute top-0 left-0 w-full py-5 bg-[#000F1D] z-50 `}
          type="inline"
        />
      ) : (
        <Navbar2
          className={`sticky top-0 left-0 w-full py-5 bg-[#000F1D] z-50 `}
          type="inline"
        />
      )}
      <section className="w-full relative md:-mt-24 md:ml-5">
        <div className="bg-about h-full w-full bg-repeat bg-center relative pt-20 md:pt-28">
          <div className="about-overlay"></div>
          <RouteLink
            locationName={pathname}
            buttonHide={"true"}
            marginBottom="mb-12 md:mb-0"
          />
          <Terms />
        </div>
      </section>
      <div
        className="relative"
        style={{ marginBottom: isMobileView ? "-70px" : "120px" }}
      >
        <ContactForm type="top" />
      </div>
      {isMobileView && (
        <div className="absolute w-full h-[2px] flex justify-center items-center">
          <p className="w-1/2 h-full bg-[#FFD15F]"></p>
          <p className="mx-3">
            <Image src={paymentBottom} alt="ling Symbol" className="w-[15px]" />
          </p>
          <p className="w-1/2 h-full bg-[#FFD15F]"></p>
        </div>
      )}
      <div className="mt-28">
        <Footer footerBg={"footer_background"} />
      </div>
    </section>
  );
};

export default TermsAndConditions;
