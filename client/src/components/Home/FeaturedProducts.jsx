// client/src/components/Home/FeaturedProducts.jsx
import React from "react";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "₹2,999",
      image: "https://via.placeholder.com/150x150?text=Headphones",
    },
    {
      id: 2,
      title: "Smartwatch",
      price: "₹4,499",
      image: "https://via.placeholder.com/150x150?text=Smartwatch",
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: "₹1,899",
      image: "https://via.placeholder.com/150x150?text=Speaker",
    },
    {
      id: 4,
      title: "Gaming Mouse",
      price: "₹999",
      image: "https://via.placeholder.com/150x150?text=Mouse",
    },
  ];

  return (
    <div className="featured-section">
      <h2>Featured Products</h2>
      <div className="featured-grid">
        {products.map((product) => (
          <div key={product.id} className="featured-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
