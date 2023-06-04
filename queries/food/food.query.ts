import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Food, FoodName } from "types/food/food.type";
import { AxiosError } from "axios";
import FoodRepositoryImpl from "repositories/food/FoodRepositoryImpl";
import { QUERY_KEY } from "../queryKey";
import {
  getFoodByNameParam,
  getFoodNamesByTypeParam,
  getFoodsByKeywordParam,
} from "../../repositories/food/FoodRepository";

export const useGetFoodNamesByType = (
  { type }: getFoodNamesByTypeParam,
  options?: UseQueryOptions<
    FoodName[],
    AxiosError,
    FoodName[],
    [string, string]
  >
) =>
  useQuery(
    QUERY_KEY.food.getFoodNamesByType(type),
    () => FoodRepositoryImpl.getFoodNamesByType({ type }),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 0,
      enabled: !!type,
      ...options,
    }
  );

export const useGetFoodByName = (
  { name }: getFoodByNameParam,
  options?: UseQueryOptions<Food, AxiosError, Food, [string, string]>
) =>
  useQuery(
    QUERY_KEY.food.getFoodByName(name),
    () => FoodRepositoryImpl.getFoodByName({ name }),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 0,
      enabled: !!name,
      ...options,
    }
  );

export const useGetFoodNamesBySearch = (
  options?: UseQueryOptions<FoodName[], AxiosError, FoodName[], [string]>
) =>
  useQuery(
    [QUERY_KEY.food.getFoodNamesBySearchCount],
    () => FoodRepositoryImpl.getFoodNamesBySearchCount(),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 0,
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

export const useGetFoodsByKeyword = (
  { keyword }: getFoodsByKeywordParam,
  options?: UseQueryOptions<Food[], AxiosError, Food[], [string, string]>
) =>
  useQuery(
    QUERY_KEY.food.getFoodsByKeyword(keyword),
    () => FoodRepositoryImpl.getFoodsByKeyword({ keyword }),
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 0,
      enabled: !!keyword,
      ...options,
    }
  );
