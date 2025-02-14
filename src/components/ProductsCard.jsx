import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductsCard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  // console.log(category);

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
  // console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {/* <h3>Products CArds:{category}</h3> */}
      {Items.map((card) => (
        <Card key={card.product_id} card={card}></Card>
      ))}
    </div>
  );
};

export default ProductsCard;
