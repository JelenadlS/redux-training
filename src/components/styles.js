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
  grid-column: 1/3;
  display: flex;
  gap: 5px;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const StyledCard = styled.section`
  border: 1px solid grey;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(2 auto);
  margin: 15px;
`;

export const StyledCloseModalIcon = styled(Icon)`
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const StyledFooter = styled.footer`
  justify-self: center;
`;

export const SytledLocationModal = styled.section`
  border: none;
  border-radius: 20px;
  background-color: grey;
  position: fixed;
  width: 350px;
  height: 190px;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;

export const StyledMain = styled.main`
  text-align: center;
`;

export const StyledNavigation = styled.nav`
  justify-self: end;
  display: flex;
  gap: 10px;
`;

export const StyledLike = styled(Icon)`
  color: ${(props) => (props.color ? "red" : "black")};
  &:active {
    transform: scale(0.9);
  }
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledLogo = styled.img`
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 10px;
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
