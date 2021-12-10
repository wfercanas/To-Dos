import React from 'react';
import { CategoriesCarousel } from '.';

export default {
  title: 'Categories Carousel',
  component: CategoriesCarousel,
};

export const Primary = () => (
  <CategoriesCarousel
    categories={['Business', 'Personal', 'University']}
    tasks={[
      {
        text: 'Cortar cebolla',
        completed: true,
        category: 'Personal',
      },
      {
        text: 'Comprar leche',
        completed: false,
        category: 'Personal',
      },
      {
        text: 'Tomar curso de intro a React',
        completed: false,
        category: 'University',
      },
      {
        text: 'Llorar con la llorona',
        completed: false,
        category: 'Business',
      },
    ]}
  />
);
