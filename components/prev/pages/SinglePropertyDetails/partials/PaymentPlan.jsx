import { useEffect, useRef, useState } from "react";
import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import PaymentCircle from "./PaymentItem";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";

import upArrow2 from "../../../assets/images/global/upArrow2.png";
import upArrow from "../../../assets/images/global/upArrow.png";
import tick from "../../../assets/images/property details page/icon-tick.svg";
import Image from "next/image";
import { useStateValue } from "@/components/prev/states/StateProvider";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(Draggable);

const planTitle = (plan) => {
  if (!plan) return null;
  return plan.percentage
    ? plan.percentage
    : plan.installment
    ? plan.installment
    : plan.date;
};

const PaymentPlan = (props) => {
  const [{ lang }] = useStateValue();
  const heading =
    props?.singleProperty?.lang?.propertyDetails?.titlePaymentPlan;

  const [firstPlan, setFirstPlan] = useState({
    title: planTitle(props?.paymentPlan[0] || ""),
    description: props?.paymentPlan[0]?.milestone,
  });
  const [planList, setPlanList] = useState([
    {
      title: planTitle(props?.paymentPlan[0]),
      description: props?.paymentPlan[0]?.milestone,
    },
  ]);
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const isMobileView = window.matchMedia("(max-width: 767px)").matches;
    setMobileView(isMobileView);
  }, []);

  const [panelRef, setPanelRef] = useState(null);
  const paymentPlan = props?.paymentPlan?.slice(1);
  const circleDivRef = useRef(null);
  const parentRef = useRef(null);
  const scrollDiv = useRef(null);

  const checkHit = () => {
    const holder = document
      ?.querySelector(".holder")
      ?.getBoundingClientRect().right;
    paymentPlan?.forEach((item, index) => {
      const itemX =
        (document?.querySelector(`.p-item-${index}`)?.getBoundingClientRect()
          .left +
          document?.querySelector(`.p-item-${index}`)?.getBoundingClientRect()
            .right) /
        2;

      if (index === 0 && itemX > holder) {
        setFirstPlan({
          title: planTitle(props?.paymentPlan[0]),
          description: props?.paymentPlan[0].milestone,
        });
      }

      if (itemX < holder) {
        const isDuplicate = paymentPlan?.some(
          (plan) => plan.description === item.milestone
        );
        if (!isDuplicate) {
          setFirstPlan({
            title: planTitle(item),
            description: item.milestone,
          });
          setPlanList((prevPlanList) => {
            const isDuplicate = prevPlanList.some(
              (plan) => plan.description === item.milestone
            );
            if (!isDuplicate) {
              return [
                ...prevPlanList,
                {
                  title: planTitle(item),
                  description: item.milestone,
                },
              ];
            } else {
              return prevPlanList;
            }
          });

          gsap.to(`.p-item-${index}`, {
            opacity: 0,
            duration: 0.1,
          });
        }
      } else {
        gsap.to(`.p-item-${index}`, {
          opacity: 1,
          duration: 0.1,
        });
      }
    });
  };

  const checkHitRight = () => {
    const holder = document
      ?.querySelector(".holder")
      ?.getBoundingClientRect().left;

    paymentPlan?.forEach((item, index) => {
      const itemX =
        (document?.querySelector(`.p-item-${index}`)?.getBoundingClientRect()
          .left +
          document?.querySelector(`.p-item-${index}`)?.getBoundingClientRect()
            .right) /
        2;

      if (index === 0 && itemX < holder) {
        setFirstPlan({
          title: planTitle(props?.paymentPlan[0]),
          description: props?.paymentPlan[0].milestone,
        });
      }

      if (itemX > holder) {
        const isDuplicate = paymentPlan?.some(
          (plan) => plan.description === item.milestone
        );
        if (!isDuplicate) {
          setFirstPlan({
            title: planTitle(item),
            description: item.milestone,
          });
          setPlanList((prevPlanList) => {
            const isDuplicate = prevPlanList.some(
              (plan) => plan.description === item.milestone
            );
            if (!isDuplicate) {
              return [
                ...prevPlanList,
                {
                  title: planTitle(item),
                  description: item.milestone,
                },
              ];
            } else {
              return prevPlanList;
            }
          });

          gsap.to(`.p-item-${index}`, {
            opacity: 0,
            duration: 0.1,
          });
        }
      } else {
        gsap.to(`.p-item-${index}`, {
          opacity: 1,
          duration: 0.1,
        });
      }
    });
  };

  useEffect(
    lang === "en"
      ? () => {
          const ctx = gsap?.context(() => {
            gsap?.to(".p-item", {
              x: -900,
              duration: 15,
              stagger: 1,
              onUpdate: checkHit,
              scrollTrigger: {
                trigger: ".payment-section",
                scrub: 1,
                ease: "linear",
                markers: true,
                start: "top 10%",
                end: "bottom -600%",
                pin: true,
                pinType: "fixed",
              },
            });
          });

          return () => {
            ctx.revert();
          };
        }
      : () => {
          const ctx = gsap?.context(() => {
            gsap?.to(".p-item", {
              x: 900,
              duration: 25,
              stagger: 1,
              onUpdate: checkHitRight,
              scrollTrigger: {
                trigger: ".payment-section",
                scrub: 1,
                ease: "linear",
                markers: false,
                start: "top 10%",
                end: "bottom -400%",
                pin: true,
                pinType: "fixed",
              },
            });
          });

          return () => {
            ctx.revert();
          };
        },
    []
  );

  return (
    <>
      {lang === "en" ? (
        <section
          ref={parentRef}
          className={`hidden md:block md:relative mb-5 mt-16 md:mt-0 payment-section`}
        >
          <SkeletonSingleProperty className="px-5 flex-col">
            <div className="w-full md:w-[80%] h-auto ml-0 md:ml-2">
              <HeadingText
                innerText={heading}
                className="items-start text-center w-full md:w-auto"
                size="px-4"
              />
            </div>
            <div className="w-full relative mt-20 z-10">
              <div
                ref={scrollDiv}
                className="hidden md:flex justify-end items-center w-3/4 pt-52 relative left-[36%]"
              >
                <div
                  className={`basis-1/2 flex justify-center items-center z-10 holder`}
                >
                  <div className={`absolute -top-[25px] left-[5%] px-2 w-auto`}>
                    <h1
                      className={`font-oswald uppercase text-white text-[75px]`}
                    >
                      {firstPlan.title}
                    </h1>
                    <p className="font-robotoCondensed text-[16px] text-white tracking-[0]">
                      {firstPlan.description}
                    </p>
                  </div>
                  <div className="w-[6rem] h-[6rem] bg-white-0 rounded-full flex justify-center items-center">
                    <div className="circle-border">
                      <div className="circle-white">
                        <p className="flex flex-col justify-center items-center">
                          <Image src={upArrow2} alt="" />
                          <Image src={upArrow} alt="" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {paymentPlan.map((item, index) => (
                  <div
                    className={`mt-4 basis-1/2 flex justify-center pr-10 items-center z-10 p-item p-item-${index}`}
                    key={`payment-${index}`}
                  >
                    <PaymentCircle
                      title={
                        item.percentage
                          ? item.percentage
                          : item.installment
                          ? item.installment
                          : item.date
                      }
                      description={item.milestone}
                      id={index}
                      refer={circleDivRef}
                      setPanelRef={setPanelRef}
                    />
                  </div>
                ))}
                <div className="absolute w-full top-[7.6rem] md:top-[16.5rem] -right-[4.3rem] md:-right-32 h-[1px] md:h-[2px] bg-yellow-400"></div>
              </div>
            </div>
          </SkeletonSingleProperty>
          <div className="hidden md:flex md:gap-2 md:flex-col justify-center text-white absolute top-[184px] ml-[7%]">
            {planList.map((plan, index) => (
              <div key={index} className="flex items-center">
                <Image
                  src={tick}
                  alt="tick"
                  className="w-[20px] h-[11.43px] ml-10"
                />
                <div className="ml-2">
                  {plan.title} {plan.description}
                </div>
              </div>
            ))}
          </div>
          <div className="-rotate-90 hidden md:absolute -right-[150px] top-[9rem] opacity-20 text-white mix-blend-overlay font-turretRoad">
            <h1 className="text-[60px]">Payment Plan</h1>
          </div>
        </section>
      ) : (
        // RTL desktop

        <section
          ref={parentRef}
          className={`hidden md:block md:relative mb-5 mt-16 md:mt-0 payment-section`}
        >
          <SkeletonSingleProperty className="px-5 flex-col">
            <div className="w-full md:w-[80%] h-auto ml-0 md:ml-2">
              <HeadingText
                innerText={heading}
                className="items-start text-center w-full md:w-auto"
                size="px-4"
              />
            </div>
            <div className="w-full relative mt-20 z-10">
              <div
                ref={scrollDiv}
                className="hidden md:flex justify-end items-center w-3/4 pt-52 relative right-[37%]"
              >
                <div
                  className={`basis-1/2 flex justify-start items-center z-10 holder`}
                >
                  <div
                    className={`absolute -top-[25px] left-[78%] px-2 w-auto`}
                  >
                    <h1
                      className={`font-oswald uppercase text-white text-[75px]`}
                    >
                      {firstPlan.title}
                    </h1>
                    <p className="font-robotoCondensed text-[16px] text-white tracking-[0] pr-4">
                      {firstPlan.description}
                    </p>
                  </div>
                  <div className="w-[6rem] h-[6rem] bg-white-0 rounded-full flex justify-center items-center">
                    <div className="circle-border">
                      <div className="circle-white">
                        <p className="flex flex-col justify-center items-center">
                          <Image src={upArrow2} alt="" />
                          <Image src={upArrow} alt="" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {paymentPlan.map((item, index) => (
                  <div
                    className={`mt-4 basis-1/2 flex justify-center items-center z-10 p-item p-item-${index} `}
                    key={`payment-${index}`}
                  >
                    <PaymentCircle
                      title={
                        item.percentage
                          ? item.percentage
                          : item.installment
                          ? item.installment
                          : item.date
                      }
                      description={item.milestone}
                      id={index}
                      refer={circleDivRef}
                      setPanelRef={setPanelRef}
                    />
                  </div>
                ))}
                <div className="absolute w-full top-[7.6rem] md:top-[16.5rem] -right-[4.3rem] md:right-2 h-[1px] md:h-[2px] bg-yellow-400"></div>
              </div>
            </div>
          </SkeletonSingleProperty>
          <div className="hidden md:flex md:gap-2 md:flex-col justify-center text-white absolute top-[184px] mr-[10%]">
            {planList.map((plan, index) => (
              <div key={index} className="flex gap-3 items-center">
                <Image src={tick} alt="tick" className="w-[20px] h-[11.43px]" />
                <div className="ml-2">
                  {plan.title} {plan.description}
                </div>
              </div>
            ))}
          </div>
          <div className="-rotate-90 hidden md:absolute -right-[150px] top-[9rem] opacity-20 text-white mix-blend-overlay font-turretRoad">
            <h1 className="text-[60px]">Payment Plan</h1>
          </div>
        </section>
      )}

      <section className={`md:hidden mb-5 mt-16 md:mt-0`}>
        <SkeletonSingleProperty className="px-5 flex-col">
          <div className="w-full md:w-[80%] h-auto ml-0 md:ml-2">
            <HeadingText
              innerText={heading}
              className="items-start text-center w-full md:w-auto"
              size="px-4"
            />
          </div>
          <div className="w-full relative mt-10 z-10">
            <div
              className={`flex items-center ${
                lang === "ar" ? "mr-4 ml-6" : "ml-4 mr-6"
              }`}
            >
              <div
                className={`panel flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] rounded-full `}
              >
                <div className="w-[2rem] h-[2rem] bg-white-0 rounded-full flex justify-center items-center z-20">
                  <div className="w-[.75rem] h-[.75rem] bg-[#FFD15F] rounded-full z-20"></div>
                </div>
              </div>
              <div
                className={`flex justify-between items-center w-full gap-1 relative`}
              >
                <p className="relative font-robotoCondensed text-[16px] px-2 text-white tracking-[0] gap-4">
                  {firstPlan.description}
                </p>
                <h1 className={`font-oswald uppercase text-white`}>
                  {firstPlan.title}
                </h1>
              </div>
            </div>
            {paymentPlan.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center ${
                  lang === "ar" ? "mr-4 ml-6" : "ml-4 mr-6"
                }`}
              >
                <div
                  className={`panel flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] rounded-full `}
                >
                  <div className="w-[2rem] h-[2rem] bg-white-0 rounded-full flex justify-center items-center z-20">
                    <div className="w-[.75rem] h-[.75rem] bg-[#FFD15F] rounded-full z-20"></div>
                  </div>
                </div>

                <div className="flex gap-2 justify-between w-full relative">
                  <p className="text-center font-robotoCondensed text-[16px] px-2 text-white tracking-[0]">
                    {item.milestone}
                  </p>
                  <h1
                    className={`text-center font-oswald uppercase text-white text-[16px]
                `}
                  >
                    {item.percentage
                      ? item.percentage
                      : item.installment
                      ? item.installment
                      : item.date}
                  </h1>
                  {lang === "en" ? (
                    <div className="absolute w-[1px] -top-[40px] -left-[24px] h-[50px] bg-yellow-400"></div>
                  ) : (
                    <div className="absolute w-[1px] -top-[40px] -right-6 h-[50px] bg-yellow-400"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SkeletonSingleProperty>
        <div className="hidden md:flex md:gap-2 md:flex-col justify-center text-white absolute top-[184px] ml-[7%]">
          {planList.map((plan, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={tick}
                alt="tick"
                className="w-[20px] h-[11.43px] ml-10"
              />
              <div className="ml-2">
                {plan.title} {plan.description}
              </div>
            </div>
          ))}
        </div>
        <div className="-rotate-90 hidden md:absolute -right-[150px] top-[9rem] opacity-20 text-white mix-blend-overlay font-turretRoad">
          <h1 className="text-[60px]">Payment Plan</h1>
        </div>
      </section>
    </>
  );
};

export default PaymentPlan;
