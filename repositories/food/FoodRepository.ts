import { Food, FoodName } from "../../types/food/food.type";

export interface FoodRepository {
  getFoodNamesBySearchCount(): Promise<FoodName[]>;

  getRandomFood(): Promise<Food>;
}
