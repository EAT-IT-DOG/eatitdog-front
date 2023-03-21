import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const SearchBarContainer = styled.form`
  width: 470px;
  height: 50px;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  border-radius: 15px;
  color: #bcbcbc;
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0px;
  padding: 0px 30px;
  outline: none;
  color: ${({ theme }) => theme.contrast};

  &::-webkit-input-placeholder {
    color: #bcbcbc;
    font-size: 14px;
  }
`;

export const SearchBarSubmitButton = styled.button`
  min-width: 40px;
  height: 40px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  background-color: ${palette.pinkMain};
`;

export const SearchBarSubmitButtonIcon = styled.div`
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
