import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSidePropsContext, NextPage } from "next";
import { QUERY_KEY } from "../../../queries/queryKey";
import FoodRepositoryImpl from "../../../repositories/food/FoodRepositoryImpl";
import Head from "next/head";
import Search from "../../../components/Search";

const SearchFoodKeywordPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{` 먹어보시개`}</title>
      </Head>
      <Search />
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  if (ctx.query.keyword) {
    await Promise.all([
      queryClient.prefetchQuery(
        QUERY_KEY.food.getFoodsByKeyword(ctx.query.keyword as string),
        () =>
          FoodRepositoryImpl.getFoodsByKeyword({
            keyword: ctx.query.keyword as string,
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

export default SearchFoodKeywordPage;
