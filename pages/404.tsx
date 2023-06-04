import styled from "styled-components";
import NotFoundIcon from "assets/icons/notFoundIcon.svg";
import Image from "next/image";

const Custom404 = () => {
  return (
    <Container>
      <Icon
        width={60}
        height={60}
        src={NotFoundIcon.src}
        alt={"notFoundIcon"}
      />
      <Text>404, 페이지를 찾을 수 없습니다!</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

const Icon = styled(Image)`
  width: 60px;
  height: 60px;
  object-fit: scale-down;
  margin-top: 300px;
`;

const Text = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.contrast};
`;

export default Custom404;
