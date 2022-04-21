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
  const noOfRestaurants = useSelector(
    (state) => state.noOfRestaurantsReducer.limit
  );
  const { list, loading } = useSelector((state) => state.restaurantsReducer);

  useEffect(() => {
    dispatch(fetchRestaurants({ limit: noOfRestaurants }));
  }, [dispatch, noOfRestaurants]);

  //if (loading) return <p>Loading...</p>
  console.log(list);
  return (
    <StyledMain aria-label="home page">
      <h1>Home page</h1>
      <StyledList aria-label="list of restaurants">
        {loading ? (
          <p>loading...</p>
        ) : (
          list.map((restaurant) => {
            console.log(restaurant);
            return (
              <li key={restaurant.id} aria-label="further details">
                <RestaurantCard data={restaurant} />
              </li>
            );
          })
        )}
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
