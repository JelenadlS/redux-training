import { StyledMain } from "../components/styles";
import { AboutText } from "../components/AboutText";
import { useSelector, useDispatch } from "react-redux";
import { handleshowMoreInfo } from "../redux/Slices";

export default function AboutPage() {
  const dispatch = useDispatch();
  const show = useSelector(
    (state) => state.showMoreInfoReducer.listOfCurrentStatus
  );

  return (
    <StyledMain aria-label="about page">
      <h1>about us</h1>
      {AboutText.map((detail, index) => {
        return (
          <article key={index} aria-label={detail.title}>
            <h2>{detail.title}</h2>
            <button
              type="button"
              onClick={() => dispatch(handleshowMoreInfo(detail.title))}
              aria-label={
                !show[detail.title] ? "show more info" : "show less info"
              }
            >
              {!show[detail.title] ? "more" : "less"}
            </button>
            <p aria-label="further information" hidden={!show[detail.title]}>
              {detail.details}
            </p>
          </article>
        );
      })}
    </StyledMain>
  );
}
