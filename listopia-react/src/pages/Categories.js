import React from 'react';
import Category from '../components/Category';
import categories from '../config/categories';

export default () => (
  <div>
    {categories.map((category) => (
      <Category key={category} category={category}>
        {category}
      </Category>
    ))}
  </div>
);
