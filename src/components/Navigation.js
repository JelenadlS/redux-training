import { NavLink } from "react-router-dom";
import { StyledNavigation } from "./styles";

export default function Navigation() {
  return (
    <StyledNavigation aria-label="navigation">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/">
        <button>Pictures</button>
      </NavLink>
      <NavLink to="/">
        <button>About</button>
      </NavLink>
    </StyledNavigation>
  );
}
