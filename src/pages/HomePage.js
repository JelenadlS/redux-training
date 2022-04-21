import { StyledMain, StyledList } from "../components/styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRestaurants } from "../redux/Slices";
import RestaurantCard from "../components/RestaurantCard";
import LoadButtons from "../components/LoadButtons";

export default function HomePage() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.restaurantsReducer);
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
        {loading ? (
          <p>loading...</p>
        ) : (
          list.map((restaurant) => {
            return (
              <li key={restaurant.id} aria-label="further details">
                <RestaurantCard data={restaurant} />
              </li>
            );
          })
        )}
      </StyledList>
      <LoadButtons />
    </StyledMain>
  );
}
