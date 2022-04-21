import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCard from "../components/RestaurantCard";
import { StyledMain, StyledList } from "../components/styles";

import { fetchRestaurants } from "../redux/Slices";

export default function HomePage() {
  const dispatch = useDispatch();
  const { restaurantList, loading } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

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
      </StyledList>
    </StyledMain>
  );
}
