import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import RestaurantCard from "../components/RestaurantCard";
import { fetchRestaurants } from "../components/restaurantsSlice";

export default function HomePage() {
  const [displayedRestaurants, setDisplayedRestaurants] = useState({
    limit: 3,
  });
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurantsReducer.list);

  useEffect(() => {
    dispatch(fetchRestaurants(displayedRestaurants));
  }, [dispatch, displayedRestaurants]);
  console.log(displayedRestaurants);
  return (
    <section>
      <StyledList>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantCard data={restaurant} />
          </li>
        ))}
      </StyledList>
      <button type="button" onClick={setDisplayedRestaurants}>
        More
      </button>
    </section>
  );
}

const StyledList = styled.ul`
  list-style: none;
`;
