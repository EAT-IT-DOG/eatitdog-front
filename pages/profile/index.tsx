import { NextPage } from "next";
import React from "react";
import FixPage from "../FixPage";
import Head from "next/head";

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>내정보 | 먹어보시개</title>
      </Head>
      <FixPage />
    </>
  );
};

export default ProfilePage;
