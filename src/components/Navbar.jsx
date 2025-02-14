import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="rounded-xl bg-[#9538E2]  h-[450px]">
      <div className="navbar   mt-2  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="statistics">Statistics</NavLink>
              <NavLink to="dashboard">Dashboard</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="statistics">Statistics</NavLink>
            <NavLink to="dashboard">Dashboard</NavLink>
          </ul>
        </div>
        <div className="navbar-end text-2xl items-center text-white text-bold space-x-2 mr-4">
          <div>
            <span>
              <FiShoppingCart />
            </span>
          </div>
          <span>
            <CiHeart />
          </span>
        </div>
      </div>
      <div className=" text-center text-white space-y-2">
        <h4 className=" font-bold text-4xl w-2/4 mx-auto ">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h4>
        <p className="w-3/5 mx-auto text-xl mt-6 ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-4xl m-4">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
