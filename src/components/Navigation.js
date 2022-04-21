import { NavLink } from "react-router-dom";

import { StyledNavigation } from "./styles";

export default function Navigation() {
  return (
    <StyledNavigation>
      <NavLink to="/">
        <button>home</button>
      </NavLink>
      <NavLink to="/pictures">
        <button>pictures</button>
      </NavLink>
      <NavLink to="/">
        <button>about</button>
      </NavLink>
    </StyledNavigation>
  );
}
