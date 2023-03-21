import DrinkIcon from "../../assets/icons/food/drinkIcon.svg";
import FruitIcon from "../../assets/icons/food/fruitIcon.svg";
import JunkFoodIcon from "../../assets/icons/food/junkFoodIcon.svg";
import MeatIcon from "../../assets/icons/food/meatIcon.svg";
import MilkProductIcon from "../../assets/icons/food/milkProductIcon.svg";
import SeaFoodIcon from "../../assets/icons/food/seaFoodIcon.svg";
import SeasoningIcon from "../../assets/icons/food/seasoningIcon.svg";
import SnackIcon from "../../assets/icons/food/snackIcon.svg";
import VegetableIcon from "../../assets/icons/food/vegetableIcon.svg";

export const HOME_FOOD_TYPES_ITEM = [
  {
    type: "DRINK",
    icon: DrinkIcon,
    safeness: "SAFE",
    description: "물, 이온음료",
  },
  {
    type: "JUNK_FOOD",
    icon: JunkFoodIcon,
    safeness: "NORMAL",
    description: "햄버거, 치킨",
  },
  {
    type: "FRUIT",
    icon: FruitIcon,
    safeness: "DANGEROUS",
    description: "바나나, 귤",
  },
  {
    type: "MILK_PRODUCT",
    icon: MilkProductIcon,
    safeness: "SAFE",
    description: "우유, 치즈",
  },
  {
    type: "SEASONING",
    icon: SeasoningIcon,
    safeness: "NORMAL",
    description: "미역, 굴",
  },
  {
    type: "MEAT",
    icon: MeatIcon,
    safeness: "DANGEROUS",
    description: "소고기, 돼지고기",
  },
  {
    type: "VEGETABLE",
    icon: VegetableIcon,
    safeness: "SAFE",
    description: "고구마, 단호박",
  },
  {
    type: "SNACK",
    icon: SnackIcon,
    safeness: "NORMAL",
    description: "사탕, 초콜릿",
  },
  {
    type: "SEAFOOD",
    icon: SeaFoodIcon,
    safeness: "DANGEROUS",
    description: "바나나, 귤",
  },
];
