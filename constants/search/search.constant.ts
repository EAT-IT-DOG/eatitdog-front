import { FoodSafeness, FoodType } from "../../types/food/food.type";

export const FoodSafenessColor: Record<FoodSafeness, string> = {
  SAFE: "#435c53",
  NORMAL: "#eccd8c",
  DANGEROUS: "#edbacc",
} as const;

export const SEARCH_FOOD_TYPES_ITEM: {
  title: string;
  type: FoodType;
  safeness: FoodSafeness;
}[] = [
  {
    title: "음료",
    type: "DRINK",
    safeness: "SAFE",
  },
  {
    title: "과일",
    type: "FRUIT",
    safeness: "NORMAL",
  },
  {
    title: "인스턴트",
    type: "JUNK_FOOD",
    safeness: "DANGEROUS",
  },
  {
    title: "육류",
    type: "MEAT",
    safeness: "SAFE",
  },
  {
    title: "유제품",
    type: "MILK_PRODUCT",
    safeness: "NORMAL",
  },
  {
    title: "해산물",
    type: "SEAFOOD",
    safeness: "DANGEROUS",
  },
  {
    title: "조미료",
    type: "SEASONING",
    safeness: "SAFE",
  },
  {
    title: "간식",
    type: "SNACK",
    safeness: "NORMAL",
  },
  {
    title: "채소",
    type: "VEGETABLE",
    safeness: "DANGEROUS",
  },
];
