import {
  useGetFoodNamesByType,
  useGetFoodsByKeyword,
} from "queries/food/food.query";
import FoodNotFound from "../FoodNotFound";
import * as S from "./style";
import { useRouter } from "next/router";
import SafenessLabel from "../../common/SafenessLabel";
import { Suspense } from "react";
import SearchFoodListFallbackLoader from "../../common/FallbackLoader/SearchFoodList";
import Link from "next/link";
import { getFoodTypeKorean } from "utils/dataTransform";
import { FoodType } from "types/food/food.type";

const FoodList = () => {
  const { query } = useRouter();

  return (
    <S.Container>
      <S.SafenessWrap>
        <SafenessLabel safenessType="SAFE" />
        <SafenessLabel safenessType="NORMAL" />
        <SafenessLabel safenessType="DANGEROUS" />
      </S.SafenessWrap>
      <Suspense fallback={<SearchFoodListFallbackLoader />}>
        {query.type && <FoodListByType />}
        {query.keyword && <FoodListByKeyword />}
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
            <Link href={`/search/${foodName.name}`} key={foodName.name}>
              <S.FoodItem safenessType={foodName.safeness}>
                <S.FoodItemTitle>{foodName.name}</S.FoodItemTitle>
                <S.FoodItemType>
                  #{getFoodTypeKorean(router.query.type as FoodType)}
                </S.FoodItemType>
              </S.FoodItem>
            </Link>
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
    { suspense: true }
  );

  return (
    <>
      {serverFoodsData?.length === 0 ? (
        <FoodNotFound />
      ) : (
        <S.ItemWrap>
          {serverFoodsData?.map((food) => (
            <Link href={`/search/${food.name}`} key={food.name}>
              <S.FoodItem safenessType={food.safeness}>
                <S.FoodItemTitle>{food.name}</S.FoodItemTitle>
                <S.FoodItemType>#{getFoodTypeKorean(food.type)}</S.FoodItemType>
              </S.FoodItem>
            </Link>
          ))}
        </S.ItemWrap>
      )}
    </>
  );
};

export default FoodList;
