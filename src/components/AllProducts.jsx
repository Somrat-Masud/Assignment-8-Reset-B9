/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
// import ProductsCard from "./ProductsCard";

const AllProducts = ({ category }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 p-6   ">
        {category?.map((category) => (
          <NavLink
            key={category.category}
            to={`/category/${category.category}`}
            role="tab"
            className={({ isActive }) =>
              ` sm:w-9/12 md:w-10/12 lg:w-full px-4 py-2 text-sm sm:text-base md:text-lg text-center font-medium rounded-full shadow-md 
            ${
              isActive
                ? "bg-[#9538E2] text-white border shadow-lg"
                : "bg-white text-gray-700 "
            }`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
