import HomePanelDogImage from "../../../assets/images/home/homePanelDog.svg";
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
      <HomePanelImage src={HomePanelDogImage.src} />
    </HomePanelContainer>
  );
};

export default HomePanel;
