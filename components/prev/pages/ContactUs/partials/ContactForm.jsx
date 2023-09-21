import Skeleton from "@/components/prev/Skeleton/Skeleton";
import HeadingBox from "@/components/prev/HeadingBox";
import RegisterForm from "@/components/prev/RegisterForm";
import AddresInfo from "./AddresInfo";
import Footer from "@/components/prev/Footer";

const ContactForm = (props) => {
  return (
    <>
      <section>
        <Skeleton className="!pb-12 px-0">
          <div className=" md:mt-16 w-full md:grid grid-cols-2 ">
            <div className="w-full">
              <RegisterForm homeData={props?.homeData} />
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
