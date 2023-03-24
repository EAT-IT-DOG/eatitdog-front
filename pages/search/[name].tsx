import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import Search from "../../components/Search";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { QUERY_KEY } from "../../queries/queryKey";
import FoodRepositoryImpl from "../../repositories/food/FoodRepositoryImpl";
import Head from "next/head";
import { useRouter } from "next/router";

const SearchDetailPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${router.query.name} | 먹어보시개`}</title>
      </Head>
      <Search />
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  if (ctx.query.name) {
    await Promise.all([
      queryClient.prefetchQuery(
        QUERY_KEY.food.getFoodByName(ctx.query.name as string),
        () =>
          FoodRepositoryImpl.getFoodByName({ name: ctx.query.name as string })
      ),
    ]);
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SearchDetailPage;
