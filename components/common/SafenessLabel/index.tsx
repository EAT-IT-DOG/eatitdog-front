import { FoodSafenessKorean } from "../../../types/food/food.type";
import { SafenssLabelName } from "../../Search/FoodList/style";
import { Flex } from "../Flex";
import { SafenessLabelProps } from "./safenessLabel.type";
import * as S from "./style";

const SafenessLabel = ({ safenessType }: SafenessLabelProps) => {
  return (
    <Flex direction="column" gap={2} align={"center"}>
      <S.Label safenessType={safenessType} />
      <SafenssLabelName>{FoodSafenessKorean[safenessType]}</SafenssLabelName>
    </Flex>
  );
};

export default SafenessLabel;
