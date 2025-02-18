import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { addDataCart, addDataFavorite } from "../utilies";
const ProductCardDetails = () => {
  const [isfavorites, setIsFavorites] = useState(true);
  const data = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const [card, setCard] = useState({});
  useEffect(() => {
    const productDataSingle = data.find(
      (item) => String(item.product_id) === String(id)
    );
    console.log(productDataSingle);
    setCard(productDataSingle);
  }, [data, id]);
  useEffect(() => {
    if (card) {
      document.title = `${card.product_title} | Gadget Heaven`;
    }
  }, [card]);
  if (!card) {
    return <p>Loading...</p>;
  }
  const handleCart = (card) => {
    addDataCart(card);
  };
  const handleFavorite = (card) => {
    addDataFavorite(card);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl  w-9/12 mx-auto">
      <figure className="w-5/9 m-4 ">
        <img src={card.product_image} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">{card.product_title}</h1>
          <p className="text-xl font-bold">Price:${card.price}</p>
          <button className="btn btn-outline btn-success">
            {card.availability}
          </button>
          <h4 className="text-xl w-3/4 ">{card.description}</h4>

          <p>{card.rating}</p>
          <div className="items-center space-x-3">
            <button
              onClick={() => handleCart(card.product_id)}
              className="btn bg-[#9538E2] text-xl"
            >
              Add To Card
              <TiShoppingCart />
            </button>
            <p
              onClick={() => handleFavorite(card.product_id)}
              className="text-2xl font-bold btn rounded-full "
            >
              <CiHeart />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
