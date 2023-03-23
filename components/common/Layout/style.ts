import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const HeaderWrap = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const ConentWrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
`;
