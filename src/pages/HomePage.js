import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCard from "../components/RestaurantCard";
import {
  fetchRestaurants,
  increasedNoOfRestaurants,
  decreasedNoOfRestaurants,
} from "../redux/Slices";
import { StyledList, StyledPage } from "../components/styles";

export default function HomePage() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurantsReducer.list);
  const noOfRestaurants = useSelector(
    (state) => state.noOfRestaurantsReducer.limit
  );

  useEffect(() => {
    dispatch(
      fetchRestaurants({
        limit: noOfRestaurants,
      })
    );
  }, [dispatch, noOfRestaurants]);

  return (
    <StyledPage aria-label="home page">
      <h1>restaurants</h1>
      <StyledList aria-label="list of restaurants">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} aria-label={restaurant.name}>
            <RestaurantCard data={restaurant} />
          </li>
        ))}
      </StyledList>
      <button
        type="button"
        onClick={() => dispatch(increasedNoOfRestaurants(noOfRestaurants))}
      >
        More
      </button>
      <button
        type="button"
        onClick={() => dispatch(decreasedNoOfRestaurants(noOfRestaurants))}
      >
        Less
      </button>
    </StyledPage>
  );
}
