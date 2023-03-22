import { useRouter } from "next/router";
import { useGetFoodByName } from "../../../queries/food/food.query";
import { safenessGuideTransform } from "../../../utils/dataTransform";
import { Flex } from "../../common/Flex";
import SafenessLabel from "../../common/SafenessLabel";
import * as S from "./style";
import Button from "../../common/Button";
import { FoodSafenessColor } from "../../../constants/search/search.constant";

const FoodDetail = () => {
  const router = useRouter();

  const { data: serverFoodData } = useGetFoodByName(
    { name: (router.query.name as string) || "" },
    { suspense: true }
  );

  return (
    <S.Container safenessType={serverFoodData!.safeness}>
      <S.Wrap>
        <Flex justify="between" align="center">
          <S.FoodName>{serverFoodData?.name}</S.FoodName>
          {serverFoodData && (
            <SafenessLabel safenessType={serverFoodData.safeness} />
          )}
        </Flex>
        <div>
          <S.SubTitle>섭취가능여부</S.SubTitle>
          {serverFoodData && (
            <S.Content>
              {safenessGuideTransform(serverFoodData.safeness)}
            </S.Content>
          )}
        </div>

        {serverFoodData?.eatingMethod && (
          <div>
            <S.SubTitle>급여 방법</S.SubTitle>
            <S.Content>{serverFoodData.eatingMethod}</S.Content>
          </div>
        )}

        {serverFoodData?.benefit && (
          <div>
            <S.SubTitle>주성분 및 기능</S.SubTitle>
            <S.Content>{serverFoodData.benefit}</S.Content>
          </div>
        )}

        {serverFoodData?.symptom && (
          <div>
            <S.SubTitle>증상</S.SubTitle>
            <S.Content>{serverFoodData.symptom}</S.Content>
          </div>
        )}

        {serverFoodData?.caution && (
          <div>
            <S.SubTitle>유의 사항</S.SubTitle>
            <S.Content>{serverFoodData.caution}</S.Content>
          </div>
        )}
      </S.Wrap>
    </S.Container>
  );
};

export default FoodDetail;
