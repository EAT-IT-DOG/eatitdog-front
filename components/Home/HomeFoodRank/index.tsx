import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import HomeFoodRankingList from "./HomeFoodRankingList";
import {
  HomeFoodRankContainer,
  HomeFoodRankItemWrap,
  HomeFoodRankTitle,
} from "./style";

const HomeFoodRank = () => {
  return (
    <HomeFoodRankContainer>
      <HomeFoodRankTitle>많이 검색된 음식 순위</HomeFoodRankTitle>
      <HomeFoodRankItemWrap>
        <ErrorBoundary fallback={<>에러발생</>}>
          <Suspense fallback={<>로딩중...</>}>
            <HomeFoodRankingList />
          </Suspense>
        </ErrorBoundary>
      </HomeFoodRankItemWrap>
    </HomeFoodRankContainer>
  );
};

export default HomeFoodRank;
