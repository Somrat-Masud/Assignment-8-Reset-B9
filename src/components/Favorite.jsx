/* eslint-disable react/prop-types */
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Favorite = ({ product }) => {
  const { product_title, product_image, description, price } = product || {};
  return (
    <div className="shadow-2xl ">
      <Link to="">
        <div className="flex justify-start">
          <div>
            <figure className="w-full h-48 overflow-hidden">
              <img
                className=" h-[150px] w-[150px] object-cover ml-8 mt-3"
                src={product_image}
                alt=""
              />
            </figure>
          </div>
          <div className="p-4 space-y-2  mt-4 ml-4">
            <h1 className="text-4xl font-bold">{product_title}</h1>
            <p className="text-2xl">description:{description}</p>
            <p className="text-2xl">price:{price}</p>
          </div>
          <div>
            <button className="btn  text-2xl font-bold ml-36 btn-error mt-5">
              <IoIosCloseCircleOutline />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Favorite;
