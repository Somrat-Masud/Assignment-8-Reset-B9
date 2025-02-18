import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
//
const Navbar = () => {
  return (
    <div className=" bg-[#9538E2]  ">
      <div className="navbar mt-2 mr-3 ml-3  ">
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white text-lg ${
                    isActive
                      ? "border-b-2 border-white "
                      : "hover:text-gray-400 "
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="statistics"
                className={({ isActive }) =>
                  `text-white text-lg ${
                    isActive
                      ? "border-b-2 border-white "
                      : "hover:text-gray-400 "
                  }`
                }
              >
                Statistics
              </NavLink>
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  `text-white text-lg ${
                    isActive
                      ? "border-b-2 border-white "
                      : "hover:text-gray-400 "
                  }`
                }
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <a className=" text-2xl text-white font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white text-lg ${
                  isActive ? "border-b-2 border-white " : "hover:text-gray-400 "
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="statistics"
              className={({ isActive }) =>
                `text-white text-lg ${
                  isActive ? "border-b-2 border-white " : "hover:text-gray-400 "
                }`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `text-white text-lg ${
                  isActive ? "border-b-2 border-white " : "hover:text-gray-400 "
                }`
              }
            >
              Dashboard
            </NavLink>
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
    </div>
  );
};

export default Navbar;
