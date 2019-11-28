import React from 'react';
import Category from '../components/Category';

const categories = ['Apartment', 'House', 'Room', 'Land', 'Other'];

export default () => (
  <div>
    {categories.map((category) => (
      <Category key={category} category={category}>
        {category}
      </Category>
    ))}
  </div>
);
