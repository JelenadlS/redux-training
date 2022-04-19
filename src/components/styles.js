import { Icon } from "@iconify/react";
import styled from "styled-components";

export const StyledAddress = styled.p`
  text-align: center;
`;

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

export const StyledClose = styled(Icon)`
  position: absolute;
  right: -10px;
  top: -10px;
`;

export const StyledFooter = styled.footer`
  justify-self: center;
`;

export const StyledLike = styled(Icon)`
  color: ${(props) => (props.color ? "green" : "black")};
  &:active {
    transform: scale(0.9);
  }
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledMain = styled.main`
  justify-self: center;
`;

export const StyledModal = styled.section`
  border: none;
  border-radius: 20px;
  background: grey;
  position: fixed;
  width: 350px;
  height: 190px;
  top: 50%;
  left: 50%;
  margin-top: -140px;
  margin-left: -175px;
`;

export const StyledNavigation = styled.nav`
  justify-self: end;
  display: flex;
  gap: 10px;
`;

export const StyledPictures = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledRating = styled.p`
  display: flex;
  gap: 5px;
`;
export const StyledStar = styled(Icon)`
  color: yellow;
`;
