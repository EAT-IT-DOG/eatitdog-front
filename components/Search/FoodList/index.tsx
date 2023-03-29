import {
  useGetFoodNamesByType,
  useGetFoodsByKeyword,
} from "../../../queries/food/food.query";
import { FoodTypeKorean } from "../../../types/food/food.type";
import FoodNotFound from "../FoodNotFound";
import * as S from "./style";
import { useRouter } from "next/router";
import SafenessLabel from "../../common/SafenessLabel";
import { Suspense } from "react";
import SearchFoodListFallbackLoader from "../../common/FallbackLoader/SearchFoodList";

const FoodList = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.SafenessWrap>
        <SafenessLabel safenessType="SAFE" />
        <SafenessLabel safenessType="NORMAL" />
        <SafenessLabel safenessType="DANGEROUS" />
      </S.SafenessWrap>
      <Suspense fallback={<SearchFoodListFallbackLoader />}>
        {router.query.type && <FoodListByType />}
      </Suspense>
      <Suspense fallback={<SearchFoodListFallbackLoader />}>
        {router.query.keyword && <FoodListByKeyword />}
      </Suspense>
    </S.Container>
  );
};

const FoodListByType = () => {
  const router = useRouter();

  const { data: serverFoodNamesData } = useGetFoodNamesByType(
    {
      type: router.query.type as string,
    },
    {
      suspense: true,
    }
  );

  return (
    <>
      {serverFoodNamesData?.length === 0 ? (
        <FoodNotFound />
      ) : (
        <S.ItemWrap>
          {serverFoodNamesData?.map((foodName) => (
            <S.FoodItem
              safenessType={foodName.safeness}
              onClick={() => router.push(`/search/${foodName.name}`)}
              key={foodName.name}
            >
              <S.FoodItemTitle>{foodName.name}</S.FoodItemTitle>
              <S.FoodItemType>
                #{FoodTypeKorean[router.query.type as string]}
              </S.FoodItemType>
            </S.FoodItem>
          ))}
        </S.ItemWrap>
      )}
    </>
  );
};

const FoodListByKeyword = () => {
  const router = useRouter();

  const { data: serverFoodsData } = useGetFoodsByKeyword(
    { keyword: router.query.keyword as string },
    { enabled: !!router.query.keyword, suspense: true }
  );

  return (
    <>
      {serverFoodsData?.length === 0 ? (
        <FoodNotFound />
      ) : (
        <S.ItemWrap>
          {serverFoodsData?.map((food) => (
            <S.FoodItem
              safenessType={food.safeness}
              onClick={() => router.push(`/search/${food.name}`)}
              key={food.name}
            >
              <S.FoodItemTitle>{food.name}</S.FoodItemTitle>
              <S.FoodItemType>#{FoodTypeKorean[food.type]}</S.FoodItemType>
            </S.FoodItem>
          ))}
        </S.ItemWrap>
      )}
    </>
  );
};

export default FoodList;
