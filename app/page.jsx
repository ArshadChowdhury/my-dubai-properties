"use client";

import Home from "@/components/prev/pages/HomePage/Home";
import { getApiData } from "@/services/apiFunctions";
import { useQuery } from "react-query";
import { instance } from "@/components/prev/services/apiFunctions";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [propertiesData, setPropertiesData] = useState(null);
  const lang = "en";

  const getAllProperties = async () => {
    const data = await instance.get("/en/properties", {
      timeout: 5000,
    });
    return setPropertiesData(data.data.data.properties);
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["property-list", lang],
    queryFn: getAllProperties,
  });

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

  return <Home properties={propertiesData} />;
}
