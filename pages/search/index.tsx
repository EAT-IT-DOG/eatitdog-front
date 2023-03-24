import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import Search from "../../components/Search";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { QUERY_KEY } from "../../queries/queryKey";
import FoodRepositoryImpl from "../../repositories/food/FoodRepositoryImpl";
import { useRouter } from "next/router";
import Head from "next/head";

const SearchPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${router.query.type} | 먹어보시개`}</title>
      </Head>
      <Search />
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  if (ctx.query.type) {
    await Promise.all([
      queryClient.prefetchQuery(
        QUERY_KEY.food.getFoodNamesByType(ctx.query.type as string),
        () =>
          FoodRepositoryImpl.getFoodNamesByType({
            type: ctx.query.type as string,
          })
      ),
    ]);
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SearchPage;
