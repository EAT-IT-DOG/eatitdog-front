import { FoodType } from "types/food/food.type";

export const QUERY_KEY = {
  food: {
    getFoodNamesByType: (type: FoodType | string): [string, string] => [
      "food/getFoodNamesByTypes",
      type,
    ],
    getFoodByName: (name: string): [string, string] => [
      "food/getFoodByName",
      name,
    ],
    getFoodsByKeyword: (keyword: string): [string, string] => [
      "food/getFoodsByKeyword",
      keyword,
    ],
    getFoodNamesBySearchCount: "food/getFoodNamesBySearchCount",
    getRandomFood: "food/getRandomFood",
  },
};
