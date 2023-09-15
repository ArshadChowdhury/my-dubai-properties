import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingBox from "../../../components/HeadingBox";
import RegisterForm from "../../../components/RegisterForm";
import AddresInfo from "./AddresInfo";
import Footer from "../../../components/Footer";

const ContactForm = () => {
  return (
    <>
      <section>
        <Skeleton className="!pb-12 px-0">
          <div className=" md:mt-16 w-full md:grid grid-cols-2 ">
            <div className="w-full">
              <RegisterForm />
            </div>

            <div className="w-full -ml-2">
              <AddresInfo />
            </div>
          </div>
        </Skeleton>
      </section>
    </>
  );
};

export default ContactForm;
