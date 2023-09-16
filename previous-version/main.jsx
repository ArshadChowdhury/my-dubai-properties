import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { StateProvider } from "./states/StateProvider";
import reducer, { initialState } from "./states/reducer";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </StateProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>
);
