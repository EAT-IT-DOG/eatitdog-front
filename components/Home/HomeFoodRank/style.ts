import styled from "styled-components";

export const HomeFoodRankContainer = styled.div`
  width: 580px;
  height: 358px;
  padding: 40px;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const HomeFoodRankTitle = styled.h1`
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.contrast};
  margin-bottom: 40px;
`;

export const HomeFoodRankItemWrap = styled.div`
  width: 100%;
  max-height: 210px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 18px;
  column-gap: auto;
`;
