import img from "../assets/mastercard_chip-01.png";
import List from "./List";

function StarRating({ rating }) {
  return (
    <div className="star">
      {List(rating).map((count) => {
        return (
          <div>
            <img src= "https://sandpack-bundler.vercel.app/img/gold-star.svg" />
          </div>
        );
      })}
    </div>
  );
}

export default StarRating;
