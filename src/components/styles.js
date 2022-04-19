import { Icon } from "@iconify/react";
import styled from "styled-components";

export const StyledAppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 48px 1fr 48px;
`;

export const StyledAvailability = styled.p`
  grid-column: 1/ 3;
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const StyledCard = styled.section`
  border: 1px solid grey;
  display: grid;
  grid-template-columns: 1fr 2fr auto;
  grid-template-rows: repeat(2, auto);
  margin: 15px;
`;

export const StyledFooter = styled.footer`
  justify-self: center;
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledMain = styled.main`
  justify-self: center;
`;

export const StyledNavigation = styled.nav`
  justify-self: end;
  display: flex;
  gap: 10px;
`;

export const StyledRating = styled.p`
  display: flex;
  gap: 5px;
`;
export const StyledStar = styled(Icon)`
  color: yellow;
`;
