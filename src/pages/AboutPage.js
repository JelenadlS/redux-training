import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { StyledMain } from "../components/styles";
import { AboutText } from "../data/AboutText";
import { handleShowDetailsAboutClick } from "../redux/Slices";

export default function AboutPage() {
  const dispatch = useDispatch();
  const currentState = useSelector(
    useCallback((state) => state.showDetailsAboutReducer.showDetailsAbout, [])
  );

  return (
    <StyledMain>
      <h1>About</h1>
      {AboutText.map((text, index) => {
        return (
          <section key={index}>
            <h2>{text.title}</h2>
            <button
              type="button"
              aria-label="show more"
              onClick={() => dispatch(handleShowDetailsAboutClick(text.title))}
            >
              {!currentState[text.title] ? "More" : "Less"}
            </button>
            <p aria-label="further info" hidden={!currentState[text.title]}>
              {text.details}
            </p>
          </section>
        );
      })}
    </StyledMain>
  );
}
