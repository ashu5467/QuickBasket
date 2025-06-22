import React from 'react';

const Categories = () => {
  const categoryList = ['Electronics', 'Books', 'Clothing', 'Home & Kitchen'];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categoryList.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
