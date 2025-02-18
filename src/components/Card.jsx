import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  const { product_title, product_image, price } = card;
  console.log(card);
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl h-[200px] w-[350px] object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="items-start">
          <h2 className="card-title text-2xl">{product_title}</h2>
          <p className="text-xl">Price:{price}</p>
        </div>
        <div className="card-actions justify-center items-center mt-2">
          <NavLink to={`/product/${card.product_id}`}>
            {" "}
            <button className="btn btn-primary text-center">Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
