import { Suspense } from "react";
import { useGetRandomFood } from "../../../queries/food/food.query";
import {
  HomeFoodRecommendContainer,
  HomeFoodRecommendFoodDescription,
  HomeFoodRecommendFoodIcon,
  HomeFoodRecommendFoodName,
  HomeFoodRecommendTitle,
} from "./style";
import CheeseIcon from "../../../assets/icons/cheeseIcon.svg";

const HomeFoodRecommend = () => {
  // const { data } = useGetRandomFood();

  return (
    <HomeFoodRecommendContainer>
      <Suspense fallback={<>로딩중..</>}>
        <HomeFoodRecommendForm />
      </Suspense>
    </HomeFoodRecommendContainer>
  );
};

const HomeFoodRecommendForm = () => {
  return (
    <>
      <HomeFoodRecommendTitle>먹어도 괜찮을까?</HomeFoodRecommendTitle>
      <HomeFoodRecommendFoodIcon src={CheeseIcon.src} />
      <HomeFoodRecommendFoodName>치즈</HomeFoodRecommendFoodName>
      <HomeFoodRecommendFoodDescription>
        염분과 유당 성분이 매우 적은 제품을 먹이거나 강아지 전용으로 출시된
        치즈를 구입해서 먹여야 합니다.
      </HomeFoodRecommendFoodDescription>
    </>
  );
};

export default HomeFoodRecommend;
