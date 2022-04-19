import { StyledMain } from "../components/styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRestaurants } from "../redux/Slices";

export default function HomePage() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state);

  console.log(restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return <StyledMain>Home page</StyledMain>;
}
