import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingBox from "../../../components/HeadingBox";
import search from "../../../assets/images/global/icon-search.png";

const DevelopersDescription = () => {
  return (
    <section>
      <div className="w-full">
        <p
          className="font-montserrat text-white leading-7 my-5"
          style={{
            "font-weight": "200",
            "font-size": "15px",
            "margin-left": "10px",
          }}>
          Dubai has a dynamic real estate market with the major developers
          adding to the scintillating skyline of the city. Some of the major
          players in the market are Emaar, Meraas, Damac, Sobha, to name a few.
          The developers in Dubai have done a fantastic job of crafting the
          perfect and popular communities for residents. Offering a plethora of
          options ranging from beachfront, waterfront, golf course communities,
          and more, the developers in Dubai have the best for all kinds of
          people.
        </p>
      </div>
    </section>
  );
};

export default DevelopersDescription;
