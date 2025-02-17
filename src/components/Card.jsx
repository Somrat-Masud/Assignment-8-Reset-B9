import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  const { product_title, product_image, price } = product;
  console.log(product);
  return (
    // <div className="card bg-base-100  shadow-xl">
    //   <figure className="px-10 pt-10">
    //     <img
    //       src={product_image}
    //       alt="Shoes"
    //       className="rounded-xl h-[200px] w-[350px] object-cover"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{product_title}</h2>
    //     <p>Price:{price}</p>
    //     <div className="card-actions">
    //       <NavLink to={`/product/${product.product_id}`}>
    //         {" "}
    //         <button className="btn btn-primary"> Details</button>
    //       </NavLink>
    //     </div>
    //   </div>
    // </div>
    <h4>Details</h4>
  );
};

export default Card;
