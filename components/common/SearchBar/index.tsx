import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarSubmitButton,
  SearchBarSubmitButtonIcon,
} from "./style";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import useSearchFood from "hooks/food/useSearchFood";

const SearchBar = () => {
  const { keyword, onChangeKeyword, onSearchKeyword } = useSearchFood();

  return (
    <SearchBarContainer onSubmit={onSearchKeyword}>
      <SearchBarInput
        placeholder="음식 이름을 입력하세요"
        value={keyword}
        onChange={onChangeKeyword}
        data-testid="searchBar-input-test-id"
      />
      <SearchBarSubmitButton
        type="submit"
        aria-label="search"
        data-testid="searchBar-button-test-id"
      >
        <SearchBarSubmitButtonIcon>
          <BiSearch />
        </SearchBarSubmitButtonIcon>
      </SearchBarSubmitButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
