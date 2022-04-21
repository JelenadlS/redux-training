import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  handleLoadMoreRestaurants,
  handleLoadLessRestaurants,
} from "../redux/Slices";

export default function LoadButton() {
  const dispatch = useDispatch();

  const noOfRestaurants = useSelector(
    useCallback((state) => state.loadMoreRestaurantsReducer.startValue, [])
  );
  return (
    <>
      <button
        onClick={() => dispatch(handleLoadMoreRestaurants(noOfRestaurants))}
      >
        More
      </button>
      <button
        onClick={() => dispatch(handleLoadLessRestaurants(noOfRestaurants))}
      >
        Less
      </button>
    </>
  );
}
