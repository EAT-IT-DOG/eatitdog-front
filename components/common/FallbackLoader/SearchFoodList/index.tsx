import styled from "styled-components";
import { skeletonAnimtaion } from "../../../../style/libStyle";

const SearchFoodListFallbackLoader = () => {
  return (
    <Container>
      {Array.from({ length: 8 }).map((_, idx) => (
        <Item key={idx} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 28px;
  overflow-y: scroll;
  row-gap: 34px;
  column-gap: 40px;
  margin-top: 40px;
`;

const Item = styled.div`
  width: 161px;
  height: 82px;
  border-radius: 15px;

  ${skeletonAnimtaion}
`;

export default SearchFoodListFallbackLoader;
