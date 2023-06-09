import styled, { css } from "styled-components";
import { InputWrapperDirection } from "./types";

export const Container = styled.div<{
  direction: InputWrapperDirection;
}>`
  ${({ direction }) =>
    direction === "column"
      ? css`
          display: flex;
          flex-direction: column;
        `
      : css`
          display: flex;
          align-items: center;
        `}
`;

export const Label = styled.label<{
  direction: InputWrapperDirection;
}>`
  color: ${({ theme }) => theme.contrast};
  font-size: 16px;

  ${({ direction }) =>
    direction === "column"
      ? css`
          margin-bottom: 24px;
        `
      : css`
          margin-right: 18px;
        `}
`;
