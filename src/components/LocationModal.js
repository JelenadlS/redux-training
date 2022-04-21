import {
  SytledLocationModal,
  StyledCloseModalIcon,
  StyledButton,
  StyledAddress,
} from "./styles";

export default function LocationModal({
  showModal,
  locationData,
  handleClose,
}) {
  if (!showModal) return null;
  return (
    <SytledLocationModal>
      <StyledAddress>
        {locationData.street}
        <br />
        {locationData.city}
        {locationData.postal_code}
        <br />
        {locationData.state}
      </StyledAddress>
      <StyledButton
        type="button"
        aria-label="click to close"
        onClick={handleClose}
      >
        <StyledCloseModalIcon
          width="35px"
          heigth="35px"
          icon="ant-design:close-circle-outlined"
        />
      </StyledButton>
    </SytledLocationModal>
  );
}
