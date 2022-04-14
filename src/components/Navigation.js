import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="">
        <button>Pictures</button>
      </NavLink>
      <NavLink to="">
        <button>About us</button>
      </NavLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  justify-self: end;
  display: flex;
  gap: 10px;
`;
