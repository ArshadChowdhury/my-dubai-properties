import React from "react";

import HeadingBox from "../../../components/HeadingBox";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HomeHeading from "../../../components/HomeHeading";
import HeadingText2 from "../../SinglePropertyDetails/partials/HeadingText2";

const Terms = () => {
  return (
    <section>
      <Skeleton className="px-5">
        <div className="mt-5 md:mt-10 w-full">
          <div className="w-full md:w-[25%]">
            <HomeHeading heading="Website Terms" />
          </div>

          <div
            style={{ fontWeight: "200" }}
            className="md:mt-5 font-montserrat text-white text-[13.5px] tracking-[2%] leading-[24px]">
            <p className="py-3">
              By clicking on offplan-dubai.com or any of its extensions, by
              visiting the website hosted on offplan-dubai.com, by taking any
              actions based on the information on the website you accept to all
              the policies, disclaimers, terms and conditions associated with
              this website, affiliate sites, and fully indemnify the owners of
              this website, the company, affiliates, vendors, partners and all
              employees from all liabilities in any way whatsoever.
            </p>
            <p className="py-3">
              The website offplan-dubai.com consolidates and represents
              information related to existing and upcoming real estate projects
              in the vicinity of Dubai or other specific regions from time to
              time. It does not represent any of the companies, projects,
              developments, properties (or ‘companies’) mentioned anywhere in
              the website, or any of its affiliates in any way whatsoever.
            </p>
            <p className="py-3">
              Any information showcased on this website offplan-dubai.com is
              indicative and solely for informative and reference purposes. The
              same will be changed any time without prior intimation whatsoever
              and it is the due responsibility of the user to check the required
              sections of the website and its affiliate websites for changes.
              The same is subject to change as per the discretion of the actual
              brand, company, builder, developer of the property as per their
              needs. The owners of the website are not responsible for any
              decisions made based on the information posted on the website in
              any way.
            </p>
            <p className="py-3">
              The logos, images (artistic and photos) have been used solely for
              the purpose of reference to the original brand, company, builder,
              developer only to provide a perspective to the website user and
              does not associate the website or its owners, affiliates, vendors
              and employees to any of the brands mentioned in the website in any
              way whatsoever. Should you have any objections to the content
              posted on this website you are requested to write to
              sales@mydubai-property.com with the subject: ‘content request
              clarification’ along with your name, address and telephone /
              mobile no and we will answer as soon as possible.
            </p>
          </div>
        </div>
        <div className="mt-10 w-full flex flex-col justify-center items-center">
          <div className="w-full md:w-[65%] uppercase">
            <HomeHeading heading="Online purchases and other terms and conditions" />
          </div>

          <div
            style={{ fontWeight: "200" }}
            className="w-full md:mt-5 font-montserrat text-white text-[13.5px] tracking-[2%] leading-[24px]">
            <p className="py-3">
              All purchases through our site or other transactions for the sale
              of services formed through the Website or as a result of visits
              made by you are governed by these Terms of Use and the Property
              Agreement.
            </p>
            <p className="py-3">
              Additional terms and conditions may also apply to specific
              portions, services or features of the Website. All such additional
              terms and conditions are hereby incorporated by this reference
              into these Terms of Use.
            </p>
            <p className="py-3">
              Any and all payments made through this Website are subject to
              these Terms of Use and the Property Agreement. Consequently, the
              Company is under no obligation to accept any payments not made in
              accordance with the these Terms of Use or the Property Agreement
              or made following termination of any of them and you hereby
              acknowledge and accept that any receipt of payment through this
              Website or otherwise shall not be deemed or construed as an
              acceptance of such payment or waiver of right to reject payment at
              a later date.
            </p>
            <p className="py-3">
              Description of Goods and Services: The Website can be used for
              payment of service fees, utilities and any other charges payable
              by you for management of the community, compliance with community
              rules or required by law and in compliance with the Property
              Agreement.
            </p>
            <p className="py-3">
              Currency for all transactions is AED unless stated otherwise.
            </p>
            <p className="py-3">
              It is your responsibility to ensure that payment is correctly and
              timely received by the Company. Accordingly, we accept no
              liability whatsoever in this respect, and we are under no
              obligation to notify you of any incorrect, rejected and / or
              declined payments. You shall also ensure that sufficient credit is
              available and in the event of a “declined” credit card payment, it
              is your responsibility to pay any additional fees and / or charges
              levied by either a nominated financial institution or the Company
              and you shall remain responsible to pay any due amounts. Without
              prejudice to the foregoing, you shall notify us immediately in the
              event of any failed transaction or if you face or encounter any
              technical problems associated with the Website or its use. If any
              transaction is found to be incorrect, unauthorized or fraudulent,
              payment may be reversed and payments shall remain due. Payment
              transactions will be processed on the day the transaction is
              submitted for payment, unless the transaction is submitted on a
              weekend or non-working weekday where payment will be processed the
              next working weekday. Upon receiving the funds into our bank
              account, we shall accordingly issue a proper receipt acknowledging
              the same. All transactions will be processed without delay,
              however the Company expressly disclaims any and all liability for
              processing delays, which may occur in any circumstance. Payment is
              not accepted (not deemed made) until the funds have been cleared.
            </p>
            <p className="py-3">
              Refunds of any payments (if any) made through the Website are
              subject to the terms and conditions of the Property Agreement. Any
              duplicate or excess payments received will be adjusted against
              future/subsequent invoices. It is your responsibility to maintain
              document evidencing payment though the Website. Any service or
              maintenance requests made through this Website shall be subject to
              the Property Agreement.
            </p>
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default Terms;
