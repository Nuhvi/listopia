import React from 'react';
import CategoryCard from '../components/CategoryCard';
import categories from '../config/categories';
import Layout from './Layout';
import CustomGrid from '../components/CustomGrid';

export default () => (
  <Layout title="What property do you want to buy?" mainColor="white">
    <CustomGrid>
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category.name}
          icon={category.icon}
        >
          {category}
        </CategoryCard>
      ))}
    </CustomGrid>
  </Layout>
);
