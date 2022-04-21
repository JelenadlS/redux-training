import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import LoadButton from "../components/LoadButton";
import RestaurantCard from "../components/RestaurantCard";
import { StyledList, StyledMain } from "../components/styles";

import { fetchRestaurants } from "../redux/Slices";

export default function HomePage() {
  const dispatch = useDispatch();
  const { restaurantList, loading } = useSelector(
    useCallback((state) => state.restaurantsReducer, [])
  );
  const noOfRestaurants = useSelector(
    useCallback((state) => state.loadMoreRestaurantsReducer.startValue, [])
  );
  console.log(restaurantList);
  useEffect(() => {
    dispatch(fetchRestaurants({ startValue: noOfRestaurants }));
  }, [dispatch, noOfRestaurants]);

  return (
    <StyledMain aria-label="home page">
      <h1>Home</h1>
      <StyledList aria-label="list of restaurants">
        {loading ? (
          <p>loading...</p>
        ) : (
          restaurantList.map((restaurant) => {
            return (
              <li
                key={restaurant.id}
                aria-label={`information about ${restaurant.name}`}
              >
                <RestaurantCard restaurantDetails={restaurant} />
              </li>
            );
          })
        )}
        <LoadButton />
      </StyledList>
    </StyledMain>
  );
}
