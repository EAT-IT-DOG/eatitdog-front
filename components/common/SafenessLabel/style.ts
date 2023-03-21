import styled from "styled-components";
import { FoodSafenessColor } from "../../../constants/search/search.constant";
import { FoodSafeness } from "../../../types/food/food.type";

export const Label = styled.div<{
  safenessType: FoodSafeness;
}>`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: ${({ safenessType }) => FoodSafenessColor[safenessType]};
`;

export const LabelName = styled.span`
  color: #bcbcbc;
  font-size: 8px;
  font-weight: 300;
`;
