import React from 'react';
import { Grid, useTheme } from '@material-ui/core';
import CategoryCard from '../components/CategoryCard';
import categories from '../config/categories';
import Layout from './Layout';

export default () => {
  const theme = useTheme();
  return (
    <Layout title="What property do you want to buy?" mainColor="white">
      <Grid
        container
        style={{
          padding: theme.spacing(2, 1, 1, 1),
        }}
      >
        {categories.map((category) => (
          <Grid
            item
            xs={6}
            style={{
              padding: theme.spacing(1),
            }}
            key={category.name}
          >
            <CategoryCard category={category.name} icon={category.icon}>
              {category}
            </CategoryCard>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};
