import { NavLink } from "react-router-dom";
import { StyledNav, StyledLogo } from "./styles";
import StrandAbend from "../images/StrandAbend.jpg";

export default function Navigation() {
  return (
    <StyledNav aria-label="navigation">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/picture">
        <button>Pictures</button>
      </NavLink>
      <NavLink to="/aboutUs">
        <button>About us</button>
      </NavLink>
      <StyledLogo width="120" height="70" alt="logo" src={StrandAbend} />
    </StyledNav>
  );
}
