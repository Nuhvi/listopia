import React from 'react';
import CategoryCard from '../components/CategoryCard';
import categories from '../config/categories';
import Layout from './Layout';
import CustomGrid from '../components/CustomGrid';

const Categories = () => (
  <Layout title="What property do you want to buy?" mainColor="white">
    <CustomGrid>
      {categories.map((category) => (
        <li key={category.name} id={category.name}>
          <CategoryCard category={category.name} icon={category.icon}>
            {category}
          </CategoryCard>
        </li>
      ))}
    </CustomGrid>
  </Layout>
);

export default Categories;
