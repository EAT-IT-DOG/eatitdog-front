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
