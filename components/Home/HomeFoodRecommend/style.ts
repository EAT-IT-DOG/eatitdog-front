import styled from "styled-components";

export const HomeFoodRecommendContainer = styled.div`
  width: 282px;
  height: 358px;
  border-radius: 15px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.subBackgroundColor};
`;

export const HomeFoodRecommendTitle = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
  text-align: start;
`;

export const HomeFoodRecommendFoodIcon = styled.img`
  width: 90px;
  height: 90px;
  object-fit: scale-down;
  margin: 0px auto;
  margin-top: 36px;
`;

export const HomeFoodRecommendFoodName = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.contrast};
  line-height: 26px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const HomeFoodRecommendFoodDescription = styled.p`
  width: 150px;
  text-align: center;
  color: ${({ theme }) => theme.contrast};
  margin: 0px auto;
  margin-top: 15px;
  font-size: 12px;
  line-height: 17px;
`;
