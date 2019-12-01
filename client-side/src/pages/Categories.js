import React from 'react';
import CategoryCard from '../components/CategoryCard';
import categories from '../config/categories';

export default () => (
  <div>
    {categories.map((category) => (
      <CategoryCard key={category} category={category}>
        {category}
      </CategoryCard>
    ))}
  </div>
);
