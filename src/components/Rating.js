export default function Rating({ rating }) {
  const ratingNumber = (5 / 10) * (rating === null ? "0" : rating.slice(0, 1));

  return <div>{ratingNumber}</div>;
}
