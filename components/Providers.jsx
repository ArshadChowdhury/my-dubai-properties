"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StateProvider } from "@/components/prev/states/StateProvider";
import reducer, { initialState } from "@/components/prev/states/reducer";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({ children }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider initialState={initialState} reducer={reducer}>
        {children}
      </StateProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
