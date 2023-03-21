import { useMemo } from "react";
import Slider from "react-slick";
import { HOME_FOOD_TYPES_ITEM } from "../../../constants/home/home.constant";
import { FoodSafenessColor } from "../../../constants/search/search.constant";
import { FoodSafeness } from "../../../types/food/food.type";
import HomeFoodCarouselItem from "./HomeFoodCarouselItem";
import { HomeFoodCarouselContainer, HoomFoodCarouelWrap } from "./style";

const HomeFoodCarousel = () => {
  const homeFoodCarouselSetting = useMemo(
    () => ({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      pauseOnHover: false,
      appendDots: (dots: any) => (
        <div
          style={{
            position: "relative",
            top: "30px",
          }}
        >
          {dots}
        </div>
      ),
    }),
    []
  );

  return (
    <HomeFoodCarouselContainer>
      <HoomFoodCarouelWrap>
        <Slider {...homeFoodCarouselSetting}>
          {HOME_FOOD_TYPES_ITEM.map((item) => (
            <HomeFoodCarouselItem
              backgroundColor={FoodSafenessColor[item.safeness as FoodSafeness]}
              type={item.type}
              description={item.description}
              icon={item.icon}
              key={item.type}
            />
          ))}
        </Slider>
      </HoomFoodCarouelWrap>
    </HomeFoodCarouselContainer>
  );
};

export default HomeFoodCarousel;
