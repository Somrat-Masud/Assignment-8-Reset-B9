import { toast } from "react-toastify";

// get all Data cart products from local storage
const getDataAllCarts = () => {
  const all = localStorage.getItem("carts");
  //   const carts = JSON.parse(all);
  if (all) {
    const carts = JSON.parse(all);
    return carts;
  }
  return [];
};

//add Data cart products to local storage
const addDataCart = (card) => {
  const carts = getDataAllCarts();
  // const isExist = carts.find((item) => item.product_id === card.product_id);
  // console.log(isExist);

  // if (isExist)
  //   return toast.info("Product Already Exist", {
  //     autoClose: 1000,
  //     hideProgressBar: true,
  //   });
  if (!carts.includes(card)) {
    carts.push(card);

    localStorage.setItem("carts", JSON.stringify(carts));
  }

  // toast.success("Product Added Successfully", {
  //   position: "top-center",
  //   autoClose: 1000,
  //   hideProgressBar: true,
  // }
  // );
};
const removeDataCart = (id) => {
  const carts = getDataAllCarts();
  const remaining = carts.filter((card) => card.product_id != id);
  localStorage.setItem("carts", JSON.stringify(remaining));
};

//  get all Data favorite products from local storage
const getAllDataFavorites = () => {
  const all = localStorage.getItem("favorites");
  //   const favorites = JSON.parse(all);
  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  }
  return [];
};

//add favorite products to local storage
const addDataFavorite = (card) => {
  const favorites = getAllDataFavorites();
  const isExist = favorites.find((item) => item.product_id === card.product_id);
  if (isExist)
    return toast.info("Already Added to Favorite", {
      autoClose: 1000,
      hideProgressBar: true,
    });
  favorites.push(card);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Successfully added to favorite", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
  });
};

// remove Data favorite products from local storage
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
