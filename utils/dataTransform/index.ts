import { FoodSafeness } from "../../types/food/food.type";

export const safenessGuideTransform = (type: FoodSafeness) => {
  switch (type) {
    case "SAFE":
      return "섭취 가능합니다";

    case "NORMAL":
      return "섭취 가능합니다.";

    case "DANGEROUS":
      return "먹으면 위험합니다. 만약 반려견이 섭취하였다면 신속히 병원 의료진과 상담하시고, 대처하시기 바랍니다.";

    default:
      return "섭취 가능합니다.";
  }
};
