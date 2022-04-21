import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledMain } from "../components/styles";

import { fetchRestaurants } from "../redux/Slices";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <StyledMain>
      <h1>Home</h1>
    </StyledMain>
  );
}
