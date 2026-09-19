import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/Data";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <img
        src={product.img}
        alt={product.description}
      />

      <h1>{product.description}</h1>

      <p>{product.category}</p>

      <p>⭐ {product.rating}</p>

      <p>₹{product.price}</p>
    </div>
  );
};

export default ProductDetails;