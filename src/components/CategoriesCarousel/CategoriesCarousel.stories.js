import React from "react";
import { CategoriesCarousel } from ".";

export default {
  title: "Categories Carousel",
  component: CategoriesCarousel,
};

export const Primary = () => (
  <CategoriesCarousel
    categories={["Hobby", "Personal", "University"]}
    tasks={[
      {
        id: 1,
        text: "Cortar cebolla",
        completed: true,
        category: "Personal",
      },
      {
        id: 2,
        text: "Comprar leche",
        completed: false,
        category: "Personal",
      },
      {
        id: 3,
        text: "Tomar curso de intro a React",
        completed: false,
        category: "University",
      },
      {
        id: 4,
        text: "Llorar con la llorona",
        completed: false,
        category: "Business",
      },
    ]}
  />
);
