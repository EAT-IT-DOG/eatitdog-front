import styled from "styled-components";
import { skeletonAnimtaion } from "../../../../styles/libStyle";
import React from "react";

const SearchFoodDetailFallbackLoader = () => {
  return (
    <Container>
      <Title />
      <div>
        <SubTitle width={100} />
        <Content width={110} />
      </div>
      <div>
        <SubTitle width={60} />
        <Content width={150} />
      </div>
      <div>
        <SubTitle width={70} />
        <Content width={400} />
      </div>
      <div>
        <SubTitle width={100} />
        <Content width={600} />
        <Content width={700} />
      </div>
      <div>
        <SubTitle width={100} />
        <Content width={150} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  row-gap: 40px;
`;

const Title = styled.div`
  width: 120px;
  height: 22px;
  ${skeletonAnimtaion}
  border-radius: 5px;
`;

const SubTitle = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 18px;
  ${skeletonAnimtaion}
  border-radius: 5px;
  margin-bottom: 22px;
`;

const Content = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 16px;
  border-radius: 5px;
  ${skeletonAnimtaion}
  margin-bottom: 5px;
`;

export default SearchFoodDetailFallbackLoader;
