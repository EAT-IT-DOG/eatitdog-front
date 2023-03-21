import { customAxios } from "../../libs/axios";
import { FoodName, Food } from "../../types/food/food.type";
import { FoodRepository } from "./FoodRepository";

class FoodRepositoryImpl implements FoodRepository {
  public async getFoodNamesBySearchCount(): Promise<FoodName[]> {
    const { data } = await customAxios.get("/food/ranking");
    return data;
  }

  public async getRandomFood(): Promise<Food> {
    const { data } = await customAxios.get("/food/random");
    return data;
  }
}

export default new FoodRepositoryImpl();
