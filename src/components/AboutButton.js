import { useSelector, useDispatch } from "react-redux";
import { handleShowMoreClick } from "../redux/Slices";

export default function AboutButton({ detail }) {
  const dispatch = useDispatch();
  const showMoreInfo = useSelector(
    (state) => state.showMoreInfoReducer.showMoreInfo
  );

  return (
    <button
      type="button"
      onClick={() => dispatch(handleShowMoreClick(detail.title))}
    >
      {showMoreInfo[detail.title] ? "Less" : "More"}
    </button>
  );
}
