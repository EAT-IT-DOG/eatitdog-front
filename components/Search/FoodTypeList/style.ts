import styled from "styled-components";
import { FoodSafeness } from "types/food/food.type";
import { getFoodSafenessColor } from "utils/dataTransform";

export const Container = styled.section`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  column-gap: 18px;
`;

export const FoodTypeItem = styled.li<{
  safenessType: FoodSafeness;
}>`
  width: 90px;
  height: 34px;
  border-radius: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ safenessType }) => getFoodSafenessColor(safenessType)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.subBackgroundColor};
    border: 1px solid
      ${({ safenessType }) => getFoodSafenessColor(safenessType)};
    color: ${({ safenessType }) => getFoodSafenessColor(safenessType)};
  }
`;
