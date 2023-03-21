import styled from "styled-components";
import { palette } from "../../../style/palette";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: 8;
`;

export const Container = styled.div`
  width: 568px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 15px;
  z-index: 9;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.contrast};
  line-height: 26px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  column-gap: 16px;

  button {
    width: 80px;
    height: 36px;
    font-size: 14px;
    border-radius: 8px;
    background: none;
  }

  .submit {
    border: 1px solid ${palette.pinkMain};
    color: ${palette.pinkMain};

    &:hover {
      background-color: ${palette.pinkMain};
      color: white;
    }
  }

  .cancel {
    border: 1px solid ${palette.gray[200]};
    color: ${palette.gray[200]};

    &:hover {
      background-color: ${palette.gray[200]};
      color: white;
    }
  }
`;
