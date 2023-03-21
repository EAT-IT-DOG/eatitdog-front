import { ProvidersProps } from "./types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RecoilRoot } from "recoil";
import ThemeProviderContainer from "../ThemeProviderContainer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProviderContainer>{children}</ThemeProviderContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Providers;
