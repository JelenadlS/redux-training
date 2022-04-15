import { Icon } from "@iconify/react";
import styled from "styled-components";

export const StyledAddress = styled.p`
  text-align: center;
`;

export const StyledAvailability = styled.p`
  grid-column: 1/ 4;
  display: flex;
  gap: 10px;
`;

export const StyledCard = styled.article`
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

export const StyledLocation = styled(Icon)`
  grid-column: 4;
  justify-self: end;
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
  padding-top: 10px;
  margin-top: -140px;
  margin-left: -175px;
`;

export const StyledName = styled.h2`
  grid-column: 2 / 4;
`;

export const StyledRating = styled.p`
  display: flex;
  gap: 5px;
`;

export const StyledStar = styled(Icon)`
  color: ${(props) => (props.color ? "yellow" : "black")};
`;

export const StyledStarHalf = styled(Icon)`
  color: ${(props) => (props.color ? "yellow" : "black")};
`;
