import { useRouter } from "next/router";
import { FoodTypeKorean } from "../../../../types/food/food.type";
import {
  HomeFoodCarouselItemContainer,
  HomeFoodCarouselItemDescription,
  HomeFoodCarouselItemIcon,
  HomeFoodCarouselItemIconWrap,
  HomeFoodCarouselItemTextWrap,
  HomeFoodCarouselItemTitle,
} from "./style";

interface Props {
  backgroundColor: string;
  type: string;
  description: string;
  icon: string;
}

const HomeFoodCarouselItem = ({
  backgroundColor,
  type,
  description,
  icon,
}: Props) => {
  const router = useRouter();

  return (
    <HomeFoodCarouselItemContainer
      backgroundColor={backgroundColor}
      onClick={() => router.push(`/search?type=${type}`)}
    >
      <HomeFoodCarouselItemIconWrap backgroundColor={backgroundColor}>
        <HomeFoodCarouselItemIcon
          width={24}
          height={24}
          src={icon}
          alt={type}
        />
      </HomeFoodCarouselItemIconWrap>
      <HomeFoodCarouselItemTextWrap>
        <HomeFoodCarouselItemTitle>
          {FoodTypeKorean[type]}
        </HomeFoodCarouselItemTitle>
        <HomeFoodCarouselItemDescription>
          {description} 등
        </HomeFoodCarouselItemDescription>
      </HomeFoodCarouselItemTextWrap>
    </HomeFoodCarouselItemContainer>
  );
};

export default HomeFoodCarouselItem;
