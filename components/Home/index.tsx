import HomeFoodCarousel from "./HomeFoodCarousel";
import HomeFoodRank from "./HomeFoodRank";
import HomeFoodRecommend from "./HomeFoodRecommend";
import HomePanel from "./HomePanel";
import { HomeBottomWrap, HomeContainer } from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <HomePanel />
      <HomeFoodCarousel />
      <HomeBottomWrap>
        <HomeFoodRank />
        <HomeFoodRecommend />
      </HomeBottomWrap>
    </HomeContainer>
  );
};

export default Home;
