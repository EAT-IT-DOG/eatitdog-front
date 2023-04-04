import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FoodDetail from "./FoodDetail";
import FoodNotFound from "./FoodNotFound";
import FoodTypeList from "./FoodTypeList";
import SearchFoodDetailFallbackLoader from "../common/FallbackLoader/SearchFoodDetailFallbackLoader";
import { useRouter } from "next/router";
import FoodList from "./FoodList";

const Search = () => {
  const { query } = useRouter();

  return (
    <>
      <FoodTypeList />
      <>
        {(query.type || query.keyword) && <FoodList />}
        {query.name && (
          <ErrorBoundary
            key={query.name as string}
            FallbackComponent={FoodNotFound}
          >
            <Suspense fallback={<SearchFoodDetailFallbackLoader />}>
              <FoodDetail />
            </Suspense>
          </ErrorBoundary>
        )}
      </>
    </>
  );
};

export default Search;
