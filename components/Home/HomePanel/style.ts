import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const HomePanelContainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 0px 160px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.pinkMain};
`;

export const HomePanelTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePanelTitle = styled.h1`
  font-size: 30px;
  color: white;
  text-align: start;
  line-height: 43px;
`;

export const HomePanelSubTitle = styled.p`
  font-size: 20px;
  color: white;
  text-align: start;
  line-height: 29px;
`;

export const HomePanelImage = styled.img`
  width: 141px;
  object-fit: scale-down;
`;
