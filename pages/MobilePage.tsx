import Image from "next/image";
import styled from "styled-components";
import Person from "assets/images/mobile/person.svg";
import Button from "../components/common/Button";

interface Props {
  model: "IOS" | "ANDROID";
}

const MobilePage = ({ model }: Props) => {
  const redirect = () => {
    window.location.href =
      model === "ANDROID"
        ? "https://play.google.com/store/apps/details?id=com.stac.eatitdog"
        : "https://testflight.apple.com/join/L9jELimD";
  };

  return (
    <Container>
      <Wrap>
        <PersonImage
          width={243}
          height={231}
          src={Person}
          alt={"mobile page image"}
        />
        <Title>PC버전으로 접속해 주세요</Title>
        <Description>
          먹어보시개는 모바일 웹페이지를 지원하지 않아요 <br />
          PC환경에서 이용해 주세요!
        </Description>
        <Button
          customStyle={{ width: 148, height: 50, fontSize: 16 }}
          buttonType="Submit"
          onClick={redirect}
        >
          앱 설치하기
        </Button>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PersonImage = styled(Image)`
  width: 243px;
  height: 231px;
  object-fit: scale-down;
  margin-bottom: 40px;
  margin-left: 40px;
`;

const Title = styled.h1`
  font-size: 22px;
  line-height: 32px;
  color: black;
  font-weight: bold;
  margin-bottom: 18px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 23px;
  color: #bcbcbc;
  text-align: center;
  margin-bottom: 28px;
`;

export default MobilePage;
