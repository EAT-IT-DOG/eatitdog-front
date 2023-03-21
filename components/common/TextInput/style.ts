import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  background: none;
  padding: 0px 18px;

  &::placeholder {
    color: #bcbcbc;
    font-size: 14px;
  }
`;
