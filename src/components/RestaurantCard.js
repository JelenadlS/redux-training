import { Icon } from "@iconify/react";
import styled from "styled-components";

export default function RestaurantCard({ data }) {
  return (
    <StyledCard>
      <p>rating</p>
      <StyledName>{data.name}</StyledName>
      <StyledLike icon="akar-icons:heart" />
      <StyledAvailability>
        planning:
        {data.brewery_type === "planning" ? (
          <Icon icon="fluent:presence-available-10-regular" />
        ) : (
          <Icon icon="ic:outline-do-not-disturb-on" />
        )}
        micro:
        {data.brewery_type === "micro" ? (
          <Icon icon="fluent:presence-available-10-regular" />
        ) : (
          <Icon icon="ic:outline-do-not-disturb-on" />
        )}
        brewpub:
        {data.brewery_type === "brewpub" ? (
          <Icon icon="fluent:presence-available-10-regular" />
        ) : (
          <Icon icon="ic:outline-do-not-disturb-on" />
        )}
      </StyledAvailability>
      <StyledLocation icon="akar-icons:location" />
    </StyledCard>
  );
}

const StyledCard = styled.article`
  border: 1px solid grey;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  margin: 15px;
`;

const StyledName = styled.h2`
  grid-column: 2 / 4;
`;

const StyledLike = styled(Icon)`
  grid-column: 4;
`;

const StyledAvailability = styled.p`
  grid-column: 1/ 4;
  display: flex;
  gap: 10px;
`;

const StyledLocation = styled(Icon)`
  grid-column: 4;
`;
