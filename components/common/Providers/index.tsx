import { ProvidersProps } from "./types";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
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

const Providers = ({ children, pageProps }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ThemeProviderContainer>{children}</ThemeProviderContainer>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default Providers;
