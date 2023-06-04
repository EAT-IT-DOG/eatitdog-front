import styled from "styled-components";
import { palette } from "styles/palette";
import Image from "next/image";

export const HomePanelContainer = styled.article`
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

export const HomePanelTitle = styled.h2`
  font-size: 30px;
  color: white;
  text-align: start;
  line-height: 43px;
`;

export const HomePanelSubTitle = styled.h3`
  font-size: 20px;
  color: white;
  text-align: start;
  line-height: 29px;
`;

export const HomePanelImage = styled(Image)`
  width: 141px;
  height: 161px;
  object-fit: scale-down;
`;
