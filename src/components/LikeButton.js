import { useSelector, useDispatch } from "react-redux";
import { StyledButton, StyledLike } from "./styles";
import { handleLikeClick } from "../redux/Slices";

export default function LikeButton({ id }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoritesReducer.data);

  return (
    <>
      <StyledButton
        type="button"
        aria-label={favorites[id] ? "favorite" : "no favorite"}
        onClick={() => dispatch(handleLikeClick(id))}
      >
        <StyledLike
          with="35px"
          height="35px"
          icon="akar-icons:heart"
          color={favorites[id]}
        />
      </StyledButton>
    </>
  );
}
