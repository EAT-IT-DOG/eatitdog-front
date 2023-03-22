import styled from "styled-components";
import { FoodSafenessColor } from "../../../constants/search/search.constant";
import { FoodSafeness } from "../../../types/food/food.type";

export const Container = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  column-gap: 18px;
`;

export const FoodTypeItem = styled.div<{
  safenessType: FoodSafeness;
}>`
  width: 90px;
  height: 34px;
  border-radius: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ safenessType }) => FoodSafenessColor[safenessType]};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.subBackgroundColor};
    border: 1px solid ${({ safenessType }) => FoodSafenessColor[safenessType]};
    color: ${({ safenessType }) => FoodSafenessColor[safenessType]};
  }
`;
