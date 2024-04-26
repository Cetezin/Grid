import StarRating from "./starRating";

function SectionList(props) {
  const Total = 5;
  return (
    <section>
      <h2>{props.name}</h2>
      <p>
        ratings: {props.ratings}/{Total}
      </p>
      <StarRating rating={props.ratings} />
    </section>
  );
}

export default SectionList;
