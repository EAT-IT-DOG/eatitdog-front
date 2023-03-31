import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

const useSearchFood = () => {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const onSearchKeyword = (e: FormEvent) => {
    if (keyword === "") {
      return;
    }

    e.preventDefault();

    router.push(`/search/keyword/${keyword}`);

    setKeyword("");
  };

  return {
    keyword,
    onChangeKeyword,
    onSearchKeyword,
  };
};

export default useSearchFood;
