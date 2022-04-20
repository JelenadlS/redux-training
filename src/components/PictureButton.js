import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";

import { StyledButton } from "./styles";
import { nextPicture, previousPicture } from "../redux/Slices";

export default function PictureButton({ next }) {
  const dispatch = useDispatch();
  const currentPicture = useSelector(
    (state) => state.currentPictureReducer.startingIndex
  );
  console.log(currentPicture);
  return (
    <StyledButton
      aria-label={`${next ? "next picture" : "previous picture"}`}
      type="button"
      onClick={() =>
        dispatch((next ? nextPicture : previousPicture)(currentPicture))
      }
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
