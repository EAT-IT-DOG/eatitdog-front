import styled from "styled-components";
import { widthOverflowEllipsisLine } from "../../../../styles/libStyle";

export const HomeFoodRankItemContainer = styled.li`
  width: 140px;
  min-height: 20px;
  max-height: 20px;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const HomeFoodRankItemRank = styled.mark`
  min-width: 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.contrast};
`;

export const HomeFoodRankItemName = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};
  text-align: start;
  ${widthOverflowEllipsisLine}
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
