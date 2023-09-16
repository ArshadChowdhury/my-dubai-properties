"use client";

// import Home from "@/components/prev/pages/HomePage/Home";
import { getApiData } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { instance } from "@/components/prev/services/apiFunctions";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const lang = "en";

  const getAllProperties = async () => {
    const data = await instance
      .get("/en/properties", {
        timeout: 5000,
      })
      .then((data) => data.data.data.properties);
    return data;
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["property-list", lang],
    queryFn: getAllProperties,
  });

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-bold bg-brand text-white text-4xl">
        Loading...Please wait...
      </div>
    );
  }

  if (isError) {
    return error.message;
  }

  return (
    <>
      <Navbar />
      <h1>Hey</h1>
      {/* <Home properties={propertiesData} /> */}
    </>
  );
}
