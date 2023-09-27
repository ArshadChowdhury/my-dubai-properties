import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { useStateValue } from "@/components/prev/states/StateProvider";

const SinglePropertyHeader = (props) => {
  const [index, setIndex] = useState(0);
  const header = props.header;
  const sliderRef = useRef(null);

  useEffect(() => {
    const lastIndex = header.length - 1;
    const sliderInterval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === lastIndex) {
          return 0;
        } else {
          return prevIndex + 1;
        }
        m;
      });
    }, 5000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [header]);

  // useEffect(() => {
  //   if (sliderRef.current) {
  //     gsap.fromTo(
  //       sliderRef.current,
  //       { right: "100%", opacity: 0 },
  //       { right: "50%", opacity: 1, duration: 0.5, ease: "linear" }
  //     );
  //   } else {
  //     gsap.to(sliderRef.current, {
  //       right: "50%",
  //       opacity: 0,
  //       duration: 0.3,
  //       ease: "linear",
  //     });
  //   }
  // }, [sliderRef.current]);

  return (
    <section className="relative h-[70vh] md:h-[100vh] w-screen">
      {props?.header?.map((img, idx) => {
        let position = "nextSlide";
        if (idx === index) {
          position = "activeSlide";
        }
        if (idx === index - 1 || (index === 0 && idx === header.length - 1)) {
          position = "lastSlide";
        }
        return (
          <article
            ref={sliderRef}
            className={`${position}  opacity-0 absolute top-0 left-0  article h-full w-full`}
            key={idx}
            style={{
              backgroundImage: `url(${img.path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          >
            <div
              className="inner-shadow absolute bottom-0 left-0 w-full h-[5px]"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 15, 29, 0.5), rgba(0, 15, 29, 0))",
              }}
            />
            <div
              className="inner-shadow absolute bottom-0 left-0 w-full h-[15px]"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 15, 29, 0.5), rgba(0, 15, 29, 0))",
              }}
            />
            <div
              className="inner-shadow absolute bottom-0 left-0 w-full h-[30px]"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 15, 29, 0.5), rgba(0, 15, 29, 0))",
              }}
            />
            <div
              className="inner-shadow absolute bottom-0 left-0 w-full h-[50px]"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 15, 29, 0.5), rgba(0, 15, 29, 0))",
              }}
            />
            <div
              className="inner-shadow absolute bottom-0 left-0 w-full h-[70px]"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 15, 29, 0.5), rgba(0, 15, 29, 0))",
              }}
            />
          </article>
        );
      })}

      {/* <img
        src={header}
        alt="Single Property Banner"
        className="h-full w-screen"
      /> */}
    </section>
  );
};

export default SinglePropertyHeader;
