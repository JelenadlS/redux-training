import { Icon } from "@iconify/react";
import styled from "styled-components";

export default function LocationModal({ onClose, show, data }) {
  if (!show) {
    return null;
  }
  return (
    <StyledModal>
      <StyledAddress>
        {data.street} <br />
        {`${data.city} 
        ${data.postal_code}`}
        <br />
        {data.country}
      </StyledAddress>
      <StyledClose
        with="35px"
        height="35px"
        icon="ant-design:close-circle-outlined"
        onClick={onClose}
      />
    </StyledModal>
  );
}

const StyledModal = styled.section`
  border: none;
  border-radius: 20px;
  background: grey;
  position: fixed;
  position: absolute;
  width: 350px;
  height: 190px;
  top: 50%;
  left: 50%;
  padding-top: 10px;
  margin-top: -140px;
  margin-left: -175px;
`;

const StyledAddress = styled.p`
  text-align: center;
`;

const StyledClose = styled(Icon)`
  position: absolute;
  right: -10px;
  top: -10px;
`;
