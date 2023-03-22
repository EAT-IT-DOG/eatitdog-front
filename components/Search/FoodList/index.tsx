import { useGetFoodNamesByType } from "../../../queries/food/food.query";
import { FoodTypeKorean } from "../../../types/food/food.type";
import FoodNotFound from "../FoodNotFound";
import * as S from "./style";
import { useRouter } from "next/router";
import SafenessLabel from "../../common/SafenessLabel";

const FoodList = () => {
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
    <S.Container>
      <S.SafenessWrap>
        <SafenessLabel safenessType="SAFE" />
        <SafenessLabel safenessType="NORMAL" />
        <SafenessLabel safenessType="DANGEROUS" />
      </S.SafenessWrap>
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
    </S.Container>
  );
};
export default FoodList;
