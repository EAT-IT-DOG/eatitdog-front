import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
`;

export const DogIcon = styled(Image)`
  width: 120px;
  object-fit: scale-down;
  margin-left: 40px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.contrast};
`;
