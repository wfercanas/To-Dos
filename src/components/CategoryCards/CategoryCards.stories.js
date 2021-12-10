import React from 'react';
import { CategoryProgressCard } from '.';

export default {
  title: 'Category Cards',
  component: CategoryProgressCard,
};

export const Primary = () => (
  <CategoryProgressCard
    category='Business'
    tasks={[
      {
        text: 'Cortar cebolla',
        completed: true,
      },
      {
        text: 'Tomar curso de intro a React',
        completed: false,
      },
      {
        text: 'Llorar con la llorona',
        completed: false,
      },
    ]}
  />
);
