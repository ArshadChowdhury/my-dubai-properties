"use client";

import Home from "@/components/prev/pages/HomePage/Home";
import { getApiData } from "@/services/apiFunctions";
import { useQuery } from "react-query";

export default function HomePage() {
  const lang = "en";

  const getAllProperties = () => {
    return getApiData(lang, "properties");
  };

  const { isLoading, data, isError, error } = useQuery(
    ["property-list", lang],
    getAllProperties
  );

  if (isLoading) {
    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center text-bold bg-brand text-white text-4xl">
        Loading...Please wait...
      </div>
    );
  }

  if (isError) {
    return error.message;
  }
  const allProperties = data.data.properties.data;
  return <Home properties={allProperties} />;
}
