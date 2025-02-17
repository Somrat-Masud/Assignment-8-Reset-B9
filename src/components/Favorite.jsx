/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Favorite = ({ product }) => {
  const { product_title, product_image } = product || {};
  return (
    <div>
      <Link
        to=""
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img className="" src={product_image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name:{product_title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Favorite;
