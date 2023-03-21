import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const NavBarContainer = styled.div`
  min-width: 210px;
  max-width: 210px;
  height: 100vh;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  padding: 95px 0px;
`;

export const NavBarTitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.contrast};
  font-weight: 700;
  cursor: pointer;
`;

export const NavBarSectionWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-top: 126px;
`;

export const NavBarSectionItemWrap = styled.div<{ selected: boolean }>`
  width: 100%;
  height: 20px;
  position: relative;

  ${({ selected }) =>
    selected
      ? css`
          border-right: 4px solid ${palette.pinkMain};
        `
      : css`
          border: 0px;
        `}
`;

export const NavBarSectionItem = styled.div<{ selected: boolean }>`
  width: 120px;
  height: 40px;
  position: absolute;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  column-gap: 12px;
  font-size: 14px;
  font-weight: 400;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  ${({ selected }) =>
    selected
      ? css`
          color: ${({ theme }) => theme.subBackgroundColor};
          background-color: ${palette.pinkMain};
        `
      : css`
          color: #bcbcbc;
          background: none;
        `}
`;

export const NavBarSectionItemIcon = styled.div<{ selected: boolean }>`
  width: 26px;
  height: 26px;
  font-size: 26px;
  margin-right: 12px;

  ${({ selected }) =>
    selected
      ? css`
          color: ${({ theme }) => theme.subBackgroundColor};
        `
      : css`
          color: ${palette.pinkMain};
        `}
`;

export const NavBarLogOutBtn = styled.button`
  width: 120px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  border: 0px;
  background: none;
  font-size: 14px;
  color: #bcbcbc;
  font-weight: 400;
  margin-top: auto;
`;

export const NavBarLogOutIcon = styled.div`
  width: 26px;
  height: 26px;
  font-size: 26px;
  color: ${palette.pinkMain};
`;
