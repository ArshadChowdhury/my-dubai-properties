"use client";

import SinglePropertyDetails from "@/components/prev/pages/SinglePropertyDetails/SinglePropertyDetails";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { instance } from "@/components/prev/services/apiFunctions";
import { useStateValue } from "@/components/prev/states/StateProvider";

export default function SingleProperty() {
  const pathname = usePathname();
  const [{ lang }] = useStateValue();
  const propertiesUrl = pathname.split("/");
  const propertyId = propertiesUrl[propertiesUrl.length - 1];

  const getAllFilter = async () => {
    const data = await instance
      .get(`/${lang}/data/filter-list`, {
        timeout: 5000,
      })
      .then((data) => data.data.data);
    return data;
  };

  const getAllProperties = async () => {
    const data = await instance
      .get(`/${lang}/properties`, {
        timeout: 5000,
      })
      .then((data) => data.data.data.properties);
    return data;
  };

  const getSingleProperty = async () => {
    const data = await instance
      .get(`/${lang}/properties/${propertyId}`, {
        timeout: 5000,
      })
      .then((data) => data.data.data);
    return data;
  };

  const {
    isLoading,
    data: singleProperty,
    isError,
    error,
  } = useQuery({
    queryKey: ["single-property-details", propertyId],
    queryFn: getSingleProperty,
  });

  const { isLoading: isLoadingFilterList, data: filterListData } = useQuery({
    queryKey: ["filter-list", lang],
    queryFn: getAllFilter,
  });

  const { isLoading: isLoadingPropertiesData, data: propertiesData } = useQuery(
    {
      queryKey: ["property-list", lang],
      queryFn: getAllProperties,
    }
  );

  if (isLoading) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Loading...Please wait...
      </p>
    );
  }

  if (isError) {
    return error.message;
  }

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <SinglePropertyDetails
        filterListData={filterListData}
        singleProperty={singleProperty}
        propertiesData={propertiesData}
      />
    </section>
  );
}
