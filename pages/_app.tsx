import type { AppProps } from "next/app";
import "../styles/reset.css";
import "../styles/globalStyle.css";
import Providers from "../components/common/Providers";
import Layout from "../components/common/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  );
}

export default MyApp;
