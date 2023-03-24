import { NextPage } from "next";
import FixPage from "../FixPage";
import Head from "next/head";

const SuggestionPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>제안 | 먹어보시개</title>
      </Head>
      <FixPage />
    </>
  );
};

export default SuggestionPage;
