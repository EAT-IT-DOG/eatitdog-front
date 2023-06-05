import styled from "styled-components";
import { FoodSafeness } from "../../../types/food/food.type";
import { getFoodSafenessColor } from "utils/dataTransform";

export const Container = styled.article<{ safenessType: FoodSafeness }>`
  width: 100%;
  height: 728px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  margin-top: 40px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ safenessType }) => getFoodSafenessColor(safenessType)};
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  row-gap: 40px;
`;

export const FoodName = styled.h1`
  color: ${({ theme }) => theme.contrast};
  font-size: 22px;
  line-height: 32px;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 18psx;
  color: ${({ theme }) => theme.contrast};
`;

export const Content = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
  font-weight: 300;
  line-height: 20px;
`;
