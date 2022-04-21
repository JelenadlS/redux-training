import { loadMoreRestaurants, loadLessRestaurants } from "../redux/Slices";
import { useSelector, useDispatch } from "react-redux";

export default function LoadButtons() {
  const dispatch = useDispatch();
  const noOfRestaurants = useSelector(
    (state) => state.noOfRestaurantsReducer.limit
  );
  return (
    <>
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
    </>
  );
}
