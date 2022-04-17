import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCard from "../components/RestaurantCard";
import {
  fetchRestaurants,
  increasedNoOfRestaurants,
  decreasedNoOfRestaurants,
} from "../redux/Slices";
import { StyledList, StyledHomePage } from "../components/styles";

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
    <StyledHomePage>
      <h1>restaurants</h1>
      <StyledList>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
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
    </StyledHomePage>
  );
}
