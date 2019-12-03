import React from 'react';
import { Grid } from '@material-ui/core';
import CategoryCard from '../components/CategoryCard';
import categories from '../config/categories';
import Layout from './Layout';

export default () => (
  <Layout title="What property do you want to buy?" mainColor="white">
    <Grid container justify="space-between">
      {categories.map((category) => (
        <Grid item xs={6} key={category.name}>
          <CategoryCard category={category.name} icon={category.icon}>
            {category}
          </CategoryCard>
        </Grid>
      ))}
    </Grid>
  </Layout>
);
