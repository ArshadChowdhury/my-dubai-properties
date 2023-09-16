"use client";

import { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { StateProvider } from "@/states/StateProvider";
import reducer, { initialState } from "@/states/reducer";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  const lang = "en";

  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider initialState={initialState} reducer={reducer}>
        {/* <ScrollToTop /> */}
        <div
          className="relative bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] overflow-x-clip"
          style={{ display: "flow-root" }}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {children}
        </div>
      </StateProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
