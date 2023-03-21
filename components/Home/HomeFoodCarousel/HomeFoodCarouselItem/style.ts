import Image from "next/image";
import styled from "styled-components";

export const HomeFoodCarouselItemContainer = styled.div<{
  backgroundColor: string;
}>`
  width: 250px;
  height: 100px;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 24px;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ backgroundColor }) => backgroundColor};

  &:hover {
    background: none;
  }
`;

export const HomeFoodCarouselItemIconWrap = styled.div<{
  backgroundColor: string;
}>`
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  filter: brightness(90%);
`;

export const HomeFoodCarouselItemIcon = styled(Image)`
  width: 24px;
  height: 24px;
  object-fit: scale-down;
`;

export const HomeFoodCarouselItemTextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
  color: white;

  ${HomeFoodCarouselItemContainer}:hover & {
    color: ${({ theme }) => theme.contrast};
  }
`;

export const HomeFoodCarouselItemTitle = styled.h1`
  font-size: 14px;
  line-height: 20px;
`;

export const HomeFoodCarouselItemDescription = styled.span`
  font-size: 14px;
  line-height: 17px;
`;
