import { FoodSafeness, FoodType } from "types/food/food.type";
import { match } from "ts-pattern";

export const getSafenessExplain = (safeness: FoodSafeness): string => {
  return match<FoodSafeness, string>(safeness)
    .with("SAFE", () => "섭취 가능합니다")
    .with("NORMAL", () => "섭취 가능합니다.")
    .with(
      "DANGEROUS",
      () =>
        "먹으면 위험합니다. 만약 반려견이 섭취하였다면 신속히 병원 의료진과 상담하시고, 대처하시기 바랍니다."
    )
    .exhaustive();
};

export const getFoodSafenessColor = (safeness: FoodSafeness): string => {
  return match<FoodSafeness, string>(safeness)
    .with("SAFE", () => "#435c53")
    .with("NORMAL", () => "#eccd8c")
    .with("DANGEROUS", () => "#edbacc")
    .exhaustive();
};

export const getFoodTypeKorean = (foodType: FoodType): string => {
  return match<FoodType, string>(foodType)
    .with("DRINK", () => "음료")
    .with("JUNK_FOOD", () => "인스턴트")
    .with("FRUIT", () => "과일")
    .with("MEAT", () => "육류")
    .with("MILK_PRODUCT", () => "유재품")
    .with("SEAFOOD", () => "해산물")
    .with("SEASONING", () => "조미료")
    .with("SNACK", () => "간식")
    .with("VEGETABLE", () => "채소")
    .exhaustive();
};
