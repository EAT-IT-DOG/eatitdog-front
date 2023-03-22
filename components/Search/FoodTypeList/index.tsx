import { useRouter } from "next/router";
import { SEARCH_FOOD_TYPES_ITEM } from "../../../constants/search/search.constant";
import * as S from "./style";

const FoodTypeList = () => {
  const router = useRouter();

  return (
    <S.Container>
      {SEARCH_FOOD_TYPES_ITEM.map((type) => (
        <S.FoodTypeItem
          onClick={() => router.push(`/search?type=${type.type}`)}
          safenessType={type.safeness}
          key={type.title}
        >
          {type.title}
        </S.FoodTypeItem>
      ))}
    </S.Container>
  );
};

export default FoodTypeList;
