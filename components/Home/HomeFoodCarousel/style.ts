import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const HomeFoodCarouselContainer = styled.section`
  margin-top: 50px;
  height: 144px;
  z-index: 1;
  position: relative;
`;

export const HoomFoodCarouelWrap = styled.div`
  width: 1400px;
  height: 144px;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -0%);

  .slick-initialized {
    width: 100%;
    height: 100%;
    max-width: 1400px;
    overflow: hidden;
  }

  .slick-slide {
    width: 250px !important;
  }

  .slick-track {
    display: flex;
    column-gap: 40px;
    max-width: 1400px;
  }

  .slick-dots {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;

    .slick-active {
      background-color: ${palette.gray[400]};
    }

    li {
      list-style: none;
      width: 13px;
      height: 13px;
      border-radius: 100%;
      border: 0px;
      background-color: #dbdbdb;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: ${palette.gray[400]};
      }

      button {
        width: 100%;
        height: 100%;
        background: transparent;
        color: transparent;
        border: 0px;
        border-radius: 100%;
        cursor: pointer;
      }
    }
  }

  .slick-active {
    text-decoration: none;
  }
`;
