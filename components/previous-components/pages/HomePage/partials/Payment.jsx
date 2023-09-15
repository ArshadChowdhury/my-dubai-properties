import React, { useEffect, useState } from "react";
import Skeleton from "@/components/previous-components/Skeleton/Skeleton";
import PaymentCircle from "./PaymentCircle";
import BtnPayent from "@/components/previous-components/BtnPayent";
import PaymentHeading from "@/components/previous-components/PaymentHeading";
import paymentBottom from "../../../assets/images/global/payment-bottom.png";

const Payment = () => {
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
    <section>
      <Skeleton className="w-full md:my-12 mt-20 mb-10 relative">
        <div className="z-10">
          <BtnPayent title="Our Payment Methods" />
        </div>
        <div
          className="w-full md:w-1/2 px-5"
          style={{ marginTop: isMobileView ? "" : "80px" }}
        >
          <p
            className="text-white text-[16.5px] font-montserrat"
            style={{ fontWeight: "200", marginTop: "-15px" }}
          >
            Figma ipsum component variant main layer. Duplicate ellipse draft
            scrolling move select ipsum link. Font image boolean library invite
            hand create. Ipsum image text bold strikethrough.
          </p>
          <div className="w-full mt-10">
            <div className="w-full flex mt-10">
              <PaymentHeading title="Cash" />
            </div>
            <div className="w-full flex justify-end md:justify-center mt-10">
              <PaymentHeading title="Crypto" />
            </div>
            <div className="w-full flex md:justify-end mt-10">
              <PaymentHeading title="Mortgage" />
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center w-full md:w-auto"
          style={{
            marginTop: isMobileView ? "" : "60px",
            marginBottom: isMobileView ? "" : "60px",
          }}
        >
          <PaymentCircle />
        </div>
        <div className="bottom-0 w-full h-[2px] flex justify-center items-center mt-12">
          <p className="w-1/2 h-full bg-[#FFD15F]"></p>
          <p className="mx-3">
            <img src={paymentBottom} alt="ling Symbol" className="w-[15px]" />
          </p>
          <p className="w-1/2 h-full bg-[#FFD15F]"></p>
        </div>
      </Skeleton>
    </section>
  );
};

export default Payment;
