import { useEffect, useState } from "react";

import { FaArrowDownZA } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getAllDataFavorites,
  getDataAllCarts,
  removeDataCart,
  removeDataFavorite,
} from "../utilies";
import Favorite from "../components/Favorite";
// import Card from "../components/Card";
import Cards from "../components/Cards";

const Dashboard = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [favoritesProducts, setFavoritesProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  console.log(cartProducts);

  useEffect(() => {
    document.title = "Dashboard | Gadget heaven";
  }, []);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  useEffect(() => {
    const storageCarts = getDataAllCarts();
    console.log(storageCarts);
    const cartsId = storageCarts.map((id) => id);
    console.log(typeof cartsId);
    const products = allProducts.filter(
      (product) => cartsId.includes(product.product_id)
      // console.log(typeof product.product_id)
    );
    console.log("products", products);
    setCartProducts(products);
    // setCartProducts(storageCarts);
  }, [allProducts]);
  //Favorite useEffect
  useEffect(() => {
    const storageCarts = getAllDataFavorites();
    console.log(storageCarts);
    const cartsId = storageCarts.map((id) => id);
    console.log(typeof cartsId);
    const products = allProducts.filter((product) =>
      cartsId.includes(product.product_id)
    );
    console.log("products", products);
    setFavoritesProducts(products);
  }, [allProducts]);

  const handleCartRemove = (id) => {
    removeDataCart(id);
    const carts = getDataAllCarts();
    setCartProducts(carts);
    toast.warn("Removed from cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  const handleFavRemove = (id) => {
    removeDataFavorite(id);
    const favorites = getAllDataFavorites();
    setProducts(favorites);
    toast.warn("Removed from favorite", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  const handleSort = () => {
    const sorted = [...cartProducts].sort((a, b) => b.price - a.price);
    setCartProducts(sorted);
  };

  const handleActive = (status) => {
    if (status === "cart") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div>
      <div>
        <div className="bg-[#9538E2] w-11/12 mx-auto text-center">
          <h2 className="text-3xl text-white font-bold p-4"> Dashboard </h2>
          <p className="text-white pb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className="flex justify-center gap-6 pb-6">
            <button
              onClick={() => handleActive("cart")}
              className={` border-white ${
                isActive ? "bg-white text-black" : "text-white"
              } border px-16 py-4 rounded-full font-medium text-lg`}
            >
              {" "}
              Cart{" "}
            </button>
            <button
              onClick={() => handleActive("wishlist")}
              className={` border-white ${
                !isActive ? "bg-white text-black" : "text-white"
              } border px-12 py-4 rounded-full font-medium text-lg`}
            >
              {" "}
              WishList{" "}
            </button>
          </div>
        </div>
        {isActive ? (
          <div className="flex justify-between w-11/12 mx-auto p-8">
            <div className="text-2xl font-bold">
              <h3>Cart</h3>
            </div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-bold">Total cost: ${1500} </h3>
              <div className="flex text-lg font-semibold border-2 border-[#9538E2] text-[#9538E2] rounded-full py-2 px-4 items-center gap-2 hover:bg-[#9538E2] hover:text-white">
                <button onClick={() => handleSort()} className="">
                  Sort by Price{" "}
                </button>{" "}
                <FaArrowDownZA className="flex" />
              </div>
              <button
                onClick={() => setIsOpen(true)}
                className="text-lg font-semibold border-2 bg-[#9538E2] border-[#9538E2] text-white rounded-full py-2 px-9"
              >
                Purchase
              </button>
              <div className="flex flex-col items-center justify-center ">
                {/* Modal */}
                {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-box text-center items-center">
                      <div className="w-full flex justify-center">
                        <img
                          className="flex w-20 my-4"
                          src={"Group.png"}
                          alt=""
                        />
                      </div>
                      <h3 className="font-bold text-2xl py-6">
                        Payment Successfully
                      </h3>
                      <hr />
                      <p className="text-gray-500 mb-2 pt-4">
                        Thanks for purchasing
                      </p>{" "}
                      <p className="text-gray-500">Total: $1500.00 </p>
                      <div className="modal-action flex justify-center w-full px-8">
                        <NavLink
                          onClick={() => setIsOpen(false)}
                          to={"/"}
                          className="btn w-full rounded-full font-bold"
                        >
                          Close
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between w-11/12 mx-auto p-8">
            <div className="text-2xl font-bold">
              <h3>Wishlist</h3>
            </div>
          </div>
        )}
        {isActive ? (
          <div className="rounded-3x w-10/12 mx-auto">
            {cartProducts.map((product) => (
              <Cards
                handleCartRemove={handleCartRemove}
                key={product.product_id}
                product={product}
              ></Cards>
            ))}
          </div>
        ) : (
          <div className="rounded-3x w-10/12 mx-auto">
            {favoritesProducts.map((product) => (
              <Favorite
                handleFavRemove={handleFavRemove}
                key={product.product_id}
                product={product}
              ></Favorite>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
