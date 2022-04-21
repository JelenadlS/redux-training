import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledMain } from "../components/styles";

import { fetchRestaurants } from "../redux/Slices";

export default function HomePage() {
  const dispatch = useDispatch();
  const { restaurantList, loading } = useSelector((state) => state.restaurants);
  console.log(restaurantList);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <StyledMain>
      <h1>Home</h1>
      <ul>
        {loading ? (
          <p>loading ...</p>
        ) : (
          restaurantList.map((restaurant) => {
            return <li key={restaurant.id}>{restaurant.name}</li>;
          })
        )}
      </ul>
    </StyledMain>
  );
}
