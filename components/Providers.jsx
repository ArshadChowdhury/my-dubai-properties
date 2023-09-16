"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StateProvider } from "@/states/StateProvider";
import reducer, { initialState } from "@/states/reducer";

export default function Providers({ children }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider initialState={initialState} reducer={reducer}>
        {children}
      </StateProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}
