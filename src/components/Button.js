import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";

import Pictures from "../components/Pictures";
import { StyledButton } from "../components/styles";
import { nextPicture, prevPicture } from "../redux/Slices";

export default function Button({ next }) {
  const dispatch = useDispatch();
  const currentPicture = useSelector(
    (state) => state.currentPictureReducer.start
  );
  const arrayLength = Pictures.length;

  return (
    <StyledButton
      type="button"
      onClick={() =>
        dispatch(
          next ? nextPicture(currentPicture) : prevPicture(currentPicture)
        )
      }
      disabled={currentPicture === (next ? arrayLength - 1 : arrayLength - 9)}
    >
      <Icon
        width="35"
        heigth="35"
        icon={`${
          next
            ? "ant-design:arrow-right-outlined"
            : "ant-design:arrow-left-outlined"
        }`}
      />
    </StyledButton>
  );
}
