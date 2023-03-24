import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { NextPage } from "next";
import FoodRepositoryImpl from "../repositories/food/FoodRepositoryImpl";
import Home from "../components/Home";
import { QUERY_KEY } from "../queries/queryKey";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>홈 | 먹어보시개</title>
      </Head>
      <Home />
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery([QUERY_KEY.food.getFoodNamesBySearchCount], () =>
      FoodRepositoryImpl.getFoodNamesBySearchCount()
    ),
    queryClient.prefetchQuery([QUERY_KEY.food.getRandomFood], () =>
      FoodRepositoryImpl.getRandomFood()
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
