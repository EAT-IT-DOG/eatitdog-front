import * as S from "./style";
import Dog from "assets/images/dog.svg";

const FoodNotFound = () => {
  return (
    <>
      <S.Container>
        <S.DogIcon width={120} src={Dog} alt="dog" />
        <S.Text>검색하신 음식이 없습니다...</S.Text>
      </S.Container>
      {/* <Button
        customStyle={{ width: 160, height: 50, borderRadius: 8, fontSize: 18 }}
        buttonType="Submit"
      >
        제안하러 가기
      </Button> */}
    </>
  );
};

export default FoodNotFound;
