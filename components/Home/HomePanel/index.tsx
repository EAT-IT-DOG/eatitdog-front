import HomePanelDogImage from "assets/images/home/homePanelDog.svg";
import {
  HomePanelContainer,
  HomePanelImage,
  HomePanelSubTitle,
  HomePanelTextWrap,
  HomePanelTitle,
} from "./style";

const HomePanel = () => {
  return (
    <HomePanelContainer>
      <HomePanelTextWrap>
        <HomePanelTitle>먹어보시개</HomePanelTitle>
        <HomePanelSubTitle>
          세상의 모든 좋은 음식이 반려견에게 닿을 때까지
        </HomePanelSubTitle>
      </HomePanelTextWrap>
      <HomePanelImage
        width={141}
        height={161}
        src={HomePanelDogImage.src}
        alt={"panel dog"}
      />
    </HomePanelContainer>
  );
};

export default HomePanel;
