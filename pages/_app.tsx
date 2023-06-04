import type { AppProps } from "next/app";
import "styles/reset.css";
import "styles/globalStyle.css";
import Providers from "components/common/Providers";
import Layout from "components/common/Layout";
import Head from "next/head";
import DeviceDetectWrapper from "components/common/DeviceDetectWrapper";
import MobilePage from "./MobilePage";
import Scripts from "components/common/Scripts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Scripts />
      <DeviceDetectWrapper>
        {(props) => (
          <>
            {props.isMobile ? (
              <MobilePage model={props.isAndroid ? "ANDROID" : "IOS"} />
            ) : (
              <>
                <Head>
                  <meta
                    name="description"
                    content="세상의 모든 좋은 음식이 반려견에게 닿을 때까지, 먹어보시개"
                  />
                  <meta
                    name="og:description"
                    content="세상의 모든 좋은 음식이 반려견에게 닿을 때까지, 먹어보시개"
                  />
                  <meta
                    property="og:image"
                    content={
                      "https://junseong-bucket.s3.ap-northeast-2.amazonaws.com/eatitdog.kr/og_image.png"
                    }
                  />
                </Head>
                <Providers pageProps={pageProps}>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </Providers>
              </>
            )}
          </>
        )}
      </DeviceDetectWrapper>
    </>
  );
}

export default MyApp;
