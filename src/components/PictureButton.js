import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";

import Pictures from "./Pictures";
import { StyledButton } from "./styles";
import { nextPicture, prevPicture } from "../redux/Slices";

export default function PictureButton({ next }) {
  const dispatch = useDispatch();
  const currentPicture = useSelector(
    (state) => state.currentPictureReducer.start
  );
  const arrayLength = Pictures.length;

  return (
    <StyledButton
      aria-label={`${next ? "next picture" : "previous picture"}`}
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
