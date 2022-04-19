import { StyledMain, StyledList } from "../components/styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchRestaurants,
  loadMoreRestaurants,
  loadLessRestaurants,
} from "../redux/Slices";
import RestaurantCard from "../components/RestaurantCard";

export default function HomePage() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurantsReducer.list);
  const noOfRestaurants = useSelector(
    (state) => state.noOfRestaurantsReducer.limit
  );

  useEffect(() => {
    dispatch(fetchRestaurants({ limit: noOfRestaurants }));
  }, [dispatch, noOfRestaurants]);

  return (
    <StyledMain aria-label="home page">
      <h1>Home page</h1>
      <StyledList aria-label="list of restaurants">
        {restaurants.map((restaurant) => {
          return (
            <li key={restaurant.id} aria-label="further details">
              <RestaurantCard data={restaurant} />
            </li>
          );
        })}
      </StyledList>
      <button
        type="button"
        aria-label="load more restaurants"
        onClick={() => dispatch(loadMoreRestaurants(noOfRestaurants))}
      >
        More
      </button>
      <button
        type="button"
        aria-label="load less restaurants"
        onClick={() => dispatch(loadLessRestaurants(noOfRestaurants))}
      >
        Less
      </button>
    </StyledMain>
  );
}
