import { toast } from "react-toastify";
// get all Data cart products from local storage
const getDataAllCarts = () => {
  const all = localStorage.getItem("carts");
  if (all) {
    const carts = JSON.parse(all);
    return carts;
  }
  return [];
};

//add Data cart products to local storage
const addDataCart = (card) => {
  const carts = getDataAllCarts();
  if (!carts.includes(card)) {
    carts.push(card);
    localStorage.setItem("carts", JSON.stringify(carts));
    alert("Product Added Successfully");
    toast.info("Product Already Exist", {
      autoClose: 1000,
      hideProgressBar: true,
    });
    return;
  }
  alert("Product Already Exist");
  toast.success("Product Added Successfully", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
  });
};

//  get all Data favorite products from local storage
const getAllDataFavorites = () => {
  const all = localStorage.getItem("favorites");
  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  }
  return [];
};

//add favorite products to local storage
const addDataFavorite = (card) => {
  const carts = getAllDataFavorites();
  if (!carts.includes(card)) {
    carts.push(card);
    localStorage.setItem("favorites", JSON.stringify(carts));
    alert("Product Added Successfully");
    toast.info("Product Already Exist", {
      autoClose: 1000,
      hideProgressBar: true,
    });
    return;
  }
  alert("Product Already Exist");
  toast.success("Product Added Successfully", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
  });
};

// remove Data favorite products from local storage
const removeDataCart = (id) => {
  const carts = getDataAllCarts();
  const remaining = carts.filter((card) => card.product_id != id);
  localStorage.setItem("carts", JSON.stringify(remaining));
};

const removeDataFavorite = (id) => {
  const favorites = getAllDataFavorites();
  const remaining = favorites.filter((card) => card.product_id != id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
};

export {
  getDataAllCarts,
  getAllDataFavorites,
  addDataCart,
  addDataFavorite,
  removeDataFavorite,
  removeDataCart,
};
