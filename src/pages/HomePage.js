import { StyledMain, StyledList } from "../components/styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRestaurants } from "../redux/Slices";
import RestaurantCard from "../components/RestaurantCard";

export default function HomePage() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurantsReducer.list);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

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
    </StyledMain>
  );
}
