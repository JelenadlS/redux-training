import { Icon } from "@iconify/react";
import styled from "styled-components";

export const StyledAddress = styled.p`
  text-align: center;
`;

export const StyledAvailability = styled.div`
  grid-column: 1/ 4;
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  margin: 15px;
`;

export const StyledClose = styled(Icon)`
  position: absolute;
  right: -10px;
  top: -10px;
`;

export const StyledLike = styled(Icon)`
  grid-column: 4;
  justify-self: end;
  color: ${(props) => (props.color ? "green" : "black")};
  &:active {
    transform: scale(0.9);
  }
`;
export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledLocation = styled(Icon)`
  grid-column: 4;
  justify-self: end;
`;

export const StyledLogo = styled.img`
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 10px;
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

export const StyledName = styled.h2`
  grid-column: 2 / 4;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-self: end;
  gap: 10px;
`;

export const StyledPage = styled.main`
  text-align: center;
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
  color: ${(props) => (props.color ? "yellow" : "black")};
`;
