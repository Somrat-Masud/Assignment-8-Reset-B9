import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductsCard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [Items, setItems] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (item) => item.category === category
      );

      setItems(filteredByCategory);
    } else {
      setItems(data);
    }
    if (category === "All") {
      setItems(data);
    }
  }, [category, data]);

  return (
    <div className="">
      {Items.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {Items.map((card) => (
            <Card key={card.product_id} card={card}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
