import { useRouter } from "next/router";
import {
  HomeFoodRankItemContainer,
  HomeFoodRankItemName,
  HomeFoodRankItemRank,
} from "./style";

interface Props {
  rank: number;
  name: string;
}

const HomeFoodRankItem = ({ rank, name }: Props) => {
  const router = useRouter();

  return (
    <HomeFoodRankItemContainer>
      <HomeFoodRankItemRank>{rank}</HomeFoodRankItemRank>
      <HomeFoodRankItemName onClick={() => router.push(`/search/${name}`)}>
        {name}
      </HomeFoodRankItemName>
    </HomeFoodRankItemContainer>
  );
};

export default HomeFoodRankItem;
