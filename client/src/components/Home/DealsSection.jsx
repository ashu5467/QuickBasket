// client/src/components/Home/DealsSection.jsx

import React from "react";
import "./DealsSection.css"; // optional: only if you want custom styling

const DealsSection = () => {
  const deals = [
    { id: 1, title: "Smartphone", price: "$499", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Headphones", price: "$199", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="deals-section">
      <h2>Today's Deals</h2>
      <div className="deals-grid">
        {deals.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <img src={deal.image} alt={deal.title} />
            <h3>{deal.title}</h3>
            <p>{deal.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsSection;
