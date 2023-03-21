import { useGetFoodNamesBySearch } from "../../../../queries/food/food.query";
import HomeFoodRankItem from "../HomeFoodRankItem";

const HomeFoodRankingList = () => {
  const { data: serverFoodNamesData } = useGetFoodNamesBySearch({
    suspense: true,
  });

  return (
    <>
      {serverFoodNamesData?.map(({ name }, idx) => (
        <HomeFoodRankItem rank={idx + 1} name={name} />
      ))}
    </>
  );
};

export default HomeFoodRankingList;
