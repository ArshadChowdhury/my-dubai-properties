import React from "react";

import Navbar from "@/components/Navbar";
import HeadingBox from "@/components/prev/HeadingBox";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import HomeHeading from "@/components/prev/HomeHeading";
import Footer from "@/components/prev/Footer";

const PrivacyContent = () => {
  return (
    <section>
      <Navbar
        className={`absolute top-0 left-0 w-full py-5 bg-[#000F1D] z-50 md:!bg-transparent`}
        type="inline"
      />
      <Skeleton className="mt-14 px-5">
        <div className="mt-5 md:mt-10 w-full">
          <div className="w-full md:w-[25%]">
            <HomeHeading heading="Introduction" />
          </div>

          <div className="md:mt-5 font-montserrat text-white text-[13.5px] tracking-[2%] leading-[24px]">
            <p className="py-3  font-[13.5px]" style={{ fontWeight: "200" }}>
              This privacy policy has been compiled to better serve those who
              are concerned with how their ‘Personally Identifiable Information’
              (PII) is being used online. PII, as described in UAE privacy law
              and information security, is information that can be used on its
              own or with other information to identify, contact, or locate a
              single person, or to identify an individual in context. Please
              read our privacy policy carefully to get a clear understanding of
              how we collect, use, protect or otherwise handle your Personally
              Identifiable Information in accordance with our website.
            </p>
            <p className="pt-3">
              What personal information do we collect from the people that visit
              our blog, website or app?
            </p>
            <p className="pb-3 text-[10.5px]" style={{ fontWeight: "200" }}>
              When registering on our site, you may be asked to enter your name,
              email address, phone number or other details to help you with your
              experience.
            </p>
            <p className="pt-3">When do we collect information?</p>
            <p className="pb-3 text-[10.5px]" style={{ fontWeight: "200" }}>
              We collect information from you when you register on our site,
              subscribe to a newsletter, fill out a form, Use Live Chat or enter
              information on our site.
            </p>
            <p className="pt-3">How do we protect your information?</p>
            <p className="pb-3 text-[10.5px]" style={{ fontWeight: "200" }}>
              Our website is scanned on a regular basis for security holes and
              known vulnerabilities in order to make your visit to our site as
              safe as possible. <br />
              We use regular Malware Scanning. <br /> We never ask for personal
              or private information like credit card numbers.
            </p>
          </div>
        </div>
        <div className="mt-10 w-full flex flex-col justify-center items-center">
          <div className="w-full md:w-[30%] mr-0 md:mr-56">
            <HomeHeading heading="Do we use ‘cookies’?" />
          </div>

          <div className="w-full md:mt-5 font-montserrat text-white ">
            <p
              className="py-3 text-[13.5px] tracking-[2%] leading-[24px]"
              style={{ fontWeight: "200" }}
            >
              We do not use cookies for tracking purposes. You can choose to
              have your computer warn you each time a cookie is being sent, or
              you can choose to turn off all cookies. You do this through your
              browser settings. Since browser is a little different, look at
              your browser’s Help Menu to learn the correct way to modify your
              cookies. If you turn cookies off, some features will be disabled.
              that make your site experience more efficient and may not function
              properly. However, you will still be able to register your
              interest.
            </p>
            <div className="py-3">
              <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
                Third-party disclosure
              </p>
              <p className="pb-3 text-[10.5px]" style={{ fontWeight: "200" }}>
                We do not sell, trade, or otherwise transfer to outside parties
                your Personally Identifiable Information.
              </p>
            </div>
            <div className="py-3">
              <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
                Google
              </p>
              <p
                className="pb-3 text-[13.5px] tracking-[2%] leading-[24px] "
                style={{ fontWeight: "200" }}
              >
                Google’s advertising requirements can be summed up by Google’s
                Advertising Principles. They are put in place to provide a
                positive experience for users. <br />
                <span className="text-[#FFD15F] font-medium">
                  https://support.google.com/adwordspolicy/answer/1316548?hl=en
                </span>
                <br />
                We use Google AdSense Advertising on our website. <br /> Google,
                as a third-party vendor, uses cookies to serve ads on our site.
                Google’s use of the DART cookie enables it to serve ads to our
                users based on previous visits to our site and other sites on
                the Internet. Users may opt-out of the use of the DART cookie by
                visiting the Google Ad and Content Network privacy policy.
              </p>
            </div>
            <div className="py-3">
              <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
                We have implemented the following:
              </p>
              <p className="py-3 text-[10.5px]" style={{ fontWeight: "200" }}>
                <ul>
                  <li>• Remarketing with Google AdSense</li>
                  <li>• Google Display Network Impression Reporting</li>
                </ul>
                <p className="py-3">
                  We, along with third-party vendors such as Google use
                  first-party cookies (such as the Google Analytics cookies) and
                  third-party cookies (such as the DoubleClick cookie) or other
                  third-party identifiers together to compile data regarding
                  user interactions with ad impressions and other ad service
                  functions as they relate to our website.
                </p>
              </p>
            </div>
            <div className="py-3">
              <p className="font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
                CAN SPAM Act
              </p>
              <p
                className="pb-3 text-[13.5px] tracking-[2%] leading-[24px] "
                style={{ fontWeight: "200" }}
              >
                The CAN-SPAM Act is a law that sets the rules for commercial
                email, establishes requirements for commercial messages, gives
                recipients the right to have emails stopped from being sent to
                them, and spells out tough penalties for violations.
              </p>
            </div>
            <div className="py-3 font-semibold text-[13.5px] tracking-[2%] leading-[24px]">
              <p>
                If at any time you would like to unsubscribe from receiving
                future emails, you can email us at{" "}
                <span className="text-[#FFD15F]">
                  info@my-dubai-property.com
                </span>{" "}
                <br />
                and we will promptly remove you from ALL correspondence.
              </p>
            </div>
            <div className="py-3">
              <p className="font-semibold text-[#FFD15F] text-[13.5px] tracking-[2%] leading-[24px]">
                This policy does not apply to information collected:
              </p>
              <p className="py-3 text-[10.5px]" style={{ fontWeight: "200" }}>
                <ul>
                  <li>
                    • through any other means, including any other website
                    operated by any third party; or
                  </li>
                  <li>
                    • by any third party, including through any application or
                    content (including advertising) that may link to the
                    Website.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Skeleton>
      <Footer />
    </section>
  );
};

export default PrivacyContent;
