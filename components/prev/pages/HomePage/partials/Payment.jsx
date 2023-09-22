import React, { useEffect, useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import PaymentCircle from "./PaymentCircle";
import BtnPayent from "@/components/prev/BtnPayent";
import PaymentHeading from "@/components/prev/PaymentHeading";
import paymentBottom from "../../../assets/images/global/payment-bottom.png";
import Image from "next/image";

const Payment = (props) => {
  const homeData = props.homeData.lang.paymentMethod;
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
        <div className="w-full md:w-1/2 px-5 md:mt-20">
          <p className="text-white text-[16.5px] font-montserrat font-extralight -mt-[15px]">
            {homeData?.text}
          </p>
          <div className="w-full mt-10">
            <div className="w-full flex mt-10">
              <PaymentHeading title={homeData?.cash} />
            </div>
            <div className="w-full flex justify-end md:justify-center mt-10">
              <PaymentHeading title={homeData?.crypto} />
            </div>
            <div className="w-full flex md:justify-end mt-10">
              <PaymentHeading title={homeData?.mortgage} />
            </div>
          </div>
        </div>
        <div className="flex md:my-[60px] justify-center items-center w-full md:w-auto">
          <PaymentCircle />
        </div>
        <div className="bottom-0 w-full h-[2px] flex justify-center items-center mt-12">
          <p className="w-1/2 h-full bg-[#FFD15F]"></p>
          <p className="mx-3">
            <Image src={paymentBottom} alt="ling Symbol" className="w-[15px]" />
          </p>
          <p className="w-1/2 h-full bg-[#FFD15F]"></p>
        </div>
      </Skeleton>
    </section>
  );
};

export default Payment;
