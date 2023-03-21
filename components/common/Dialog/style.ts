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
  padding: 0px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  border-radius: 15px;
  z-index: 9;
  height: 60px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 14px;

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
