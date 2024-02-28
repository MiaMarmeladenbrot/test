import "./Stars.css";
const Stars = (props) => {
  //   console.log(props.rate);
  let rating = [];
  let rateItem = Math.floor(props.rate);

  for (let i = 0; i < rateItem; i++) {
    if (i < rateItem) {
      rating.push("⭐️");
    } else {
      rating.push("⭐️");
    }
  }
  return <p>{rating}</p>;
};

export default Stars;
