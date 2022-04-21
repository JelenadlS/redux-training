import { NavLink } from "react-router-dom";

import { StyledNavigation, StyledLogo } from "./styles";
import { Ausblick } from "../images/exportFile";

export default function Navigation() {
  return (
    <>
      <StyledLogo width="120px" height="70px" alt="logo" src={Ausblick} />
      <StyledNavigation>
        <NavLink to="/">
          <button>home</button>
        </NavLink>
        <NavLink to="/pictures">
          <button>pictures</button>
        </NavLink>
        <NavLink to="/about">
          <button>about</button>
        </NavLink>
      </StyledNavigation>
    </>
  );
}
