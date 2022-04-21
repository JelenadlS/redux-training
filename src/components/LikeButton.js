import { useDispatch, useSelector } from "react-redux";

import { StyledButton, StyledLike } from "./styles";
import { handleLikeClick } from "../redux/Slices";

export default function LikeButton({ id }) {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state) => state.favoritesReducer.statusListOfLikes[id]
  );

  return (
    <p>
      <StyledButton
        aria-label={`click to ${favorites ? "unlike" : "like"} `}
        type="button"
        onClick={() => dispatch(handleLikeClick(id))}
      >
        <StyledLike
          color={favorites}
          width="35px"
          height="35px"
          icon="akar-icons:heart"
        />
      </StyledButton>
    </p>
  );
}
