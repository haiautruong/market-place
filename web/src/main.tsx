import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./i18n/i18n.ts";
import "./styles/global.css";
import App from "./App.tsx";
import { setupAntdAdapter } from "./utils/reactAdapters";
import { queryClient } from "./utils/queryClient";

// Initialize Antd adapter for React 19
setupAntdAdapter();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
