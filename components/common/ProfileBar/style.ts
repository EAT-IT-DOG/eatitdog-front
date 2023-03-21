import styled from "styled-components";

export const ProfileBarContainer = styled.div`
  min-width: 290px;
  max-width: 290px;
  height: 100vh;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  display: flex;
  flex-direction: column;
  z-index: 10;
`;
