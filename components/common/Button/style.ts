import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";
import { ButtonType } from "./types";

export const Container = styled.button<{ buttonType: ButtonType }>`
  width: 80px;
  height: 36px;
  font-size: 14px;
  border-radius: 80px;
  background: none;
  cursor: pointer;

  ${({ buttonType }) =>
    buttonType === "Submit"
      ? css`
          border: 1px solid ${palette.pinkMain};
          color: ${palette.pinkMain};

          &:hover {
            background-color: ${palette.pinkMain};
            color: white;
          }
        `
      : css`
          border: 1px solid ${palette.gray[200]};
          color: ${palette.gray[200]};

          &:hover {
            color: white;
            background-color: ${palette.gray[200]};
          }
        `}
`;
