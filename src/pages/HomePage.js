import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import RestaurantCard from "../components/RestaurantCard";
import { fetchRestaurants } from "../components/restaurantsSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.list);

  useEffect(() => {
    dispatch(fetchRestaurants({ limit: 3 }));
  }, [dispatch]);

  return (
    <section>
      restaurants..
      <StyledList>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantCard data={restaurant} />
          </li>
        ))}
      </StyledList>
    </section>
  );
}

const StyledList = styled.ul`
  list-style: none;
`;
