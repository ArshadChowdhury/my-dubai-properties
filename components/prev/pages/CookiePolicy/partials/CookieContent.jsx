"use client";

import Skeleton from "@/components/prev/Skeleton/Skeleton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/prev/Footer";
import { useStateValue } from "@/components/prev/states/StateProvider";
import RouteLink from "@/components/prev/RouteLink";
import { usePathname } from "next/navigation";

const CookieContent = () => {
  const [{ lang }] = useStateValue();
  const pathname = usePathname();

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar
        className={`absolute top-0 left-0 w-full py-5 bg-[#000F1D] z-50 md:!bg-transparent`}
        type="inline"
      />
      <div className="bg-about h-full w-full bg-repeat bg-center relative pt-20 md:pt-28 md:mt-10 lg:mt-0">
        <RouteLink
          locationName={pathname}
          buttonHide={"true"}
          marginBottom="mb-12 md:mb-0"
        />
      </div>
      <Skeleton className="md:mt-5 px-5">
        <div className="pt-3 text-white font-montserrat">
          <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
            What are cookies?
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[24px] font-extralight">
            Cookies are small files stored on a user&apos;s computer that hold
            data relating to a specific website. They are placed on the
            user&apos;s computer by that website and accessed each time a user
            browses it. The cookies used by{" "}
            <span className="text-[#FFD15F] tracking-[2%] leading-[24px] font-[600]">
              MY DUBAI PROPERTY
            </span>{" "}
            are harmless.
          </p>
        </div>
        <div className="pt-3 text-white font-montserrat">
          <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
            When and why does DAMAC place cookies?
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[24px] font-extralight">
            DAMAC places cookies on any browser that visits its sites. They are
            primarily used to collect data in order to help improve our website,
            by seeing which parts of the site are being used, how users are
            navigating to each page and what items they prefer to click on. This
            policy is set out so you can know which cookies DAMAC uses and why;
            as well as giving you the option to opt-out of us using them on your
            computer if you wish.
          </p>
        </div>
        <div className="pt-3 text-white font-montserrat font-extralight">
          <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
            What cookies does DAMAC use?
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[27px]">
            <strong>Necessary cookies</strong> – these help make a website
            usable by enabling basic functions, such as page navigation and
            access to secure areas of the site. The website cannot function
            properly without them.
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[24px]">
            <strong>Performance cookies</strong> – like most websites, DAMAC
            uses analytics software, such as Google Analytics. This software
            gathers anonymous data relating to how its site is being used and
            then provides aggregated visitor statistics, number of page views
            etc. DAMAC supplements this data with its own analytics, which
            allows more in-depth analysis of how people use its site. This
            information is vital as it helps to make the site as easy to use and
            as effective as possible. DAMAC regularly adds new features and
            changes existing ones to improve the site, and optimize the user
            experience for all parties. To ensure the changes are useful,
            variants of these changes across the site, reviewing data from the
            analytics system to see what works bes
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[24px]">
            <strong>DoubleClick cookies</strong> – DAMAC may also use cookies
            for ad serving through Google&apos;s DoubleClick ad server, which
            places a cookie on your computer when you are browsing the web and
            you visit a site using DoubleClick advertising (including some
            Google AdSense advertisements). This cookie is used to serve ads
            specific to you and your interests (‘interest based targeting’). The
            ads served will be targeted based on your previous browsing history.
            This cookie uses ‘non-personally identifiable information’ – it does
            not track any personal information about you whatsoever. You can
            opt-out of this ad serving on all sites using this form of
            advertising by visiting{" "}
            <span className="text-[#FFD15F] tracking-[2%] leading-[24px] font-[600]">
              http://www.doubleclick.com/privacy/dart_adserving.aspx
            </span>
            .
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[27px]">
            <strong>Third party cookies </strong>– in addition to the cookies
            listed above, third parties may also set cookies when you visit the
            site. In some cases, that is because DAMAC has hired a third party
            to provide services on its behalf, such as the enquiry form. Because
            your browser connects to those third parties’, they are able to set
            or read their own cookies on your device and may collect information
            about your online activities (but not any personally identifiable
            data). To control cookies from these third parties, please visit
            their respective sites.
          </p>
          <p className="pb-3 text-[10.5px] tracking-[2%] leading-[27px]">
            <strong>Controlling cookies</strong> – DAMAC will make every effort
            to recognize and respect your choices; however there is a small
            chance that not all cookies and similar methods of data capture will
            be covered by these settings. If this is a concern to you then we
            recommend that you change the settings in your browser. The ‘help’
            function within your browser should tell you how.
          </p>
        </div>
        <div className="pt-3 text-[#FFD15F] font-montserrat text-[12.5px]">
          <div className="list-disc grid ml-4 grid-cols-2 gap-5 w-full">
            <ul className="list-disc w-full">
              <li>
                <a href="#" className="underline">
                  (Chrome)
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="underline">
                  (Firefox)
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="underline">
                  (Opera)
                </a>
              </li>
            </ul>
            <ul className="list-disc w-full">
              <li>
                {" "}
                <a href="#" className="underline">
                  (Internet Explore)
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  (Safari)
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  (Edge)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Skeleton>
      <Footer />
    </section>
  );
};

export default CookieContent;
