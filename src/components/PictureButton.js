import { Icon } from "@iconify/react";
import { StyledButton } from "./styles";
import {
  handleNextPictureClick,
  handlePreviousPictureClick,
} from "../redux/Slices";
import { useDispatch, useSelector } from "react-redux";
import Pictures from "../data/Pictures";

export default function PictureButton({ next }) {
  const dispatch = useDispatch();
  const currentPicture = useSelector(
    (state) => state.changePictureReducer.initialIndex
  );
  const pictureArrayLength = Pictures.length;

  return (
    <StyledButton
      onClick={() =>
        dispatch(
          (next ? handleNextPictureClick : handlePreviousPictureClick)(
            currentPicture
          )
        )
      }
      disabled={
        currentPicture ===
        (next
          ? pictureArrayLength - 1
          : pictureArrayLength - pictureArrayLength)
      }
    >
      <Icon
        width="35"
        height="35px"
        icon={`${
          next
            ? "ant-design:arrow-right-outlined"
            : "ant-design:arrow-left-outlined"
        }`}
      />
    </StyledButton>
  );
}
