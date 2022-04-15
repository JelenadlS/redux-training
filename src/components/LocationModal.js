import { StyledModal, StyledAddress, StyledClose } from "./styles";

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
