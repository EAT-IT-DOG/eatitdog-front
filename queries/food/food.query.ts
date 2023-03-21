import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Food, FoodName } from "../../types/food/food.type";
import { AxiosError } from "axios";
import FoodRepositoryImpl from "../../repositories/food/FoodRepositoryImpl";
import { QUERY_KEY } from "../queryKey";

export const useGetFoodNamesBySearch = (
  options?: UseQueryOptions<FoodName[], AxiosError, FoodName[], [string]>
) =>
  useQuery(
    [QUERY_KEY.food.getFoodNamesBySearchCount],
    () => FoodRepositoryImpl.getFoodNamesBySearchCount(),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60,
      ...options,
    }
  );

export const useGetRandomFood = (
  options?: UseQueryOptions<Food, AxiosError, Food, [string]>
) =>
  useQuery(
    [QUERY_KEY.food.getRandomFood],
    () => FoodRepositoryImpl.getRandomFood(),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60,
      ...options,
    }
  );
