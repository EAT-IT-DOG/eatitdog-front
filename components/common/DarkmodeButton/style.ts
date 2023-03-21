import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const DarkmodeButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  background-color: ${palette.pinkMain};
  cursor: pointer;
`;

export const DarkmodeButtonIcon = styled.div`
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
