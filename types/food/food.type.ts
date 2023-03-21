export type FoodType =
  | "DRINK"
  | "FRUIT"
  | "JUNK_FOOD"
  | "MEAT"
  | "MILK_PRODUCT"
  | "SEAFOOD"
  | "SEASONING"
  | "SNACK"
  | "VEGETABLE";

export const FoodTypeKorean: Record<string, string> = {
  DRINK: "음료",
  FRUIT: "과일",
  JUNK_FOOD: "인스턴트",
  MEAT: "육류",
  MILK_PRODUCT: "유제품",
  SEAFOOD: "해산물",
  SEASONING: "조미료",
  SNACK: "간식",
  VEGETABLE: "채소",
} as const;

export const FoodSafenessKorean: Record<string, string> = {
  SAFE: "안전",
  NORMAL: "양호",
  DANGEROUS: "위험",
};

export type FoodSafeness = "SAFE" | "NORMAL" | "DANGEROUS";

export interface Food {
  benefit: string | null;
  caution: string | null;
  readonly createdDateTime: string;
  eatingMethod: string | null;
  readonly id: number;
  modifiedDateTime: string;
  name: string;
  safeness: FoodSafeness;
  symptom: string | null;
  type: FoodType;
}

export interface FoodName {
  name: string;
  safeness: FoodSafeness;
}
