import { Icon } from "@iconify/react";
export default function LocationModal({
  showModal,
  locationData,
  handleClose,
}) {
  if (!showModal) return null;
  return (
    <section>
      <p>
        {locationData.street}
        <br />
        {locationData.city}
        {locationData.postal_code}
        <br />
        {locationData.state}
      </p>
      <button type="button" aria-label="click to close" onClick={handleClose}>
        <Icon
          width="35px"
          heigth="35px"
          icon="ant-design:close-circle-outlined"
        />
      </button>
    </section>
  );
}
