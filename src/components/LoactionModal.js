import {
  StyledModal,
  StyledAddress,
  StyledClose,
  StyledButton,
} from "./styles";

export default function LocationModal({ onClose, showModal, data }) {
  if (!showModal) {
    return null;
  }
  return (
    <StyledModal aria-label="information about location">
      <StyledAddress>
        {data.street}
        <br />
        {`${data.city} 
        ${data.postal_code}`}
        <br />
        {data.country}
      </StyledAddress>
      <StyledButton
        type="button"
        aria-label="close modal button"
        onClick={onClose}
      >
        <StyledClose
          with="35px"
          height="35px"
          icon="ant-design:close-circle-outlined"
        />
      </StyledButton>
    </StyledModal>
  );
}
