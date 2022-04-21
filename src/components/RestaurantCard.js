export default function RestaurantCard({ restaurantDetails }) {
  console.log(restaurantDetails);
  return (
    <>
      <p>rating</p>
      <p>{restaurantDetails.name}</p>
      <p>like</p>
      <p>availability</p>
      <p>location</p>
    </>
  );
}
