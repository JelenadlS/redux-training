import { NavLink } from "react-router-dom";
import { StyledNav } from "./styles";

export default function Navigation() {
  return (
    <StyledNav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/picture">
        <button>Pictures</button>
      </NavLink>
      <NavLink to="">
        <button>About us</button>
      </NavLink>
    </StyledNav>
  );
}
