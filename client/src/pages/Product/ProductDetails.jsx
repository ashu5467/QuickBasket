// client/src/pages/Product/ProductDetails.jsx

import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"; // Optional: if you'll use CSS for styling

const ProductDetails = () => {
  const { productId } = useParams();

  // Dummy product data — replace with real data from API later
  const product = {
    id: productId,
    name: "Sample Product",
    price: "$49.99",
    description: "This is a detailed description of the product.",
    image: "https://via.placeholder.com/300",
  };

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <h2>{product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
