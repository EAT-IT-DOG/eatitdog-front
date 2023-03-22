import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import FoodDetail from "./FoodDetail";
import FoodList from "./FoodList";
import FoodNotFound from "./FoodNotFound";
import FoodTypeList from "./FoodTypeList";
import SearchFoodListFallbackLoader from "../common/FallbackLoader/SearchFoodList";
import SearchFoodDetailFallbackLoader from "../common/FallbackLoader/SearchFoodDetailFallbackLoader";
import { useRouter } from "next/router";

const Search = () => {
  const { query } = useRouter();

  return (
    <>
      <FoodTypeList />
      <>
        {query.type && (
          <ErrorBoundary
            key={query.type as string}
            FallbackComponent={FoodNotFound}
          >
            <Suspense fallback={<SearchFoodListFallbackLoader />}>
              <FoodList />
            </Suspense>
          </ErrorBoundary>
        )}
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
