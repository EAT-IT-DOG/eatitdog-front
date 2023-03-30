import styled from "styled-components";
import { skeletonAnimtaion } from "../../../../styles/libStyle";

const SearchFoodListFallbackLoader = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, idx) => (
        <Item key={idx} />
      ))}
    </>
  );
};

const Item = styled.div`
  width: 161px;
  height: 82px;
  border-radius: 15px;

  ${skeletonAnimtaion}
`;

export default SearchFoodListFallbackLoader;
