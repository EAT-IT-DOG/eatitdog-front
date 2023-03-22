import { Food, FoodName, FoodType } from "../../types/food/food.type";

export interface FoodRepository {
  getFoodNamesByType({ type }: getFoodNamesByTypeParam): Promise<FoodName[]>;

  getFoodByName({ name }: getFoodByNameParam): Promise<Food>;

  getFoodNamesBySearchCount(): Promise<FoodName[]>;

  getRandomFood(): Promise<Food>;
}

export interface getFoodNamesByTypeParam {
  type: FoodType | string;
}

export interface getFoodByNameParam {
  name: string;
}
