import { QueryClient, dehydrate } from "@tanstack/react-query";
import { NextPage } from "next";
import { QUERY_KEY } from "queries/queryKey";
import FoodRepositoryImpl from "repositories/food/FoodRepositoryImpl";
import Head from "next/head";
import Search from "components/Search";
import { useRouter } from "next/router";
import { isServer } from "utils/ssr";

const SearchFoodKeywordPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${router.query.keyword as string} | 먹어보시개`}</title>
      </Head>
      <Search />
    </>
  );
};

SearchFoodKeywordPage.getInitialProps = async (ctx) => {
  const queryClient = new QueryClient();

  if (isServer() && ctx.query.keyword) {
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
    dehydratedState: dehydrate(queryClient),
  };
};

export default SearchFoodKeywordPage;
